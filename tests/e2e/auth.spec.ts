import { test, expect } from '@playwright/test';
import { signupAndLogin, loginAsSeedUser, uniqueEmail, SEED_USER } from '../helpers/auth';

// =============================================================================
// AUTH-001: Signup
// Each signup test creates a fresh user via uniqueEmail() so tests don't collide.
// =============================================================================
test.describe.skip('AUTH-001: Signup', () => {
  test('successful signup redirects to dashboard', async ({ page }) => {
    const email = uniqueEmail();
    await page.goto('/signup');
    //await page.pause()
    await page.getByLabel('Email').fill(email);
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: /sign up/i }).click();

    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText(email)).toBeVisible();
  });

  test('invalid email shows inline validation error', async ({ page }) => {
    await page.goto('/signup');
    await page.getByLabel('Email').fill('not-an-email');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: /sign up/i }).click();

    await expect(page.getByText(/valid email/i)).toBeVisible();
    await expect(page).toHaveURL('/signup');
  });

  test('short password shows inline validation error', async ({ page }) => {
    await page.goto('/signup');
    await page.getByLabel('Email').fill(uniqueEmail());
    await page.getByLabel('Password').fill('short');
    await page.getByRole('button', { name: /sign up/i }).click();

    await expect(page.getByText(/at least 8 characters/i)).toBeVisible();
    await expect(page).toHaveURL('/signup');
  });

  test('duplicate email shows server error', async ({ page }) => {
    // Use the seed user — it definitely already exists in Supabase
    await page.goto('/signup');
    await page.getByLabel('Email').fill(SEED_USER.email);
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: /sign up/i }).click();

    await expect(page.getByText(/already in use/i)).toBeVisible();
    await expect(page).toHaveURL('/signup');
  });
});

// =============================================================================
// AUTH-002: Login
// Uses the persistent SEED_USER — no signup-then-login dance.
// Faster, cleaner, doesn't create new users for read-only tests.
// =============================================================================
test.describe.skip('AUTH-002: Login', () => {
  test('valid credentials log in and redirect to dashboard', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill(SEED_USER.email);
    await page.getByLabel('Password').fill(SEED_USER.password);
    await page.getByRole('button', { name: /log in/i }).click();

    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText(SEED_USER.email)).toBeVisible();
  });

  test('invalid credentials show generic error', async ({ page }) => {
    await page.goto('/login');
    await page.getByLabel('Email').fill(uniqueEmail()); // never registered
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: /log in/i }).click();

    await expect(page.getByText(/invalid email or password/i)).toBeVisible();
    // Critical: the message must NOT reveal whether the email exists
    await expect(page.getByText(/no account/i)).not.toBeVisible();
    await expect(page.getByText(/email not found/i)).not.toBeVisible();
    await expect(page).toHaveURL('/login');
  });

  test('logged-in user visiting /login is redirected to dashboard', async ({ page }) => {
    await loginAsSeedUser(page);
    // Now try to visit /login while authenticated
    await page.goto('/login');
    await expect(page).toHaveURL('/dashboard');
  });
});

// =============================================================================
// AUTH-003: Logout
// Each test signs up a fresh user via the helper, then exercises logout.
// Fresh users means no test-order dependencies.
// =============================================================================
test.describe.skip('AUTH-003: Logout', () => {
  test('logout button is visible and ends the session', async ({ page }) => {
    await signupAndLogin(page, uniqueEmail());

    const logoutButton = page.getByRole('button', { name: /log out/i });
    await expect(logoutButton).toBeVisible();

    await logoutButton.click();
    await expect(page).toHaveURL('/');
  });

  test('after logout, dashboard redirects to login', async ({ page }) => {
    await signupAndLogin(page, uniqueEmail());
    await page.getByRole('button', { name: /log out/i }).click();
    await expect(page).toHaveURL('/');

    // Try to visit dashboard now
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });
});

// =============================================================================
// AUTH-004: Protected route
// Uses the seed user for the redirect-after-login flow — simpler than signup.
// =============================================================================
test.describe.skip('AUTH-004: Protected route', () => {
  test('unauthenticated visitor to /dashboard is redirected to /login', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login/);
  });

  test('after login, user is sent back to originally requested page', async ({ page }) => {
    // Try to visit dashboard while logged out — should redirect with ?redirect=
    await page.goto('/dashboard');
    await expect(page).toHaveURL(/\/login\?redirect=%2Fdashboard/);

    // Log in from the redirected page using the seed user
    await page.getByLabel('Email').fill(SEED_USER.email);
    await page.getByLabel('Password').fill(SEED_USER.password);
    await page.getByRole('button', { name: /log in/i }).click();

    // Should land on /dashboard (the originally requested page), not the default
    await expect(page).toHaveURL('/dashboard');
  });
});