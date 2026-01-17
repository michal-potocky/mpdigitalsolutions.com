# PRD: MPDigitalSolutions Website Update

## Executive Summary

Tento PRD definuje aktualizáciu existujúcej webstránky MPDigitalSolutions (mpdigitalsolutions.com) s cieľom zvýšiť konverzie a poskytnúť lepšie informácie pre potenciálnych zákazníkov.

Hlavné zmeny zahŕňajú vylepšenie obsahu kľúčových sekcií, pridanie novej sekcie s technológiami a YouTube videami, vytvorenie jednoduchého cenníka a jemné úpravy dizajnu.

**MVP cieľ:** Aktualizovaná stránka s vylepšeným obsahom, novou sekciou technológií, YouTube sekciou a cenníkom "od X €", ktorá lepšie konvertuje návštevníkov na záujemcov o bezplatný audit.

---

## Mission

**Poslanie:** Pomáhať malým firmám a agentúram pochopiť hodnotu automatizácie a ľahko sa spojiť s MPDigitalSolutions.

**Princípy:**
1. Jasná komunikácia bez technického žargónu
2. Budovanie dôvery transparentnosťou (ceny, proces, technológie)
3. Jednoduchá cesta ku konverzii (audit)
4. Profesionálny ale prístupný tón

---

## Target Users

**Primárny používateľ:** Majitelia malých firiem a agentúr (1-20 zamestnancov)
- Technická úroveň: Stredná (používajú SaaS nástroje, nie sú vývojári)
- Bolesti: Manuálne opakujúce sa úlohy, strata času, neefektívne procesy
- Potreby: Jasné informácie o cenách, dôkaz kredibility, pochopenie procesu

---

## MVP Scope

### In Scope

**Obsah:**
- ✅ Premenovať sekciu "Ako pracujeme" na "Aký je process" + nový obsah
- ✅ Vylepšiť obsah sekcie "Bezplatný audit"
- ✅ Pridať sekciu "Technológie" (n8n, Make, AI nástroje...)

**Nové sekcie:**
- ✅ YouTube video sekcia (embed videá z kanála)
- ✅ Cenník "Od X €" s kontaktnou možnosťou

**Dizajn:**
- ✅ Jemné úpravy (spacing, fonty, farby) podľa potreby

**Technické:**
- ✅ Aktualizácia content.ts pre EN aj SK verziu
- ✅ Vytvorenie nových komponentov (Technologies, YouTubeSection, Pricing)
- ✅ Integrácia do App.tsx

### Out of Scope

- ❌ Plnohodnotný blog systém
- ❌ Backend/databáza
- ❌ Autentifikácia používateľov
- ❌ CMS pre správu obsahu
- ❌ Animácie a interaktívne prvky
- ❌ Zmeny v Hero, UseCases, FAQ sekciách
- ❌ Responzívny redesign (už je responzívny)

---

## User Stories

### US-001: Vylepšenie sekcie "Ako to funguje"

**Description:** Ako návštevník chcem jasne pochopiť proces spolupráce, aby som vedel čo očakávať.

**Acceptance Criteria:**
- [ ] SK názov sekcie zmenený na "Ako to funguje" (EN zostáva "How It Works")
- [ ] Aktualizovaný content.ts pre obe jazykové verzie (EN/SK)
- [ ] Nový obsah fáz jasne vysvetľuje kroky spolupráce
- [ ] Súbor HowItWorks.tsx zostáva (bez premenovania)
- [ ] Typecheck passes
- [ ] Verify changes work in browser

---

### US-002: Vylepšenie obsahu sekcie "Bezplatný audit"

**Description:** Ako návštevník chcem lepšie pochopiť čo získam z bezplatného auditu, aby som sa rozhodol ho využiť.

**Acceptance Criteria:**
- [ ] Aktualizovaný obsah karty "Bezplatný Audit" v content.ts
- [ ] Jasnejšie vysvetlenie benefitov auditu
- [ ] Konkrétnejšie deliverables (čo presne dostane zákazník)
- [ ] Aktualizované pre EN aj SK verziu
- [ ] Typecheck passes
- [ ] Verify changes work in browser

---

### US-003: Vytvorenie sekcie "Technológie"

**Description:** Ako návštevník chcem vidieť s akými technológiami firma pracuje, aby som mal dôveru v ich expertízu.

**Acceptance Criteria:**
- [ ] Vytvorený nový komponent Technologies.tsx
- [ ] Zobrazuje logá/ikony technológií (n8n, Make/Integromat, OpenAI, Claude, Zapier, atď.)
- [ ] Pridaný content do content.ts (EN/SK)
- [ ] Pridaný type do types.ts
- [ ] Komponent integrovaný do App.tsx
- [ ] Responzívny grid layout
- [ ] Typecheck passes
- [ ] Verify changes work in browser

---

### US-004: Vytvorenie YouTube video sekcie

**Description:** Ako návštevník chcem vidieť videá od majiteľa firmy, aby som získal dôveru a videl jeho expertízu.

**Acceptance Criteria:**
- [ ] Vytvorený nový komponent YouTubeSection.tsx
- [ ] Podporuje embed YouTube videí cez iframe
- [ ] Placeholder stav pre prázdny zoznam videí (s textom "Videá už čoskoro")
- [ ] Pridaný content do content.ts (EN/SK) - title, subtitle, videoIds array
- [ ] Pridaný type do types.ts
- [ ] Komponent integrovaný do App.tsx
- [ ] Responzívny grid (1 video = full width, 2+ = grid)
- [ ] Typecheck passes
- [ ] Verify changes work in browser

---

### US-005: Vytvorenie sekcie Cenník

**Description:** Ako návštevník chcem vidieť orientačné ceny služieb, aby som vedel či si to môžem dovoliť.

**Acceptance Criteria:**
- [ ] Vytvorený nový komponent Pricing.tsx
- [ ] Zobrazuje 2-3 služby s "Od X €" cenami
- [ ] CTA tlačidlo "Kontaktujte nás pre presný odhad"
- [ ] Pridaný content do content.ts (EN/SK)
- [ ] Pridaný type do types.ts
- [ ] Komponent integrovaný do App.tsx
- [ ] Styling konzistentný s ostatnými sekciami
- [ ] Typecheck passes
- [ ] Verify changes work in browser

---

### US-006: Jemné úpravy dizajnu

**Description:** Ako vlastník chcem jemné vizuálne vylepšenia pre lepší celkový dojem.

**Acceptance Criteria:**
- [ ] Skontrolovaný spacing medzi sekciami (konzistentný)
- [ ] Overené font sizes pre čitateľnosť
- [ ] Prípadné drobné farebné úpravy pre lepší kontrast
- [ ] Žiadne breaking changes v existujúcom dizajne
- [ ] Typecheck passes
- [ ] Verify changes work in browser

---

### US-007: Aktualizácia navigácie

**Description:** Ako návštevník chcem navigáciu ktorá reflektuje nové sekcie.

**Acceptance Criteria:**
- [ ] Header.tsx aktualizovaný s novými sekciami (ak potrebné)
- [ ] Scroll-to links fungujú pre nové sekcie
- [ ] Navigácia v content.ts aktualizovaná pre EN/SK
- [ ] Typecheck passes
- [ ] Verify changes work in browser

---

## Core Architecture & Patterns

### Existujúca štruktúra

```
mpdigitalsolutions/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Proof.tsx
│   ├── Services.tsx
│   ├── UseCases.tsx
│   ├── HowItWorks.tsx      # -> Premenovať na Process.tsx
│   ├── FAQ.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── content.ts              # Všetok text EN/SK
├── types.ts                # TypeScript interfaces
├── App.tsx                 # Main layout
└── index.tsx               # Entry point
```

### Nové súbory

```
components/
├── Technologies.tsx        # NOVÝ
├── YouTubeSection.tsx      # NOVÝ
└── Pricing.tsx             # NOVÝ
```

*HowItWorks.tsx zostáva bez premenovania*

### Kľúčové patterns

1. **Content-driven:** Všetok text v content.ts, komponenty sú "hlúpe"
2. **Dual language:** Každý content má EN aj SK verziu
3. **Type-safe:** Všetky props definované v types.ts
4. **Section-based:** Každá sekcia = samostatný komponent

---

## Technology Stack

**Frontend:**
- React 19.2.3
- TypeScript 5.8.2
- Vite 6.2.0
- Tailwind CSS (inline classes)
- Lucide React (ikony)

**Deployment:**
- Vercel (automatický deploy z GitHub)
- GitHub repo: mrblonde3/mp-ai-clone

---

## Poradie sekcií na stránke (po zmene)

1. Header (navigácia)
2. Hero
3. Proof (Čo očakávať)
4. Services (Služby) - vrátane vylepšeného "Bezplatný audit"
5. **Technologies** (NOVÉ)
6. UseCases (Príklady použitia)
7. **Pricing** (NOVÉ)
8. HowItWorks (SK: "Ako to funguje")
9. **YouTubeSection** (NOVÉ)
10. FAQ
11. ContactForm
12. Footer

---

## Success Criteria

**MVP úspech:**
- ✅ Všetky user stories implementované
- ✅ Stránka funguje v EN aj SK
- ✅ Žiadne TypeScript errory
- ✅ Responzívny dizajn zachovaný
- ✅ Deploy na produkciu úspešný

**Kvalita:**
- ✅ Content je jasný a bez preklepov
- ✅ Vizuálna konzistencia s existujúcim dizajnom
- ✅ Rýchle načítanie stránky

---

## Implementation Phases

### Phase 1: Content Updates (US-001, US-002)
**Cieľ:** Aktualizovať existujúci obsah

**Deliverables:**
- ✅ Premenovaná sekcia "Aký je process" s novým obsahom
- ✅ Vylepšený obsah "Bezplatný audit"

**Validácia:** Obsah skontrolovaný vlastníkom, typecheck passes

---

### Phase 2: New Sections - Technologies & Pricing (US-003, US-005)
**Cieľ:** Pridať sekcie pre budovanie dôvery a transparentnosť cien

**Deliverables:**
- ✅ Technologies.tsx komponent
- ✅ Pricing.tsx komponent
- ✅ Integrácia do App.tsx

**Validácia:** Sekcie zobrazené správne, responzívne

---

### Phase 3: YouTube Section (US-004)
**Cieľ:** Pridať video sekciu pre budovanie dôvery

**Deliverables:**
- ✅ YouTubeSection.tsx komponent
- ✅ Placeholder pre prázdny stav

**Validácia:** YouTube embed funguje, placeholder zobrazený

---

### Phase 4: Polish & Deploy (US-006, US-007)
**Cieľ:** Finálne úpravy a nasadenie

**Deliverables:**
- ✅ Navigácia aktualizovaná
- ✅ Dizajn vyladený
- ✅ Produkčný deploy

**Validácia:** Stránka live na mpdigitalsolutions.com

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| YouTube videá ešte neexistujú | Placeholder "Videá už čoskoro" |
| Ceny sa môžu meniť | "Od X €" formát umožňuje flexibilitu |
| Obsah v dvoch jazykoch | Každá zmena vyžaduje EN aj SK |
| Breaking changes v dizajne | Inkrementálne zmeny, testovanie po každej |

---

## Appendix

### Technológie pre sekciu "Technologies"

Technológie na zobrazenie (s ikonami/logami firiem):

| Technológia | Ikona/Logo |
|-------------|------------|
| n8n | n8n logo (primárny nástroj) |
| OpenAI / ChatGPT | OpenAI logo |
| Claude (Anthropic) | Anthropic/Claude logo |
| Google Workspace | Google logo |
| Slack | Slack logo |
| HubSpot | HubSpot logo |
| Supabase | Supabase logo |

**Implementácia ikon:** Použiť SVG logá alebo Simple Icons (simpleicons.org) pre konzistentný štýl.

### Cenník - navrhované položky

| Služba | Cena |
|--------|------|
| Bezplatný audit | 0 € |
| Jednoduchá automatizácia | Od 300 € |
| Komplexný workflow | Od 800 € |
| Mesačná údržba | Od 100 €/mesiac |

*Finálne ceny určí vlastník*
