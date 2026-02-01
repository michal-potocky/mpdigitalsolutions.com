import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-800">

          {/* Brand */}
          <div className="p-8 lg:p-12">
            <span className="text-lg font-bold tracking-tighter mb-4 block">
              MP_DIGITAL_SOLUTIONS
            </span>
            <p className="text-sm text-gray-500 font-mono max-w-xs">
              {content.summary}
            </p>
          </div>

          {/* Socials */}
          <div className="p-8 lg:p-12 flex flex-col justify-between">
            <span className="font-mono text-xs text-gray-500 uppercase mb-4 block">Connect</span>
            <div className="space-y-4">
              <a href="https://www.linkedin.com/in/michal-potocky-a2b48b3a8/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group">
                <span className="text-lg font-bold uppercase group-hover:text-brand transition-colors">LinkedIn</span>
                <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-brand" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="p-8 lg:p-12 flex flex-col justify-end">
            <p className="font-mono text-xs text-gray-600">
              &copy; {new Date().getFullYear()} MPDS. {content.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;