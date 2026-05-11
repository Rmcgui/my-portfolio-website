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
  const { error } = await supabase
    .from('plans')
    .delete()
    .eq('id', id)

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  // DELETE is idempotent: succeeds whether the row existed or not.
  // RLS ensures we only delete our own rows.
  setResponseStatus(event, 204)
  return null
})