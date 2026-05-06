# webdesignbyryan.com

![Tests](https://github.com/Rmcgui/webdesignbyryan/actions/workflows/playwright.yml/badge.svg)

The portfolio and business site for **Web Design by Ryan** — a freelance web development practice based in County Mayo, Ireland, building modern websites and custom web applications for businesses across Ireland.

Live site: [webdesignbyryan.com](https://webdesignbyryan.com)

## Overview

This repo started as a marketing site (home, about, services, process, projects, contact) and has since grown into a working application with:

- An AI-powered **website planner** that takes a business profile and generates a draft site structure (homepage copy, pages, sections) using the OpenAI API.
- **Authenticated user accounts** via Supabase, so visitors can save, list, edit, and delete generated plans.
- A small **GraphQL endpoint** for browsing saved plans.
- A **Playwright + GitHub Actions** test suite covering E2E flows, REST endpoints, and the GraphQL layer.

The testing layer was built as part of an application for AutoGuru's Automation Test Engineer role — a deeper write-up is in the blog post linked at the bottom.

## Tech stack

**Frontend**
- Nuxt 3 (Vue 3, Composition API, TypeScript)
- Tailwind CSS
- `@nuxtjs/sitemap` for SEO

**Backend / data**
- Nitro server routes (REST)
- Supabase (Postgres + auth)
- graphql-yoga for the GraphQL endpoint
- OpenAI API for plan generation

**Testing & CI**
- Playwright (Chromium, Firefox, WebKit locally; Chromium in CI)
- GitHub Actions

**Infrastructure**
- Netlify (hosting + CI deploys)
- Namecheap (domain)
- ImprovMX → Gmail (email forwarding)
- EmailJS (contact form)

## Getting started

Requires Node.js 18+.

```bash
# Install dependencies
npm install

# Copy env template and fill in your own keys
cp .env.example .env

# Run the dev server on http://localhost:3000
npm run dev
```

You'll need the following in `.env`:

```
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_KEY=eyJ...           # anon public key
SUPABASE_SERVICE_ROLE_KEY=eyJ...  # server-side only
OPENAI_API_KEY=sk-...
```

## Project structure

```
app/pages/          # Nuxt pages (home, about, services, projects, contact, planner, dashboard, login, signup)
server/api/         # Nitro REST endpoints (plans CRUD, plan-generate)
server/graphql/     # graphql-yoga schema and resolvers
tests/e2e/          # Playwright E2E tests
tests/api/          # REST endpoint tests
tests/graphql/      # GraphQL layer tests
tests/helpers/      # Shared test utilities (auth, fixtures)
nuxt.config.ts      # Nuxt config (SEO, modules, Supabase setup)
playwright.config.ts
```

## Running tests

```bash
# All projects (Chromium, Firefox, WebKit)
npx playwright test

# Chromium only (matches CI)
npx playwright test --project=chromium

# Open the HTML report after a run
npx playwright show-report
```

For the full testing approach — acceptance criteria, the shift-left workflow, layered test strategy, and how OpenAI is mocked — see [TESTING.md](./TESTING.md).

## Deployment

The site auto-deploys to Netlify on push to `main`. Production environment variables are configured in the Netlify dashboard and point to the production Supabase project (separate from the test project used in CI).

## Related writing

- Blog post: *Building a Playwright + GraphQL test suite in a week* — [link to post](https://webdesignbyryan.com/blog/autoguru-test-suite) *(coming soon)*

## Contact

Ryan McGuire — [webdesignbyryan.com/contact](https://webdesignbyryan.com/contact)