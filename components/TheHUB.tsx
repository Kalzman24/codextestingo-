
import React from 'react';

const TheHUB: React.FC = () => {
  return (
    <div className="bg-brand-grey py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-8">The HUB</h2>
          <p className="text-4xl md:text-5xl mb-10 leading-snug">
            The operational center where <span className="text-brand-orange">intelligence is applied.</span>
          </p>
        </div>
        <div className="bg-white p-12 border border-zinc-200">
          <ul className="space-y-6">
            {[
              'Network Visibility',
              'Open-World Relevance',
              'Persona Briefs',
              'Explainable Matches',
              'Next Steps'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4 text-xl">
                <span className="w-2 h-2 bg-brand-orange rounded-full"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TheHUB;
