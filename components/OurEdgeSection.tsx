

import React, { useState, useEffect } from 'react';
import {
    IconTerminal2,
    IconRouteAltLeft,
    IconAdjustmentsBolt,
    IconCurrencyDollar,
    IconHelp,
    ShieldCheckIcon,
} from './Icons';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

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

const features = [
    {
        icon: <IconTerminal2 className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: 'Consultancy DNA',
        description: 'We start by understanding your business model to ensure AI serves your core objectives.',
    },
    {
        icon: <IconRouteAltLeft className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: 'Intelligence Strategy',
        description: 'We unlock and structure a clear, actionable AI roadmap tailored to your enterprise.',
    },
    {
        icon: <IconAdjustmentsBolt className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: 'Deliver Execution',
        description: 'Deploying production-ready agents with measurable SLAs for immediate impact.',
    },
    {
        icon: <IconCurrencyDollar className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: 'Outcome Delivery',
        description: "We don't sell tools, we deliver outcomes. Your ROI is our priority.",
    },
    {
        icon: <IconHelp className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: 'Enterprise Grade',
        description: 'Secure, scalable, and built to handle complex, real-world business challenges.',
    },
    {
        icon: <ShieldCheckIcon className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: 'Trust & Security',
        description: 'We build on a foundation of trust. Our commitment to enterprise-grade data protection and compliance ensures your information is always secure.',
    },
];

const Feature: React.FC<{ title: string; description: string; icon: React.ReactNode; index: number; }> = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col py-8 relative group/feature px-6 md:px-8 border-b border-white/10", // Mobile: default bottom border
        "lg:border-b-0 lg:border-r lg:border-white/10", // Desktop: reset bottom, add right
        (index === 0 || index === 3) && "lg:border-l lg:border-white/10",
        index < 3 && "lg:border-b lg:border-white/10",
        (index === 2 || index === 5) && "lg:border-r-0"
      )}
    >
      {/* Top row gradient */}
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 motion-reduce:opacity-0 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
      )}
      {/* Bottom row gradient */}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 motion-reduce:opacity-0 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#0a0a0a] to-transparent pointer-events-none" />
      )}
      <div className="mb-3 sm:mb-4 relative z-10 text-white/80 group-hover/feature:scale-110 group-hover/feature:text-white transition-transform duration-300 ease-in-out motion-reduce:transform-none">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-5 group-hover/feature:h-6 w-1 rounded-tr-full rounded-br-full bg-white/20 group-hover/feature:bg-white transition-all duration-200 motion-reduce:transition-none origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 motion-reduce:transform-none inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white/70 max-w-xs relative z-10">
        {description}
      </p>
    </div>
  );
};

export const OurEdgeSection: React.FC<{ id: string }> = ({ id }) => {
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section id={id} className="bg-[#0a0a0a] text-white min-h-screen flex flex-col justify-center scroll-mt-20 snap-start py-24 sm:py-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                 <motion.div 
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.6, ease: "easeOut" }}
                 >
                    <h2 className="text-3xl sm:text-4xl font-bold">Our Edge</h2>
                    <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-white/70">
                        A unique blend of strategic insight and execution excellence that drives real-world results.
                    </p>
                </motion.div>
                
                <div role="list" aria-label="Our Edge Features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 border-t border-white/10">
                    {features.map((feature, index) => (
                        <Feature 
                            key={feature.title} 
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                            index={index} 
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};