import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { content as contentDictionary } from './content';
import { Language } from './types';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Proof from './components/Proof';
import Technologies from './components/Technologies';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Pages
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Home page component
const HomePage: React.FC<{
  content: typeof contentDictionary.en;
  lang: Language;
  setLang: (lang: Language) => void;
}> = ({ content, lang, setLang }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-brand-500 selection:text-white">
      <Header content={content.nav} lang={lang} setLang={setLang} />

      <main className="relative">
        <Hero content={content.hero} />
        <Proof content={content.proof} />
        <UseCases content={content.useCases} />
        <HowItWorks content={content.howItWorks} />
        <FAQ content={content.faq} />
        <Technologies content={content.technologies} />
        <ContactForm content={content.contact} />
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

const App: React.FC = () => {
  // Simple state for language - defaults to English
  const [lang, setLang] = useState<Language>('en');

  const content = contentDictionary[lang];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage content={content} lang={lang} setLang={setLang} />} />
        <Route
          path="/privacy"
          element={<PrivacyPolicy content={content.legalPages} footerContent={content.footer} />}
        />
        <Route
          path="/terms"
          element={<TermsOfService content={content.legalPages} footerContent={content.footer} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;