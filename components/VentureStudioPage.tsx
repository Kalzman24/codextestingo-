import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { MailIcon, UsersIcon, IconRoute, PlayIcon } from './Icons';
import { Timeline } from './Timeline';
import { Scene } from './Scene';
import { cn } from '../lib/utils';
import { NavBar, type NavItem } from './NavBar';
import { VideoSection } from './VideoSection';

const journeySteps = [
    {
        number: "01",
        title: "Ignite",
        tagline: "Shape your vision. Prove your edge.",
        description: "For founders with an idea, this is where we turn clarity into conviction. Together, we define the opportunity, sharpen your strategy, and validate the potential.",
        deliverables: [
            "Deep market and customer insight.",
            "Fast validation sprints to test demand.",
            "Strategic storytelling that attracts talent and investors."
        ],
        closing: "You bring the vision — we make it undeniable."
    },
    {
        number: "02",
        title: "Build",
        tagline: "Transform validation into velocity.",
        description: "For founders already in motion, we become your product and tech co-founder. We architect, design, and execute — building scalable, AI-native products that move the market.",
        deliverables: [
            "Full-stack product and engineering support.",
            "Rapid iteration to hit product-market fit.",
            "Go-to-market strategies that cut through the noise."
        ],
        closing: "We don’t build MVPs. We build momentum."
    },
    {
        number: "03",
        title: "Amplify",
        tagline: "Scale what works. Accelerate what’s next.",
        description: "Once the foundation is solid, we help you scale with purpose — connecting you to capital, talent, and growth partners that expand your reach.",
        deliverables: [
            "Growth playbooks built for repeatable traction.",
            "Access to VCs, angels, and enterprise clients.",
            "Advisory on fundraising and expansion."
        ],
        closing: "Your traction deserves a bigger stage. We help you own it."
    },
    {
        number: "04",
        title: "Elevate",
        tagline: "From founder to force.",
        description: "Beyond scale lies legacy. We help founders evolve into leaders — shaping enduring companies, brands, and impact.",
        deliverables: [
            "Strategic advisory and leadership coaching.",
            "Brand positioning that defines your category.",
            "Long-term capital and exit strategy design."
        ],
        closing: "We build founders who build the future."
    }
];

const partnershipDetails = {
    whatYouGet: [
        "Pre-seed / seed funding to extend your runway.",
        "Hands-on strategic and technical support from our core team.",
        "Access to our network of investors, advisors, and enterprise clients.",
        "A dedicated workspace at the AI Hub in Lisboa."
    ],
    whoWePartnerWith: [
        "Deep Domain Experts: You know your industry inside and out.",
        "Technical Visionaries: You have a bold, defensible idea that leverages AI.",
        "Relentless Founders: You are driven to build, lead, and redefine your market."
    ]
}

const timelineData = journeySteps.map(step => ({
    title: step.title,
    content: (
        <div className="text-black dark:text-white space-y-4 max-w-lg">
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">{step.tagline}</p>
            <p className="text-base text-gray-600 dark:text-gray-400">
                {step.description}
            </p>
            <div className="text-left w-full">
                <p className="font-bold text-gray-800 dark:text-gray-200">You get:</p>
                <ul className="mt-2 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {step.deliverables.map(item => <li key={item}>{item}</li>)}
                </ul>
            </div>
            <p className="text-base font-semibold italic text-gray-800 dark:text-gray-200">{step.closing}</p>
        </div>
    )
}));

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
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
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

interface VentureStudioPageProps {
    onGoHome: () => void;
    onGoToNextChapter: () => void;
}

export const VentureStudioPage: React.FC<VentureStudioPageProps> = ({ onGoHome, onGoToNextChapter }) => {
    
    const ventureNavItems: NavItem[] = [
      { name: "Journey", url: "#journey", icon: IconRoute },
      { name: "Vision", url: "#vision", icon: PlayIcon },
      { name: "Partnership", url: "#partnership", icon: UsersIcon },
      { name: "Apply", onClick: onGoToNextChapter, icon: MailIcon },
    ];

    const handleApplyClick = (e: React.MouseEvent) => {
        e.preventDefault();
        onGoToNextChapter();
    };
    
    return (
        <main className="bg-[#0a0a0a] text-white">
            <NavBar navItems={ventureNavItems} showDiagnosisButton={false} onGoHome={onGoHome} />

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-black">
                    <Scene />
                </div>
                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                            Co-building the Future.
                        </h1>
                        <p className="mt-6 mx-auto max-w-3xl text-lg sm:text-xl text-white/80 backdrop-blur-sm bg-black/10 rounded-md p-2">
                            We don't just invest, we build alongside you. Our Venture Studio is a selective platform for exceptional founders, combining your vision with our strategic, technical, and creative expertise to build market-defining companies.
                        </p>
                        <div className="mt-10">
                            <Button onClick={handleApplyClick} size="lg" variant="default" className="font-semibold text-black">
                               Apply to The Studio
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Founder's Journey Section */}
            <section id="journey" className="scroll-mt-20">
                <Timeline data={timelineData} />
            </section>

            {/* Vision Video Section */}
            <VideoSection id="vision" />

            {/* Partnership Model Section */}
            <section id="partnership" className="py-24 sm:py-32 relative overflow-hidden scroll-mt-20">
                <div className="absolute inset-0 z-0">
                    <ElegantShape
                        delay={0.3}
                        width={600}
                        height={140}
                        rotate={12}
                        gradient="from-indigo-500/[0.15]"
                        className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                    />
                    <ElegantShape
                        delay={0.5}
                        width={500}
                        height={120}
                        rotate={-15}
                        gradient="from-rose-500/[0.15]"
                        className="right-[-5%] md:right-[0%] top-[60%] md:top-[65%]"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Our Partnership Model</h2>
                        <p className="mt-4 text-lg text-white/70 max-w-3xl mx-auto">A symbiotic relationship where your vision is amplified by our resources, expertise, and network.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <div className="rounded-3xl p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm min-h-[300px]">
                            <h3 className="text-2xl font-bold mb-4 text-white">What You Get</h3>
                            <ul className="space-y-3 list-disc list-inside text-white/80">
                                {partnershipDetails.whatYouGet.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="rounded-3xl p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm min-h-[300px]">
                            <h3 className="text-2xl font-bold mb-4 text-white">Who We Partner With</h3>
                            <ul className="space-y-3 list-disc list-inside text-white/80">
                                {partnershipDetails.whoWePartnerWith.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-black scroll-mt-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold">Ready to build with us?</h3>
                    <p className="mt-4 text-lg text-gray-600">Let’s turn your idea — or your momentum — into something unstoppable.</p>
                    <div className="mt-8">
                        <Button onClick={handleApplyClick} size="lg" variant="dark" theme="light" className="font-semibold">
                            Join the Journey
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
};