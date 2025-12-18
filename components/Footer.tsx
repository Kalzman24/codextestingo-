
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-brand-grey py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tighter">
          My<span className="text-brand-orange">Ntropy</span> <span className="text-zinc-300 font-light ml-2">©</span>
        </div>
        <div className="text-zinc-400 text-[10px] uppercase tracking-[0.2em]">
          AI-powered network intelligence
        </div>
        <div className="flex gap-12 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
          <span>Private by design</span>
          <span>Explainable by default</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
