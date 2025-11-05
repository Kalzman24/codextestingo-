import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { PlayIcon } from './Icons';

// Re-using the ElegantShape component logic from VentureStudioPage
function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}


export const VideoSection: React.FC<{ id: string }> = ({ id }) => {
    const videoId = "cxPieVM6uhU";
    const [isPlaying, setIsPlaying] = useState(false);
    
    // Autoplay when the iframe is loaded (after user click), with sound.
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&showinfo=0&modestbranding=1&rel=0`;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;


    return (
        <section id={id} className="bg-[#0a0a0a] text-white py-24 sm:py-32 relative overflow-hidden scroll-mt-20">
            <div className="absolute inset-0 z-0">
                <ElegantShape
                    delay={0.3}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-cyan-500/[0.15]"
                    className="right-[-5%] top-[10%]"
                />
                 <ElegantShape
                    delay={0.5}
                    width={400}
                    height={100}
                    rotate={15}
                    gradient="from-purple-500/[0.15]"
                    className="left-[-5%] bottom-[10%]"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold">Our Vision in Motion</h2>
                    <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">
                        We believe the future is built, not predicted. This is a glimpse into the agentic, autonomous world we're creating with our partners.
                    </p>
                </motion.div>

                <motion.div
                    className="relative max-w-5xl mx-auto aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50"
                     initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    {isPlaying ? (
                        <iframe
                            src={embedUrl}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    ) : (
                         <button
                            onClick={() => setIsPlaying(true)}
                            className="w-full h-full relative group cursor-pointer"
                            aria-label="Play video"
                        >
                            <img
                                src={thumbnailUrl}
                                alt="Our Vision in Motion"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <PlayIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                                </div>
                            </div>
                        </button>
                    )}
                </motion.div>
            </div>
        </section>
    );
};
