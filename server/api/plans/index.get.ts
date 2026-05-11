import { getAuthedUser, getAuthedSupabaseClient } from '~~/server/utils/getAuthedUser'

export default defineEventHandler(async (event) => {
  const user = await getAuthedUser(event)
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthenticated' })
  }

  const supabase = await getAuthedSupabaseClient(event)
  const { data, error } = await supabase
    .from('plans')
    .select('id, title, industry, created_at, updated_at')
    .order('created_at', { ascending: false })

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return data
})