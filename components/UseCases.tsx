import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Content } from '../types';

interface UseCasesProps {
  content: Content['useCases'];
}

const UseCases: React.FC<UseCasesProps> = ({ content }) => {
  return (
    <section id="use-cases" className="py-24 bg-bone text-black relative">
       {/* Light Grid Background */}
      <div className="absolute inset-0 bg-grid-black opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-300 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 block">
              [02] Real World Applications
            </span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-md mt-4 md:mt-0 font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-gray-300 border border-gray-300">
          {content.cases.map((useCase, idx) => (
            <div key={idx} className="bg-bone p-8 lg:p-12 hover:bg-white transition-all group relative">
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-brand-dark" />
              </div>
              
              <div className="mb-12">
                <span className="inline-block px-3 py-1 bg-gray-200 text-xs font-mono uppercase mb-6">
                  {useCase.sector}
                </span>
                <h3 className="text-3xl font-bold mb-2 uppercase group-hover:text-brand-dark transition-colors">
                  {useCase.title}
                </h3>
              </div>

              <div className="grid gap-6">
                <div>
                   <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-1 block">Problem</span>
                   <p className="text-gray-800 leading-relaxed">{useCase.problem}</p>
                </div>
                <div>
                   <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-1 block">Solution</span>
                   <p className="text-gray-800 leading-relaxed">{useCase.solution}</p>
                </div>
                <div className="pt-6 border-t border-gray-200 mt-2">
                   <p className="font-mono text-sm font-bold text-brand-dark">
                    {useCase.result}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;