import { getAuthedUser, getAuthedSupabaseClient } from '~~/server/utils/getAuthedUser'

export default defineEventHandler(async (event) => {
  const user = await getAuthedUser(event)
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'Unauthenticated' })
  }

  const id = getRouterParam(event, 'id')
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'Plan ID is required' })
  }

  const body = await readBody(event)
  if (body?.title !== undefined && (!body.title || !body.title.trim())) {
    throw createError({ statusCode: 400, statusMessage: 'Title cannot be empty' })
  }

  const updates: Record<string, unknown> = {}
  if (body?.title !== undefined) updates.title = body.title.trim()
  if (body?.industry !== undefined) updates.industry = body.industry
  if (body?.business_profile !== undefined) updates.business_profile = body.business_profile
  if (body?.pages !== undefined) updates.pages = body.pages

  const supabase = await getAuthedSupabaseClient(event)
  const { data, error } = await supabase
    .from('plans')
    .update(updates)
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error) {
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
  if (!data) {
    throw createError({ statusCode: 404, statusMessage: 'Plan not found' })
  }

  return data
})