import React from 'react';
import { CheckSquare } from 'lucide-react';
import { Content } from '../types';

interface UseCasesProps {
  content: Content['useCases'];
}

const UseCases: React.FC<UseCasesProps> = ({ content }) => {
  const mainCase = content.cases.find((c) => c.isMain);
  const secondaryCase = content.cases.find((c) => !c.isMain);

  return (
    <section id="use-cases" className="py-24 bg-bone text-black relative">
      {/* Light Grid Background */}
      <div className="absolute inset-0 bg-grid-black opacity-[0.05] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-300 pb-8">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2 block">
              [02] Key Solutions
            </span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">
              {content.title}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-md mt-4 md:mt-0 font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {/* Main Card */}
          {mainCase && (
            <div className="bg-white border border-gray-200 border-l-4 border-l-brand-dark p-8 lg:p-12">
              {mainCase.subtitle && (
                <span className="inline-block px-3 py-1 bg-green-50 text-green-800 text-xs font-mono uppercase mb-6">
                  {mainCase.subtitle}
                </span>
              )}
              <h3 className="text-3xl font-bold mb-8 uppercase text-brand-dark">
                {mainCase.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Left column: Problem + Solution */}
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-2 block">
                      Problem
                    </span>
                    {mainCase.problem.split('\n\n').map((para, i) => (
                      <p key={i} className="text-gray-800 leading-relaxed mb-2">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right column: Results + Suitable For */}
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-3 block">
                      Results
                    </span>
                    <ul className="space-y-2">
                      {mainCase.results.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckSquare className="w-4 h-4 text-brand-dark mt-0.5 flex-shrink-0" />
                          <span className="text-gray-800">{r}</span>
                        </li>
                      ))}
                    </ul>
                    {mainCase.resultSummary && (
                      <p className="font-mono text-sm font-bold text-brand-dark mt-4">
                        {mainCase.resultSummary}
                      </p>
                    )}
                  </div>

                  {mainCase.suitableFor && mainCase.suitableFor.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-3 block">
                        Suitable For
                      </span>
                      <ul className="space-y-1">
                        {mainCase.suitableFor.map((s, i) => (
                          <li key={i} className="text-gray-700 text-sm">
                            • {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Secondary Card */}
          {secondaryCase && (
            <div className="bg-bone border border-gray-200 border-l-4 border-l-amber-500 p-8 lg:p-10">
              {secondaryCase.subtitle && (
                <span className="inline-block px-3 py-1 bg-amber-50 text-amber-800 text-xs font-mono uppercase mb-4">
                  {secondaryCase.subtitle}
                </span>
              )}
              <h3 className="text-2xl font-bold mb-6 uppercase">
                {secondaryCase.title}
              </h3>

              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {/* Column 1: Problem */}
                <div>
                  <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-2 block">
                    Problem
                  </span>
                  {secondaryCase.problem.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-800 leading-relaxed mb-2">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Column 2: Solution bullets */}
                <div>
                  <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-2 block">
                    Solution
                  </span>
                  <ul className="space-y-2">
                    {secondaryCase.solution.split('\n').map((line, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckSquare className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-sm">{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 3: Results */}
                <div>
                  <span className="font-mono text-xs font-bold text-gray-400 uppercase mb-2 block">
                    Results
                  </span>
                  <ul className="space-y-2">
                    {secondaryCase.results.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckSquare className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-800 text-sm">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Note warning box */}
              {secondaryCase.note && (
                <div className="mt-6 px-4 py-3 bg-amber-50 border border-amber-200 rounded text-sm text-amber-800">
                  ⚠ {secondaryCase.note}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
