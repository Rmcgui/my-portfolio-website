import { createClient, SupabaseClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error(
    'API tests require SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars. ' +
    'Check .env locally and GitHub Secrets in CI.'
  )
}

// Admin client uses the service role key — bypasses RLS, can create
// auto-confirmed users, intended for server-side / test-side use only.
const admin: SupabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
})

/**
 * Create a confirmed test user and return their access token + ID.
 * Use the token as a bearer header on subsequent API requests.
 *
 * Each test should create its own user (don't share users across tests
 * to avoid order dependencies and state leakage).
 */
export async function createTestUser() {
  const email = `apitest-${Date.now()}-${Math.random().toString(36).slice(2, 8)}@example.com`
  const password = 'apiTestPassword123'

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (error || !data.user) {
    throw new Error(`Failed to create test user: ${error?.message}`)
  }

  // Sign in with the new user's credentials to get an access token
  const userClient = createClient(SUPABASE_URL!, process.env.SUPABASE_KEY!)
  const { data: sessionData, error: signInError } = await userClient.auth.signInWithPassword({
    email,
    password,
  })

  if (signInError || !sessionData.session) {
    throw new Error(`Failed to sign in test user: ${signInError?.message}`)
  }

  return {
    userId: data.user.id,
    email,
    accessToken: sessionData.session.access_token,
  }
}

/**
 * Delete a test user by ID. Call in afterEach hooks if you want
 * to keep the auth.users table clean. Optional — RLS prevents
 * test users seeing each other's data either way.
 */
export async function deleteTestUser(userId: string) {
  await admin.auth.admin.deleteUser(userId)
}