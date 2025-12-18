
import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white py-40 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl mb-16 leading-tight">Unlock your network’s intelligence.</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-12 py-6 bg-brand-orange text-white text-sm uppercase tracking-widest hover:brightness-110 transition-all rounded-sm">
            Explore the System
          </button>
          <button className="px-12 py-6 border-2 border-zinc-700 text-white text-sm uppercase tracking-widest hover:bg-zinc-800 transition-all rounded-sm">
            Show Interest
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
