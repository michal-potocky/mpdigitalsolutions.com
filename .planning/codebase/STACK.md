# Technology Stack

**Analysis Date:** 2026-01-23

## Languages

**Primary:**
- TypeScript 5.8.2 - Application source code (`.tsx`, `.ts` files)
- JavaScript - Generated during build

**Secondary:**
- HTML - Entry point
- CSS - Styling via Tailwind CSS CDN

## Runtime

**Environment:**
- Node.js - Development and build environment
- Browser (modern, ES2022 compatible) - Runtime

**Package Manager:**
- npm 10.x - Dependency management
- Lockfile: `package-lock.json` present

## Frameworks

**Core:**
- React 19.2.3 - UI library and component framework
- React Router DOM 7.12.0 - Client-side routing
- Vite 6.2.0 - Build tool and development server

**Styling:**
- Tailwind CSS (CDN via index.html) - Utility-first CSS framework
- Custom Tailwind config via `<script>` in `index.html` with theme extensions

**UI Components:**
- Lucide React 0.562.0 - Icon library for React

## Key Dependencies

**Critical:**
- react (19.2.3) - Core React library
- react-dom (19.2.3) - DOM rendering for React
- react-router-dom (7.12.0) - Client-side routing and navigation

**Build/Development:**
- @vitejs/plugin-react (5.0.0) - Vite plugin for React support
- typescript (5.8.2) - TypeScript compiler

**Development Types:**
- @types/node (22.14.0) - TypeScript definitions for Node.js APIs

## Configuration

**Environment:**
- `.env.local` - Local environment variables
- `GEMINI_API_KEY` - Google Gemini API key (loaded via Vite config)
- Configured in `vite.config.ts` with `loadEnv()`

**Build:**
- `vite.config.ts` - Vite configuration with React plugin and path aliases
- `tsconfig.json` - TypeScript compiler options targeting ES2022
- `index.html` - HTML entry point with inline Tailwind config and custom theme

**Path Aliases:**
- `@/*` resolves to project root for imports

## Platform Requirements

**Development:**
- Node.js and npm installed
- Modern browser with ES2022 support
- Port 3000 (Vite dev server default)

**Production:**
- Static file hosting (any web server or CDN)
- Single Page Application (SPA) deployment model
- No server-side runtime required

## Build Output

**Development:**
- Served from memory via Vite dev server
- Port: 3000
- Host: 0.0.0.0

**Production:**
- Output directory: `dist/`
- Static assets (HTML, CSS, JS bundles)
- Optimized for deployment to web servers or CDNs

---

*Stack analysis: 2026-01-23*
