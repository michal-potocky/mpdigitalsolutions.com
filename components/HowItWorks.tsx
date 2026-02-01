import React from 'react';
import { ArrowRight, CheckSquare } from 'lucide-react';
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
       <div className="max-w-[1400px] mx-auto">

          {/* Title Section */}
          <div className="p-8 lg:p-20 border-b border-gray-800">
            <span className="font-mono text-xs text-brand uppercase tracking-widest mb-6 block">
              [03] Process
            </span>
            <h2 className="text-5xl lg:text-7xl font-bold uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>

          {/* Phases Grid — 1 col mobile, 3 cols desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {content.phases.map((phase, phaseIndex) => (
              <div
                key={phaseIndex}
                className={`p-8 lg:p-10 border-b lg:border-b-0 border-gray-800 ${phaseIndex < content.phases.length - 1 ? 'lg:border-r' : ''} ${phaseIndex === 0 ? 'bg-gray-900/20' : ''}`}
              >
                {/* Phase Title & Subtitle */}
                <h3 className="text-xl font-bold uppercase mb-2 text-brand tracking-tight">
                  {phase.title}
                </h3>
                <p className="font-mono text-xs text-gray-500 uppercase tracking-widest mb-8">
                  {phase.subtitle}
                </p>

                {/* What We Do */}
                {phase.whatWeDo && phase.whatWeDo.length > 0 && (
                  <div className="mb-8">
                    {phase.whatWeDoLabel && (
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                        {phase.whatWeDoLabel}
                      </h4>
                    )}
                    <ul className="space-y-3">
                      {phase.whatWeDo.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                          <CheckSquare className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Steps (if present) */}
                {phase.steps && phase.steps.length > 0 && (
                  <div className="mb-8">
                    {phase.stepsLabel && (
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                        {phase.stepsLabel}
                      </h4>
                    )}
                    <div className="space-y-5">
                      {phase.steps.map((step, i) => (
                        <div key={i}>
                          <span className="font-bold text-sm text-white uppercase tracking-wide">
                            {step.title}
                          </span>
                          {step.bullets && step.bullets.length > 0 && (
                            <ul className="space-y-2 mt-2 pl-4 border-l border-gray-800">
                              {step.bullets.map((bullet, j) => (
                                <li key={j} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                  <CheckSquare className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Extra (if present) */}
                {phase.extra && phase.extra.length > 0 && (
                  <div>
                    {phase.extraLabel && (
                      <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                        {phase.extraLabel}
                      </h4>
                    )}
                    <ul className="space-y-3">
                      {phase.extra.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                          <CheckSquare className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button — after all phases */}
          <div className="p-8 lg:p-12 border-t border-gray-800 flex justify-center">
            <button
              onClick={scrollToContact}
              className="group bg-brand text-black px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-white transition-colors duration-200"
            >
              {content.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

       </div>
    </section>
  );
};

export default HowItWorks;
