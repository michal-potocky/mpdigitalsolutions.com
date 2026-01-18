# PRD: MP Digital Solutions Website Improvements

## Repository

**Primary Repository:** https://github.com/mrblonde3/mp-ai-clone

Always use this repository for all git operations until instructed otherwise.

```bash
git push mrblonde main
```

---

## Executive Summary

Improve the mpdigitalsolutions.com website to better communicate AI automation services to small-medium businesses (SMB) and generate inbound leads through free audit call bookings. The target market is local Slovak businesses that can invest at least €1,000 in automation solutions without requiring complex enterprise architecture.

**Core Value Proposition:** Simple AI automations that save time and eliminate manual work for SMBs.

**MVP Goal:** Update website content to clearly communicate use cases, improve conversion flow, and support bilingual (SK/EN) audiences.

---

## Mission

Help small-medium businesses automate repetitive tasks using AI, starting with a free audit to identify opportunities and calculate ROI before any investment.

**Core Principles:**
1. Simplicity over complexity - no enterprise architecture
2. ROI-first approach - calculate benefit before cost
3. Local focus - start in Slovakia, expand later
4. Low barrier to entry - free audit to build trust

---

## Target Users

**Primary Persona:** Slovak SMB owner/manager
- Company size: 5-50 employees
- Budget: €1,000+ for automation projects
- Pain: Manual repetitive tasks eating up time
- Technical comfort: Uses Gmail, spreadsheets, maybe a CRM
- Decision maker: Can approve €1-5K spend without committee

**Industries:**
- Agencies & local services
- E-commerce & operations
- Real estate & sales
- Marketing agencies

---

## MVP Scope

### In Scope
- ✅ Update 4 use case cards with improved copy (EN + SK)
- ✅ Remove Timeline field from contact form
- ✅ Improve "Interested Topic" dropdown options in contact form
- ✅ Reorganize Technologies section to "We integrate with your tools" messaging
- ✅ Improve FAQ pricing answer (benefit-first calculation approach)
- ✅ All text changes localized to both EN and SK

### Out of Scope
- ❌ New pages (single landing page remains)
- ❌ Pricing display on website
- ❌ Testimonials section (future phase)
- ❌ Calendly/booking embed (keep contact form)
- ❌ Backend form integration (stays as mock submission)
- ❌ Re-enabling Services section

---

## User Stories

### US-001: Update Use Case Card - Lead Management
**Description:** As a visitor, I want to understand how lead management automation works so that I can see if it applies to my business.

**Content (EN):**
- **Sector:** Agencies & Local Services
- **Problem:** "After 5 minutes, chance of reaching a lead drops by 10x. 78% of customers buy from whoever responds first."
- **Solution:** "Form submission → AI qualifies → CRM entry → Team notified instantly"
- **Result:** "Every lead in CRM within seconds. Instant team notification."

**Acceptance Criteria:**
- [x] English content updated in `content.ts`
- [x] Slovak translation added in `content.ts`
- [x] Card displays correctly on website
- [x] Typecheck passes

---

### US-002: Update Use Case Card - Document Extraction
**Description:** As a visitor, I want to understand how document extraction works so that I can see if it solves my invoice processing pain.

**Content (EN):**
- **Sector:** E-commerce & Operations
- **Problem:** "Manually copying invoice data to accounting software."
- **Solution:** "AI reads PDF → Extracts vendor, items, amounts → Sends to your system"
- **Result:** "Invoices processed automatically. Manual entry eliminated."

**Acceptance Criteria:**
- [x] English content updated in `content.ts`
- [x] Slovak translation added in `content.ts`
- [x] Card displays correctly on website
- [x] Typecheck passes

---

### US-003: Update Use Case Card - CRM Automation
**Description:** As a visitor, I want to understand CRM automation so that I can see if it helps my scattered client data problem.

**Content (EN):**
- **Sector:** Real Estate & Sales
- **Problem:** "Client info scattered across Gmail, Calendar, CRM. Missed follow-ups."
- **Solution:** "Two-way sync between Google Workspace and CRM. Automated reminders."
- **Result:** "One source of truth. No more missed follow-ups."

**Acceptance Criteria:**
- [x] English content updated in `content.ts`
- [x] Slovak translation added in `content.ts`
- [x] Card displays correctly on website
- [x] Typecheck passes

---

### US-004: Update Use Case Card - Reporting Automation
**Description:** As a visitor, I want to understand reporting automation so that I can see if it saves my weekly report creation time.

**Content (EN):**
- **Sector:** Marketing Agencies
- **Problem:** "Weekly copy-paste from Ads Manager, Analytics, spreadsheets."
- **Solution:** "Scheduled data pull → AI generates summary → PDF delivered to inbox"
- **Result:** "Reports ready automatically. Every week. On time."

**Acceptance Criteria:**
- [x] English content updated in `content.ts`
- [x] Slovak translation added in `content.ts`
- [x] Card displays correctly on website
- [x] Typecheck passes

---

### US-005: Improve Contact Form - Remove Timeline Field
**Description:** As a visitor, I want a simpler contact form so that I can request an audit without confusing fields.

**Acceptance Criteria:**
- [x] Remove "Timeline / Urgency" field from form
- [x] Remove corresponding field from `content.ts` (EN + SK)
- [x] Update `ContactForm.tsx` if field is hardcoded
- [x] Form layout remains clean after removal
- [x] Typecheck passes
- [x] Verify form works in browser

---

### US-006: Improve Contact Form - Topic Dropdown
**Description:** As a visitor, I want clearer topic options so that I can quickly indicate what I need help with.

**Current Options:**
- Lead Management
- Invoice/Doc Automation
- CRM Cleanup/Sync
- Other/General Audit

**Improved Options (EN):**
- Lead Capture & Response Automation
- Invoice & Document Processing
- CRM & Workspace Sync
- Reporting Automation
- Other / Not Sure Yet

**Acceptance Criteria:**
- [x] English options updated in `content.ts`
- [x] Slovak translations added in `content.ts`
- [x] Dropdown displays new options correctly
- [x] Typecheck passes
- [x] Verify form works in browser

---

### US-007: Reorganize Technologies Section
**Description:** As a visitor, I want to see that this service integrates with tools I already use so that I feel confident it will work with my setup.

**New Messaging Approach:**
- Change headline from tech stack showcase to "We integrate with your tools"
- Emphasize compatibility with existing business tools
- Keep same logos but reframe the narrative

**Acceptance Criteria:**
- [x] Update section title in `content.ts` (EN + SK)
- [x] Update section subtitle/description (EN + SK)
- [x] Review if any tech logos should be added/removed
- [x] Section displays correctly
- [x] Typecheck passes
- [x] Verify changes in browser

---

### US-008: Improve FAQ Pricing Answer
**Description:** As a visitor, I want to understand the pricing approach so that I know what to expect without seeing exact prices.

**Current Answer:** Generic pricing response

**Improved Answer (EN):**
"We calculate your potential benefit first - time saved, errors eliminated, faster response times. Then we design a solution where the cost is a fraction of the benefit. Typical projects start from €1,000. The first audit call is free - we'll show you exactly what's possible and what it would cost."

**Acceptance Criteria:**
- [x] English FAQ answer updated in `content.ts`
- [x] Slovak translation added in `content.ts`
- [x] FAQ displays correctly
- [x] Typecheck passes
- [x] Verify changes in browser

---

## Technology Stack

**Existing (no changes):**
- React 19.2 + TypeScript
- Vite 6.2
- Tailwind CSS (via CDN)
- Lucide React icons

---

## Files Modified

| File | Changes |
|------|---------|
| `content.ts` | Use case text, form fields, tech section, FAQ answer (EN + SK) |
| `types.ts` | Updated types for field structure |
| `components/ContactForm.tsx` | Timeline field removed, topic dropdown updated |
| `components/Technologies.tsx` | Messaging updated to "integrations" framing |

---

## Success Criteria

- ✅ All 4 use case cards have improved, clear copy
- ✅ Contact form is simpler (no timeline field)
- ✅ Topic dropdown has better options aligned with use cases
- ✅ Technologies section reframed as "integrations"
- ✅ FAQ pricing answer explains benefit-first approach
- ✅ All changes work in both EN and SK
- ✅ No TypeScript errors
- ✅ Website displays correctly in browser

---

## Implementation Phases

### Phase 1: Use Case Cards (US-001 to US-004)
**Goal:** Update all 4 use case cards with new copy
**Deliverables:**
- ✅ Lead Management card updated
- ✅ Document Extraction card updated
- ✅ CRM Automation card updated
- ✅ Reporting Automation card updated
**Validation:** Visual check in browser, typecheck passes

### Phase 2: Contact Form (US-005, US-006)
**Goal:** Simplify and improve contact form
**Deliverables:**
- ✅ Timeline field removed
- ✅ Topic dropdown improved
**Validation:** Form submits correctly, visual check

### Phase 3: Supporting Sections (US-007, US-008)
**Goal:** Update tech section and FAQ
**Deliverables:**
- ✅ Technologies section reframed
- ✅ FAQ pricing answer improved
**Validation:** Visual check in browser

---

## Verification Plan

1. Run `npm run dev` to start development server
2. Check each section visually in browser
3. Toggle between EN and SK to verify translations
4. Test contact form submission (mock)
5. Run `npm run build` to verify no TypeScript errors
6. Check responsive layout on mobile viewport

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Slovak translations don't sound natural | Review with native speaker before deploy |
| Form changes break submission flow | Test form interaction after each change |
| Content changes affect layout | Check responsive design after updates |

---

## Notes

- No pricing displayed on website - discussed during audit call
- Free audit for first customers to gain experience
- Future: Add testimonials once we have client results
