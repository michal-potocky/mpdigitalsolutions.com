import { Content } from './types';

export const content: Record<'en' | 'sk', Content> = {
  en: {
    nav: {
      services: "Services",
      useCases: "Use Cases",
      process: "How It Works",
      faq: "FAQ",
      contact: "Get Free Audit",
    },
    hero: {
      headline: "AUTOMATE USING AI|[SCALE] GROW",
      subheadline: "We integrate AI automations to agencies and SMBs that brings new customers and saves 20+ hours a week. Professional, direct, and outcome-oriented.",
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
    services: {
      title: "Our Expertise",
      subtitle: "Two ways to engage. Start small or go full automation.",
      cards: [
        {
          title: "Free Automation Audit",
          description: "A two-step process where we first determine if automation makes sense for you, then prepare a concrete proposal.",
          features: ["Step 1: 15-min call – we assess if automation will bring measurable results", "Step 2: 60-min video workshop – we analyze your processes in detail"],
          deliverablesLabel: "What you get:",
          deliverables: "After workshop: PDF with process analysis, solution proposal, and quote within 3 business days.",
          cta: "Book Free Audit",
          highlight: false
        },
        {
          title: "AI & Automation Implementation",
          description: "Full-cycle development of custom workflows using n8n and AI agents.",
          features: ["n8n Integrations", "AI Data Extraction", "Workflow Automation", "Testing & Deployment"],
          deliverablesLabel: "We build:",
          deliverables: "Lead Mgmt Workflows, Invoice Automation, CRM Cleanup scripts, and more.",
          cta: "Discuss Project",
          highlight: true
        }
      ]
    },
    useCases: {
      title: "Common Use Cases",
      subtitle: "Solutions tailored for Agencies, E-commerce, and Local Services.",
      cases: [
        {
          title: "Lead Management",
          sector: "Agencies & Local Services",
          problem: "Response to a missed call after 5 minutes = 80% loss of potential customer. Without AI prioritization, you don't know which inquiry is urgent.",
          solution: "Missed call/Email/Form → AI segmentation → Auto-response within 2 min → CRM → Sales rep notified.",
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
    howItWorks: {
      title: "How It Works",
      phaseA: {
        title: "PHASE A: Analysis",
        subtitle: "We understand your business and find the solution.",
        steps: ["Free audit & process analysis", "Solution design & prototype", "Quote and timeline"]
      },
      phaseB: {
        title: "PHASE B: Delivery",
        subtitle: "We build, test, and deploy.",
        steps: ["Custom automation development", "Testing & fine-tuning", "Production deployment", "Training & support"]
      }
    },
    technologies: {
      title: "Technologies We Use",
      subtitle: "We work with modern tools to deliver reliable automation solutions.",
      items: [
        { name: "n8n", description: "Workflow automation platform" },
        { name: "OpenAI", description: "AI & language models" },
        { name: "Claude", description: "Advanced AI assistant" },
        { name: "Google Workspace", description: "Productivity suite" },
        { name: "Slack", description: "Team communication" },
        { name: "HubSpot", description: "CRM & marketing" },
        { name: "Supabase", description: "Database & backend" }
      ]
    },
    youtube: {
      title: "Learn & Watch",
      subtitle: "Tutorials, tips, and automation insights from our YouTube channel.",
      comingSoon: "Videos coming soon! Subscribe to be notified.",
      videoIds: []
    },
    pricing: {
      title: "Transparent Pricing",
      subtitle: "No hidden fees. Every project starts with a free audit.",
      cta: "Get a custom quote",
      items: [
        { name: "Free Audit", price: "0 €", description: "20-min call + PDF report with recommendations" },
        { name: "Simple Automation", price: "From 300 €", description: "Single workflow, 1-2 integrations" },
        { name: "Complex Workflow", price: "From 800 €", description: "Multi-step automation with AI" },
        { name: "Monthly Support", price: "From 100 €/mo", description: "Monitoring, updates, priority support" }
      ]
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
      services: "Služby",
      useCases: "Príklady použitia",
      process: "Ako to funguje",
      faq: "FAQ",
      contact: "Získať audit",
    },
    hero: {
      headline: "AUTOMATIZUJ S AI|[ŠKÁLUJ] RASTI",
      subheadline: "Integrujeme AI automatizácie pre agentúry a firmy, ktoré prinášajú nových zákazníkov a šetria 20+ hodín týždenne. Profesionálne, priamo a s dôrazom na výsledky.",
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
    services: {
      title: "Naše služby",
      subtitle: "Dva spôsoby spolupráce. Začnite v malom alebo komplexne.",
      cards: [
        {
          title: "Bezplatný Audit Automatizácie",
          description: "Dvojkrokový proces, kde najprv zistíme, či má automatizácia pre vás zmysel, a potom vám pripravíme konkrétny návrh.",
          features: ["Krok 1: 15-min telefonát – zistíme, či automatizácia prinesie efekt", "Krok 2: 60-min video workshop – prejdeme vaše procesy detailne"],
          deliverablesLabel: "Čo získate:",
          deliverables: "Po workshope: PDF s analýzou procesov, návrh riešenia a cenová ponuka do 3 pracovných dní.",
          cta: "Objednať audit zdarma",
          highlight: false
        },
        {
          title: "Implementácia AI a Automatizácie",
          description: "Kompletný vývoj workflowov na mieru pomocou n8n a AI agentov.",
          features: ["Integrácie n8n", "AI extrakcia dát", "Automatizácia procesov", "Testovanie a nasadenie"],
          deliverablesLabel: "Vybudujeme:",
          deliverables: "Manažment leadov, automatizáciu faktúr, čistenie CRM a ďalšie.",
          cta: "Prekonzultovať projekt",
          highlight: true
        }
      ]
    },
    useCases: {
      title: "Časté prípady použitia",
      subtitle: "Riešenia na mieru pre agentúry, e-shopy a lokálne služby.",
      cases: [
        {
          title: "Manažment Záujemcov",
          sector: "Agentúry a Služby",
          problem: "Reakcia na zmeškaný hovor nad 5 minút = 80% strata potenciálneho zákazníka. Bez AI prioritizácie neviete, ktorý dopyt je urgentný.",
          solution: "Zmeškaný hovor/Email/Formulár → AI segmentácia → Automatická odpoveď do 2 min → CRM → Kontaktovanie obchodníka.",
          result: "Typický výsledok: 100% zachytenie záujemcov a reakcia <2 min."
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
    howItWorks: {
      title: "Ako to funguje",
      phaseA: {
        title: "FÁZA A: Analýza",
        subtitle: "Pochopíme váš biznis a nájdeme riešenie.",
        steps: ["Bezplatný audit a analýza procesov", "Návrh riešenia a prototyp", "Cenová ponuka a časový plán"]
      },
      phaseB: {
        title: "FÁZA B: Realizácia",
        subtitle: "Postavíme, otestujeme a nasadíme.",
        steps: ["Vývoj automatizácie na mieru", "Testovanie a ladenie", "Nasadenie do produkcie", "Zaškolenie a podpora"]
      }
    },
    technologies: {
      title: "Technológie ktoré používame",
      subtitle: "Pracujeme s modernými nástrojmi pre spoľahlivé automatizačné riešenia.",
      items: [
        { name: "n8n", description: "Platforma pre automatizáciu" },
        { name: "OpenAI", description: "AI a jazykové modely" },
        { name: "Claude", description: "Pokročilý AI asistent" },
        { name: "Google Workspace", description: "Produktivita a spolupráca" },
        { name: "Slack", description: "Tímová komunikácia" },
        { name: "HubSpot", description: "CRM a marketing" },
        { name: "Supabase", description: "Databáza a backend" }
      ]
    },
    youtube: {
      title: "Učte sa s nami",
      subtitle: "Tutoriály, tipy a automatizačné novinky z nášho YouTube kanála.",
      comingSoon: "Videá už čoskoro! Prihláste sa na odber.",
      videoIds: []
    },
    pricing: {
      title: "Transparentné ceny",
      subtitle: "Žiadne skryté poplatky. Každý projekt začína bezplatným auditom.",
      cta: "Získať cenovú ponuku",
      items: [
        { name: "Bezplatný Audit", price: "0 €", description: "20-min hovor + PDF report s odporúčaniami" },
        { name: "Jednoduchá Automatizácia", price: "Od 300 €", description: "Jeden workflow, 1-2 integrácie" },
        { name: "Komplexný Workflow", price: "Od 800 €", description: "Viacstupňová automatizácia s AI" },
        { name: "Mesačná Podpora", price: "Od 100 €/mes", description: "Monitoring, aktualizácie, prioritná podpora" }
      ]
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