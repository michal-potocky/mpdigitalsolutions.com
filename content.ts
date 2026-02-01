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
      title: "Key Solutions",
      subtitle: "From inquiry to appointment.",
      cases: [
        {
          title: "Lead-to-Appointment System",
          subtitle: "For agencies, real estate offices, and local services",
          isMain: true,
          problem: "Leads come from multiple channels — forms, emails, missed calls. The team responds slowly or inconsistently. Opportunities are lost before anyone picks up the phone.\n\nAfter 5 minutes, the chance of converting a lead drops by 10×. Most customers choose whoever responds first.",
          solution: "Form / email / missed call → AI processing & data enrichment → automatic qualification & priority → CRM or calendar entry → instant notification to responsible person → customer confirmation of next step",
          results: [
            "Response in minutes, not hours",
            "Fewer lost leads",
            "More booked meetings",
            "CRM and calendar order"
          ],
          resultSummary: "More clients from existing leads – without increasing marketing costs.",
          suitableFor: [
            "Real estate offices (viewings)",
            "Agencies and B2B services",
            "Local businesses with 20+ leads/month"
          ]
        },
        {
          title: "Call Recovery & Appointment Confirmation",
          subtitle: "Optional system extension",
          isMain: false,
          problem: "Missed calls and unconfirmed appointments = lost money.",
          solution: "Automatic callback on missed call\nAppointment confirmation or rescheduling\nCalendar entry\nOwner / reception notification",
          results: [
            "Fewer missed opportunities",
            "Fewer no-shows",
            "More booked appointments"
          ],
          note: "No cold calls. Only responding to existing leads."
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
        { name: "HubSpot", description: "CRM" },
        { name: "Supabase", description: "Database" }
      ]
    },
    howItWorks: {
      title: "How We Work",
      cta: "BOOK INTRO CALL →",
      phases: [
        {
          title: "PHASE 1 — DISCOVER & DIAGNOSE",
          subtitle: "We understand your situation and propose a solution",
          whatWeDoLabel: "What we do",
          whatWeDo: [
            "Map your current processes and tools",
            "Identify the biggest bottlenecks",
            "Propose a specific solution with estimated impact"
          ],
          stepsLabel: "How it works",
          steps: [
            {
              title: "Intro Call (10–15 min, no video)",
              bullets: [
                "Goal: Understand the situation and decide if it makes sense to go deeper",
                "Output: Scheduling the deep-dive audit"
              ]
            },
            {
              title: "Free Audit (45–60 min, video)",
              bullets: [
                "Goal: System mapping, technical review of tools",
                "Output: Within 3 days, a PDF overview of the proposed solution and price estimate"
              ]
            }
          ]
        },
        {
          title: "PHASE 2 — DESIGN, BUILD & VALIDATE",
          subtitle: "We build and test the solution",
          whatWeDoLabel: "What we do",
          whatWeDo: [
            "Design the workflow architecture",
            "Develop and integrate automations",
            "Test on real data"
          ],
          stepsLabel: "Steps",
          steps: [
            {
              title: "Development & Integration",
              bullets: [
                "Ongoing communication — no surprises",
                "Iterative approach — feedback after every step"
              ]
            },
            {
              title: "Rigorous Testing",
              bullets: [
                "Testing on real data and scenarios"
              ]
            },
            {
              title: "Deployment & Training",
              bullets: [
                "Full documentation for every workflow"
              ]
            }
          ]
        },
        {
          title: "PHASE 3 — LAUNCH, MONITOR & OPTIMIZE",
          subtitle: "We launch, monitor, and improve",
          whatWeDoLabel: "What we do",
          whatWeDo: [
            "Deploy the solution to production",
            "Monitor performance and reliability",
            "Optimize based on real results"
          ],
          extraLabel: "Then",
          extra: [
            "Maintenance & Improvements (optional)",
            "Expand with additional automations as needed",
            "Hand off documentation to your team"
          ]
        }
      ]
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
        employeeCount: "Number of Employees",
        employeeCountOptions: {
          one: "1",
          twoToFive: "2-5",
          sixToTen: "6-10",
          elevenToTwentyFive: "11-25",
          twentySixToFifty: "26-50",
          fiftyOneToTwoHundred: "51-200",
          twoHundredPlus: "201+"
        },
        timeline: "Project Timeline",
        timelineOptions: {
          asap: "ASAP / Next 30 Days",
          threeMonths: "In the Next 3 Months",
          sixMonths: "3-6 Months Out",
          researching: "Just Researching"
        },
        tools: "Current Tools (e.g., HubSpot, Slack)",
        toolsPlaceholder: "List your main software stack...",
        message: "How can we help? (Brief description)",
        consent: "I agree to the processing of my personal data for the purpose of the audit."
      },
      submit: "Request Free Audit",
      submitting: "Sending...",
      successTitle: "Request Received!",
      successMessage: "Thank you. We will review your details and get back to you within 1 business day with next steps.",
      directEmail: "Or email us directly at"
    },
    footer: {
      summary: "Helping small businesses and agencies reclaim their time through intelligent automation.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      rights: "All rights reserved."
    },
    legalPages: {
      backToHome: "Back to Home",
      privacyPolicy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: January 2026",
        sections: [
          {
            title: "1. Who We Are",
            content: "MP Digital Solutions (\"we\", \"us\", or \"our\") operates the website mpdigitalsolutions.com. We are committed to protecting your personal data and respecting your privacy in accordance with the General Data Protection Regulation (GDPR) and applicable Slovak laws."
          },
          {
            title: "2. What Data We Collect",
            content: "We collect the following personal data when you submit our contact form: Full name, Work email address, Company name, Number of employees, Current tools you use, and your message describing how we can help. We also collect technical data such as IP address, browser type, and cookies for website functionality."
          },
          {
            title: "3. Why We Collect Data",
            content: "We process your personal data for the following purposes: To respond to your audit request and provide our services, to communicate with you about our offerings, to improve our website and services, and to comply with legal obligations. The legal basis for processing is your consent (Article 6(1)(a) GDPR) and our legitimate interest in conducting business (Article 6(1)(f) GDPR)."
          },
          {
            title: "4. How Long We Keep Data",
            content: "We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected. Contact form submissions are retained for up to 3 years after our last interaction. You may request deletion at any time."
          },
          {
            title: "5. Your Rights",
            content: "Under GDPR, you have the right to: Access your personal data, Rectify inaccurate data, Erase your data (\"right to be forgotten\"), Restrict processing of your data, Data portability, Object to processing, and Withdraw consent at any time. To exercise these rights, contact us at hello@mpdigitalsolutions.com."
          },
          {
            title: "6. Contact",
            content: "For any questions about this Privacy Policy or our data practices, please contact us at: hello@mpdigitalsolutions.com"
          }
        ]
      },
      termsOfService: {
        title: "Terms of Service",
        lastUpdated: "Last updated: January 2026",
        sections: [
          {
            title: "1. General Provisions",
            content: "These Terms of Service govern your use of the MP Digital Solutions website and services. By accessing our website or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services."
          },
          {
            title: "2. Description of Services",
            content: "MP Digital Solutions provides AI automation and workflow integration services, including but not limited to: consultation and audit services, custom n8n workflow development, AI agent implementation, and ongoing maintenance and support. Specific deliverables and scope are defined in individual project agreements."
          },
          {
            title: "3. Liability",
            content: "Our services are provided \"as is\" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question."
          },
          {
            title: "4. Intellectual Property",
            content: "Upon full payment, you own the custom workflows and configurations we create for you. You may export, modify, and use them freely. We retain the right to reuse general methodologies, techniques, and non-proprietary components in future projects. Our website content, branding, and proprietary tools remain our intellectual property."
          },
          {
            title: "5. Final Provisions",
            content: "These terms are governed by the laws of the Slovak Republic. Any disputes shall be resolved by the competent courts of the Slovak Republic. We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms."
          }
        ]
      }
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
          { title: "Jasnosť", desc: "Najprv audit call, potom presná cena. Rozsah aj výstupy sú dopredu jasné. Bez skrytých nákladov." },
          { title: "Vlastníctvo", desc: "Exportovateľné workflowy bez lock-inu. Prevádzka môže bežať na vašom serveri alebo v managed režime u nás." }
        ]
      },
      testimonialPlaceholder: "Dôverujú nám moderné firmy (Placeholder pre referencie)"
    },
    useCases: {
      title: "Hlavné riešenia",
      subtitle: "Od dopytu k stretnutiu.",
      cases: [
        {
          title: "Lead-to-Appointment System",
          subtitle: "Pre agentúry, realitné kancelárie a lokálne služby",
          isMain: true,
          problem: "Dopyty prichádzajú z viacerých kanálov (formulár, email, telefón). Reakcia je pomalá, follow-up neexistuje a veľká časť potenciálnych zákazníkov sa stratí.\n\nPo 5 minútach klesá šanca konverzie až 10×. Väčšina zákazníkov si vyberie toho, kto odpovie prvý.",
          solution: "Formulár / email / zmeškaný hovor → AI spracuje a doplní údaje → automatická kvalifikácia a priorita → zápis do CRM alebo kalendára → okamžitá notifikácia zodpovednej osoby → potvrdenie ďalšieho kroku zákazníkovi",
          results: [
            "Reakcia v minútach, nie hodinách",
            "Menej stratených dopytov",
            "Viac dohodnutých stretnutí",
            "Poriadok v CRM a kalendári"
          ],
          resultSummary: "Viac klientov z existujúcich dopytov – bez zvyšovania marketingových nákladov.",
          suitableFor: [
            "Realitné kancelárie (obhliadky)",
            "Agentúry a B2B služby",
            "Lokálne firmy s 20+ dopytmi mesačne"
          ]
        },
        {
          title: "Call Recovery & Appointment Confirmation",
          subtitle: "Voliteľné rozšírenie systému",
          isMain: false,
          problem: "Zmeškaný hovor a nepotvrdený termín znamenajú stratené peniaze.",
          solution: "Automatické spätné volanie pri zmeškanom hovore\nPotvrdenie alebo presun termínu\nZápis do kalendára\nNotifikácia majiteľa / recepcie",
          results: [
            "Menej zmeškaných príležitostí",
            "Menej no-show",
            "Viac obsadených termínov"
          ],
          note: "Žiadne studené volania. Len reakcia na existujúce dopyty."
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
        { name: "HubSpot", description: "CRM" },
        { name: "Supabase", description: "Databáza" }
      ]
    },
    howItWorks: {
      title: "Ako pracujeme",
      cta: "OBJEDNAŤ ÚVODNÝ CALL →",
      phases: [
        {
          title: "FÁZA 1 — DISCOVER & DIAGNOSE",
          subtitle: "Pochopíme vašu situáciu a navrhneme riešenie",
          whatWeDoLabel: "Čo robíme",
          whatWeDo: [
            "Zmapujeme vaše súčasné procesy a nástroje",
            "Identifikujeme najväčšie úzke miesta",
            "Navrhneme konkrétne riešenie s odhadom prínosu"
          ],
          stepsLabel: "Ako to prebieha",
          steps: [
            {
              title: "Úvodný call (10–15 min, bez videa)",
              bullets: [
                "Cieľ: Pochopiť situáciu a rozhodnúť, či má zmysel ísť hlbšie",
                "Výstup: Naplánovanie hĺbkového auditu"
              ]
            },
            {
              title: "Bezplatný audit (45–60 min, video)",
              bullets: [
                "Cieľ: Zmapovanie systému, technická kontrola nástrojov",
                "Výstup: Do 3 dní prehľad navrhovaného riešenia v PDF a cenový odhad"
              ]
            }
          ]
        },
        {
          title: "FÁZA 2 — DESIGN, BUILD & VALIDATE",
          subtitle: "Postavíme a otestujeme riešenie",
          whatWeDoLabel: "Čo robíme",
          whatWeDo: [
            "Navrhneme architektúru workflow",
            "Vyvinieme a integrujeme automatizácie",
            "Testujeme na reálnych dátach"
          ],
          stepsLabel: "Kroky",
          steps: [
            {
              title: "Vývoj a integrácia",
              bullets: [
                "Priebežná komunikácia — žiadne prekvapenia",
                "Iteratívny prístup — spätná väzba po každom kroku"
              ]
            },
            {
              title: "Dôkladné testovanie",
              bullets: [
                "Testovanie na reálnych dátach a scenároch"
              ]
            },
            {
              title: "Nasadenie a zaškolenie",
              bullets: [
                "Plná dokumentácia ku každému workflow"
              ]
            }
          ]
        },
        {
          title: "FÁZA 3 — LAUNCH, MONITOR & OPTIMIZE",
          subtitle: "Spustíme, sledujeme a vylepšujeme",
          whatWeDoLabel: "Čo robíme",
          whatWeDo: [
            "Nasadíme riešenie do produkcie",
            "Monitorujeme výkon a spoľahlivosť",
            "Optimalizujeme na základe reálnych výsledkov"
          ],
          extraLabel: "Potom",
          extra: [
            "Údržba a zlepšovanie (voliteľné)",
            "Rozšírenie o ďalšie automatizácie podľa potrieb",
            "Odovzdanie dokumentácie vášmu tímu"
          ]
        }
      ]
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
        employeeCount: "Počet zamestnancov",
        employeeCountOptions: {
          one: "1",
          twoToFive: "2-5",
          sixToTen: "6-10",
          elevenToTwentyFive: "11-25",
          twentySixToFifty: "26-50",
          fiftyOneToTwoHundred: "51-200",
          twoHundredPlus: "201+"
        },
        timeline: "Časový rámec projektu",
        timelineOptions: {
          asap: "Čo najskôr / Do 30 dní",
          threeMonths: "V priebehu 3 mesiacov",
          sixMonths: "3-6 mesiacov",
          researching: "Len si zisťujem informácie"
        },
        tools: "Súčasné nástroje (napr. HubSpot, Slack)",
        toolsPlaceholder: "Vypíšte váš hlavný softvér...",
        message: "Ako môžeme pomôcť? (Krátky popis)",
        consent: "Súhlasím so spracovaním osobných údajov pre účely auditu."
      },
      submit: "Požiadať o bezplatný audit",
      submitting: "Odosielam...",
      successTitle: "Žiadosť prijatá!",
      successMessage: "Ďakujeme. Vaše údaje skontrolujeme a ozveme sa vám do 1 pracovného dňa s ďalšími krokmi.",
      directEmail: "Alebo nám napíšte priamo na"
    },
    footer: {
      summary: "Pomáhame malým firmám a agentúram získať späť čas prostredníctvom inteligentnej automatizácie.",
      privacy: "Ochrana súkromia",
      terms: "Obchodné podmienky",
      rights: "Všetky práva vyhradené."
    },
    legalPages: {
      backToHome: "Späť na úvod",
      privacyPolicy: {
        title: "Ochrana osobných údajov",
        lastUpdated: "Posledná aktualizácia: Január 2026",
        sections: [
          {
            title: "1. Kto sme",
            content: "MP Digital Solutions (\"my\", \"nás\" alebo \"náš\") prevádzkuje webovú stránku mpdigitalsolutions.com. Zaväzujeme sa chrániť vaše osobné údaje a rešpektovať vaše súkromie v súlade so Všeobecným nariadením o ochrane údajov (GDPR) a platnými slovenskými zákonmi."
          },
          {
            title: "2. Aké údaje zbierame",
            content: "Pri odoslaní kontaktného formulára zbierame nasledujúce osobné údaje: Celé meno, Pracovný email, Názov spoločnosti, Počet zamestnancov, Aktuálne nástroje ktoré používate, a vašu správu s popisom ako vám môžeme pomôcť. Tiež zbierame technické údaje ako IP adresa, typ prehliadača a cookies pre funkčnosť webu."
          },
          {
            title: "3. Prečo údaje zbierame",
            content: "Vaše osobné údaje spracúvame na tieto účely: Odpoveď na vašu žiadosť o audit a poskytovanie našich služieb, komunikáciu s vami o našich ponukách, zlepšovanie našej webovej stránky a služieb, a plnenie zákonných povinností. Právnym základom spracovania je váš súhlas (článok 6(1)(a) GDPR) a náš oprávnený záujem na vykonávaní podnikateľskej činnosti (článok 6(1)(f) GDPR)."
          },
          {
            title: "4. Ako dlho údaje uchovávame",
            content: "Vaše osobné údaje uchovávame len po dobu nevyhnutnú na splnenie účelov, na ktoré boli zhromaždené. Údaje z kontaktného formulára uchovávame až 3 roky od našej poslednej interakcie. Kedykoľvek môžete požiadať o vymazanie."
          },
          {
            title: "5. Vaše práva",
            content: "Podľa GDPR máte právo na: Prístup k vašim osobným údajom, Opravu nepresných údajov, Vymazanie vašich údajov (\"právo byť zabudnutý\"), Obmedzenie spracovania vašich údajov, Prenosnosť údajov, Námietku proti spracovaniu, a Odvolanie súhlasu kedykoľvek. Pre uplatnenie týchto práv nás kontaktujte na hello@mpdigitalsolutions.com."
          },
          {
            title: "6. Kontakt",
            content: "V prípade akýchkoľvek otázok ohľadom týchto zásad ochrany súkromia alebo našich postupov pri spracovaní údajov nás prosím kontaktujte na: hello@mpdigitalsolutions.com"
          }
        ]
      },
      termsOfService: {
        title: "Obchodné podmienky",
        lastUpdated: "Posledná aktualizácia: Január 2026",
        sections: [
          {
            title: "1. Všeobecné ustanovenia",
            content: "Tieto Obchodné podmienky upravujú používanie webovej stránky a služieb MP Digital Solutions. Prístupom na našu webovú stránku alebo používaním našich služieb súhlasíte s týmito podmienkami. Ak nesúhlasíte, prosím nepoužívajte naše služby."
          },
          {
            title: "2. Popis služieb",
            content: "MP Digital Solutions poskytuje služby AI automatizácie a integrácie workflow, vrátane ale nie výlučne: konzultačné a auditové služby, vývoj vlastných n8n workflow, implementácia AI agentov, a priebežná údržba a podpora. Konkrétne výstupy a rozsah sú definované v jednotlivých projektových dohodách."
          },
          {
            title: "3. Zodpovednosť",
            content: "Naše služby sú poskytované \"tak ako sú\" bez akýchkoľvek záruk. Nenesieme zodpovednosť za žiadne nepriame, náhodné, špeciálne alebo následné škody vyplývajúce z používania našich služieb. Naša celková zodpovednosť nepresiahne sumu zaplatenú za konkrétnu službu."
          },
          {
            title: "4. Duševné vlastníctvo",
            content: "Po úplnej úhrade vlastníte vlastné workflow a konfigurácie, ktoré pre vás vytvoríme. Môžete ich slobodne exportovať, upravovať a používať. Vyhradzujeme si právo opätovne použiť všeobecné metodológie, techniky a nechránené komponenty v budúcich projektoch. Obsah našej webovej stránky, značka a vlastné nástroje zostávajú naším duševným vlastníctvom."
          },
          {
            title: "5. Záverečné ustanovenia",
            content: "Tieto podmienky sa riadia zákonmi Slovenskej republiky. Akékoľvek spory budú riešené príslušnými súdmi Slovenskej republiky. Vyhradzujeme si právo tieto podmienky kedykoľvek upraviť. Pokračovaním v používaní našich služieb po zmenách vyjadrujete súhlas s novými podmienkami."
          }
        ]
      }
    }
  }
};