
import React from 'react';

const WhatItDoes: React.FC = () => {
  return (
    <div className="bg-brand-grey py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-16">What MyNtropy Does</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="text-4xl md:text-5xl leading-snug">
            Unifies identity intelligence and network intelligence into a single, <span className="text-brand-orange">continuously learning system</span>
          </div>
          <div className="space-y-12">
            <div className="border-l-4 border-brand-orange pl-8">
              <h3 className="text-xl mb-4">No Endless Browsing</h3>
              <p className="text-zinc-500 text-lg uppercase tracking-tight">You don’t browse or search endlessly. You describe what you need — the system surfaces the right people.</p>
            </div>
            <div className="border-l-4 border-zinc-300 pl-8">
              <h3 className="text-xl mb-4">Precision Feedback</h3>
              <p className="text-zinc-500 text-lg uppercase tracking-tight">Every result comes with clear reasoning and suggested next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatItDoes;
