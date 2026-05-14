import { createSchema, createYoga } from 'graphql-yoga'
import type { H3Event } from 'h3'
import { getAuthedUser, getAuthedSupabaseClient } from '~~/server/utils/getAuthedUser'

/**
 * GraphQL schema.
 *
 * Two queries:
 * - myPlans: list current user's plans (summary fields only)
 * - plan(id): fetch one plan in full
 *
 * Authorisation is enforced two ways:
 * 1. Resolvers check `ctx.user` and throw if absent — first line of defence
 * 2. Supabase RLS policies on the `plans` table — second line, at the database
 *
 * Even if the resolver auth check were bypassed somehow, RLS would block
 * any user from reading another user's rows. Defence in depth.
 */
const typeDefs = /* GraphQL */ `
  type Plan {
    id: ID!
    title: String!
    industry: String
    pages: [Page!]
    businessProfile: BusinessProfile
    createdAt: String!
    updatedAt: String!
  }

  type Page {
    id: String!
    name: String!
    sections: [Section!]!
  }

  type Section {
    id: String!
    type: String!
    title: String
    body: String
    primaryCtaLabel: String
  }

  type BusinessProfile {
    name: String
    industry: String
    description: String
    location: String
  }

  type Query {
    """List the current user's plans. Summary fields only — for full plan data, use plan(id)."""
    myPlans(limit: Int = 50): [Plan!]!

    """Fetch one plan by ID. Returns null if not owned by current user (RLS hides it)."""
    plan(id: ID!): Plan
  }
`

type Context = {
  event: H3Event
}

const resolvers = {
  Query: {
    myPlans: async (_parent: unknown, args: { limit: number }, ctx: Context) => {
      const user = await getAuthedUser(ctx.event)
      if (!user) throw new Error('Unauthenticated')

      const supabase = await getAuthedSupabaseClient(ctx.event)
      const { data, error } = await supabase
        .from('plans')
        .select('id, title, industry, created_at, updated_at')
        .order('created_at', { ascending: false })
        .limit(args.limit)

      if (error) throw new Error(error.message)

      // Reshape snake_case DB fields to camelCase GraphQL fields
      return (data ?? []).map((row) => ({
        id: row.id,
        title: row.title,
        industry: row.industry,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
        // pages and businessProfile not selected for the list view
        pages: null,
        businessProfile: null,
      }))
    },

    plan: async (_parent: unknown, args: { id: string }, ctx: Context) => {
      const user = await getAuthedUser(ctx.event)
      if (!user) throw new Error('Unauthenticated')

      const supabase = await getAuthedSupabaseClient(ctx.event)
      const { data, error } = await supabase
        .from('plans')
        .select('*')
        .eq('id', args.id)
        .maybeSingle()

      if (error) throw new Error(error.message)
      if (!data) return null // RLS-hidden or doesn't exist; same response

      return {
        id: data.id,
        title: data.title,
        industry: data.industry,
        pages: data.pages,
        businessProfile: data.business_profile,
        createdAt: data.created_at,
        updatedAt: data.updated_at,
      }
    },
  },
}

const yoga = createYoga<Context>({
  schema: createSchema({ typeDefs, resolvers }),
  graphqlEndpoint: '/api/graphql',
  // Enable the GraphiQL UI for manual exploration in dev
  graphiql: process.env.NODE_ENV !== 'production',
  // CORS not needed — same-origin
})

export default defineEventHandler(async (event) => {
  const response = await yoga.handleNodeRequest(event.node.req, { event })

  // Forward Yoga's response headers + body to the Nitro response
  for (const [key, value] of response.headers.entries()) {
    setResponseHeader(event, key, value)
  }
  setResponseStatus(event, response.status)
  return response.body
})