import React from 'react';
import { ArrowRight, CheckSquare } from 'lucide-react';
import { Content } from '../types';

interface ServicesProps {
  content: Content['services'];
}

const Services: React.FC<ServicesProps> = ({ content }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="bg-black-900 border-t border-gray-800">
      <div className="grid lg:grid-cols-2 max-w-[1400px] mx-auto min-h-screen">
        {/* Left: Title sticky */}
        <div className="p-8 lg:p-16 lg:sticky lg:top-0 h-fit lg:h-screen lg:flex lg:flex-col lg:justify-between border-b lg:border-b-0 lg:border-r border-gray-800">
          <div>
            <span className="font-mono text-xs text-brand uppercase tracking-widest mb-4 block">
              [03] Capabilities
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-8">
              {content.title}
            </h2>
            <p className="text-xl text-gray-400 max-w-md">
              {content.subtitle}
            </p>
          </div>
          <div className="hidden lg:block">
             <div className="w-16 h-16 bg-brand flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-black" />
             </div>
          </div>
        </div>

        {/* Right: Cards */}
        <div className="bg-black">
          {content.cards.map((card, idx) => (
            <div 
              key={idx}
              className={`p-8 lg:p-16 border-b border-gray-800 group transition-all duration-300 ${
                card.highlight ? 'bg-gray-900/30' : 'bg-black'
              }`}
            >
              <div className="flex justify-between items-start mb-8">
                 <h3 className="text-3xl md:text-4xl font-bold text-white uppercase">
                  {card.title}
                </h3>
                {card.highlight && (
                  <span className="font-mono text-xs bg-brand text-black px-2 py-1 uppercase font-bold">
                    Recommended
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                {card.description}
              </p>
              
              <div className="space-y-3 mb-10">
                {card.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-4 group-hover:translate-x-2 transition-transform duration-200">
                    <CheckSquare className="w-5 h-5 text-gray-600 group-hover:text-brand transition-colors" />
                    <span className="text-gray-300 font-mono text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gray-900 border border-gray-800 mb-8">
                <span className="block text-xs font-mono text-gray-500 uppercase mb-2">
                  {card.deliverablesLabel}
                </span>
                <p className="text-white text-sm font-medium">
                  {card.deliverables}
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-4 text-center font-bold uppercase tracking-wider transition-colors border ${
                  card.highlight
                    ? 'bg-white text-black border-white hover:bg-brand hover:border-brand'
                    : 'text-white border-gray-700 hover:border-white'
                }`}
              >
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;