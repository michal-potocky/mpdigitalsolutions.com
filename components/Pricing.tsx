import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Content } from '../types';

interface PricingProps {
  content: Content['pricing'];
}

const Pricing: React.FC<PricingProps> = ({ content }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="bg-black border-t border-gray-800 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand uppercase tracking-widest mb-4 block">
            [06] Pricing
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 border rounded-lg transition-all duration-300 ${
                idx === 0
                  ? 'bg-brand/10 border-brand/50 hover:border-brand'
                  : 'bg-gray-900/30 border-gray-800 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-4">
                <Check className={`w-5 h-5 ${idx === 0 ? 'text-brand' : 'text-gray-500'}`} />
                <h3 className="text-white font-semibold">{item.name}</h3>
              </div>
              <div className="mb-4">
                <span className={`text-3xl font-bold ${idx === 0 ? 'text-brand' : 'text-white'}`}>
                  {item.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-brand transition-colors"
          >
            {content.cta}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
