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
      headline: "Automate. Scale Grow.",
      subheadline: "We build custom n8n automations that save agencies and SMBs 20+ hours a week. Professional, direct, and outcome-oriented.",
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
          problem: "Leads get lost in email, slow response times, manual data entry into CRM.",
          solution: "Automated capture from forms → AI Qualification → CRM Entry → Slack Notification.",
          result: "Typical Result: 100% lead capture and <5 min response time."
        },
        {
          title: "Document Extraction",
          sector: "E-commerce & Operations",
          problem: "Hours spent typing data from PDF invoices and receipts into Excel/ERP.",
          solution: "AI Vision (LLM) extracts line items, dates, and vendors → Pushes to accounting tool.",
          result: "Typical Result: 80% reduction in manual data entry."
        },
        {
          title: "CRM & Workspace Automation",
          sector: "Real Estate & Sales",
          problem: "Messy client data, missed follow-ups, disparate tools (Calendar vs CRM).",
          solution: "Two-way sync between Google Workspace and CRM. Automated follow-up sequences.",
          result: "Typical Result: Data consistency across all platforms."
        },
        {
          title: "Reporting Automation",
          sector: "Marketing Agencies",
          problem: "Copy-pasting data from Ads Manager, Analytics, and Sheets for client reports.",
          solution: "Scheduled aggregation of metrics → AI Summary generation → PDF Report emailed.",
          result: "Typical Result: Reports generated instantly every Monday."
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
      title: "Our Tech Stack",
      subtitle: "We use industry-leading tools to build reliable, scalable automations.",
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
          a: "We do not offer fixed pricing on the site because every workflow is unique. After the Free Audit, you will receive a rough estimate range. Small prototypes often start lower to build trust."
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
          lead: "Lead Management",
          invoice: "Invoice/Doc Automation",
          crm: "CRM Cleanup/Sync",
          other: "Other / General Audit"
        },
        tools: "Current Tools (e.g., HubSpot, Slack)",
        toolsPlaceholder: "List your main software stack...",
        urgency: "Timeline / Urgency",
        urgencyOptions: {
          week: "This week",
          month: "This month",
          unsure: "Not sure"
        },
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
      headline: "Automate. Scale Grow.",
      subheadline: "Tvoríme n8n automatizácie na mieru, ktoré šetria agentúram a firmám 20+ hodín týždenne. Profesionálne, priamo a s dôrazom na výsledky.",
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
          problem: "Leady sa strácajú v emailoch, pomalé reakcie, manuálne prepisovanie do CRM.",
          solution: "Automatický zber z formulárov → AI Kvalifikácia → Zápis do CRM → Notifikácia na Slack.",
          result: "Typický výsledok: 100% zachytenie leadov a reakcia <5 min."
        },
        {
          title: "Extrakcia Dokumentov",
          sector: "E-commerce a Operatíva",
          problem: "Hodiny strávené prepisovaním dát z PDF faktúr a bločkov do Excelu/ERP.",
          solution: "AI Vision (LLM) extrahuje položky, dátumy a dodávateľov → Odošle do účtovníctva.",
          result: "Typický výsledok: 80% zníženie manuálneho zadávania dát."
        },
        {
          title: "CRM a Workspace Automatizácia",
          sector: "Reality a Obchod",
          problem: "Neporiadok v dátach klientov, zmeškané follow-upy, nespojené nástroje.",
          solution: "Obojsmerná synchronizácia Google Workspace a CRM. Automatické sekvencie správ.",
          result: "Typický výsledok: Konzistentné dáta naprieč všetkými platformami."
        },
        {
          title: "Automatizácia Reportingu",
          sector: "Marketingové Agentúry",
          problem: "Kopírovanie dát z Ads Manager, Analytics a Tabuliek pre klientske reporty.",
          solution: "Plánovaná agregácia metrík → Generovanie zhrnutia cez AI → Odoslanie PDF emailom.",
          result: "Typický výsledok: Reporty vygenerované okamžite každý pondelok."
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
      title: "Náš Tech Stack",
      subtitle: "Používame špičkové nástroje na budovanie spoľahlivých a škálovateľných automatizácií.",
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
          a: "Na stránke neuvádzame fixné ceny, pretože každý workflow je jedinečný. Po bezplatnom audite dostanete hrubý cenový odhad. Menšie prototypy často začínajú na nižších sumách pre vybudovanie dôvery."
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
          lead: "Lead Management",
          invoice: "Automatizácia faktúr",
          crm: "CRM synchronizácia",
          other: "Iné / Všeobecný audit"
        },
        tools: "Súčasné nástroje (napr. HubSpot, Slack)",
        toolsPlaceholder: "Vypíšte váš hlavný softvér...",
        urgency: "Časový horizont",
        urgencyOptions: {
          week: "Tento týždeň",
          month: "Tento mesiac",
          unsure: "Neviem presne"
        },
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