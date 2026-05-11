import { serverSupabaseUser, serverSupabaseClient } from '#supabase/server'
import { createClient } from '@supabase/supabase-js'
import type { H3Event } from 'h3'

/**
 * Resolve the authenticated user from either cookie (browser) or
 * Authorization: Bearer <token> (API client / test).
 *
 * The Supabase Nuxt module's serverSupabaseUser handles the cookie
 * path automatically. For Bearer tokens we manually verify the JWT
 * against Supabase auth.
 *
 * Returns the user object (with `.id`, `.email`, etc.) or null if
 * no valid auth is present.
 */
export async function getAuthedUser(event: H3Event) {
  // Try cookie-based auth first (browser sessions)
  try {
    const user = await serverSupabaseUser(event)
    if (user) return user
  } catch {
    // No cookie session; fall through to Bearer
  }

  // Try Authorization: Bearer <token>
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader?.startsWith('Bearer ')) return null

  const token = authHeader.slice(7)
  const supabaseUrl = process.env.SUPABASE_URL || useRuntimeConfig().public.supabase?.url
  const supabaseKey = process.env.SUPABASE_KEY || useRuntimeConfig().public.supabase?.key

  if (!supabaseUrl || !supabaseKey) return null

  const client = createClient(supabaseUrl as string, supabaseKey as string)
  const { data, error } = await client.auth.getUser(token)
  if (error || !data.user) return null

  return data.user
}

/**
 * Create a Supabase client authenticated as the user from the request.
 * For Bearer auth, manually attaches the token so RLS policies see
 * the right `auth.uid()`.
 */
export async function getAuthedSupabaseClient(event: H3Event) {
  const authHeader = getHeader(event, 'authorization')

  // Cookie auth — let the module handle it
  if (!authHeader?.startsWith('Bearer ')) {
    return await serverSupabaseClient(event)
  }

  // Bearer auth — build a client with the token attached
  const token = authHeader.slice(7)
  const supabaseUrl = process.env.SUPABASE_URL || useRuntimeConfig().public.supabase?.url
  const supabaseKey = process.env.SUPABASE_KEY || useRuntimeConfig().public.supabase?.key

  return createClient(supabaseUrl as string, supabaseKey as string, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  })
}