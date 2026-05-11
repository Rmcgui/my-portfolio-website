import { test, expect } from '@playwright/test'
import { createTestUser } from '../helpers/api'

test.describe('POST /api/plans', () => {
  test('returns 401 without auth', async ({ request }) => {
    const response = await request.post('/api/plans', {
      data: { title: 'Unauthenticated attempt' },
    })
    expect(response.status()).toBe(401)
  })

  test('returns 400 for missing title', async ({ request }) => {
    const { accessToken } = await createTestUser()

    const response = await request.post('/api/plans', {
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {},
    })

    expect(response.status()).toBe(400)
  })

  test('creates a plan when authenticated', async ({ request }) => {
    const { accessToken, email } = await createTestUser()

    const response = await request.post('/api/plans', {
      headers: { Authorization: `Bearer ${accessToken}` },
      data: {
        title: 'My API-tested plan',
        industry: 'hospitality',
      },
    })

    expect(response.ok()).toBeTruthy()
    const plan = await response.json()
    expect(plan.title).toBe('My API-tested plan')
    expect(plan.industry).toBe('hospitality')
    expect(plan.id).toBeDefined()
    expect(plan.user_id).toBeDefined()
  })
})

test.describe('GET /api/plans/[id]', () => {
  test('returns 404 when accessing another user\'s plan', async ({ request }) => {
    // User A creates a plan
    const userA = await createTestUser()
    const createRes = await request.post('/api/plans', {
      headers: { Authorization: `Bearer ${userA.accessToken}` },
      data: { title: 'User A private plan' },
    })
    expect(createRes.ok()).toBeTruthy()
    const planA = await createRes.json()

    // User B (different user, knows the UUID somehow) tries to read it
    const userB = await createTestUser()
    const readRes = await request.get(`/api/plans/${planA.id}`, {
      headers: { Authorization: `Bearer ${userB.accessToken}` },
    })

    // RLS makes the plan invisible to user B — endpoint returns 404,
    // not 403. This deliberately doesn't leak whether the plan exists.
    expect(readRes.status()).toBe(404)
  })
})