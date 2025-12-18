
import React, { useRef, useState } from 'react';
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from 'framer-motion';
import { VerticalImageStack } from './ui/vertical-image-stack';

const pillarContent = [
  {
    id: 1,
    headline: "MyNtropy Profile",
    sub: "Your living signal in the network",
    description: "Your MyNtropy Profile captures what static profiles never could:",
    points: ["your intent", "your availability", "your direction", "your momentum"],
    footer: "It understands who you are now, not who you were. Your network responds to your signal — automatically."
  },
  {
    id: 2,
    headline: "Network",
    sub: "Full visibility. Complete privacy.",
    description: "See your entire network as it truly exists — not scattered across platforms, inboxes, and memory.",
    points: ["Navigate your real connections", "Understand proximity, relevance, and strength", "Stay in control — your data remains private and governed"],
    footer: "This is your network, made legible."
  },
  {
    id: 3,
    headline: "Open World",
    sub: "Beyond who you already know",
    description: "Opportunity doesn’t stop at your first-degree connections. MyNtropy extends your reach into the open world — intelligently and contextually — without noise, scraping chaos, or blind discovery.",
    points: [],
    footer: "You stay grounded in relevance. The system expands your surface area."
  },
  {
    id: 4,
    headline: "Persona Brief",
    sub: "Clarity before every conversation",
    description: "Persona Brief gives you instant, personalized context before a meeting or call. It shows you what matters about the person you’re speaking with — in relation to you:",
    points: ["relevant background and expertise", "shared context or overlap", "collaboration potential and angles"],
    footer: "No research rabbit holes. Just the clarity you need to show up prepared."
  },
  {
    id: 5,
    headline: "Match",
    sub: "Explainable. Precise. Actionable.",
    description: "MyNtropy doesn’t just tell you who — it tells you why. Every match comes with:",
    points: ["clear reasoning", "contextual relevance", "guidance on who to approach first and how"],
    footer: "No guesswork. No random intros. Just alignment."
  },
  {
    id: 6,
    headline: "Grow Your Network",
    sub: "The system learns as you move",
    description: "Every interaction feeds the intelligence layer:",
    points: ["outcomes", "intent shifts", "successful connections"],
    footer: "Your network becomes smarter the more you use it."
  }
];

const SixPillars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.min(Math.floor(latest * 6.05), 5);
    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[600vh] bg-white">
      <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden">
        
        {/* Section Header - Raised upwards to distinguish from content */}
        <div className="pt-24 px-6 md:pt-32 w-full z-20">
          <div className="max-w-7xl mx-auto flex flex-col items-start lg:items-end">
            <div className="w-12 h-1 bg-brand-orange mb-4"></div>
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-2">The Platform Pillars</h2>
            <p className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-brand-dark">The Six Pillars of MyNtropy</p>
          </div>
        </div>

        {/* Main Content Area: Split layout */}
        <div className="flex-grow w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 pb-20 pt-10">
          
          {/* Left Side: Larger Photo Stack */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative flex items-center justify-center lg:justify-start lg:-ml-20">
            <VerticalImageStack controlledIndex={currentIndex} />
          </div>

          {/* Right Side: Dynamic Content Content */}
          <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative flex flex-col justify-center lg:pl-20">
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col text-left max-w-lg"
                >
                  <h4 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter text-brand-dark mb-4 leading-tight">
                    {pillarContent[currentIndex].sub}
                  </h4>
                  <p className="text-zinc-500 font-bold uppercase tracking-tight text-xs mb-6 leading-relaxed">
                    {pillarContent[currentIndex].description}
                  </p>
                  {pillarContent[currentIndex].points.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {pillarContent[currentIndex].points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-brand-orange mt-1.5 rounded-full flex-shrink-0"></span>
                          <span className="text-zinc-400 uppercase tracking-tight text-[10px] font-bold">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="text-brand-dark font-bold uppercase tracking-tighter text-xs leading-relaxed border-t border-brand-grey pt-6">
                    {pillarContent[currentIndex].footer}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixPillars;
