export type Language = 'en' | 'sk';

export interface Content {
  nav: {
    services: string;
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
  services: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      description: string;
      features: string[];
      deliverablesLabel: string;
      deliverables: string;
      cta: string;
      highlight?: boolean;
    }[];
  };
  useCases: {
    title: string;
    subtitle: string;
    cases: {
      title: string;
      sector: string;
      problem: string;
      solution: string;
      result: string;
    }[];
  };
  howItWorks: {
    title: string;
    phaseA: {
      title: string;
      subtitle: string;
      steps: string[];
    };
    phaseB: {
      title: string;
      subtitle: string;
      steps: string[];
    };
  };
  technologies: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      description: string;
    }[];
  };
  youtube: {
    title: string;
    subtitle: string;
    comingSoon: string;
    videoIds: string[];
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
      topic: string;
      topicOptions: {
        lead: string;
        invoice: string;
        crm: string;
        other: string;
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
  };
  footer: {
    summary: string;
    privacy: string;
    rights: string;
  };
}