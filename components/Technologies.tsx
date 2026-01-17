import React from 'react';
import { Content } from '../types';

interface TechnologiesProps {
  content: Content['technologies'];
}

const Technologies: React.FC<TechnologiesProps> = ({ content }) => {
  return (
    <section className="py-20 bg-black-900 border-b border-gray-800">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="font-mono text-brand text-xs uppercase tracking-widest mb-4 block">
            [Tech Stack]
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            {content.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-4 border border-gray-800 bg-black-800/50 hover:border-brand transition-colors duration-200"
            >
              <span className="font-bold text-white">{item.name}</span>
              <span className="text-gray-500 text-sm ml-2">/ {item.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
