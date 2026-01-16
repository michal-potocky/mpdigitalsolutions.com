import React from 'react';
import { Content } from '../types';

interface ProofProps {
  content: Content['proof'];
}

const Proof: React.FC<ProofProps> = ({ content }) => {
  return (
    <section className="bg-brand text-black border-y border-black">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black">
          {content.expectations.items.map((item, idx) => {
            return (
              <div key={idx} className="p-8 lg:p-12 group hover:bg-white transition-colors duration-300">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider mb-4 block opacity-60">
                      [0{idx + 1}] {item.title}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 uppercase leading-tight tracking-tight">
                        {item.title === 'Speed' && '7 Days'}
                        {item.title === 'Clarity' && 'No Hidden Fees'}
                        {item.title === 'Ownership' && '100% Yours'}
                        {(item.title === 'Rýchlosť') && '7 Dní'}
                        {(item.title === 'Jasnosť') && 'Fixná Cena'}
                        {(item.title === 'Vlastníctvo') && '100% Vaše'}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base font-medium leading-relaxed border-t border-black/10 pt-4 mt-4">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Proof;