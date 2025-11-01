

import React from 'react';
import Button from './Button';

type StaticHeroProps = {
  id: string;
  onStartDiagnosis: () => void;
};

const StaticHero = ({ id, onStartDiagnosis }: StaticHeroProps) => {
  const title = "Harness AI now or fade.";
  const subtitle = "Rewire how your business works. Strategy that executes itself with AI.";

  return (
    <section id={id} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white">
      {/* A simplified background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.1] via-transparent to-rose-500/[0.1] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_0%,_transparent_50%)] z-0" />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            {title}
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-balance text-lg leading-8 text-neutral-300 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-12">
            <Button
              onClick={onStartDiagnosis}
              variant="outline"
              size="lg"
              className="px-8 py-5 text-lg font-semibold"
            >
              Start a diagnosis
              <span className="ml-3">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticHero;