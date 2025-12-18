
import React from 'react';

const TheSystem: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-16">MyNtropy at a Glance</h2>
        <div className="mb-20">
          <p className="text-3xl md:text-4xl max-w-4xl leading-relaxed font-bold">
            MyNtropy is built around <span className="text-brand-orange uppercase">two core components</span> that function as a single system:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="p-12 bg-zinc-900 border border-zinc-800">
            <h3 className="text-2xl mb-6 text-brand-orange font-bold uppercase tracking-tighter">Your Profile</h3>
            <p className="text-zinc-400 uppercase tracking-tight text-lg leading-snug">
              The living representation of who you are, what you want, and where you’re heading.
            </p>
          </div>
          <div className="p-12 bg-zinc-900 border border-zinc-800">
            <h3 className="text-2xl mb-6 text-brand-orange font-bold uppercase tracking-tighter">The HUB</h3>
            <p className="text-zinc-400 uppercase tracking-tight text-lg leading-snug">
              Where intelligence is applied to your network, the open world, and every interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSystem;
