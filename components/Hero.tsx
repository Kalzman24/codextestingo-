import React from 'react';
import ShaderBackground from './ShaderBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      <ShaderBackground />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl">
          <p className="text-orange-500 font-medium tracking-widest uppercase text-sm mb-4">From Chaos to Clarity</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-tight">
            A unified ecosystem for all your exclusive memberships.
          </h1>
           <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            Powered by explainable precision-driven member matching and intelligent network organization.
          </p>
          <div className="mt-10">
            <a
              href="#how-it-works"
              className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-500 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;