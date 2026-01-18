import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parse headline to highlight text in [brackets] with brand color (brackets visible)
  const renderHeadline = (text: string) => {
    const parts = text.split(/(\[[^\]]+\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        // Show brackets in brand color
        return <span key={i} className="text-brand">{part}</span>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 bg-black-900 border-b border-gray-800">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.05] pointer-events-none"></div>

      {/* Vertical Lines */}
      <div className="absolute inset-0 max-w-[1400px] mx-auto border-x border-gray-800/50 pointer-events-none hidden md:block">
        <div className="absolute left-1/3 h-full w-px bg-gray-800/30"></div>
        <div className="absolute right-1/3 h-full w-px bg-gray-800/30"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-20">

        {/* Main Content */}
        <div className="text-center flex flex-col items-center">
          {/* Tag */}
          <div className="mb-8 animate-fade-in-up">
            <span className="font-mono text-brand text-xs uppercase tracking-widest">
              [01] Eliminating Bottlenecks
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white tracking-tighter leading-[0.9] mb-10 uppercase">
            {renderHeadline(content.headline)}
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl font-light leading-relaxed">
            {content.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-brand transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                {content.ctaPrimary}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button
              onClick={() => scrollTo('use-cases')}
              className="px-8 py-4 border border-gray-700 text-gray-300 font-mono text-sm uppercase hover:border-brand hover:text-brand transition-colors duration-200"
            >
              {content.ctaSecondary}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;