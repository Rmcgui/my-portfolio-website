import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const user = await serverSupabaseUser(event)
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthenticated' })
  }

  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Plan ID is required' })
  }

  const supabase = await serverSupabaseClient(event)
  const { data, error } = await supabase
    .from('plans')
    .select('*')
    .eq('id', id)
    .maybeSingle()

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  if (!data) {
    // RLS will hide other users' plans, so this fires for "not found"
    // AND "exists but not yours". Returning 404 in both cases avoids
    // leaking whether a plan ID exists.
    throw createError({ statusCode: 404, statusMessage: 'Plan not found' })
  }

  return data
})