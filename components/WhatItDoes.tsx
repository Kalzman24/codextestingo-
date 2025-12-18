
import React from 'react';
import { motion, Variants } from 'framer-motion';

const WhatItDoes: React.FC = () => {
  // Explicitly typing variants to resolve TypeScript inference issues with complex transition objects
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        // Using any cast to prevent the compiler from misinterpreting the cubic-bezier array as Easing[]
        ease: [0.16, 1, 0.3, 1] as any 
      },
    },
  };

  return (
    <section className="relative bg-brand-grey py-32 md:py-48 px-6 overflow-hidden">
      {/* Decorative Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#1a1a1a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-20">
          <div className="w-12 h-px bg-brand-orange"></div>
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold">
            Operational Logic / 01
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Main Headline Column */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-dark uppercase">
              Unifies identity intelligence and network intelligence into a single, <br />
              <span className="relative inline-block text-brand-orange mt-2">
                continuously learning system
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-brand-orange/30 origin-left"
                />
              </span>
            </h3>
            
            {/* Visual element representing 'system' */}
            <div className="mt-16 hidden lg:block">
              <div className="flex gap-1.5">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      height: [8, 24, 8],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      delay: i * 0.1 
                    }}
                    className="w-1 bg-brand-orange/40 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Features Column */}
          <div className="lg:col-span-5 space-y-16 lg:pt-12">
            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute -left-8 top-0 text-brand-orange font-bold text-lg opacity-20 group-hover:opacity-100 transition-opacity">
                01
              </div>
              <div className="border-l-4 border-brand-orange pl-8 py-2">
                <h4 className="text-2xl font-bold uppercase tracking-tighter text-brand-dark mb-4">
                  No Endless Browsing
                </h4>
                <p className="text-zinc-500 text-lg md:text-xl font-bold uppercase tracking-tight leading-snug">
                  You don’t browse or search endlessly. You describe what you need — the system surfaces the right people.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group relative">
              <div className="absolute -left-8 top-0 text-zinc-400 font-bold text-lg opacity-20 group-hover:opacity-100 transition-opacity">
                02
              </div>
              <div className="border-l-4 border-zinc-300 group-hover:border-brand-orange pl-8 py-2 transition-colors">
                <h4 className="text-2xl font-bold uppercase tracking-tighter text-brand-dark mb-4">
                  Precision Feedback
                </h4>
                <p className="text-zinc-500 text-lg md:text-xl font-bold uppercase tracking-tight leading-snug">
                  Every result comes with clear reasoning and suggested next steps.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Accent */}
        <motion.div 
          variants={itemVariants}
          className="mt-32 flex justify-between items-end border-t border-zinc-200 pt-10"
        >
          <div className="text-[8px] tracking-[0.4em] uppercase text-zinc-400 font-bold">
            Function / Unity / Automation
          </div>
          <div className="text-[8px] tracking-[0.4em] uppercase text-zinc-300 font-bold">
            Project MyNtropy
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatItDoes;
