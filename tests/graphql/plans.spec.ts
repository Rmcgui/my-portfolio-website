import { test, expect } from '@playwright/test'
import { createTestUser } from '../helpers/api'

/**
 * Tests for the /api/graphql endpoint.
 *
 * Same Bearer-token approach as REST API tests — provision users via
 * the Supabase admin API, send their access token as Authorization
 * header. The GraphQL handler reuses getAuthedUser, so the auth path
 * is identical to REST.
 *
 * What we're proving here that REST didn't:
 * 1. The GraphQL endpoint surfaces auth failures correctly (via errors
 *    in the response body, not HTTP status — that's GraphQL's spec)
 * 2. Field selection works — the API returns exactly what was requested
 *    and nothing else
 * 3. Cross-user RLS works at the database layer for GraphQL queries
 *    the same as it does for REST
 */

const QUERY_MY_PLANS = `
  query {
    myPlans {
      id
      title
    }
  }
`

const QUERY_PLAN_BY_ID = `
  query GetPlan($id: ID!) {
    plan(id: $id) {
      id
      title
      industry
    }
  }
`

async function gqlRequest(
  request: any,
  query: string,
  options: { variables?: any; token?: string } = {}
) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`
  }

  return await request.post('/api/graphql', {
    headers,
    data: { query, variables: options.variables ?? {} },
  })
}

test.describe('GraphQL: myPlans query', () => {
  test('returns an error when unauthenticated', async ({ request }) => {
    const response = await gqlRequest(request, QUERY_MY_PLANS)

    // GraphQL convention: 200 status with errors in body, not 401
    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body.errors).toBeDefined()
    expect(body.errors[0].message).toMatch(/unexpected error/i)
    expect(body.data?.myPlans).toBeFalsy()
  })

  test('returns only the fields requested', async ({ request }) => {
    const { accessToken } = await createTestUser()

    // First create a plan via REST so there's data to query
    const createRes = await request.post('/api/plans', {
      headers: { Authorization: `Bearer ${accessToken}` },
      data: { title: 'GraphQL field selection test', industry: 'tech' },
    })
    expect(createRes.ok()).toBeTruthy()

    // Now query via GraphQL asking only for id and title
    const response = await gqlRequest(request, QUERY_MY_PLANS, {
      token: accessToken,
    })

    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body.errors).toBeUndefined()

    const plan = body.data.myPlans[0]
    expect(plan).toBeDefined()
    // Exactly these keys, nothing else
    expect(Object.keys(plan).sort()).toEqual(['id', 'title'])
    expect(plan.industry).toBeUndefined()
    expect(plan.createdAt).toBeUndefined()
  })
})

test.describe('GraphQL: plan(id) query', () => {
  test('returns null for another user\'s plan', async ({ request }) => {
    // User A creates a plan
    const userA = await createTestUser()
    const createRes = await request.post('/api/plans', {
      headers: { Authorization: `Bearer ${userA.accessToken}` },
      data: { title: 'User A private plan' },
    })
    expect(createRes.ok()).toBeTruthy()
    const createdPlan = await createRes.json()

    // User B (different user) tries to read it via GraphQL
    const userB = await createTestUser()
    const response = await gqlRequest(request, QUERY_PLAN_BY_ID, {
      token: userB.accessToken,
      variables: { id: createdPlan.id },
    })

    expect(response.ok()).toBeTruthy()
    const body = await response.json()

    // Same security principle as REST: GraphQL returns null rather
    // than "forbidden", so we don't leak whether the plan exists.
    // RLS at the database layer hides the row from user B entirely.
    expect(body.data.plan).toBeNull()
    expect(body.errors).toBeUndefined()
  })

  test('returns the plan for its owner', async ({ request }) => {
    const { accessToken } = await createTestUser()

    const createRes = await request.post('/api/plans', {
      headers: { Authorization: `Bearer ${accessToken}` },
      data: { title: 'Owner can read own plan', industry: 'hospitality' },
    })
    const createdPlan = await createRes.json()

    const response = await gqlRequest(request, QUERY_PLAN_BY_ID, {
      token: accessToken,
      variables: { id: createdPlan.id },
    })

    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body.data.plan.id).toBe(createdPlan.id)
    expect(body.data.plan.title).toBe('Owner can read own plan')
    expect(body.data.plan.industry).toBe('hospitality')
  })
})