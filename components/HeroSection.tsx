
import React from 'react';

const HeroSection: React.FC = () => {
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
          From <span className="text-orange-400">Chaos</span> to Clarity
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400">
          A unified ecosystem for all your exclusive memberships - powered by explainable precision-driven member matching and intelligent network organization.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button type="button" onClick={() => scrollToSection('#philosophy')} className="w-full sm:w-auto bg-orange-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-orange-400 transition-all duration-300 transform hover:scale-105">
            Explore the System
          </button>
          <button type="button" className="w-full sm:w-auto border border-gray-700 text-gray-300 font-semibold px-8 py-3 rounded-md hover:bg-gray-800 hover:border-gray-600 transition-all duration-300">
            See the Vision
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
