
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const slides = [
  {
    title: "Your Profile",
    description: "The living representation of who you are, what you want, and where you’re heading.",
    img: "https://cdn.cosmos.so/8b0252bd-cb64-45f4-aef8-672c7f628f76?format=jpeg",
  },
  {
    title: "The HUB",
    description: "Where intelligence is applied to your network, the open world, and every interaction.",
    img: "https://cdn.cosmos.so/7b3f4c48-ec63-4bac-b472-910c037a0eb4?format=jpeg",
  }
];

const TheSystem: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="the-system" className="relative h-[100vh] min-h-[700px] w-full bg-brand-dark overflow-hidden font-montserrat">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
          className="absolute inset-0 z-0"
        >
          <img 
            src={slides[current].img} 
            alt={slides[current].title}
            className="w-full h-full object-cover grayscale brightness-[0.35] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/40"></div>
        </motion.div>
      </AnimatePresence>

      {/* Fixed Editorial Header Content - Positioned top, sizes reduced to prevent overlap */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pt-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[2px] bg-brand-orange"></div>
            <h2 className="text-[9px] uppercase tracking-[0.4em] text-brand-orange font-bold">
              MyNtropy at a Glance
            </h2>
          </div>
          <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.1] tracking-tighter text-white uppercase">
            Built around two core components <br />
            <span className="text-zinc-500 opacity-80">functioning as a single system:</span>
          </p>
        </motion.div>
      </div>

      {/* Slide Text Overlay - Centered content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            className="max-w-7xl w-full px-6 flex flex-col items-center text-center"
          >
            <h3 className="text-5xl md:text-[6.5vw] font-bold uppercase italic tracking-tighter text-white leading-none mb-6">
              {slides[current].title.split(' ')[0]} <br />
              <span className="text-brand-orange not-italic">{slides[current].title.split(' ')[1] || ''}</span>
            </h3>
            <p className="text-zinc-400 text-sm md:text-base font-bold uppercase tracking-[0.2em] max-w-lg leading-relaxed">
              {slides[current].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-12 left-0 right-0 z-30 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Counter */}
          <div className="text-zinc-600 font-bold tracking-[0.5em] text-sm">
            <span className="text-white">0{current + 1}</span> / 0{slides.length}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pointer-events-auto">
            <button 
              onClick={prevSlide}
              className="group w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-brand-orange transition-all rounded-full"
            >
              <ArrowLeft className="text-white h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextSlide}
              className="group w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange transition-all rounded-full"
            >
              <ArrowRight className="text-white h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 bottom-0 w-px h-16 bg-gradient-to-t from-brand-orange to-transparent"></div>
    </section>
  );
};

export default TheSystem;
