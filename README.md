# webdesignbyryan.com

![Tests](https://github.com/Rmcgui/my-portfolio-website/actions/workflows/playwright.yml/badge.svg)

For testing strategy and the manual-verification checklist, see [TESTING.md](TESTING.md).

The portfolio and business site for **Web Design by Ryan** — a freelance web development practice based in County Mayo, Ireland, building modern websites and custom web applications for businesses across Ireland.

Live site: [webdesignbyryan.com](https://webdesignbyryan.com)

## Overview

This repo started as a marketing site (home, about, services, process, projects, contact) and has since grown into a working application with:

- An AI-powered **website planner** that takes a business profile and generates a draft site structure (homepage copy, pages, sections) using the OpenAI API.
- **Authenticated user accounts** via Supabase, so visitors can save, list, edit, and delete generated plans.
- A **Playwright + GitHub Actions** test suite with 69 tests across four layers: smoke E2E, auth E2E (AUTH-001–004, active on Chromium and Firefox), REST API plan-CRUD against a real database (including a cross-user authorisation test that verifies Row-Level Security), and a GraphQL layer covering field selection and cross-user auth.

The testing layer was built as part of an application for AutoGuru's Automation Test Engineer role. A deeper write-up is in [BLOG.md](BLOG.md).

## Tech stack

**Frontend**
- Nuxt 4 (Vue 3, Composition API, TypeScript)
- Tailwind CSS
- Pinia for planner state
- `@nuxtjs/sitemap` for SEO

**Backend / data**
- Nitro server routes (REST + GraphQL via `graphql-yoga`)
- Supabase (Postgres + auth, Row-Level Security on user-owned tables)
- OpenAI API for plan generation
- `@nuxt/content` for the blog

**Testing & CI**
- Playwright (Chromium, Firefox, WebKit locally; Chromium in CI)
- GitHub Actions

**Infrastructure**
- Netlify (hosting + CI deploys)
- Namecheap (domain)
- ImprovMX → Gmail (email forwarding)
- EmailJS (contact form)

## Getting started

Requires Node.js 22+ (required for native WebSocket support that the Supabase realtime client depends on).

```bash
# Install dependencies
npm install

# Create a local env file (see "Environment variables" below)
cp .env.example .env

# Run the dev server on http://localhost:3000
npm run dev
```

## Environment variables

```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJ...               # anon public key
SUPABASE_SERVICE_ROLE_KEY=eyJ...  # server-side only; never expose to client
OPENAI_API_KEY=sk-...
```

Production env vars are configured in the Netlify dashboard. CI env vars are configured as GitHub Secrets (`Settings → Secrets and variables → Actions`).

## Project structure

```
app/pages/                  # Nuxt pages
  index.vue                 # Marketing home
  about.vue, process.vue, projects.vue, contact.vue
  ai-planner.vue            # AI-powered website planner
  login.vue, signup.vue
  dashboard/
    index.vue               # Saved plans list
    plans/
      [id].vue              # Plan edit / delete

app/components/             # Vue components
app/stores/                 # Pinia stores (planner state)

server/api/
  plan-generate.post.ts     # OpenAI-backed planner endpoint
  graphql.ts                # GraphQL endpoint (graphql-yoga): myPlans, plan(id)
  plans/                    # REST CRUD for saved plans (RLS-protected)
    index.get.ts, index.post.ts
    [id].get.ts, [id].patch.ts, [id].delete.ts
server/utils/
  getAuthedUser.ts          # Dual-auth helper (cookie + Bearer token)

app/middleware/
  auth.global.ts            # Global route guard — redirects to /login?redirect=<path>

content/blog/               # Markdown blog posts (rendered via @nuxt/content)

tests/
  smoke.spec.ts             # Smoke tests (CI)
  e2e/
    auth.spec.ts            # Auth E2E — active on Chromium/Firefox; WebKit known issue
    planner-failure.spec.ts # AI planner failure/success paths (page.route() mock)
  api/plans.spec.ts         # REST API tests against real Supabase
  graphql/plans.spec.ts     # GraphQL field selection and cross-user auth tests
  fixtures/openai-mock.ts   # page.route() helpers for mocking /api/plan-generate
  helpers/
    auth.ts                 # E2E auth helpers
    api.ts                  # API test user provisioning via admin API

docs/acceptance-criteria.md # User stories with explicit acceptance criteria

nuxt.config.ts
playwright.config.ts
.github/workflows/playwright.yml
```

## Running tests

```bash
# All tests, default to all browsers locally
npx playwright test

# Chromium only (matches CI)
npx playwright test --project=chromium

# Just the smoke tests
npx playwright test tests/smoke.spec.ts

# Just the API tests
npx playwright test tests/api/plans.spec.ts

# After a run, open the HTML report
npx playwright show-report
```

For the testing approach in detail — acceptance criteria, what's automated, what's verified manually, and what's deferred — see [TESTING.md](TESTING.md).

## Deployment

The site auto-deploys to Netlify on push to `main`. Production environment variables are configured in the Netlify dashboard.

## Related writing

- [BLOG.md](BLOG.md) — *Building a Playwright test suite for an AI-powered web app in four days.* Full write-up of the testing work, including the shift-left workflow, dual-auth helpers, GraphQL auth, and the cross-user authorisation test. Published at [webdesignbyryan.com/blog/building-playwright-suite](https://webdesignbyryan.com/blog/building-playwright-suite).

## Contact

Ryan McGuire — [webdesignbyryan.com/contact](https://webdesignbyryan.com/contact)