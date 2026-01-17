import React from 'react';
import { ArrowRight, CheckSquare, Phone, Video } from 'lucide-react';
import { Content } from '../types';

interface HowItWorksProps {
  content: Content['howItWorks'];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ content }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="bg-black text-white border-t border-gray-800">
       <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12">
          
          {/* Title Section (Sticky on Desktop) */}
          <div className="lg:col-span-4 p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-800 lg:sticky lg:top-0 h-fit">
            <span className="font-mono text-xs text-brand uppercase tracking-widest mb-6 block">
              [03] Process
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter mb-8">
              {content.title}
            </h2>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-8">
            
            {/* Phase 1: Analysis */}
            <div className="p-8 lg:p-16 border-b border-gray-800 bg-gray-900/20">
               <h3 className="text-2xl font-bold uppercase mb-10 text-brand tracking-tight">
                 {content.phase1.title}
               </h3>

               <div className="grid md:grid-cols-2 gap-12 mb-12">
                  {/* Step 1 */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <h4 className="font-bold text-lg uppercase tracking-wide">{content.phase1.step1.title}</h4>
                    </div>
                    <ul className="space-y-3 pl-4 border-l border-gray-800">
                      {content.phase1.step1.bullets.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                          <CheckSquare className="w-5 h-5 text-brand flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Step 2 */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Video className="w-5 h-5 text-gray-400" />
                      <h4 className="font-bold text-lg uppercase tracking-wide">{content.phase1.step2.title}</h4>
                    </div>
                    <ul className="space-y-3 pl-4 border-l border-gray-800">
                      {content.phase1.step2.bullets.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                           <CheckSquare className="w-5 h-5 text-brand flex-shrink-0" />
                           <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
               </div>

               <button 
                  onClick={scrollToContact}
                  className="group bg-brand text-black px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors duration-200"
               >
                  {content.phase1.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>

            {/* Phase 2: Development */}
             <div className="p-8 lg:p-16">
               <h3 className="text-2xl font-bold uppercase mb-2 tracking-tight text-white">
                 {content.phase2.title}
               </h3>
               <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-10">
                 {content.phase2.subtitle}
               </p>
               
               <div className="space-y-6">
                  {content.phase2.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                       <CheckSquare className="w-5 h-5 text-brand flex-shrink-0" />
                       <span className="text-lg font-bold text-gray-300 group-hover:text-white transition-colors uppercase tracking-wide">
                         {step}
                       </span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

       </div>
    </section>
  );
};

export default HowItWorks;