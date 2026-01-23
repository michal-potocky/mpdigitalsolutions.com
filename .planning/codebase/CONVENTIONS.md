# Coding Conventions

**Analysis Date:** 2026-01-23

## Naming Patterns

**Files:**
- PascalCase for React components: `Header.tsx`, `ContactForm.tsx`, `FAQ.tsx`
- camelCase for utility/non-component files: `content.ts`, `types.ts`, `index.tsx`
- Each component in its own file in `components/` or `pages/` directory

**Functions:**
- Component names: PascalCase (`Header`, `Footer`, `ContactForm`)
- Event handlers: camelCase with `on` or `handle` prefix: `handleSubmit`, `toggleMenu`, `scrollToSection`, `scrollToContact`, `toggle`
- State setters: `setState` convention with initial state in `useState`: `setIsMenuOpen`, `setLang`, `setIsSubmitting`, `setIsSuccess`, `setOpenIndex`
- Utility/helper functions: camelCase: `renderHeadline`, `scrollIntoView`, `scrollTo`

**Variables:**
- State variables: camelCase: `isMenuOpen`, `lang`, `isSubmitting`, `isSuccess`, `openIndex`
- Props interfaces: descriptive PascalCase: `HeaderProps`, `ContactFormProps`, `FAQProps`, `UseCasesProps`
- Const declarations: camelCase: `content`, `element`, `parts`
- Loop indices: single letter `i`, `idx`: `content.items.map((item, idx) => ...)`

**Types:**
- Interface names: PascalCase with `Props` suffix for component props: `HeaderProps`, `FooterProps`, `HowItWorksProps`, `ServicesProps`, `PrivacyPolicyProps`
- Type unions: `Language = 'en' | 'sk'`
- Data types from content: Nested object structure in `Content` interface with semantic naming: `Content['hero']`, `Content['nav']`, `Content['contact']`

## Code Style

**Formatting:**
- No explicit formatter configured (Vite default)
- Lines are reasonably short, avoiding excessive nesting
- Spacing: 2-space indentation (standard React/TypeScript)
- Consistent spacing around operators and in JSX

**Linting:**
- No ESLint configuration found
- Code follows standard React conventions without formal linting rules
- TypeScript strict mode enabled via `tsconfig.json`

## Import Organization

**Order:**
1. React imports: `import React, { useState, useEffect } from 'react'`
2. Third-party libraries: `import { Menu, X, Globe } from 'lucide-react'`, `import { BrowserRouter, Routes } from 'react-router-dom'`
3. Local types: `import { Content, Language } from '../types'`
4. Local components: `import Header from './components/Header'`

**Path Aliases:**
- `@/` alias configured in `tsconfig.json` pointing to project root: `"@/*": ["./*"]`
- Used in `vite.config.ts` for module resolution

**Example from `App.tsx`:**
```typescript
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { content as contentDictionary } from './content';
import { Language } from './types';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
```

## Error Handling

**Patterns:**
- Props validation via TypeScript interfaces (no runtime validation)
- Element existence check before DOM operations: `if (element) { element.scrollIntoView(...) }`
- Root element validation in entry point: `if (!rootElement) { throw new Error(...) }`
- Form submission wrapped in try-implied setTimeout for simulation: `setIsSubmitting(true); setTimeout(() => { setIsSubmitting(false); }, 1500)`
- Graceful fallback for missing elements: `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })`

**No explicit error boundaries or formal error handling strategy** - application is a marketing site with minimal error-prone operations.

## Logging

**Framework:** None - no logging framework used

**Patterns:**
- No logging present in codebase
- Application is frontend-only marketing site with minimal logging needs
- State changes trigger re-renders but are not logged

## Comments

**When to Comment:**
- Section labels in layouts: `{/* Logo */}`, `{/* Desktop Nav */}`, `{/* Mobile Menu Button */}`
- Complex logic explanations: `// Parse headline to highlight text in [brackets] with brand color (brackets visible)`
- Grouped components: `{/* Main Content */}`, `{/* Left Content */}`, `{/* Right Form */}`
- Phase/section dividers: `{/* Phase 1: Analysis */}`, `{/* Phase 2: Development */}`

**JSDoc/TSDoc:**
- Not used in the codebase
- Minimal documentation needed due to clear naming and simple function signatures

**Comment style:** Inline comments for JSX sections use curly braces: `{/* Comment */}`

## Function Design

**Size:**
- Small, focused components (typically 40-100 lines)
- Components map to distinct UI sections: `Header`, `Hero`, `ContactForm`, `FAQ`, `Footer`
- No monolithic component files

**Parameters:**
- React components use single `Props` interface as parameter:
```typescript
const Header: React.FC<HeaderProps> = ({ content, lang, setLang }) => {
  // implementation
};
```
- Destructuring used in function signature
- Props passed as single object parameter, never as multiple params

**Return Values:**
- React components return JSX.Element (implicit via React.FC type)
- Utility functions return specific values: `string`, `void`, `null`
- Scroll helpers return `undefined`: `scrollToSection(id: string) => { ... }`
- Conditional rendering returns JSX or null: `if (isSuccess) { return (...) }`

## Module Design

**Exports:**
- Default export for all components: `export default Header`
- No named exports from component files
- Content dictionary as default export: `export default (or const content = {...})`
- Types exported as named exports: `export type Language = ...`, `export interface Content { ... }`

**Barrel Files:**
- Not used - each component imports directly from its file
- Example: `import Header from './components/Header'` (not from barrel)

## Component Patterns

**Functional Components:**
- All components are functional components with hooks
- Type annotations: `const ComponentName: React.FC<PropsInterface> = (props) => { }`
- Hooks used: `useState`, `useEffect`, `useLocation`

**Props Drilling:**
- Heavy props drilling for `content` object through component tree
- Language switching passed through props: `lang`, `setLang`
- Alternative approach in development: could use Context API for `language` and `content`

**Conditional Rendering:**
- Ternary operators for single conditions: `{isMenuOpen ? <X /> : <Menu />}`
- Early returns for state branches: `if (isSuccess) { return (...) }`
- Template string conditions in className: `${primary ? 'class' : 'class'}`

**Styling:**
- Tailwind CSS for all styling
- No CSS files in codebase
- Inline className strings with conditional classes
- Grid layouts: `grid md:grid-cols-2 lg:grid-cols-12`
- Responsive breakpoints: `md:`, `lg:`, `sm:`
- Custom colors via config: `bg-brand`, `bg-bone`, `bg-black-900`, `text-brand-dark`

## Content Management

**Content Structure:**
- All text content centralized in `content.ts`
- Imported as `contentDictionary` with language-based selection
- Usage pattern: `const content = contentDictionary[lang]`
- Language switching: `lang === 'en' ? 'sk' : 'en'`
- Content passed to components via props: `<Header content={content.nav} />`

---

*Convention analysis: 2026-01-23*
