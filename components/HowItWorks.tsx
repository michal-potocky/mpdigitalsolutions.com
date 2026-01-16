import React from 'react';
import { Content } from '../types';

interface HowItWorksProps {
  content: Content['howItWorks'];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ content }) => {
  return (
    <section id="how-it-works" className="bg-black text-white border-t border-gray-800">
       <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2">
          
          <div className="p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-800">
            <span className="font-mono text-xs text-brand uppercase tracking-widest mb-6 block">
              [04] Process
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-8">
              {content.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2">
            {/* Phase A */}
            <div className="p-8 lg:p-12 border-b md:border-b-0 border-r border-gray-800 hover:bg-gray-900/20 transition-colors">
               <span className="block text-6xl font-bold text-gray-800 mb-6">A</span>
               <h3 className="text-xl font-bold uppercase mb-2">{content.phaseA.title}</h3>
               <p className="text-sm font-mono text-gray-500 mb-8">{content.phaseA.subtitle}</p>
               <ul className="space-y-4">
                  {content.phaseA.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <span className="font-mono text-brand text-xs mt-1">0{i+1}</span>
                       <span className="text-gray-300 font-medium">{step}</span>
                    </li>
                  ))}
               </ul>
            </div>

            {/* Phase B */}
             <div className="p-8 lg:p-12 hover:bg-gray-900/20 transition-colors">
               <span className="block text-6xl font-bold text-gray-800 mb-6">B</span>
               <h3 className="text-xl font-bold uppercase mb-2">{content.phaseB.title}</h3>
               <p className="text-sm font-mono text-gray-500 mb-8">{content.phaseB.subtitle}</p>
               <ul className="space-y-4">
                  {content.phaseB.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                       <span className="font-mono text-brand text-xs mt-1">0{i+1}</span>
                       <span className="text-gray-300 font-medium">{step}</span>
                    </li>
                  ))}
               </ul>
            </div>
          </div>

       </div>
    </section>
  );
};

export default HowItWorks;