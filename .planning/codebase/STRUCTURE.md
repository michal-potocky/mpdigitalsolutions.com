# Codebase Structure

**Analysis Date:** 2026-01-23

## Directory Layout

```
mpdigitalsolutions/
├── components/          # React section components
├── pages/               # Full-page components (legal pages)
├── public/              # Static assets (images, etc.)
├── dist/                # Production build output
├── .planning/           # GSD planning artifacts
├── .claude/             # Claude Code session data
├── .git/                # Git repository
├── App.tsx              # Main app component with router
├── index.tsx            # React entry point
├── index.html           # HTML host document
├── content.ts           # Centralized content (EN/SK translations)
├── types.ts             # TypeScript interfaces
├── vite.config.ts       # Vite build configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Dependencies
├── package-lock.json    # Locked dependency versions
├── CLAUDE.md            # Project-specific instructions
├── PRD.md               # Product requirements document
├── README.md            # Project readme
└── .gitignore           # Git ignore rules
```

## Directory Purposes

**components/:**
- Purpose: Reusable React section components for homepage
- Contains: .tsx files, each exports single React FC
- Key files: `Header.tsx`, `Hero.tsx`, `ContactForm.tsx`, `FAQ.tsx`

**pages/:**
- Purpose: Full-page layouts for routes outside homepage
- Contains: Legal/policy pages with independent layouts
- Key files: `PrivacyPolicy.tsx`, `TermsOfService.tsx`

**public/:**
- Purpose: Static assets served as-is by Vite dev server
- Contains: Images, favicon, fonts, etc.
- Committed: Yes

**dist/:**
- Purpose: Build artifacts from `npm run build`
- Contains: Bundled HTML, JS, CSS, assets
- Committed: No (in .gitignore)

**.planning/codebase/:**
- Purpose: GSD mapping documents (this analysis)
- Contains: ARCHITECTURE.md, STRUCTURE.md, etc.
- Committed: Yes

## Key File Locations

**Entry Points:**
- `index.html`: Static HTML host, Tailwind CDN, defines root div
- `index.tsx`: React DOM mount point, error handling
- `App.tsx`: Router setup, state management, route definitions

**Configuration:**
- `vite.config.ts`: Build tool config, dev server port, environment variables
- `tsconfig.json`: TypeScript compiler options
- `package.json`: Dependencies and build scripts
- `index.html`: Tailwind configuration, fonts, global styles

**Core Logic:**
- `App.tsx`: Router (BrowserRouter, Routes), language state, HomePage composition
- `content.ts`: All website copy organized by language and section
- `types.ts`: TypeScript definitions for Content and Language

**Presentation - Components:**
- `components/Header.tsx`: Navigation, language toggle, mobile menu
- `components/Hero.tsx`: Main headline section with CTA buttons
- `components/Proof.tsx`: Social proof / expectations section
- `components/Technologies.tsx`: Tech stack display
- `components/UseCases.tsx`: Grid of use case cards
- `components/HowItWorks.tsx`: Process/phase breakdown
- `components/FAQ.tsx`: Expandable FAQ items
- `components/ContactForm.tsx`: Lead capture form with success state
- `components/Footer.tsx`: Footer with links and copyright
- `components/Services.tsx`: Service offerings (if used)

**Presentation - Pages:**
- `pages/PrivacyPolicy.tsx`: Privacy policy full page
- `pages/TermsOfService.tsx`: Terms of service full page

**Testing:**
- None detected

## Naming Conventions

**Files:**
- Components: PascalCase (e.g., `Header.tsx`, `ContactForm.tsx`)
- Content/Types: camelCase (e.g., `content.ts`, `types.ts`)
- Config: camelCase or dot notation (e.g., `vite.config.ts`, `tsconfig.json`)
- Markdown docs: UPPERCASE (e.g., `README.md`, `CLAUDE.md`)

**Directories:**
- All lowercase plural or descriptive (e.g., `components/`, `pages/`, `public/`, `dist/`)

**React Components:**
- Export as default: `export default Header;`
- Define interfaces above component: `interface HeaderProps { ... }`
- Use React.FC<Props> type: `const Header: React.FC<HeaderProps> = ({ ... }) => { ... }`

**CSS Classes:**
- Tailwind utility classes exclusively
- No CSS files; all styling via className attribute
- Color system: `text-brand`, `bg-black-900`, `text-bone`
- Spacing via Tailwind: `px-8 py-4`, `mb-6`, `gap-4`

## Where to Add New Code

**New Section Component (e.g., Testimonials):**
- Implementation: `components/Testimonials.tsx`
- Add interface to `types.ts` under Content (e.g., `testimonials: { ... }`)
- Add content object to both en/sk sections in `content.ts`
- Import in `App.tsx` and place in `HomePage` render order
- Type: `const Testimonials: React.FC<{ content: Content['testimonials'] }>` pattern

**New Page Route (e.g., Contact page):**
- Implementation: `pages/Contact.tsx`
- Add route in `App.tsx` Routes element
- Use existing page patterns from PrivacyPolicy/TermsOfService
- Import Footer and create consistent header

**New Utility Function (e.g., formatting):**
- Location: `utils.ts` (create if doesn't exist) or within component if single-use
- Pattern: Named exports, simple pure functions
- Example: `export const formatDate = (date: string) => { ... }`

**Styling Updates:**
- Update in `index.html` Tailwind config section if adding colors/fonts
- Update className attributes in components for layout changes
- No separate CSS files; maintain Tailwind-only approach

**Content Changes (Copy/Translations):**
- Location: `content.ts`
- Add to appropriate language section ('en' or 'sk')
- Update `types.ts` Content interface if adding new fields
- Maintain language parity (add to both en and sk)

## Special Directories

**node_modules/:**
- Purpose: npm installed dependencies
- Generated: Yes (npm install)
- Committed: No

**dist/:**
- Purpose: Production build output
- Generated: Yes (npm run build via Vite)
- Committed: No

**.git/:**
- Purpose: Git version control repository
- Generated: Yes (git init or clone)
- Committed: N/A (not a file, it's the version control system)

## Build & Development

**Development Server:**
- Command: `npm run dev`
- Port: 3000 (from vite.config.ts)
- Host: 0.0.0.0 (accessible on network)
- Hot Module Replacement (HMR) enabled by default

**Production Build:**
- Command: `npm run build`
- Output: `dist/` directory
- Process: Vite bundles TypeScript, JSX, CSS
- Entry: `index.html` processed, imports from `index.tsx`

**Environment Variables:**
- Load from `.env.local` (git ignored)
- Vite exposes via `import.meta.env` or define in vite.config.ts
- Current usage: `GEMINI_API_KEY` defined in vite.config.ts (unused in current app)

---

*Structure analysis: 2026-01-23*
