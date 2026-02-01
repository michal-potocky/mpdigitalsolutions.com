import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Content } from '../types';

interface TermsOfServiceProps {
  content: Content['legalPages'];
  footerContent: Content['footer'];
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ content, footerContent }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-lg font-bold tracking-tighter">
              MP_DIGITAL_SOLUTIONS
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {content.backToHome}
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">{content.termsOfService.title}</h1>
        <p className="text-gray-500 text-sm mb-12">{content.termsOfService.lastUpdated}</p>

        <div className="space-y-8">
          {content.termsOfService.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-3 text-white">{section.title}</h2>
              <p className="text-gray-400 leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white border-t border-gray-800 mt-16">
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-lg font-bold tracking-tighter">MP_DIGITAL_SOLUTIONS</span>
            <p className="font-mono text-xs text-gray-600">
              &copy; {new Date().getFullYear()} MPDS. {footerContent.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
