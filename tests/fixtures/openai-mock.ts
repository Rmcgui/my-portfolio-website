/**
 * OpenAI mocks for tests against /api/plan-generate.
 *
 * Why mock instead of hitting real OpenAI:
 * - Speed: real calls take 5-30 seconds; mocked responses are instant
 * - Determinism: real responses vary; tests need stable assertions
 * - Cost: every test run otherwise burns tokens
 * - Failure modes: hard to deliberately trigger an OpenAI failure
 *   in production; trivial to simulate one in tests
 *
 * The mocks intercept at the /api/plan-generate boundary — Playwright's
 * page.route() intercepts the browser's HTTP call before it reaches
 * the server. The Nuxt server route never actually runs in these tests.
 */

import { Page } from '@playwright/test'

/**
 * A representative successful plan response.
 *
 * Shape mirrors the actual /api/plan-generate response: a wrapper
 * with id + timestamps + pages array, where each page has id, name,
 * and sections, and each section has id, type, and content fields.
 *
 * If the real response shape changes, update this mock — that's a
 * deliberate coupling so tests fail loudly when the contract changes.
 */
export const mockPlanResponse = {
  id: 'plan-mock-test',
  createdAt: '2026-05-13T00:00:00.000Z',
  updatedAt: '2026-05-13T00:00:00.000Z',
  pages: [
    {
      id: 'home',
      name: 'Home',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: 'Welcome to Test Café — Your Local Coffee Spot',
          body: 'Fresh coffee, locally roasted, served in the heart of Mayo.',
          primaryCtaLabel: 'Visit us',
        },
      ],
    },
    {
      id: 'about',
      name: 'About',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: 'About Test Café',
          body: 'A small family-run café with a focus on quality and community.',
          primaryCtaLabel: 'Learn more',
        },
      ],
    },
    {
      id: 'contact',
      name: 'Contact',
      sections: [
        {
          id: 'hero',
          type: 'hero',
          title: 'Get in touch',
          body: 'Find us in Mayo or call ahead to reserve a table.',
          primaryCtaLabel: 'Contact us',
        },
      ],
    },
  ],
}

/**
 * Intercept calls to /api/plan-generate and return a successful plan.
 * Use in the `test.beforeEach` or at the start of a test.
 */
export async function mockOpenAISuccess(page: Page) {
  await page.route('**/api/plan-generate', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockPlanResponse),
    })
  })
}

/**
 * Intercept calls to /api/plan-generate and return a 500 error,
 * simulating an OpenAI outage or rate-limit.
 */
export async function mockOpenAIFailure(page: Page) {
  await page.route('**/api/plan-generate', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({
        statusCode: 500,
        statusMessage: 'AI service unavailable',
      }),
    })
  })
}