import React, { useState } from 'react';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { Content, Language } from '../types';

interface HeaderProps {
  content: Content['nav'];
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ content, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const NavLink = ({ to, label, primary = false }: { to: string; label: string; primary?: boolean }) => (
    <button
      onClick={() => scrollToSection(to)}
      className={`text-xs uppercase tracking-wider font-mono transition-colors duration-200 ${
        primary
          ? 'bg-brand text-black px-5 py-2 hover:bg-white w-full md:w-auto font-bold flex items-center justify-center gap-2'
          : 'text-gray-400 hover:text-brand block py-2 md:py-0'
      }`}
    >
      {label}
      {primary && <ArrowRight className="w-4 h-4" />}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black-900/90 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center h-16 px-4 md:px-8">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <span className="text-lg font-bold text-white tracking-tighter group-hover:text-brand transition-colors">
              MP_DIGITAL<span className="text-gray-600">_SOLUTIONS</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <div className="flex space-x-8 mr-8 border-r border-gray-800 pr-8 h-8 items-center">
              <NavLink to="use-cases" label={content.useCases} />
              <NavLink to="how-it-works" label={content.process} />
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                className="flex items-center space-x-1 text-xs font-mono font-bold text-gray-500 hover:text-white transition-colors"
              >
                <span>[{lang.toUpperCase()}]</span>
              </button>
              <NavLink to="contact" label={content.contact} primary />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
             <button
                onClick={() => setLang(lang === 'en' ? 'sk' : 'en')}
                className="text-xs font-mono text-gray-400"
              >
                [{lang.toUpperCase()}]
              </button>
            <button
              onClick={toggleMenu}
              className="text-white hover:text-brand focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 absolute w-full h-screen">
          <div className="px-4 pt-8 pb-6 space-y-6">
            <NavLink to="use-cases" label={content.useCases} />
            <NavLink to="how-it-works" label={content.process} />
            <NavLink to="faq" label={content.faq} />
            <div className="pt-8 border-t border-gray-800">
              <NavLink to="contact" label={content.contact} primary />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;