# Codebase Concerns

**Analysis Date:** 2026-01-23

## Tech Debt

**Form Data Not Persisted:**
- Issue: Contact form submission is fake - uses `setTimeout(1500)` to simulate submission, data is never sent to a backend or service.
- Files: `components/ContactForm.tsx` (lines 13-20)
- Impact: Form appears to submit successfully but no leads are actually captured. All form data (name, email, company, interest) is lost. This defeats the primary business goal of lead generation.
- Fix approach: Integrate with backend API endpoint or third-party service (email, CRM, webhook) to persist form submissions. Implement proper error handling and validation feedback.

**Missing Form State Management:**
- Issue: Form inputs are uncontrolled - no React state binds to input values. Form data cannot be captured programmatically.
- Files: `components/ContactForm.tsx` (lines 71, 75, 82, 111)
- Impact: Cannot validate input before submission, cannot re-populate form on errors, cannot implement auto-save or progress tracking.
- Fix approach: Convert to controlled inputs with `useState` for each field. Add validation logic and error state management.

**API Key Exposed in Build Config:**
- Issue: `GEMINI_API_KEY` is injected into Vite config via `process.env` and exposed to client-side JavaScript bundle.
- Files: `vite.config.ts` (lines 14-15), `.env.local` (line 1)
- Impact: API key becomes part of public bundle, accessible to anyone inspecting browser resources. Creates security vulnerability and enables API abuse. .env.local is in `.gitignore` but dev builds still expose it.
- Fix approach: Remove API key from `define` in vite config. If API integration needed, route through backend-only endpoints with server-to-server auth. Use environment variables only for server-side code.

**No Linting or Code Quality Tooling:**
- Issue: No ESLint, Prettier, or biome configuration found in project.
- Files: Project root (missing `.eslintrc*`, `.prettierrc`, `eslint.config.*`)
- Impact: No enforcement of naming conventions, code style consistency, or TypeScript strictness. Contributors can write code in different styles, increasing maintenance burden and introducing subtle bugs.
- Fix approach: Add ESLint with TypeScript parser and Prettier config. Configure strict TypeScript rules (`strict: true`, `noImplicitAny`). Add pre-commit hooks to enforce formatting.

**Missing Test Coverage:**
- Issue: No test files found (.spec, .test). Zero automated testing infrastructure.
- Files: Project-wide (no `*.test.ts*` or `*.spec.ts*` files)
- Impact: No way to catch regressions, verify form behavior, validate content structure. Manual testing only. Risk of breaking features during refactors.
- Fix approach: Add Jest or Vitest with React Testing Library. Start with critical paths: form submission, language switching, navigation scroll behavior. Aim for 70%+ coverage on components.

## Known Bugs

**Form Field Not Captured on Submit:**
- Symptoms: Checkbox consent field and textarea message are rendered but values never accessed in `handleSubmit`.
- Files: `components/ContactForm.tsx` (lines 111-121, 13-20)
- Trigger: Any form submission - data loss is guaranteed.
- Workaround: None - form is currently non-functional. Data collection requires backend integration.

**Language State Resets on Route Change:**
- Symptoms: User selects Slovak language (SK), navigates to /privacy or /terms, language may not persist across page transitions.
- Files: `App.tsx` (lines 59-61), `Header.tsx` (lines 58, 70)
- Trigger: Language is stored in local `useState`, not persisted to localStorage or URL param.
- Workaround: Implement localStorage persistence for language choice. Or pass language as URL query param.

**Mobile Menu Doesn't Close on Link Click:**
- Symptoms: On mobile, clicking a nav link scrolls to section but menu overlay may not dismiss cleanly if scroll behavior overlaps state update.
- Files: `components/Header.tsx` (lines 16-22, 86-97)
- Trigger: Mobile viewport, clicking navigation link before scroll completes.
- Workaround: The `setIsMenuOpen(false)` is called after `scrollIntoView()`, but if user clicks multiple items quickly, state updates can race.

## Security Considerations

**No Input Validation or Sanitization:**
- Risk: Form accepts any string input for name, email, company without validation. Email field only has `type="email"` HTML validation (client-side only).
- Files: `components/ContactForm.tsx` (lines 71, 75, 82, 111)
- Current mitigation: HTML5 `required` and `type="email"` attributes provide basic browser validation.
- Recommendations:
  - Add client-side validation using Zod or Yup schemas
  - Implement server-side validation for all inputs
  - Sanitize/escape any user input before display or storage
  - Add rate limiting on form submission if backend is added

**Privacy Policy and Terms Need Implementation Verification:**
- Risk: Legal pages claim "Secure Data", "NDA Available", and GDPR compliance, but form data isn't secured or encrypted.
- Files: `components/ContactForm.tsx` (line 56, 58), `content.ts` (privacy/terms content)
- Current mitigation: Placeholder promises in content - not yet implemented in code.
- Recommendations:
  - Encrypt form submissions if personally identifiable data is collected
  - Implement actual data retention policies matching legal claims
  - Add DPO contact mechanisms
  - Consider adding encryption at transport layer (HTTPS enforced, HSTS headers)

**Missing HTTPS/Security Headers:**
- Risk: Website likely doesn't enforce HTTPS or security headers in production.
- Files: Deployment config (not found in repo - assumed missing)
- Current mitigation: None detected in codebase.
- Recommendations:
  - Enforce HTTPS redirect
  - Add CSP (Content-Security-Policy) headers
  - Add X-Frame-Options, X-Content-Type-Options, Referrer-Policy headers
  - Enable HSTS

## Performance Bottlenecks

**Unoptimized Content Bundle Size:**
- Problem: `content.ts` is 537 lines (largest file in codebase) and contains ALL localized copy for both EN and SK in single object.
- Files: `content.ts` (entire file)
- Cause: Both language bundles shipped to browser regardless of selected language. No code splitting by language.
- Improvement path:
  - Split content.ts into `content.en.ts` and `content.sk.ts`
  - Use dynamic imports to load only selected language: `import(`./${lang}.ts`)`
  - Or implement lazy loading of language bundles

**No Component Memoization:**
- Problem: Components re-render on every parent state change even if props unchanged.
- Files: All component files (no `React.memo()` or `useMemo()` used)
- Cause: Header language toggle updates state in App.tsx, causing all 10+ components to re-render unnecessarily.
- Improvement path: Wrap components with `React.memo()`. Use `useCallback()` for functions passed as props. Consider moving language state to Context API to prevent prop drilling.

**Document Queries on Every Render:**
- Problem: `scrollToSection()` calls `document.getElementById()` on every click and scroll behavior - repeated DOM queries.
- Files: `components/Header.tsx` (line 17), `components/Hero.tsx`, `components/HowItWorks.tsx`
- Cause: IDs are looked up at runtime instead of caching or using refs.
- Improvement path: Use `useRef()` to cache element references, or implement scroll behavior with react-router's anchor hash support.

**Large Type Definitions with Deeply Nested Structure:**
- Problem: `types.ts` has 144 lines of deeply nested interfaces (3-5 levels deep) for content structure.
- Files: `types.ts` (entire file, especially lines 18-144)
- Cause: Mirror of content.ts structure - brittle and verbose.
- Improvement path: Flatten content structure where possible. Consider JSON schema for content validation instead of interfaces.

## Fragile Areas

**ContactForm Component:**
- Files: `components/ContactForm.tsx` (138 lines)
- Why fragile:
  - Mixing presentation, state management, and form handling in single component
  - Multiple state variables (`isSubmitting`, `isSuccess`) with interdependencies
  - Form inputs not bound to state - data loss on re-mount
  - Success state switches entire UI rendering - no transition state for errors
  - No prop validation or error boundaries
- Safe modification: Break into subcomponents (FormFields, SuccessMessage). Extract form logic to custom hook. Add error state.
- Test coverage: Zero tests. No way to verify submit behavior or state transitions.

**Header Scroll-to-Section Logic:**
- Files: `components/Header.tsx` (lines 16-22, 43, 89-91)
- Why fragile:
  - Depends on exact ID matching in HTML: `scrollToSection('use-cases')` but section is `id="use-cases"` - works but brittle
  - Duplicate scroll logic across Header, Hero, HowItWorks, Services components
  - No validation that target section exists - silently fails
  - No error handling if element lookup returns null
- Safe modification: Extract scroll utility to separate file. Use centralized config for section IDs. Add try-catch.
- Test coverage: Zero tests for scroll behavior.

**Language State Management:**
- Files: `App.tsx` (lines 58-61), `Header.tsx` (lines 58, 70)
- Why fragile:
  - Global state in App.tsx component, passed via props to Header, then Header updates it
  - Not persisted - resets to 'en' on page refresh or hard reload
  - No Context API or state management library - prop drilling if app grows
  - Content dictionary lookup `content[lang]` assumes `lang` is valid - no fallback if corrupted
- Safe modification: Move to Context or localStorage. Add validation for language value.
- Test coverage: Zero tests for language switching persistence.

**Mobile Menu Overlay:**
- Files: `components/Header.tsx` (lines 86-97)
- Why fragile:
  - Creates absolutely positioned overlay only when `isMenuOpen` is true
  - No escape key handler to close menu (accessibility issue)
  - Menu doesn't close on outside click
  - z-index hardcoded to 50 - could be covered by other content
- Safe modification: Add useEffect for escape key, click-outside detection. Consider using Radix UI Dialog for proper menu patterns.
- Test coverage: Zero tests for menu interactions.

## Scaling Limits

**Content Management:**
- Current capacity: All copy hardcoded in content.ts as single 537-line object. Works for 2 languages, ~50 content strings.
- Limit: Adding 3rd language requires modifying central file. Adding metadata (image alt text, SEO, structured data) requires expanding types. No content versioning.
- Scaling path: Implement CMS (Contentful, Sanity, Strapi) to manage translations and metadata separately. Or move to JSON format with schema validation.

**Form Submission Pipeline:**
- Current capacity: Mock submission only. No backend infrastructure to handle form data.
- Limit: Cannot store leads, follow up, or generate audit results. Single-page app has no API integration framework.
- Scaling path: Add backend service (Node/Python/Go). Implement proper form backend with validation, storage (DB), and notification (email/webhook). Add CORS headers and rate limiting.

**Component Library:**
- Current capacity: 10 custom components, all style-independent (Tailwind only). No shared component library.
- Limit: Adding new pages/features requires duplicating styles and patterns. No design tokens or component variants.
- Scaling path: Extract shared components to library. Define design tokens in Tailwind config. Create Storybook for component documentation.

## Dependencies at Risk

**No Dependency Version Management:**
- Risk: `package.json` uses `^` semver ranges (caret), allowing minor version updates automatically.
- Impact: Transitive dependency updates could introduce breaking changes. No lock behavior.
- Migration plan: Enforce exact versions with `npm ci` in production builds. Use Dependabot for proactive updates and testing.

**React 19.2.3 (Recent Major Version):**
- Risk: React 19 is very recent (Feb 2025 cutoff), may have undiscovered issues. Limited real-world production usage.
- Impact: If critical bug found, upgrade path unclear. Community resources limited.
- Migration plan: Monitor React issues/discussions. Consider pinning to 19.2.x patch versions to delay major updates.

**Missing Production Deployment Config:**
- Risk: No `next.config.js`, `deploy.yml`, or Dockerfile found. Vite config doesn't specify output path or optimization for production.
- Impact: Unclear how to build/deploy. No asset optimization strategy (compression, minification, caching).
- Migration plan: Add explicit build output config. Create deployment guide. Consider adding Docker or serverless deployment config.

## Missing Critical Features

**No Form Persistence or Validation:**
- Problem: Users cannot submit form to capture leads. No error messages for invalid input.
- Blocks: Core business goal of lead generation.

**No SEO Implementation:**
- Problem: No meta tags, Open Graph, or structured data for search visibility.
- Blocks: Organic search traffic generation.

**No Analytics Tracking:**
- Problem: No way to measure form submissions, button clicks, or user engagement.
- Blocks: Understanding which sections convert, which messaging resonates with users.

**No Email Notification System:**
- Problem: No way to notify team of new lead submissions.
- Blocks: Timely follow-up required for business (currently promise is "within 1 business day").

## Test Coverage Gaps

**Form Submission Logic:**
- What's not tested: `handleSubmit()` function, state transitions (submitting → success), user interactions.
- Files: `components/ContactForm.tsx` (lines 13-20, 22-37)
- Risk: Submit behavior could break unnoticed. Success message may not appear. User feedback broken.
- Priority: High - core conversion path

**Language Switching:**
- What's not tested: Switching languages reloads all content. Content dictionary lookup. Persistence across routes.
- Files: `App.tsx`, `Header.tsx`
- Risk: Language toggle could fail or show wrong language. No validation of language value.
- Priority: High - multi-language is key feature

**Navigation/Scroll Behavior:**
- What's not tested: All scroll-to-section implementations (Header, Hero, HowItWorks). Edge cases (missing ID, rapid clicks).
- Files: `components/Header.tsx`, `components/Hero.tsx`, `components/HowItWorks.tsx`
- Risk: Navigation could silently fail if ID doesn't exist. Mobile menu could break on scroll.
- Priority: Medium - affects UX but less critical than form

**Mobile Responsiveness:**
- What's not tested: Layout breakpoints (sm, md, lg). Touch interactions. Mobile menu open/close.
- Files: All component files (Tailwind classes)
- Risk: Mobile experience broken without visual testing. Cannot catch CSS regressions.
- Priority: Medium - affects 50%+ of traffic

**Accessibility Compliance:**
- What's not tested: ARIA labels, keyboard navigation, color contrast, form labels. Screen reader experience.
- Files: All component files
- Risk: Violates WCAG 2.1 standards. Excludes users with disabilities. May cause legal issues.
- Priority: High - legal and ethical requirement

---

*Concerns audit: 2026-01-23*
