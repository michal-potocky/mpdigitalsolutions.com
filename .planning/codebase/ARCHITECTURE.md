# Architecture

**Analysis Date:** 2026-01-23

## Pattern Overview

**Overall:** Single Page Application (SPA) with React Router-based client-side routing

**Key Characteristics:**
- Content-driven marketing site with centralized language/i18n state
- Section-based component architecture (Hero, Proof, Technologies, etc.)
- Decoupled content from presentation via `content.ts`
- Client-side rendering with Vite build system
- Responsive design with Tailwind CSS utility-first styling

## Layers

**Presentation Layer:**
- Purpose: React components rendering UI sections and interactive elements
- Location: `components/`, `pages/`
- Contains: React FC components accepting typed props from `types.ts`
- Depends on: `types.ts`, `content.ts`, lucide-react icons
- Used by: `App.tsx` (main router), HomePage composite

**Content/Data Layer:**
- Purpose: Centralized, language-aware copy and configuration
- Location: `content.ts`
- Contains: Structured content objects keyed by language ('en', 'sk')
- Depends on: `types.ts` for type safety
- Used by: All presentation components via props

**Type Layer:**
- Purpose: TypeScript interface definitions for type safety
- Location: `types.ts`
- Contains: `Language` union type, `Content` interface with nested structures
- Depends on: Nothing (no circular dependencies)
- Used by: All components, App.tsx, content.ts

**Routing Layer:**
- Purpose: Client-side navigation between pages
- Location: `App.tsx` (BrowserRouter setup), individual pages in `pages/`
- Contains: Route definitions, scroll-to-section handlers
- Depends on: react-router-dom, content objects
- Used by: Entry point through React's rendering pipeline

**Entry Point:**
- Location: `index.tsx` (mounts App to DOM), `index.html` (static host)
- Purpose: Bootstrap React application, attach to DOM root element

## Data Flow

**Page Navigation Flow:**

1. User loads site or clicks navigation link
2. BrowserRouter in `App.tsx` matches route to component
3. App component holds language state (`lang`, `setLang`)
4. Selected language pulls matching content from `content.ts`
5. Content object passed as props to routed component
6. Component renders using typed Content properties

**Language Switching Flow:**

1. User clicks language toggle in Header component
2. Calls `setLang('en' | 'sk')` passed from App.tsx
3. App re-renders with new language context
4. All child components receive new content object
5. Components re-render with translated copy

**Scroll Navigation Flow:**

1. User clicks header nav link or CTA button
2. Component calls `scrollToSection(id)` or similar
3. DOM element with matching ID found via `document.getElementById()`
4. Element scrolls into view with smooth behavior
5. Mobile menu closes on navigation (Header pattern)

**State Management:**

- Simple React hooks (useState)
- Language state managed at App level
- Local component state for interactions (menu open, form submit, FAQ expand, etc.)
- No external state management needed (no Redux, Zustand, etc.)

## Key Abstractions

**Content Abstraction:**
- Purpose: Decouple copy from components, enable i18n
- Examples: `content.ts` (source of truth), `types.ts` (Content interface)
- Pattern: Language-indexed record structure with nested objects matching component needs

**Component Props Pattern:**
- Purpose: Type-safe, minimal component interfaces
- Examples: `HeaderProps` accepts only `content.nav` subset, `lang`, `setLang`
- Pattern: Extract minimal required content slice, pass as typed prop interface

**Section Component Pattern:**
- Purpose: Reusable section structure (padding, grid, borders)
- Examples: Hero, Proof, UseCases, Technologies, HowItWorks, FAQ, ContactForm, Footer
- Pattern: Each wraps content in section element with consistent styling, accepts Content subset

**Scroll-to-Section Pattern:**
- Purpose: Single-page navigation without full page reload
- Examples: Header nav links, CTA buttons
- Pattern: `document.getElementById(id).scrollIntoView({ behavior: 'smooth' })`

## Entry Points

**Root Entry Point:**
- Location: `index.html`
- Triggers: Browser loads URL or navigates to `/`
- Responsibilities: Serve static HTML with Tailwind CDN, define DOM root element

**React Entry Point:**
- Location: `index.tsx`
- Triggers: Browser parses `<script type="module" src="/index.tsx">`
- Responsibilities: Create React root, mount App component, error handling

**App Component:**
- Location: `App.tsx`
- Triggers: React render after mount
- Responsibilities: Set up BrowserRouter, manage language state, define routes, compose HomePage

**Routes:**
- `/`: HomePage with full site sections
- `/privacy`: PrivacyPolicy page (separate route)
- `/terms`: TermsOfService page (separate route)

## Error Handling

**Strategy:** Minimal defensive coding; assumes valid data structure

**Patterns:**
- Root element validation in `index.tsx`: throws Error if `#root` not found
- Optional chaining in scroll handlers: `document.getElementById(id)?.scrollIntoView()`
- No try-catch blocks; no error boundaries defined

**Form State:**
- ContactForm uses optimistic UI (fake 1500ms delay before success state)
- No actual API calls; success message hardcoded
- No validation error handling beyond HTML5 required attribute

## Cross-Cutting Concerns

**Logging:** None - no logging infrastructure detected

**Validation:**
- HTML5 form validation (required attributes on form inputs)
- TypeScript compile-time type checking
- No runtime validation libraries

**Authentication:** None - static marketing site, no auth required

**Styling:**
- Tailwind CSS via CDN in `index.html`
- Custom color palette defined in Tailwind config (black, bone, brand)
- Custom font families (Inter sans, monospace)
- Custom background patterns (grid-white, grid-black)
- All styles inline via className utilities

**Responsive Design:**
- Mobile-first approach with md:/lg: breakpoints
- Distinct layouts for mobile vs desktop (Header menu, grid layouts)
- Tailwind responsive prefixes throughout

**Accessibility:**
- Semantic HTML (section, nav, main, header, footer)
- Link elements with proper href handling
- Form labels with proper htmlFor (inferred from input context)
- No ARIA attributes detected; basic semantic structure only

---

*Architecture analysis: 2026-01-23*
