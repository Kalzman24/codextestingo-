
import React from 'react';
import { motion } from 'framer-motion';

const Founder: React.FC = () => {
  return (
    <section className="relative bg-white overflow-hidden border-t border-brand-grey py-32 md:py-48">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="founder-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
          </pattern>
          <rect width="100" height="100" fill="url(#founder-grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="flex justify-center mb-12">
            <div className="w-10 h-1 bg-brand-orange"></div>
          </div>
          
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold mb-16">
            A Note from the Founder
          </h2>

          <div className="relative mb-20">
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-[12rem] text-brand-grey/30 font-serif pointer-events-none">
              &ldquo;
            </span>
            <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tighter text-brand-dark relative z-10">
              One unexpected conversation changed the course of my life. There was nothing strategic about it, nothing planned. It simply happened — and afterwards, things were no longer the same.
            </blockquote>
          </div>

          <p className="text-lg md:text-xl font-bold italic text-zinc-500 mb-20 max-w-2xl mx-auto leading-relaxed">
            That’s when I realized how much of our lives is shaped not by what we intend, but by the people we meet along the way.
          </p>

          {/* Signature Section */}
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-6 relative"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-brand-grey grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1594744803329-a584af1cae24?q=80&w=1887&auto=format&fit=crop" 
                  alt="Kira Maxima Gutorski" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              {/* Subtle accent ring */}
              <div className="absolute -inset-1 border border-brand-orange/20 rounded-full"></div>
            </motion.div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold uppercase tracking-tight text-brand-dark">
                Kira Maxima Gutorski
              </h3>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-orange font-bold">
                Founder, MyNtropy
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
