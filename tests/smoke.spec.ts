import { test, expect } from '@playwright/test';

test.describe('Homepage smoke tests', () => {
  test('homepage loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Ryan McGuire/i);
  });

  test('AI Planner is reachable from nav', async ({ page }) => {
    await page.goto('/');
    // Your Navbar.vue has: <NuxtLink to="/ai-planner">AI Planner</NuxtLink>
    const link = page.getByRole('link', { name: /AI Planner/i });
    await expect(link).toBeVisible();
    await link.click();
    await expect(page).toHaveURL(/\/ai-planner/);
    await expect(page.getByRole('heading', { name: /AI Website Planner/i })).toBeVisible();
  });
});