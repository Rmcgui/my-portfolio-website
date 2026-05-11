import { getAuthedUser, getAuthedSupabaseClient } from '~~/server/utils/getAuthedUser'

export default defineEventHandler(async (event) => {
  const user = await getAuthedUser(event)
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthenticated' })
  }

  const body = await readBody(event)
  if (!body?.title || typeof body.title !== 'string' || !body.title.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Title is required' })
  }

  const supabase = await getAuthedSupabaseClient(event)
  const { data, error } = await supabase
    .from('plans')
    .insert({
      title: body.title.trim(),
      industry: body.industry ?? null,
      business_profile: body.business_profile ?? null,
      pages: body.pages ?? [],
    })
    .select()
    .single()

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }

  return data
})