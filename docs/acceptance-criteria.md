# Acceptance Criteria

## AUTH-001: Signup with email and password

**As a** visitor
**I want to** create an account with my email and a password
**So that** I can save plans I generate from the AI planner.

### Criteria

- Visitor visits `/signup`, sees an email field, password field, and Sign Up button.
- Submitting valid credentials creates an account and redirects to `/dashboard`.
- The dashboard shows the user's email in a header element.
- Submitting an invalid email format shows a validation error inline; the form does not submit.
- Submitting a password shorter than 8 characters shows a validation error inline; the form does not submit.
- Submitting an email already registered shows a "this email is already in use" error returned from the server.

## AUTH-002: Login

**As a** returning visitor
**I want to** log in with my email and password
**So that** I can access my saved plans.

### Criteria

- Visitor visits `/login`, sees email field, password field, and Log In button.
- Valid credentials log the user in and redirect to `/dashboard`.
- Invalid credentials show "invalid email or password" without revealing whether the email exists.
- A logged-in user visiting `/login` is redirected to `/dashboard`.

## AUTH-003: Logout

**As a** logged-in user
**I want to** log out
**So that** my session ends.

### Criteria

- A Log Out button is visible in the dashboard header when logged in.
- Clicking it ends the session and redirects to `/`.
- After logout, visiting `/dashboard` redirects to `/login`.

## AUTH-004: Protected route

**As the** application
**I want to** prevent unauthenticated access to user-specific pages
**So that** plans cannot be viewed without authentication.

### Criteria

- An unauthenticated visitor visiting `/dashboard` is redirected to `/login`.
- After logging in, the user is redirected back to `/dashboard` (the originally requested page).