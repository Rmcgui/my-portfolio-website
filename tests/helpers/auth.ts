import { Page } from '@playwright/test';

export const SEED_USER = {
  email: 'seed-user@example.com',
  password: 'SeedUserPassword123',
};

export async function signupAndLogin(page: Page, email: string, password = 'password123') {
  await page.goto('/signup');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: /sign up/i }).click();
  await page.waitForURL('/dashboard');
}

export async function loginAsSeedUser(page: Page) {
  await page.goto('/login');
  await page.getByLabel('Email').fill(SEED_USER.email);
  await page.getByLabel('Password').fill(SEED_USER.password);
  await page.getByRole('button', { name: /log in/i }).click();
  await page.waitForURL('/dashboard');
}

export const uniqueEmail = () =>
  `test-${Date.now()}-${Math.random().toString(36).slice(2, 8)}@example.com`;