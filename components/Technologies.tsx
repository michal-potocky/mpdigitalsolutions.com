import React from 'react';
import { Content } from '../types';

interface TechnologiesProps {
  content: Content['technologies'];
}

// SVG icons for each technology
const techIcons: Record<string, React.ReactNode> = {
  n8n: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 4.8v4.8H6v2.4h4.8v4.8h2.4v-4.8H18v-2.4h-4.8V7.2h-2.4z"/>
    </svg>
  ),
  OpenAI: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  ),
  Claude: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  "Google Workspace": (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
    </svg>
  ),
  Slack: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/>
    </svg>
  ),
  HubSpot: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M18.164 7.93V5.084a2.198 2.198 0 001.267-1.984v-.066A2.2 2.2 0 0017.23.836h-.065a2.2 2.2 0 00-2.199 2.198v.066c0 .87.507 1.617 1.24 1.974v2.862a6.27 6.27 0 00-2.878 1.465l-7.637-5.95a2.596 2.596 0 00.087-.639 2.587 2.587 0 10-2.587 2.587c.448 0 .864-.12 1.23-.317l7.49 5.835a6.298 6.298 0 00-.265 1.804 6.333 6.333 0 00.282 1.86l-2.616 1.624a2.47 2.47 0 00-1.603-.592 2.507 2.507 0 00-2.5 2.5 2.507 2.507 0 002.5 2.5 2.507 2.507 0 002.5-2.5c0-.28-.048-.549-.134-.802l2.538-1.575A6.31 6.31 0 1018.164 7.93zm-1.002 9.52a3.354 3.354 0 110-6.71 3.354 3.354 0 010 6.71z"/>
    </svg>
  ),
  Supabase: (
    <svg viewBox="0 0 24 24" className="w-10 h-10" fill="currentColor">
      <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C-.33 13.427.65 15.455 2.409 15.455h9.579l.113 7.51c.014.985 1.259 1.408 1.873.636l9.262-11.653c1.093-1.375.113-3.403-1.645-3.403h-9.642l-.06-7.51z"/>
    </svg>
  ),
};

const Technologies: React.FC<TechnologiesProps> = ({ content }) => {
  return (
    <section id="technologies" className="bg-slate-950 border-t border-gray-800 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand uppercase tracking-widest mb-4 block">
            [05] Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {content.items.map((tech, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center p-6 bg-gray-900/30 border border-gray-800 hover:border-brand/50 hover:bg-gray-900/50 transition-all duration-300 rounded-lg"
            >
              <div className="text-gray-400 group-hover:text-brand transition-colors mb-4">
                {techIcons[tech.name] || (
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                    {tech.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="text-white font-semibold text-sm text-center mb-1">
                {tech.name}
              </h3>
              <p className="text-gray-500 text-xs text-center">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
