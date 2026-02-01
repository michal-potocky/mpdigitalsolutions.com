export type Language = 'en' | 'sk';

export interface Content {
  nav: {
    useCases: string;
    process: string;
    faq: string;
    contact: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bullets: string[];
    promise: string;
  };
  proof: {
    label: string;
    expectations: {
      title: string;
      items: { title: string; desc: string }[];
    };
    testimonialPlaceholder: string;
  };
  useCases: {
    title: string;
    subtitle: string;
    cases: {
      title: string;
      subtitle?: string;
      isMain?: boolean;
      problem: string;
      solution: string;
      results: string[];
      resultSummary?: string;
      suitableFor?: string[];
      note?: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      highlight?: boolean;
      description: string;
      features: string[];
      deliverablesLabel: string;
      deliverables: string;
      cta: string;
    }[];
  };
  technologies: {
    title: string;
    subtitle: string;
    items: { name: string; description: string }[];
  };
  howItWorks: {
    title: string;
    cta: string;
    phases: {
      title: string;
      subtitle: string;
      whatWeDoLabel?: string;
      whatWeDo?: string[];
      stepsLabel?: string;
      steps?: { title: string; bullets?: string[] }[];
      extraLabel?: string;
      extra?: string[];
    }[];
  };
  youtube: {
    title: string;
    subtitle: string;
    videoIds: string[];
    comingSoon: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      company: string;
      employeeCount: string;
      employeeCountOptions: {
        one: string;
        twoToFive: string;
        sixToTen: string;
        elevenToTwentyFive: string;
        twentySixToFifty: string;
        fiftyOneToTwoHundred: string;
        twoHundredPlus: string;
      };
      timeline: string;
      timelineOptions: {
        asap: string;
        threeMonths: string;
        sixMonths: string;
        researching: string;
      };
      tools: string;
      toolsPlaceholder: string;
      message: string;
      consent: string;
    };
    submit: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    directEmail: string;
  };
  footer: {
    summary: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  legalPages: {
    backToHome: string;
    privacyPolicy: {
      title: string;
      lastUpdated: string;
      sections: {
        title: string;
        content: string;
      }[];
    };
    termsOfService: {
      title: string;
      lastUpdated: string;
      sections: {
        title: string;
        content: string;
      }[];
    };
  };
}