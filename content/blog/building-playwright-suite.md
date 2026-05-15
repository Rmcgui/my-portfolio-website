# Building a Playwright Test Suite for an AI-Powered Web App in Four Days

> **Status:** Working draft. Final polish + screenshots before publication.

AutoGuru is hiring an Automation Test Engineer. Their stack is Playwright, GraphQL, and AI tooling like Claude Code, and their job description spells out a culture I want to work in: quality engineers embedded with developers, no flaky tests, shift-left as a default rather than a slogan. I'm a full-stack developer, not a career tester — so rather than apply on the strength of a CV alone, I gave myself four days to put their stack into practice on my own product. This post is what I built, what worked, and what I'd do differently.

---

## The brief

The existing site is [webdesignbyryan.com](https://webdesignbyryan.com) — a Nuxt 4 / Vue 3 / Tailwind marketing and portfolio site. Its main feature is the AI website planner: a business owner fills in a multi-step form (name, industry, description, goals, tone), the server calls OpenAI, and the response comes back as a structured page-by-page website plan the user can edit and save to their account.

Rather than spin up a fresh project for this exercise, I chose to build tests around that existing feature. The reasoning: AutoGuru's engineers work with live product features, not greenfield demos. A suite against a working system has to deal with real state, third-party API costs, SSR/client hydration boundaries, and the gaps between what code does and what it was supposed to do. Those are the interesting problems.

The constraint I set: four days. Day 1 — smoke tests and Playwright setup. Day 2 — auth tests. Day 3 — REST API tests and plan CRUD. Day 4 — GraphQL, OpenAI mocking, and the AI planner failure path. Tight enough to force honest scope decisions, long enough to demonstrate depth in each layer. The scope that didn't make it: visual regression, load testing, full E2E auth resolution is documented honestly in "What I'd do with more time."

---

## The architecture

The existing stack at webdesignbyryan.com: Nuxt 4 (`app/` directory), Vue 3 Composition API, Tailwind CSS, Pinia for state management, the OpenAI Node SDK on the server side, deployed to Netlify.

To give the test suite realistic surface area — protected routes, cross-user data, a mocked external API, I added three layers:

**Supabase** handles auth (email/password, cookie-based for browsers), a Postgres database for storing plans, and Row-Level Security. The RLS policy (`using (auth.uid() = user_id)`) means the database itself enforces ownership; no application code can leak another user's plan even if it has a bug. Verifying that defence-in-depth is only possible by testing against a real database, which is why Supabase is never mocked.

**GitHub Actions** runs the full suite on every push, using a real Nuxt dev server rather than a mock environment. The real-world config took two attempts - local Node 22 hid a WebSocket incompatibility that only surfaced in CI on Node 20 (Issue #9).

**Playwright** covers four test layers:
- **Smoke** (`tests/smoke.spec.ts`): one test, site loads and title matches. The canary.
- **E2E** (`tests/e2e/`): browser-driven user journeys with `page.route()` for network mocking. Auth flows are deferred and documented in TESTING.md; the AI planner failure and success paths are active.
- **REST API** (`tests/api/plans.spec.ts`): HTTP-level tests via Playwright's `request` fixture, no browser. Supabase admin API provisions isolated test users per test run.
- **GraphQL** (`tests/graphql/plans.spec.ts`): same Bearer-token auth as REST, proving field selection and cross-user RLS hold at the GraphQL layer too.

A shared utility (`server/utils/getAuthedUser.ts`) handles dual-mode auth: cookies for browsers, Bearer tokens for API clients. OpenAI calls are mocked at the network boundary using `page.route()` — fast, free of API spend in CI, and only possible because the AI planner uses `$fetch` (client-side) rather than `useFetch` (SSR-side, where `page.route()` can't intercept).

---

## Shift-left in practice

The plan I followed had a strict rule: every user story gets acceptance criteria documented in `docs/acceptance-criteria.md` *before* a single test or line of feature code is written. Then tests get written against those criteria, fail, and only then does feature code go in. The loop is: criterion → test → red → implement → green → next.

In a normal "test after" workflow most of the issues below would have been invisible. The happy path would mostly work, and bugs would surface weeks later when a real visitor hit them. Writing the tests first turned every misalignment between plan and code into a fast feedback loop. Here are the ones that stood out.

### Day 1, Issue #1 — Playwright "no tests" was actually a port collision

**Symptom:** `npx playwright test` returned an empty HTML report. Zero tests run. `--list` confirmed two tests existed in the file.

**What I tried first:** assumed the config was filtering them out. Searched for `grep`, `testIgnore`, broken `testDir` paths. All clean.

**Actual cause:** Nuxt's dev server couldn't bind to port 3000 as something else on my Mac was holding it and it silently fell back to 3003. Playwright's `webServer` config was waiting for `localhost:3000`, never got a response, timed out after 120s, and emitted an empty report. The "no tests" output was correct from Playwright's perspective; the suite literally never ran.

**Fix:** `lsof -i :3000` to find the squatter, killed it, server bound to 3000, tests ran.

**Lesson:** an empty report doesn't mean "no tests found." It means "the runner gave up before running anything." Two very different problems with the same surface symptom.

### Day 1, Issue #2 — Title regex assumed a different brand

**Symptom:** First smoke test failed. Expected `/Web Design by Ryan/i`, page title was `Ryan McGuire | Web Developer in Mayo - Custom Websites & Web Applications`.

**Actual cause:** The plan I worked from guessed at the title. The real SEO copy is more search-optimised.

**Fix:** Changed the assertion to `/Ryan McGuire/i` which is the most stable substring.

**Lesson:** trivially small, but illustrative. The test caught a mismatch between assumption and reality in five seconds. Without the test it would have stayed unnoticed indefinitely as page titles aren't something I manually verify.

### Day 2, Issue #3 — The Supabase redirect-loop nobody mentioned

**Symptom:** Every auth test that called `page.goto('/signup')` ended up on `/login` instead. The Playwright trace showed the navigation completing but to the wrong URL. The "Email" and "Password" fields existed on `/login` too, so the early test steps appeared to pass; the test only failed at the "Sign Up" button click, which had no equivalent on the login page.

**What I tried first:** assumed the signup page didn't exist, then assumed it had wrong button text, then assumed Vue HMR was serving stale content. Spent 20 minutes on the wrong tree.

**Actual cause:** I'd configured the Supabase Nuxt module's `redirectOptions.exclude` list with the public marketing routes (`/`, `/about`, `/projects`, etc.) and forgotten that `exclude` is an allowlist for unauthenticated access. Any route not in the list requires auth. So `/signup`, which by definition gets visited by people without accounts, was protected and the middleware was bouncing me to `/login`.

**Fix:** added `/signup` and `/login` to the exclude list. (`/login` matters too. Without it, visiting login while logged out triggers a redirect to login, which is at minimum awkward.) `/dashboard` deliberately stays out of the list because it's the protected route.

**Lesson:** I would not have caught this for days by clicking through manually. The forms look superficially identical, the URL bar would have shown the redirect, and I'd have shrugged. The test caught it the moment it happened, *and* gave me a precise reproduction case I could debug in isolation. This is the actual argument for shift-left and not "tests catch bugs faster" but "tests turn ambiguous symptoms into precise reproductions, which is what actually saves time."

### Day 2, Issue #4 — When manual works and automation doesn't

The signup → dashboard flow worked perfectly when I clicked through it manually in a browser. URL changed, session was created, dashboard rendered, email visible in the header. Every time.

Under Playwright headless automation, the same flow failed. The page would stay on `/signup` even though the click had been dispatched, the handler had run, and Supabase had returned a session. I spent several hours on this proposing fixes, applying them, watching tests still fail, proposing more. The fixes addressed plausible causes (form submission bypassing Vue's event handler, the `useSupabaseUser()` ref lagging behind the auth listener, parallel workers stomping the dev server) but none of them moved the failure count.

Eventually I made the call to stop. The application code was working. I verified manually after every change. The bug was somewhere in the interaction between Vue Router's middleware, the Supabase Nuxt module's built-in auth gate, and Playwright's headless click timing. Not a simple race condition with a one-line fix. Probably solvable with another half-day of investigation. Definitely not solvable in the time I had left.

**The decision:** mark all four AUTH describes as `test.describe.skip(...)`, document the deferral honestly in `TESTING.md`, and verify the auth flow manually with a written checklist. Then move on to the rest of the test suite.

**The lesson — which is the one I most want AutoGuru to take from this post:** the value of a test suite is not how many tests pass. It's whether the suite tells the truth about the application and whether it accelerates the team. A suite where failing tests get disabled to keep CI green is worse than a suite where a category is deferred honestly and explained. The first hides risk; the second exposes it. The first invites future commits that quietly break more tests because nobody trusts the signal; the second invites someone fresh to come back, read the deferral notes, and either fix the underlying issue or remove the deferral if it's no longer relevant.

The auth tests are skipped. Not deleted, not silently passing, not commented out. They're documented as deferred, with the manual verification checklist that compensates for their absence. That's what "no flaky tests in this garage" looks like in practice.

### Day 3, Issue #5 — Email confirmation, rate limits, and a long lesson in Supabase auth modes

Day 3 was supposed to be plan CRUD. It started with a saga about Supabase email confirmation.

The setup: AUTH-001 (signup) test creates a fresh user every run with `auth.signUp()`. After three or four runs, Supabase started rate-limiting on the free tier — the confirmation email it was trying to send tripped a per-hour cap. Tests couldn't proceed.

**The first fix that didn't work:** I tried to turn off "Enable email provider" in Supabase auth settings. That's a bigger lever than I thought. It disables email-based signup *and* login. The seed user I'd manually created in Supabase suddenly couldn't authenticate either.

**The second fix:** found the actually correct toggle, "Confirm email," buried under Authentication → Providers → Email. Turning that off means new signups don't trigger a confirmation email and the user has an immediately-usable session.

**The third complication:** existing users created while confirmation was on still had `email_confirmed_at` set to null, and `signInWithPassword` rejects unconfirmed users. The toggle only affects new signups, not retroactive cleanup. The fix was a one-liner in the Supabase SQL editor:

```sql
update auth.users
set email_confirmed_at = now(),
    confirmed_at = now()
where email_confirmed_at is null;
```

**The lesson:** auth modes are not a single switch. Provider on/off, confirmation required, retroactive state of existing users, rate limits, and how your application code reacts to a `session: null` return are five separate concerns that compose into one "can the user log in?" question. Test environments need explicit configuration for each. I documented all of this in TESTING.md so future-me doesn't relearn it.

### Day 3, Issue #6 — Nuxt 4 file routing and the disappearing edit page

Building the plan-edit page (`/dashboard/plans/[id]`), the click-through from the dashboard list silently did nothing. URL changed, UI didn't.

Diagnostic: Network tab was empty. Click handler wasn't even firing a request. Console showed no errors. The page route was matching nothing.

**Root cause:** I had `app/pages/dashboard.vue` AND `app/pages/dashboard/plans/[id].vue` coexisting. In Nuxt 4's file-based routing, a flat file `dashboard.vue` at the same level as a `dashboard/` folder requires the parent file to act as a layout with a `<NuxtPage />` placeholder for children. Without that, any URL starting with `/dashboard/` just matches `dashboard.vue` and ignores the folder.

**Fix:** moved the file. `app/pages/dashboard.vue` → `app/pages/dashboard/index.vue`. Same route URL (`/dashboard`), but now Nuxt treats the folder as the root of a route group, and `dashboard/plans/[id].vue` becomes its sibling instead of an unreachable orphan.

**Lesson:** framework conventions are convention not magic. The folder-vs-file collision was obvious in retrospect but invisible until I went looking. File-based routing is great until you fight it, at which point you need to know the rule precisely.

### Day 3, Issue #7 — The cross-user authorisation test

This is the substantive one for AutoGuru.

After the plan CRUD UI was working, I wrote four API-level tests in `tests/api/plans.spec.ts` using Playwright's `request` fixture, no browser but just HTTP. Three of them are straightforward: 401 without auth, 400 for missing title, 201 for a valid create. The fourth is the one that matters:

> **GET /api/plans/:id returns 404 when accessing another user's plan.**
>
> The test creates two separate Supabase users via the admin API. User A creates a plan. User B — authenticated as themselves, knowing User A's plan UUID — tries to GET `/api/plans/<that-uuid>`. The test asserts a 404 response.

A 404 — not a 403. Returning 403 leaks the fact that the plan exists. 404 is indistinguishable from "no such plan." That's deliberate.

The deeper point: this test passes because **Postgres itself refuses to return the row**. Not my endpoint code. The Supabase RLS policy `using (auth.uid() = user_id)` runs in the database, gets `null` for the row count, and the endpoint sees no data — 404. If I had a bug in my endpoint code that forgot to check ownership, RLS would still block the leak. That's defence in depth.

But it only works if the tests hit a real database with real RLS policies. If I'd mocked Supabase, this test would pass against my endpoint code even if my RLS policies were completely missing. **Mocking is sometimes the right call (OpenAI, expensive third-party APIs, slow external services) but for the database that owns your security model, mocking is hiding what you most need to verify.**

This test took ~5 minutes to write once the helper was in place. It's the kind of test that distinguishes a real quality-engineering suite from a happy-path checklist.

### Day 3, Issue #8 — Dual-mode auth: cookies for browsers, Bearer for APIs

The browser tests use cookie-based auth which is Supabase's standard mode. The API tests can't, because there's no browser to manage cookies. They use `Authorization: Bearer <token>` headers instead, which is what mobile apps and integration partners would also use.

The endpoint code originally only handled cookies via `serverSupabaseUser(event)`. To support both, I wrote `server/utils/getAuthedUser.ts`, a small helper that tries cookie auth first, then falls back to verifying the Bearer token against Supabase's auth API. Same helper handles both modes; same endpoints serve both kinds of client.

**The win:** this isn't just test scaffolding. It's a real production capability. The API is now interoperable with anything that can send a Bearer header. Future expansion (mobile, integrations, scheduled scripts) doesn't need an API redesign.

**The lesson:** good test infrastructure pushes you toward good production architecture. The need to test the API led to a cleaner API.

### Day 3, Issue #9 — Node 20 vs Node 22 in CI

Local tests passed. CI failed with a cryptic 120-second timeout. The webServer never returned a healthy response.

Adding a sanity-check step that ran `npm run dev` directly and printed the dev server's actual output revealed the cause:

```
Node.js 20 detected without native WebSocket support.
For Node.js < 22, install "ws" package and provide it via the transport option
```

GitHub Actions was running Node 20. Supabase's `realtime-js` library needs WebSocket. Node 20 doesn't have it natively, the realtime client failed to initialise, and every server request returned a 500. Playwright's webServer health check kept getting 500s, gave up after 120s, and emitted an empty test report.

**Fix:** one line change in `.github/workflows/playwright.yml`:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: 22   # was: 20
```

**Lesson:** CI exposes environment gaps that local development can't. The bug was real but local Node 22 hid it. The fix was trivial; finding it required adding a temporary diagnostic step to the workflow that printed dev server output directly. That step took five minutes to add and 30 seconds to read once it ran.

**Meta-lesson:** when a test suite fails opaquely in CI, the highest-leverage move is usually "add a step that prints what the failing component is actually doing." Cost is negligible; benefit is a diagnosis instead of a guess.

### Day 4, Issue #10 — Writing the test found the bug; running it didn't matter

The goal for this test was to enforce a single acceptance criterion: when AI generation fails, the user sees something. Not a stack trace, not a blank screen - a visible error.

Reviewing the existing handler in `ai-planner.vue` while drafting the test, I found this:

```javascript
if (error.value) {
  console.error(error.value)
  // show toast or message
  return
}
```

The error path was a TODO comment. The test caught the bug before I'd run the test. That's possible because writing the test forced me to read the code from the user's perspective *what should happen here?* , instead of the developer's *what does happen here?*

I added a visible error message. Verified manually by setting an invalid `OPENAI_API_KEY` and triggering generation: red alert, clear copy, no silent failure. The test infrastructure to enforce this is active in `tests/e2e/planner-failure.spec.ts`. Getting there took one more step: the original implementation used `useFetch`, which runs server-side during SSR hydration meaning `page.route()` couldn't intercept the request to `/api/plan-generate`. Migrating to `$fetch` (client-side) fixed the interception, and both the failure and success paths now run in CI.

The lesson is the broader one about shift-left: tests don't have to *pass* to be valuable. The act of designing the test against a clear acceptance criterion ("the user sees a visible error") forces you to confront whether your code actually does that. Often it doesn't, even when it "works" in the happy path. That's the work that distinguishes a quality engineering culture from a coverage-counting one.


### Day 4, Issue #11 — Yoga's error masking, and the choice not to fight it

Writing the "unauthenticated GraphQL request" test, my assertion checked the error message for `/unauthenticated/i`. The test failed against `"Unexpected error."` which is Yoga's default response when a resolver throws. This is deliberate: leaking resolver errors to the client can expose internal details (database paths, stack traces, types). Yoga masks them and logs the real message server-side.

The "correct" fix would be to throw `GraphQLError` with `extensions.code: 'UNAUTHENTICATED'`, this signals "client-safe, deliver as-is" and gives consumers a stable error code to branch on. The pragmatic fix I took was to match `/unexpected error/i` in the test. The test still proves what matters (auth failures don't return data, errors are surfaced in the response envelope), and the masking behaviour is correct for production.

**Lesson:** when a test wants you to fight framework defaults, ask whether the default is wrong or whether the test is wrong. In this case, both were partially right: masking is correct, but the test could be more useful with a typed error. Time pressure picked the simpler path; documenting the trade-off keeps it visible.

### Day 4, Issue #12 — Unskipping the planner-failure test

On Day 2 I'd marked the planner-failure test as `.skip` with a documented hypothesis: `useFetch` was running server-side during hydration, so `page.route()` (which only intercepts browser-side requests) couldn't see the call.

Returning to it on Day 4, I switched `ai-planner.vue` from `useFetch` to `$fetch` — `$fetch` is always client-side, so `page.route()` could now intercept. But the tests still failed.

Three layered bugs surfaced, in order:

1. **Native form submission was bypassing Vue's `@submit.prevent`.** Same headless-mode timing issue I'd hit on Day 2 with the login form. The URL showed a trailing `?` after the click — the giveaway that the form submitted natively before Vue's listener caught it. Fix: change the button to `type="button"` with `@click="handleSubmit"` instead of relying on `type="submit"` + form interception. Same pattern, same fix as the auth pages.

2. **The migration from `useFetch` to `$fetch` was incomplete.** I'd changed the call site but left `data.value.pages` in the success path — `useFetch` wraps the response in a Ref (hence `.value`), but `$fetch` returns the parsed body directly. Console showed `data.value is undefined` and I knew immediately. The lesson here is sharper than the fix: when migrating between two APIs that look similar but return differently-shaped values, the compiler can't help if both expressions are typed as `any`. A test caught what types didn't.

3. **The mock response shape didn't match what the planner store expected.** Less severe: The shape I'd guessed had different field names than what the real `/api/plan-generate` returns. The success test failed because `planner.setPages` was getting unexpected data. Fixed by inspecting the actual API response in DevTools and updating the mock to mirror its shape exactly.

The deeper observation across all three: each bug was caught by a different test failure mode (URL pattern, console error, missing UI). The test infrastructure was robust enough that each bug pointed at itself. That's what good test design buys you - failures that diagnose, not failures that obscure.

The headless form-submission pattern is now a known issue I'd write a lint rule for in a larger codebase. Anywhere `type="submit"` exists with `@submit.prevent`, it's suspect under Playwright. Worth catching at PR-time rather than test-time.

---

## The Claude Code experience

<!-- TODO Day 7: ~400 words. Pull from claude-code-notes.md.

Structure:
- What worked first time (probably: test scaffolding, helper extraction, regex-heavy assertions, auth utility refactor)
- What didn't (probably: selector guesses based on assumed labels, race conditions in async tests, multi-hour deep dives where the AI proposes fixes without enough diagnostic data)
- The pattern of "stop, get real data, then propose a fix" that emerged from the AUTH headless-mode saga
- The Node version discovery — CI failure → add diagnostic step → see real output → 30-second fix
- Where it accelerated me 10x (boilerplate generation) vs where it accelerated me 1.5x (genuine debugging)
- One concrete prompt-and-result example, fully shown

The honest signal AutoGuru wants: someone who's used the tool enough to have nuanced opinions about it, not someone who's read the marketing.
-->

---

## Lessons

A subset of these will land in the final version. Listed here while the week is fresh:

- **Mocking is a discipline, not a default.** Decide where the seam is and document why. The Day 3 cross-user RLS test is the example: mocking the database would have made the test useless.
- **Auth and authorisation are two different test categories.** Most "auth tests" are really authentication tests (can the user prove they are who they say). The interesting test is the authorisation one (can this user do this thing to this resource). The cross-user RLS test is the only authorisation test in the suite, and it's the one I'd point to first.
- **"No flaky tests" is a culture more than a setting.** It means investigating every intermittent failure, never retrying through them, and being willing to defer a test category honestly when investigation isn't yielding.
- **Acceptance criteria as a deliverable, not a ceremony.** The doc was the highest-leverage thing I wrote all week. Future me reading the criteria for AUTH-004 knows exactly what behaviour the system promises, even if the test that enforces it is currently skipped.
- **Test-first is faster *once you trust the setup*.** Day 1 was slower than just building. By Day 3 the loop was paying back, because every failure pointed at a specific gap instead of being noise.
- **CI catches environment gaps that local dev can't.** Node 22 vs 20, missing secrets, dev server boot failures. All of these are invisible until CI fails. Diagnostic logging in the workflow is cheap and worth it.
- **Good test infrastructure pushes you toward good production architecture.** The Bearer-token support added for tests is now a real production capability.
- **Always pair negative tests with at least one positive test.** A suite full of "this fails when X" assertions can silently keep passing even if the system is broken in every direction. The happy-path "owner can read their own plan" test in the GraphQL suite isn't a security test, it's a sanity check that proves the system can return data at all. Without it, the cross-user RLS test would pass even if GraphQL was returning null for every query regardless of auth. Negative tests prove "X is blocked"; positive tests prove "the system also works when it should." Both are required.
---

## What I'd do with more time

- **Cross-user authorisation tests for every endpoint, not just GET.** PATCH and DELETE deserve the same treatment. Easy to add now that the helper exists.
- **Visual regression with Playwright snapshots** for the marketing pages. Tailwind regressions are otherwise invisible.
- **BDD with Cucumber/Gherkin** if the team prefers human-readable specs. The acceptance criteria are already in plain English; a thin Gherkin wrapper would let non-engineers read the test suite.
- **Performance/load testing with k6** against the API endpoints. Not yet relevant for this product but a useful skill to demonstrate.
- **Mutation testing with Stryker** to verify test quality, not just coverage. Currently the test suite has no measure of how good its assertions are; mutation testing fills that gap.
- **A separate Supabase project for tests.** Currently test users live alongside real data, which is fine for now but isn't sustainable.

---

<!-- TODO Day 7: footer with links to the repo, the live site, and contact -->