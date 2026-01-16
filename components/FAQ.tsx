import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Content } from '../types';

interface FAQProps {
  content: Content['faq'];
}

const FAQ: React.FC<FAQProps> = ({ content }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-bone text-black border-t border-black">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 min-h-[600px]">
        
        <div className="lg:col-span-4 p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-gray-300">
           <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-6 block">
              [Info]
            </span>
          <h2 className="text-5xl font-bold uppercase tracking-tighter">
            {content.title}
          </h2>
        </div>

        <div className="lg:col-span-8">
          {content.items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-300 last:border-b-0 bg-bone transition-colors hover:bg-white">
              <button
                onClick={() => toggle(idx)}
                className="w-full px-8 lg:px-12 py-8 flex justify-between items-center text-left focus:outline-none group"
              >
                <span className="text-xl font-bold uppercase tracking-tight group-hover:text-brand-dark transition-colors pr-8">
                  {item.q}
                </span>
                {openIndex === idx ? (
                  <Minus className="w-6 h-6 text-brand-dark flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-400 flex-shrink-0 group-hover:text-black transition-colors" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 lg:px-12 pb-8 text-gray-700 leading-relaxed max-w-2xl font-medium">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;