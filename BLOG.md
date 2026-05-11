# Building a Playwright Test Suite for an AI-Powered Web App in Seven Days

> **Status:** Working draft. Fill in remaining sections as the week progresses. Final polish + screenshots on Day 7.

AutoGuru is hiring an Automation Test Engineer. Their stack is Playwright, GraphQL, and AI tooling like Claude Code, and their job description spells out a culture I want to work in: quality engineers embedded with developers, no flaky tests, shift-left as a default rather than a slogan. I'm a full-stack developer, not a career tester — so rather than apply on the strength of my CV alone, I gave myself a week to put their stack into practice on my own product. This post is what I built, what worked, and what I'd do differently.

---

## The brief

<!-- TODO Day 7: tighten this section:
- The existing site (webdesignbyryan.com, Nuxt 4, Vue 3, Tailwind)
- The existing AI feature (the website planner — calls OpenAI, generates page-by-page plan)
- Why I chose to add tests around an existing AI feature rather than spin up a fresh project: it's closer to AutoGuru's actual situation (testing live product features, not greenfield)
- The seven-day constraint and why it mattered (forced honest scope decisions)
-->

---

## The architecture

<!-- TODO Day 7: ~300 words. Cover:
- Existing: Nuxt 4 (app/ directory), Vue 3 + Composition API, Tailwind, Pinia, OpenAI SDK, Netlify hosting
- Added for testing: Supabase (auth + Postgres + RLS), graphql-yoga, Playwright, GitHub Actions
- Three test layers: E2E (browser), API (Playwright request fixture), GraphQL (same request fixture, different endpoint)
- Why I added auth/CRUD around the planner instead of testing it standalone: gave me realistic surface area — protected routes, cross-user authorisation, mocked external APIs
- One diagram if I have time (just a box-and-arrow of how requests flow)
-->

---

## Shift-left in practice

The plan I followed had a strict rule: every user story gets acceptance criteria documented in `docs/acceptance-criteria.md` *before* a single test or line of feature code is written. Then tests get written against those criteria, fail, and only then does feature code go in. The loop is: criterion → test → red → implement → green → next.

In a normal "test after" workflow you'd never see most of the issues below. You'd be clicking through the UI as a happy-path user, the forms would mostly work, and bugs would surface weeks later when a real visitor hit them. Writing the tests first turned every misalignment between my plan and my code into a 30-second feedback loop. Here are the ones from the first two days.

### Day 1, Issue #1 — Playwright "no tests" was actually a port collision

**Symptom:** `npx playwright test` returned an empty HTML report. Zero tests run. `--list` confirmed two tests existed in the file.

**What I tried first:** assumed the config was filtering them out. Searched for `grep`, `testIgnore`, broken `testDir` paths. All clean.

**Actual cause:** Nuxt's dev server couldn't bind to port 3000 — something else on my Mac was holding it — and it silently fell back to 3003. Playwright's `webServer` config was waiting for `localhost:3000`, never got a response, timed out after 120s, and emitted an empty report. The "no tests" output was correct from Playwright's perspective; the suite literally never ran.

**Fix:** `lsof -i :3000` to find the squatter, killed it, server bound to 3000, tests ran.

**Lesson:** an empty report doesn't mean "no tests found." It means "the runner gave up before running anything." Two very different problems with the same surface symptom. Worth knowing.

### Day 1, Issue #2 — Title regex assumed a different brand

**Symptom:** First smoke test failed. Expected `/Web Design by Ryan/i`, page title was `Ryan McGuire | Web Developer in Mayo - Custom Websites & Web Applications`.

**Actual cause:** The plan I worked from guessed at my title. My SEO copy is more search-optimised than that.

**Fix:** Changed the assertion to `/Ryan McGuire/i` — the most stable substring.

**Lesson:** trivially small, but illustrative. The test caught a mismatch between assumption and reality in five seconds. Without the test I'd have noticed when... well, never, probably. Page titles aren't something I'd manually verify.

### Day 2, Issue #3 — The Supabase redirect-loop nobody mentioned

This was the most useful failure of the week so far.

**Symptom:** Every auth test that called `page.goto('/signup')` ended up on `/login` instead. The Playwright trace showed the navigation completing — but to the wrong URL. The "Email" and "Password" fields existed on `/login` too, so the early test steps appeared to pass; the test only failed at the "Sign Up" button click, which had no equivalent on the login page.

**What I tried first:** assumed the signup page didn't exist, then assumed it had wrong button text, then assumed Vue HMR was serving stale content. Spent 20 minutes on the wrong tree.

**Actual cause:** I'd configured the Supabase Nuxt module's `redirectOptions.exclude` list with the public marketing routes (`/`, `/about`, `/projects`, etc.) and forgotten that `exclude` is an allowlist for unauthenticated access. Any route not in the list requires auth. So `/signup` — which by definition gets visited by people without accounts — was protected, and the middleware was bouncing me to `/login`.

**Fix:** added `/signup` and `/login` to the exclude list. (`/login` matters too — without it, visiting login while logged out triggers a redirect to login, which is at minimum awkward.) `/dashboard` deliberately stays out of the list, because that's the route AUTH-004 needs to be protected.

**Lesson:** I would not have caught this for *days* by clicking through manually. The forms looked superficially identical, the URL bar would have shown the redirect but I'd have shrugged and tried again. The test caught it the moment it happened, *and* gave me a precise reproduction case I could debug in isolation. This is the actual argument for shift-left — not "tests catch bugs faster" (true but vague) but "tests turn ambiguous symptoms into precise reproductions, which is what actually saves time."

### Day 2, Issue #5 — When manual works and automation doesn't
 
The signup → dashboard flow worked perfectly when I clicked through it manually in a browser. URL changed, session was created, dashboard rendered, email visible in the header. Every time.
 
Under Playwright headless automation, the same flow failed. The page would stay on `/signup` even though the click had been dispatched, the handler had run, and Supabase had returned a session. I spent several hours on this — proposing fixes, applying them, watching tests still fail, proposing more. The fixes addressed plausible causes (form submission bypassing Vue's event handler, the `useSupabaseUser()` ref lagging behind the auth listener, parallel workers stomping the dev server) but none of them moved the failure count.
 
Eventually I made the call to stop. The application code was working — verified manually after every change. The bug was somewhere in the interaction between Vue Router's middleware, the Supabase Nuxt module's built-in auth gate, and Playwright's headless click timing. Not a simple race condition with a one-line fix. Probably solvable with another half-day of investigation. Definitely not solvable in the time I had left.
 
**The decision:** mark all four AUTH describes as `test.describe.skip(...)`, document the deferral honestly in `TESTING.md`, and verify the auth flow manually with a written checklist. Then move on to the rest of the test suite.
 
**The lesson:** the value of a test suite is not how many tests pass. It's whether the suite tells you the truth about the application and whether it accelerates the team. A suite where you have to disable failing tests to keep CI green is worse than a suite where you defer a category honestly and explain why. The first hides risk; the second exposes it. The first invites future commits that quietly break more tests because nobody trusts the signal; the second invites someone fresh to come back, read the deferral notes, and either fix the underlying issue or remove the deferral if it's no longer relevant.
 
The auth tests in this repo are skipped. They're not deleted, they're not silently passing, they're not commented out. They're documented as deferred, with the manual verification checklist that compensates for their absence. That's what "no flaky tests in this garage" looks like in practice — it's a culture, not a setting.


<!-- TODO Day 4-6: add the OpenAI silent-failure example here once it lands.
The plan calls for this on Day 4: writing a test for graceful AI failure, finding that the existing
ai-planner.vue just console.errors with no user-visible message, then fixing it.
That's a much stronger version of the "test as bug-discovery tool" story.
-->

---

## The Claude Code experience

<!-- TODO Day 7: ~400 words. This section will get reread. Be specific. Pull from claude-code-notes.md.

Structure:
- What worked first time (probably: test scaffolding, helper extraction, regex-heavy assertions)
- What didn't (probably: selector guesses based on assumed labels — see Day 1 issue #2 above; race conditions in async tests)
- Patterns I developed for verifying its output (e.g., "ask for tests that fail first when I deliberately break the feature, before trusting them")
- Where it accelerated me 10x vs. where it accelerated me 1.5x
- One concrete prompt-and-result example, fully shown

-->

---

## Lessons

<!-- TODO Day 7: ~200 words. Whatever rings true after the week. Probably some subset of:
- Mocking is a discipline, not a default. Decide where the seam is and document why.
- Auth and authorisation are two different test categories. Most auth tests are really authentication tests; the cross-user RLS test is the only authorisation test.
- "No flaky tests" is a culture more than a setting. It means investigating every intermittent failure, never retrying through them.
- Acceptance criteria as a deliverable, not a ceremony. The doc was the highest-leverage thing I wrote all week.
- Test-first is faster *once you trust the setup*. The first day was slower than just building. By Day 4 the loop was paying back.
-->

---

## What I'd do with more time

<!-- TODO Day 7: ~100 words. Easy section.
- Visual regression with Percy or Playwright snapshots
- BDD with Cucumber/Gherkin if the team prefers human-readable specs
- Performance/load testing with k6 against the GraphQL endpoint
- Multi-browser CI matrix (currently Chromium-only in CI to keep it fast)
- Mutation testing with Stryker to verify test quality, not just coverage
-->

---

<!-- TODO Day 7: footer with links to the repo, the live site, and contact -->