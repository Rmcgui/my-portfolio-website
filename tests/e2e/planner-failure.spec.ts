import { test, expect } from '@playwright/test'
import { mockOpenAIFailure, mockOpenAISuccess } from '../fixtures/openai-mock'

test.describe('AI Planner: graceful failure handling', () => {
  test('shows a user-visible error when AI generation fails', async ({ page }) => {
    await mockOpenAIFailure(page)
    await page.goto('/ai-planner')

    await page.getByLabel(/business name/i).fill('Test Café')
    await page.getByLabel(/describe your business/i).fill('A small test café in Mayo.')
    await page.getByRole('button', { name: /generate website plan/i }).click()

    await expect(
      page.getByText(/something went wrong|try again|unavailable|error/i)
    ).toBeVisible({ timeout: 10_000 })
  })

  test('proceeds to plan step when AI generation succeeds', async ({ page }) => {
    await mockOpenAISuccess(page)
    await page.goto('/ai-planner')

    await page.getByLabel(/business name/i).fill('Test Café')
    await page.getByLabel(/describe your business/i).fill('A small test café in Mayo.')
    await page.getByRole('button', { name: /generate website plan/i }).click()

    await expect(
      page.getByRole('heading', { name: /Edit Website Plan/i })
    ).toBeVisible({ timeout: 10_000 })
  })
})