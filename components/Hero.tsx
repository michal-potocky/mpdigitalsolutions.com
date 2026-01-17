import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Parse headline to highlight text in [brackets] with brand color (brackets hidden)
  const renderHeadline = (text: string) => {
    const parts = text.split(/(\[[^\]]+\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        // Remove brackets and show in brand color
        return <span key={i} className="text-brand">{part.slice(1, -1)}</span>;
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

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-12 gap-12 items-end pb-20">

        {/* Left Content */}
        <div className="lg:col-span-8">
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

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
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

        {/* Right Content / Visual */}
        <div className="lg:col-span-4 lg:border-l lg:border-gray-800 lg:pl-12">
            <div className="space-y-8">
              <div className="p-6 border border-gray-800 bg-black-800/50 backdrop-blur-sm">
                <span className="block font-mono text-xs text-gray-500 mb-2 uppercase">Current Efficiency</span>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold text-white">45%</span>
                  <span className="text-red-500 text-sm mb-1">Low</span>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div className="bg-red-500 h-1 w-[45%]"></div>
                </div>
              </div>

              <div className="p-6 border border-brand bg-brand/5 backdrop-blur-sm relative overflow-hidden group cursor-pointer hover:bg-brand/10 transition-colors">
                <div className="absolute top-0 right-0 p-2 opacity-50">
                    <Play className="w-12 h-12 text-brand" />
                </div>
                <span className="block font-mono text-xs text-brand mb-2 uppercase">Projected Efficiency</span>
                 <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold text-brand">[10X]</span>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div className="bg-brand h-1 w-full animate-pulse"></div>
                </div>
                <p className="mt-4 text-xs text-gray-400 font-mono">
                  {content.bullets[0]}
                </p>
              </div>

               <div className="pt-8 border-t border-gray-800">
                <p className="font-mono text-xs text-gray-500 mb-2">{content.promise}</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;