import React, { useState, FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Content } from '../types';

interface ContactFormProps {
  content: Content['contact'];
}

const ContactForm: React.FC<ContactFormProps> = ({ content }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-24 bg-brand text-black min-h-[50vh] flex items-center justify-center">
        <div className="max-w-xl text-center">
          <h2 className="text-6xl font-bold uppercase mb-6 tracking-tighter">Request Received</h2>
          <p className="text-xl font-medium mb-8">We will be in touch within 24 hours.</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="text-sm font-mono uppercase underline hover:text-white transition-colors"
          >
            Send another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="grid lg:grid-cols-2 min-h-screen border-t border-gray-800 bg-black-900">
      {/* Left Content */}
      <div className="p-8 lg:p-20 border-b lg:border-b-0 lg:border-r border-gray-800 flex flex-col justify-center">
        <span className="font-mono text-xs text-brand uppercase tracking-widest mb-6 block">
          [05] Start Now
        </span>
        <h2 className="text-5xl lg:text-7xl font-bold text-white uppercase tracking-tighter mb-6">
          {content.title}
        </h2>
        <p className="text-xl text-gray-400 max-w-md leading-relaxed mb-12">
          {content.subtitle}
        </p>
        
        <div className="hidden lg:block">
          <div className="flex items-center gap-4 text-gray-500 font-mono text-xs uppercase">
            <span>Secure Data</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>NDA Available</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>No Commitment</span>
          </div>
        </div>
      </div>

      {/* Right Form */}
      <div className="p-8 lg:p-20 bg-black flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase">{content.fields.name}</label>
              <input type="text" required className="w-full bg-black border border-gray-800 p-4 text-white focus:border-brand outline-none transition-colors rounded-none placeholder-gray-800" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-500 uppercase">{content.fields.email}</label>
              <input type="email" required className="w-full bg-black border border-gray-800 p-4 text-white focus:border-brand outline-none transition-colors rounded-none placeholder-gray-800" placeholder="john@company.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-500 uppercase">{content.fields.company}</label>
            <input type="text" required className="w-full bg-black border border-gray-800 p-4 text-white focus:border-brand outline-none transition-colors rounded-none placeholder-gray-800" placeholder="Company Ltd." />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-500 uppercase">{content.fields.topic}</label>
            <select className="w-full bg-black border border-gray-800 p-4 text-white focus:border-brand outline-none transition-colors rounded-none appearance-none cursor-pointer">
              <option value="lead">{content.fields.topicOptions.lead}</option>
              <option value="invoice">{content.fields.topicOptions.invoice}</option>
              <option value="crm">{content.fields.topicOptions.crm}</option>
              <option value="other">{content.fields.topicOptions.other}</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono text-gray-500 uppercase">{content.fields.message}</label>
            <textarea required rows={4} className="w-full bg-black border border-gray-800 p-4 text-white focus:border-brand outline-none transition-colors rounded-none resize-none placeholder-gray-800" placeholder="Describe your process..."></textarea>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <div className="relative flex items-start">
              <input id="consent" type="checkbox" required className="peer h-5 w-5 border border-gray-700 bg-black text-brand focus:ring-0 rounded-none cursor-pointer appearance-none checked:bg-brand checked:border-brand" />
              <Check className="w-4 h-4 text-black absolute top-0.5 left-0.5 pointer-events-none opacity-0 peer-checked:opacity-100" />
            </div>
            <label htmlFor="consent" className="text-xs text-gray-500 cursor-pointer select-none">
              {content.fields.consent}
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black font-bold uppercase tracking-wider py-5 hover:bg-brand transition-colors flex items-center justify-center gap-2 group mt-6"
          >
            {isSubmitting ? content.submitting : content.submit}
            {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;