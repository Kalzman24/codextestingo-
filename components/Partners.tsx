import React from 'react';

const Partners = () => {
  const partners = ["YPO", "HBS", "TIGER 21", "EO FORUM"];

  return (
    <section className="relative py-20 md:py-40 px-4 text-center overflow-hidden bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.9)_60%,_rgba(0,0,0,1)_80%)]"></div>
      </div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] border border-orange-900/50 rounded-full"></div>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[400px] md:h-[400px] border border-orange-900/30 rounded-full"></div>


      <div className="relative z-10 container mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-12">Who operates here</h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 gap-y-8">
          {partners.map(partner => (
            <div key={partner} className="text-2xl md:text-3xl font-bold text-gray-500 tracking-widest">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
