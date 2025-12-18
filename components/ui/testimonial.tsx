
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
}

export const AnimatedTestimonials: React.FC<AnimatedTestimonialsProps> = ({
  testimonials,
  autoplay = true,
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  const randomRotate = () => `${Math.floor(Math.random() * 10) - 5}deg`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-12 font-montserrat">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 items-center">
        {/* Image Section */}
        <div className="flex items-center justify-center">
          <div className="relative h-[400px] w-full max-w-sm">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, scale: 0.9, y: 20, rotate: randomRotate() }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.8,
                    y: isActive(index) ? 0 : 40,
                    zIndex: isActive(index) ? 20 : 0,
                    rotate: isActive(index) ? '0deg' : randomRotate(),
                  }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="absolute inset-0 origin-center"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    className="h-full w-full rounded-2xl object-cover shadow-xl border border-brand-grey"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Text and Controls Section */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col"
            >
              <div>
                <span className="text-brand-orange text-[10px] uppercase tracking-[0.3em] mb-4 block">Testimonial</span>
                <h3 className="text-3xl font-bold text-brand-dark mb-1 uppercase tracking-tighter">
                  {testimonials[active].name}
                </h3>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">
                  {testimonials[active].designation}
                </p>
                <motion.p className="mt-10 text-xl md:text-2xl text-zinc-600 leading-relaxed font-bold italic">
                  "{testimonials[active].quote}"
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex gap-3 pt-12">
            <button
              onClick={handlePrev}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-brand-grey bg-white transition-all hover:border-brand-orange hover:bg-brand-orange/5"
            >
              <ArrowLeft className="h-5 w-5 text-brand-dark transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              className="group flex h-12 w-12 items-center justify-center rounded-full border border-brand-grey bg-brand-dark transition-all hover:bg-brand-orange"
            >
              <ArrowRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
