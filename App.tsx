import React, { useState, useEffect } from 'react';
import { content as contentDictionary } from './content';
import { Language } from './types';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Proof from './components/Proof';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Simple state for language - defaults to English
  const [lang, setLang] = useState<Language>('en');

  // Basic scroll restoration on reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = contentDictionary[lang];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      <Header content={content.nav} lang={lang} setLang={setLang} />
      
      <main className="relative">
        <Hero content={content.hero} />
        <Proof content={content.proof} />
        <UseCases content={content.useCases} />
        <HowItWorks content={content.howItWorks} />
        <FAQ content={content.faq} />
        <ContactForm content={content.contact} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

export default App;