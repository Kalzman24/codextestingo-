import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[600px] md:h-[600px] bg-orange-600/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-black/50"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
          From entropy to intent — privately.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          The private layer where high-level intent becomes intelligent connection.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 border border-gray-600 text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 w-full sm:w-auto">
            ENTER OUTSIDE
          </button>
          <button className="px-8 py-3 border border-orange-500 bg-orange-500/10 text-orange-400 rounded-full hover:bg-orange-500 hover:text-black transition-colors duration-300 w-full sm:w-auto">
            REQUEST ACCESS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
