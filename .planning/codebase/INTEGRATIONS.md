# External Integrations

**Analysis Date:** 2026-01-23

## APIs & External Services

**Google Gemini API:**
- Service: Google Generative AI
- What it's used for: Configured in `vite.config.ts` for potential AI capabilities
- SDK/Client: Native fetch (not yet integrated in component code)
- Auth: `GEMINI_API_KEY` environment variable stored in `.env.local`
- Status: Configured but not actively used in current UI components

## Data Storage

**Databases:**
- Not detected - No database connection or ORM present

**File Storage:**
- Not detected - Application is static content only
- Local storage not currently in use

**Caching:**
- Not detected - Client-side caching only via browser cache

## Authentication & Identity

**Auth Provider:**
- Not detected - No authentication system implemented
- Application is public marketing site without user login

## Contact Form

**Current Implementation:**
- Client-side only form handling in `components/ContactForm.tsx`
- No backend submission endpoint
- Form state managed locally with React hooks
- Success state displays after 1500ms timeout (simulated submission)
- No actual email or CRM integration

## Monitoring & Observability

**Error Tracking:**
- Not detected - No error tracking service configured

**Logs:**
- Console logging only (browser console)
- No centralized logging service

## CI/CD & Deployment

**Hosting:**
- Not detected from codebase - Configured for static file hosting
- Deployment model: Single Page Application (SPA)

**CI Pipeline:**
- Not detected - No CI/CD configuration files present

**Build Commands:**
```bash
npm run dev      # Start Vite dev server on port 3000
npm run build    # Create production build in dist/
npm run preview  # Preview production build locally
```

## Environment Configuration

**Required env vars:**
- `GEMINI_API_KEY` - Google Gemini API key (currently unused in components)

**Secrets location:**
- `.env.local` - Local development secrets
- Not committed to git (in `.gitignore`)

## CDN Resources

**Loaded via CDN:**
- Tailwind CSS - Via CDN URL in `index.html`
- React, React-DOM, Lucide icons - Via esm.sh import map in `index.html`

## Webhooks & Callbacks

**Incoming:**
- Not implemented - No webhook endpoints

**Outgoing:**
- Not implemented - No external service callbacks

## Page Resources

**SEO/Metadata:**
- `public/robots.txt` - SEO robot configuration
- `public/llms.txt` - LLM metadata file

**Metadata:**
- `metadata.json` - Project metadata file (minimal configuration)

---

*Integration audit: 2026-01-23*
