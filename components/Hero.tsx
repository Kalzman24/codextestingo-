
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between pt-44 pb-24 bg-white overflow-hidden font-montserrat">
      {/* Background container for future photo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-0">
        {/* Placeholder for future background image */}
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10">
        {/* Main Headlines - Reduced size by approx 20% */}
        <div className="space-y-1">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-[58px] font-extrabold tracking-tighter text-zinc-900 leading-[1.1]"
          >
            From chaos to clarity.
          </motion.h1>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-[58px] font-extrabold tracking-tighter text-brand-orange leading-[1.1]"
          >
            From searching to matching.
          </motion.h1>
        </div>
      </div>

      {/* Center content is intentionally kept clear for background imagery */}
      <div className="flex-grow"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center relative z-10 w-full">
        {/* Subtitle - Positioned Bottom-Half */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[10px] md:text-[12px] text-zinc-500 font-bold uppercase tracking-[0.25em] max-w-lg mx-auto mb-10 leading-relaxed"
        >
          TURNING IDENTITY, INTENT, AND CONTEXT INTO PRECISE, EXPLAINABLE MATCHES.
        </motion.p>

        {/* Buttons - Bottom Anchor */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
        >
          <a 
            href="#the-system" 
            onClick={(e) => handleScroll(e, '#the-system')}
            className="px-8 py-5 bg-brand-orange text-white text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-zinc-900 transition-all rounded-sm text-center min-w-[220px]"
          >
            EXPLORE THE SYSTEM
          </a>
          <a 
            href="#get-access" 
            onClick={(e) => handleScroll(e, '#get-access')}
            className="px-8 py-5 border border-zinc-200 text-zinc-900 text-[9px] font-bold uppercase tracking-[0.15em] hover:bg-zinc-50 transition-all rounded-sm text-center min-w-[220px]"
          >
            SHOW INTEREST
          </a>
        </motion.div>
      </div>

      {/* Decorative center line at the very bottom */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none hidden md:block">
        <div className="w-[1px] h-6 bg-zinc-100"></div>
      </div>
    </section>
  );
};

export default Hero;
