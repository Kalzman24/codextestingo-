

import React, { useState, useEffect } from 'react';
// FIX: Added `type Variants` to the import to explicitly type framer-motion variants.
import { motion, type Variants } from 'framer-motion';
import Button from './Button';

// A hook to detect user's preference for reduced motion.
const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const listener = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);
    return prefersReducedMotion;
};

const statsData = [
  { value: '30–60%', description: 'faster cycles across processes.' },
  { value: '15–25%', description: 'lower operating expenses.' },
  { value: '86%', description: 'of firms say AI will reshape their sector.' },
  { value: '50-85%', description: 'of Large enterprises are already piloting or deploying agentic AI.' },
];

const getVariants = (prefersReducedMotion: boolean): { containerVariants: Variants; itemVariants: Variants } => ({
    containerVariants: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: prefersReducedMotion ? 0 : 0.15,
            },
        },
    },
    itemVariants: {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: prefersReducedMotion ? 0 : 0.5,
                ease: "easeOut"
            }
        },
    },
});

type TimeAdvantageSectionProps = {
  id: string;
  onStartDiagnosis: () => void;
};

export const TimeAdvantageSection = React.memo(({ id, onStartDiagnosis }: TimeAdvantageSectionProps) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { containerVariants, itemVariants } = getVariants(prefersReducedMotion);
  
  return (
    <section id={id} className="bg-white text-black min-h-screen flex flex-col justify-center py-24 sm:py-32 scroll-mt-20">
      <motion.div 
        className="max-w-7xl mx-auto px-6 lg:px-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Animated Text Block */}
        <motion.div variants={itemVariants} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                Why Now — The Shift Underway
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
                The economy is rewiring: work is shifting from people using software to software that works for people. AI augments humans, giving teams superpowers to decide faster, operate smarter, and work 24/7 without burnout. With Agentic AI already delivering measurable business outcomes and rewriting the rules of the game in real time, SMEs cannot afford to wait.
            </p>
            <div className="mt-10">
                <Button 
                  onClick={onStartDiagnosis} 
                  size="lg" 
                  variant="dark" 
                  theme="light" 
                  className="px-6 py-4 text-base md:px-8 md:py-6 md:text-lg font-semibold shadow-lg shadow-black/10"
                >
                    Let's get started
                </Button>
            </div>
        </motion.div>

        {/* Animated Stats Block */}
        <motion.div variants={itemVariants} className="mt-20 sm:mt-24">
            <div className="border-t border-gray-200 w-1/2 mx-auto" />
            <motion.div 
                className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                {statsData.map((stat) => (
                    <motion.div 
                        key={stat.value} 
                        variants={itemVariants}
                        className="text-center"
                    >
                        <p className="text-4xl sm:text-5xl font-bold text-black tracking-tight">{stat.value}</p>
                        <p className="mt-3 text-sm text-gray-500 max-w-xs mx-auto">{stat.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
});