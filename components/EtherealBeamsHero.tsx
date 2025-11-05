"use client";

import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Button from "./Button";

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


function FloatingPaths({ position }: { position: number }) {
    const prefersReducedMotion = usePrefersReducedMotion();
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    if (prefersReducedMotion) {
        return (
            <div className="absolute inset-0 pointer-events-none">
                <svg
                    className="w-full h-full text-white"
                    viewBox="0 0 696 316"
                    fill="none"
                >
                    <title>Background Paths</title>
                     {paths.map((path) => (
                        <path
                            key={path.id}
                            d={path.d}
                            stroke="currentColor"
                            strokeWidth={path.width}
                            strokeOpacity={0.1 + path.id * 0.03}
                        />
                    ))}
                </svg>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

const EtherealBeamsHero: React.FC<{ id: string; onStartDiagnosis: () => void; }> = ({ id, onStartDiagnosis }) => {
    const title = "Harness AI now or fade.";
    const subtitle = "Rewire how your business works. Strategy that executes itself with AI.";
    const words = title.split(" ");
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <section id={id} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={prefersReducedMotion ? { duration: 0, delay: 0 } : {
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className="inline-block text-transparent bg-clip-text 
                                        bg-gradient-to-r from-white to-white/80"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                     <motion.p
                      className="mx-auto mt-8 max-w-3xl text-balance text-lg leading-8 text-neutral-300 sm:text-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: prefersReducedMotion ? 0 : 1, duration: prefersReducedMotion ? 0 : 1, ease: "easeOut" }}
                    >
                      {subtitle}
                    </motion.p>

                    <motion.div
                        className="mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: prefersReducedMotion ? 0 : 1.5, duration: prefersReducedMotion ? 0 : 1, ease: "easeOut" }}
                    >
                        <div
                            className="inline-block group relative bg-gradient-to-b from-white/10 to-black/10 p-px rounded-2xl backdrop-blur-lg 
                            overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Button
                                onClick={onStartDiagnosis}
                                variant="ghost"
                                className="rounded-[1.15rem] px-6 py-4 text-base md:px-8 md:py-6 md:text-lg font-semibold backdrop-blur-md 
                                bg-black/95 hover:bg-black/100 
                                text-white transition-all duration-300 motion-reduce:transition-none
                                group-hover:-translate-y-0.5 motion-reduce:transform-none border border-white/10
                                hover:shadow-neutral-800/50"
                            >
                                <span className="opacity-90 group-hover:opacity-100 transition-opacity motion-reduce:transition-none">
                                    Start a diagnosis
                                </span>
                                <span
                                    className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                    transition-all duration-300 motion-reduce:transition-none motion-reduce:transform-none"
                                >
                                    →
                                </span>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default EtherealBeamsHero;
