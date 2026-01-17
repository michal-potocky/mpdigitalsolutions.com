import { Content } from './types';

export const content: Record<'en' | 'sk', Content> = {
  en: {
    nav: {
      useCases: "Use Cases",
      process: "How it Works",
      faq: "FAQ",
      contact: "Get Free Audit",
    },
    hero: {
      headline: "AUTOMATE USING AI [SCALE] GROW",
      subheadline: "We integrate custom AI automations for businesses and agencies that bring new clients and save time. Professional, direct, and outcome-oriented.",
      ctaPrimary: "Get a Free Audit",
      ctaSecondary: "See Use Cases",
      bullets: [
        "Specialized in n8n & AI Integration",
        "Typical prototype delivery in ~7 days",
        "No exaggerated promises, just results"
      ],
      promise: "We reply to every audit request within 1 business day."
    },
    proof: {
      label: "What to expect",
      expectations: {
        title: "Realistic Outcomes",
        items: [
          { title: "Speed", desc: "First functional prototype typically in 7 days." },
          { title: "Clarity", desc: "Fixed scope and clear deliverables. No hidden costs." },
          { title: "Ownership", desc: "You own the workflows and data. No vendor lock-in." }
        ]
      },
      testimonialPlaceholder: "Trusted by forward-thinking businesses (Feedback Placeholder)"
    },
    useCases: {
      title: "Common Use Cases",
      subtitle: "Solutions tailored for Agencies, E-commerce, and Local Services.",
      cases: [
        {
          title: "Lead Management",
          sector: "Agencies & Local Services",
          problem: "After 5 minutes, chance of reaching a lead drops by 10x. 78% of customers buy from whoever responds first.",
          solution: "Form submission → AI qualifies → CRM entry → Team notified instantly.",
          result: "Every lead in CRM within seconds. Instant team notification."
        },
        {
          title: "Document Extraction",
          sector: "E-commerce & Operations",
          problem: "Manually copying invoice data to accounting software.",
          solution: "AI reads PDF → Extracts vendor, items, amounts → Sends to your system.",
          result: "Invoices processed automatically. Manual entry eliminated."
        },
        {
          title: "CRM & Workspace Automation",
          sector: "Real Estate & Sales",
          problem: "Client info scattered across Gmail, Calendar, CRM. Missed follow-ups.",
          solution: "Two-way sync between Google Workspace and CRM. Automated reminders.",
          result: "One source of truth. No more missed follow-ups."
        },
        {
          title: "Reporting Automation",
          sector: "Marketing Agencies",
          problem: "Weekly copy-paste from Ads Manager, Analytics, spreadsheets.",
          solution: "Scheduled data pull → AI generates summary → PDF delivered to inbox.",
          result: "Reports ready automatically. Every week. On time."
        }
      ]
    },
    services: {
      title: "Our Capabilities",
      subtitle: "From simple integrations to complex AI agents, we cover the full automation spectrum.",
      cards: [
        {
          title: "Workflow Automation",
          description: "Connect your apps and automate repetitive tasks with custom n8n workflows.",
          features: ["API Integration", "Data Synchronization", "Custom Logic"],
          deliverablesLabel: "Deliverables:",
          deliverables: "Deployed Workflows, Documentation, Handover Call",
          cta: "Automate Now"
        },
        {
          title: "AI Solutions",
          highlight: true,
          description: "Implement intelligent agents that can understand, reason, and act on your data.",
          features: ["LLM Integration", "Document Processing", "Smart Agents"],
          deliverablesLabel: "Deliverables:",
          deliverables: "Custom AI Agents, Prompt Engineering, Setup Guide",
          cta: "Get AI Ready"
        }
      ]
    },
    technologies: {
      title: "We Integrate With Your Tools",
      subtitle: "Connect the software you already use. No need to change your workflow — we build on top of it.",
      items: [
        { name: "n8n", description: "Automation" },
        { name: "OpenAI", description: "AI/LLM" },
        { name: "Claude", description: "AI/LLM" },
        { name: "Google Workspace", description: "Productivity" },
        { name: "Slack", description: "Communication" },
        { name: "HubSpot", description: "CRM" },
        { name: "Supabase", description: "Database" }
      ]
    },
    howItWorks: {
      title: "How We Work",
      phase1: {
        title: "PHASE 1 — ANALYSIS",
        step1: {
          title: "Intro Call (10–15 min, no video)",
          bullets: [
            "Goal: Understand the situation and decide if it makes sense to go deeper.",
            "Output: Scheduling the deep-dive audit."
          ]
        },
        step2: {
          title: "Free Audit (45–60 min, video)",
          bullets: [
            "Goal: System mapping, Technical review of tools.",
            "Output: Within 3 days, a PDF overview of the proposed solution and price estimate."
          ]
        },
        cta: "BOOK INTRO CALL →"
      },
      phase2: {
        title: "PHASE 2 — DEVELOPMENT",
        subtitle: "Execution & Handoff",
        steps: [
          "Development & Integration",
          "Rigorous Testing",
          "Deployment & Training",
          "Maintenance & Improvements (Optional)"
        ]
      }
    },
    youtube: {
      title: "Learn From Our Videos",
      subtitle: "Watch tutorials and insights on automation and AI.",
      videoIds: [],
      comingSoon: "Videos coming soon! Subscribe to be notified."
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "How much does it cost?",
          a: "We calculate your potential benefit first — time saved, errors eliminated, faster response times. Then we design a solution where the cost is a fraction of the benefit. Typical projects start from €1,000. The first audit call is free — we'll show you exactly what's possible and what it would cost."
        },
        {
          q: "How long does it take?",
          a: "A standard scope prototype is typically ready for review in ~7 days. Complex system integrations may take 2-4 weeks."
        },
        {
          q: "What do you need from me?",
          a: "Access to the relevant software APIs (keys) and a clear explanation of your current manual process (e.g., a screen recording)."
        },
        {
          q: "Is my data safe?",
          a: "We prioritize security. We use secure authentication methods, and where possible, we build automations that run within your own infrastructure or secure cloud environments."
        },
        {
          q: "Do you support existing CRMs?",
          a: "Yes. n8n connects with Pipedrive, HubSpot, Salesforce, Zoho, and hundreds of others."
        },
        {
          q: "What happens after the project?",
          a: "We offer maintenance packages or can hand off the documentation so your internal team can manage it."
        }
      ]
    },
    contact: {
      title: "Start Your Free Audit",
      subtitle: "Fill out the form below. We promise a reply within 1 business day.",
      fields: {
        name: "Full Name",
        email: "Work Email",
        company: "Company Name",
        topic: "Interested Topic",
        topicOptions: {
          lead: "Lead Capture & Response Automation",
          invoice: "Invoice & Document Processing",
          crm: "CRM & Workspace Sync",
          reporting: "Reporting Automation",
          other: "Other / Not Sure Yet"
        },
        tools: "Current Tools (e.g., HubSpot, Slack)",
        toolsPlaceholder: "List your main software stack...",
        message: "How can we help? (Brief description)",
        consent: "I agree to the processing of my personal data for the purpose of the audit."
      },
      submit: "Request Free Audit",
      submitting: "Sending...",
      successTitle: "Request Received!",
      successMessage: "Thank you. We will review your details and get back to you within 1 business day with next steps."
    },
    footer: {
      summary: "Helping small businesses and agencies reclaim their time through intelligent automation.",
      privacy: "Privacy Policy",
      rights: "All rights reserved."
    }
  },
  sk: {
    nav: {
      useCases: "Príklady použitia",
      process: "Ako pracujeme",
      faq: "FAQ",
      contact: "Získať audit",
    },
    hero: {
      headline: "AUTOMATE USING AI [SCALE] GROW",
      subheadline: "Integrujeme AI automatizácie na mieru pre firmy a agentúry ktoré prinášajú nových klientov a šetria čas. Profesionálne, priamo a s dôrazom na výsledky.",
      ctaPrimary: "Získať bezplatný audit",
      ctaSecondary: "Pozrieť príklady",
      bullets: [
        "Špecializácia na integrácie n8n a AI",
        "Typický prototyp dodáme do ~7 dní",
        "Žiadne prehnané sľuby, iba výsledky"
      ],
      promise: "Na každú žiadosť o audit odpovieme do 1 pracovného dňa."
    },
    proof: {
      label: "Čo môžete očakávať",
      expectations: {
        title: "Reálne výsledky",
        items: [
          { title: "Rýchlosť", desc: "Prvý funkčný prototyp zvyčajne do 7 dní." },
          { title: "Jasnosť", desc: "Pevný rozsah a jasné výstupy. Žiadne skryté náklady." },
          { title: "Vlastníctvo", desc: "Workflow a dáta vlastníte vy. Žiadna závislosť na dodávateľovi." }
        ]
      },
      testimonialPlaceholder: "Dôverujú nám moderné firmy (Placeholder pre referencie)"
    },
    useCases: {
      title: "Časté prípady použitia",
      subtitle: "Riešenia na mieru pre agentúry, e-shopy a lokálne služby.",
      cases: [
        {
          title: "Manažment Leadov",
          sector: "Agentúry a Služby",
          problem: "Po 5 minútach šanca zastihnúť lead klesá 10x. 78% zákazníkov nakúpi od toho, kto odpovie prvý.",
          solution: "Odoslanie formulára → AI kvalifikuje → Zápis do CRM → Tím notifikovaný okamžite.",
          result: "Každý lead v CRM do pár sekúnd. Okamžitá notifikácia tímu."
        },
        {
          title: "Extrakcia Dokumentov",
          sector: "E-commerce a Operatíva",
          problem: "Manuálne prepisovanie dát z faktúr do účtovného softvéru.",
          solution: "AI číta PDF → Extrahuje dodávateľa, položky, sumy → Posiela do vášho systému.",
          result: "Faktúry spracované automaticky. Manuálne zadávanie eliminované."
        },
        {
          title: "CRM a Workspace Automatizácia",
          sector: "Reality a Obchod",
          problem: "Informácie o klientoch roztrúsené v Gmaili, Kalendári, CRM. Zmeškané follow-upy.",
          solution: "Obojsmerná synchronizácia Google Workspace a CRM. Automatické pripomienky.",
          result: "Jeden zdroj pravdy. Žiadne zmeškané follow-upy."
        },
        {
          title: "Automatizácia Reportingu",
          sector: "Marketingové Agentúry",
          problem: "Týždenné kopírovanie z Ads Manager, Analytics, tabuliek.",
          solution: "Plánovaný zber dát → AI generuje zhrnutie → PDF doručené do schránky.",
          result: "Reporty pripravené automaticky. Každý týždeň. Načas."
        }
      ]
    },
    services: {
      title: "Naše Schopnosti",
      subtitle: "Od jednoduchých integrácií až po komplexných AI agentov, pokrývame celé spektrum automatizácie.",
      cards: [
        {
          title: "Automatizácia Workflow",
          description: "Prepojte svoje aplikácie a automatizujte opakujúce sa úlohy pomocou vlastných n8n workflow.",
          features: ["Integrácia API", "Synchronizácia dát", "Vlastná logika"],
          deliverablesLabel: "Výstupy:",
          deliverables: "Nasadené workflowy, Dokumentácia, Odovzdávací hovor",
          cta: "Automatizovať teraz"
        },
        {
          title: "AI Riešenia",
          highlight: true,
          description: "Implementujte inteligentných agentov, ktorí dokážu porozumieť, uvažovať a konať na základe vašich dát.",
          features: ["LLM Integrácia", "Spracovanie dokumentov", "Smart Agenti"],
          deliverablesLabel: "Výstupy:",
          deliverables: "Vlastní AI agenti, Prompt Engineering, Návod na nastavenie",
          cta: "Získať AI"
        }
      ]
    },
    technologies: {
      title: "Integrujeme s vašimi nástrojmi",
      subtitle: "Prepojíme softvér, ktorý už používate. Nemusíte meniť workflow — staviame na ňom.",
      items: [
        { name: "n8n", description: "Automatizácia" },
        { name: "OpenAI", description: "AI/LLM" },
        { name: "Claude", description: "AI/LLM" },
        { name: "Google Workspace", description: "Produktivita" },
        { name: "Slack", description: "Komunikácia" },
        { name: "HubSpot", description: "CRM" },
        { name: "Supabase", description: "Databáza" }
      ]
    },
    howItWorks: {
      title: "Ako pracujeme",
      phase1: {
        title: "FÁZA 1 — ANALÝZA",
        step1: {
          title: "Úvodný call (10–15 min, bez videa)",
          bullets: [
            "Cieľ: Pochopiť situáciu a rozhodnúť, či má zmysel ísť hlbšie.",
            "Výstup: Naplánovanie hĺbkového auditu."
          ]
        },
        step2: {
          title: "Bezplatný audit (45–60 min, video)",
          bullets: [
            "Cieľ: Zmapovanie systému, Technická kontrola nástrojov",
            "Výstup: Do 3 dní prehľad navrhovaného riešenia v PDF a cenový odhad."
          ]
        },
        cta: "OBJEDNAŤ ÚVODNÝ CALL →"
      },
      phase2: {
        title: "FÁZA 2 — VÝVOJ",
        subtitle: "Exekúcia a odovzdanie",
        steps: [
          "Vývoj a integrácia",
          "Dôkladné testovanie",
          "Nasadenie a zaškolenie",
          "Údržba a zlepšovanie (voliteľné)"
        ]
      }
    },
    youtube: {
      title: "Učte sa z našich videí",
      subtitle: "Sledujte tutoriály a postrehy o automatizácii a AI.",
      videoIds: [],
      comingSoon: "Videá čoskoro! Prihláste sa na odber."
    },
    faq: {
      title: "Často kladené otázky",
      items: [
        {
          q: "Koľko to stojí?",
          a: "Najprv vypočítame váš potenciálny prínos — ušetrený čas, eliminované chyby, rýchlejšie reakcie. Potom navrhneme riešenie, kde náklady sú zlomkom prínosu. Typické projekty začínajú od 1 000 €. Prvý audit je zadarmo — ukážeme vám presne, čo je možné a koľko by to stálo."
        },
        {
          q: "Ako dlho to trvá?",
          a: "Prototyp štandardného rozsahu je zvyčajne pripravený na pripomienkovanie do ~7 dní. Komplexné systémové integrácie môžu trvať 2-4 týždne."
        },
        {
          q: "Čo odo mňa potrebujete?",
          a: "Prístup k API relevantných softvérov (kľúče) a jasné vysvetlenie vášho súčasného manuálneho procesu (napr. nahrávku obrazovky)."
        },
        {
          q: "Sú moje dáta v bezpečí?",
          a: "Bezpečnosť je prioritou. Používame bezpečné autentifikačné metódy a kde je to možné, budujeme automatizácie, ktoré bežia vo vašej vlastnej infraštruktúre alebo zabezpečenom cloude."
        },
        {
          q: "Podporujete existujúce CRM?",
          a: "Áno. n8n sa prepája s Pipedrive, HubSpot, Salesforce, Zoho a stovkami ďalších."
        },
        {
          q: "Čo sa deje po skončení projektu?",
          a: "Ponúkame balíčky údržby alebo môžeme odovzdať dokumentáciu, aby si to váš interný tím spravoval sám."
        }
      ]
    },
    contact: {
      title: "Začnite auditom zadarmo",
      subtitle: "Vyplňte formulár nižšie. Sľubujeme odpoveď do 1 pracovného dňa.",
      fields: {
        name: "Celé meno",
        email: "Pracovný email",
        company: "Názov firmy",
        topic: "Téma záujmu",
        topicOptions: {
          lead: "Zachytávanie leadov a automatizácia odpovedí",
          invoice: "Spracovanie faktúr a dokumentov",
          crm: "CRM a Workspace synchronizácia",
          reporting: "Automatizácia reportingu",
          other: "Iné / Zatiaľ neviem"
        },
        tools: "Súčasné nástroje (napr. HubSpot, Slack)",
        toolsPlaceholder: "Vypíšte váš hlavný softvér...",
        message: "Ako môžeme pomôcť? (Krátky popis)",
        consent: "Súhlasím so spracovaním osobných údajov pre účely auditu."
      },
      submit: "Požiadať o bezplatný audit",
      submitting: "Odosielam...",
      successTitle: "Žiadosť prijatá!",
      successMessage: "Ďakujeme. Vaše údaje skontrolujeme a ozveme sa vám do 1 pracovného dňa s ďalšími krokmi."
    },
    footer: {
      summary: "Pomáhame malým firmám a agentúram získať späť čas prostredníctvom inteligentnej automatizácie.",
      privacy: "Ochrana súkromia",
      rights: "Všetky práva vyhradené."
    }
  }
};