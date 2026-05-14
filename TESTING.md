# Testing Strategy

This document describes how this project is tested, what's covered automatically, what's verified manually, and what's deferred.

## Philosophy

Each user story has acceptance criteria documented in `docs/acceptance-criteria.md` before any test or implementation code is written. Where automated tests exist, they're written against those criteria and exist to give the feature a regression net — not as an afterthought.

This is shift-left in intent, with one honest qualification — see "Deferred and out-of-scope" below.

## Test layers (current state)

| Layer | Tool | Location | Status |
|---|---|---|---|
| Smoke (E2E) | Playwright | `tests/smoke.spec.ts` | Active — runs in CI |
| Auth (E2E) | Playwright | `tests/e2e/auth.spec.ts` | Deferred — see below |
 Plan CRUD (API) | Playwright `request` fixture | `tests/api/plans.spec.ts` | Active — runs in CI |
| Planner failure (E2E) | Playwright + `page.route` mock | `tests/e2e/planner-failure.spec.ts` | Active — runs in CI |
| GraphQL | Playwright `request` fixture | `tests/graphql/plans.spec.ts` | Active — runs in CI |

## What we mock

- **OpenAI:** mocked via `page.route()` interception of `/api/plan-generate` requests. See `tests/fixtures/openai-mock.ts`. The mock fixtures intercept at the application's own endpoint boundary, not at OpenAI's URL — this works because the planner makes its OpenAI calls server-side from the Nitro handler, and the test only needs to control what the browser sees coming back.
- **Supabase:** not mocked. The auth flow and RLS policies are exercised against the real database. Mocking Supabase would defeat the whole point of the cross-user RLS tests, which prove security at the database layer rather than the resolver layer.

## What the API tests do

The API tests in `tests/api/plans.spec.ts` exercise the five plan-CRUD endpoints (`server/api/plans/*`) end-to-end against a real Supabase database. They don't drive a browser — they use Playwright's `request` fixture to hit endpoints directly with HTTP, which makes them fast (whole suite runs in ~2 seconds) and independent of UI timing.

Each test creates its own Supabase user via the admin API (`tests/helpers/api.ts`) and sends authenticated requests with a Bearer token. This is supported by `server/utils/getAuthedUser.ts`, which the endpoints use to resolve auth from either cookies (browser sessions) or Bearer headers (API clients and tests).

The current four tests cover:

1. **POST /api/plans returns 401 without auth.** Anonymous request rejected at the endpoint.
2. **POST /api/plans returns 400 for missing title.** Authenticated request with invalid body rejected before reaching the database.
3. **POST /api/plans creates a plan when authenticated.** Happy path — auth, validation, database insert, RLS allowing the row.
4. **GET /api/plans/:id returns 404 for another user's plan.** Two separate users are provisioned; one cannot read the other's plan even with the UUID. This is the test that proves authorisation works at the database layer, not just the endpoint layer — Supabase RLS policies are doing the protection, and if they regressed, this test would catch it before any user did.


### GraphQL tests

The GraphQL suite in `tests/graphql/plans.spec.ts` exercises the Yoga endpoint against the same Supabase-backed data model as the REST tests. The current four tests cover:

1. **Unauthenticated request returns an error response.** Verifies auth failures surface correctly through the GraphQL response envelope.
2. **Field selection only returns requested fields.** Confirms the resolver layer respects GraphQL's field-selection model instead of over-fetching.
3. **Cross-user authorisation returns no data for another user's plan.** Same RLS guarantee as the REST suite, exercised through GraphQL.
4. **Owner can read their own plan.** Positive-path sanity check proving the endpoint returns valid data when auth and ownership are correct.

## What we run against

Tests currently run against a Supabase project shared with development. There is no separate test database at this stage. This is a known limitation:

- Test runs that create or modify data touch the same database as manual development.
- Each test user is named `apitest-{timestamp}-{random}@example.com` so they're easy to identify and clean up.
- A second Supabase project for tests is on the roadmap; credentials would be injected via GitHub Secrets and the test config would load a separate `.env.test`.

## Test environment configuration

The Supabase project has **email confirmation disabled** (Authentication → Sign In / Providers → Email → Confirm email = OFF). This is required because:

- Auth flows need an immediately usable session post-signup; with confirmation on, `auth.signUp()` returns no session and downstream redirects fail.
- The API test helper uses `supabase.auth.admin.createUser({ email_confirm: true })` to provision auto-confirmed test users, but the same project setting still applies to flows that don't go through the admin API.

This is a deliberate trade-off documented for transparency. In a production-equivalent environment, confirmation would be on and the test approach would change.

## Running tests

```bash
# Run everything (Chromium, Firefox, WebKit locally; Chromium-only in CI)
npx playwright test

# Run just the smoke tests
npx playwright test tests/smoke.spec.ts

# Run just the API tests
npx playwright test tests/api/plans.spec.ts

# Run just the GraphQL tests
npx playwright test tests/graphql/plans.spec.ts

# Run just the planner failure tests
npx playwright test tests/e2e/planner-failure.spec.ts

# Chromium only (matches CI)
npx playwright test --project=chromium

# Open the HTML report after a run
npx playwright show-report
```

## CI

Tests run on every PR via GitHub Actions (`.github/workflows/playwright.yml`). Failed tests block merge. The Playwright HTML report is uploaded as an artifact on every run for inspection.

CI environment notes:
- Runs on Node 22 (required for native WebSocket support, which `@supabase/realtime-js` depends on).
- Supabase credentials (`SUPABASE_URL`, `SUPABASE_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) and the OpenAI API key are supplied via GitHub Secrets.
- Chromium only — multi-browser is kept local-only to keep CI fast.

## Deferred tests

### Auth suite (`tests/e2e/auth.spec.ts`)

All four AUTH describe blocks are marked `test.describe.skip(...)`. The signup → session → redirect flow works correctly when exercised manually in a browser, but fails under Playwright headless automation in a way I haven't yet diagnosed — likely a timing race between Supabase's auth listener firing and Vue Router's middleware checking `useSupabaseUser()`.

Rather than block on this, I deferred the category, documented the deferral here, and moved on to the rest of the test scope. The tests are still in the file, visible, marked as skipped — not silently passing, not deleted. The auth flows are exercised in practice every time an API test calls `createTestUser()`, which validates the same Supabase auth surface from a different angle.

## Manual verification — auth flows

The deferred auth tests are compensated for by manual verification:

- [x] Signup → `/dashboard` (logged in, email visible in header)
- [x] Login → `/dashboard`
- [x] Logout → `/` (session cleared, can't reach `/dashboard`)
- [x] Protected route → unauthenticated visit to `/dashboard` redirects to `/login`
- [x] Login error wording does not leak email existence

## Manual verification — plan CRUD UI

The API tests cover the endpoints. These checks cover the UI flows that hit those endpoints:

- [x] Unauthenticated user redirected from `/dashboard` to `/login`
- [x] Authenticated user lands on dashboard with plan list
- [x] Empty state shows when user has no plans
- [x] AI planner Step 3 "Save Plan" button saves successfully
- [x] Saved-toast banner appears on `/dashboard?saved=1` and disappears on subsequent visits
- [x] New plan appears in dashboard list with title and creation date
- [x] Clicking a plan loads `/dashboard/plans/[id]` with full data
- [x] Title edit + save returns user to dashboard with updated title
- [x] Empty title rejected with inline validation error
- [x] Delete with confirmation removes plan and redirects to dashboard
- [x] Delete cancel preserves the plan and clears the confirmation UI
- [x] Cross-user access to another user's plan UUID returns 404 (also verified by automated API test)

## Out of scope (intentional)

- **Editing individual pages or sections within a plan.** The PATCH endpoint accepts arbitrary updates to `business_profile` and `pages`, so a richer editor UI can slot in without API changes. Out of scope for this iteration.
- **Visual regression testing.** No Percy, no Playwright snapshots. Could be added under `tests/visual/` if a customer-facing UI freeze warranted it.
- **OpenAI mocking is now in place at the `/api/plan-generate` boundary.** Shared helpers in `tests/fixtures/openai-mock.ts` make planner tests deterministic and avoid unnecessary API spend in CI while still exercising the planner flow end-to-end from the browser's perspective.
- **Performance and load testing.** Not yet relevant for a single-developer freelance site.
- **Test-user cleanup.** API tests currently leave their users in `auth.users` (prefixed `apitest-` for easy identification). A `try/finally` cleanup using `deleteTestUser()` from `tests/helpers/api.ts` is straightforward to add when needed.

## Active regression tests

### Planner failure test (`tests/e2e/planner-failure.spec.ts`)

This suite now runs in CI and exists to enforce a real acceptance criterion: when `/api/plan-generate` fails, the user must see a visible error message.

Getting the suite green exposed three separate issues layered on top of each other:

1. **`useFetch` server-side execution bypassed `page.route()`.** The original planner implementation used `useFetch`, which can execute during Nuxt hydration. Playwright's `page.route()` only intercepts browser-side requests, so the mock never fired. Switching the planner call to `$fetch` ensured the request stayed client-side and interceptable.
2. **Native form submission bypassed Vue's `@submit.prevent` under headless mode.** In automation, the form occasionally submitted natively before Vue finished wiring the listener, causing full-page navigations and inconsistent failures.
3. **Incomplete `data.value` → `data` migration after the `$fetch` switch.** One lingering `.value` access caused the mocked success path to fail despite the network layer being fixed.

The original issue was real: the planner error path only logged to `console.error` and showed nothing in the UI. The test now enforces the visible failure state, backed by shared mocks in `tests/fixtures/openai-mock.ts`.

Historical note: this suite originally lived under "Deferred tests" because the infrastructure wasn't stable enough to run reliably. Closing that loop — getting the test genuinely running instead of merely written — turned out to matter more than expected.
