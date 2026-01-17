import React from 'react';
import { Play, Youtube } from 'lucide-react';
import { Content } from '../types';

interface YouTubeSectionProps {
  content: Content['youtube'];
}

const YouTubeSection: React.FC<YouTubeSectionProps> = ({ content }) => {
  const hasVideos = content.videoIds && content.videoIds.length > 0;

  return (
    <section id="youtube" className="bg-slate-950 border-t border-gray-800 py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-brand uppercase tracking-widest mb-4 block">
            [07] Videos
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white uppercase tracking-tighter mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {hasVideos ? (
          <div className={`grid gap-6 ${
            content.videoIds.length === 1
              ? 'max-w-3xl mx-auto'
              : content.videoIds.length === 2
                ? 'md:grid-cols-2 max-w-5xl mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {content.videoIds.map((videoId, idx) => (
              <div
                key={idx}
                className="relative aspect-video bg-gray-900 border border-gray-800 rounded-lg overflow-hidden group"
              >
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Video ${idx + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-12 text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Youtube className="w-10 h-10 text-gray-500" />
              </div>
              <p className="text-xl text-gray-400 mb-6">
                {content.comingSoon}
              </p>
              <a
                href="https://youtube.com/@mpdigitalsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Play className="w-5 h-5" />
                Subscribe on YouTube
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeSection;
