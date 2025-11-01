import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight } from './Icons';

// --- Data for the accordion ---
const accordionItems = [
  {
    id: 1,
    title: "Business Diagnosis",
    description: "We begin with a deep analysis of your operations, challenges, and data to uncover key opportunities for AI integration."
  },
  {
    id: 2,
    title: "AI Roadmap",
    description: "Based on the diagnosis, we craft a tailored roadmap that aligns your goals with actionable AI strategies."
  },
  {
    id: 3,
    title: "Agentic Execution",
    description: "We build and embed autonomous AI systems that execute intelligently, enhancing efficiency, agility, and decision-making."
  },
  {
    id: 4,
    title: "Redefined Business",
    description: "The result — an evolved, competitive enterprise driven by intelligent automation and measurable performance gains."
  }
];

type AccordionItemType = {
  id: number;
  title: string;
  description: string;
};

type AccordionItemProps = {
  item: AccordionItemType;
  isActive: boolean;
  onMouseEnter: () => void;
};

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out motion-reduce:transition-none bg-gray-100 border border-gray-200
        ${isActive ? 'w-[320px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Content that appears on hover */}
      <div className={`absolute top-24 left-8 right-8 transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${isActive ? 'opacity-100 delay-300' : 'opacity-0'}`}>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>

      {/* Title that moves and rotates */}
      <h3
        className={`
          absolute text-black text-2xl font-bold whitespace-nowrap
          transition-all duration-700 ease-in-out motion-reduce:transition-none motion-reduce:transform-none
          ${
            isActive
              ? 'top-8 left-8 rotate-0' // Active state: horizontal, top-left
              : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90' // Inactive state: vertical, centered horizontally
          }
        `}
      >
        {item.title}
      </h3>
    </div>
  );
};

type HookSectionProps = {
  id: string;
  onStartDiagnosis: () => void;
};

// --- Main Section Component ---
export const HookSection = ({ id, onStartDiagnosis }: HookSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id={id} className="bg-white text-black min-h-screen flex flex-col justify-center scroll-mt-20 py-24 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Left Side: Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tight">
                        Strategic Consultancy
                    </h2>
                    <p className="mt-6 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
                        We transform strategy into intelligent execution through a structured, insight-driven process that redefines how businesses operate.
                    </p>
                    <div className="mt-10">
                        <Button
                            onClick={onStartDiagnosis}
                            size="lg"
                            variant="dark"
                            theme="light"
                            className="font-semibold shadow-2xl shadow-black/20"
                        >
                            Start a diagnosis
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>

                {/* Right Side: Accordion for desktop, Stacked cards for mobile */}
                <div className="w-full md:w-1/2">
                    {/* Desktop Accordion */}
                    <div className="hidden md:flex flex-row items-center justify-center gap-4 p-4">
                        {accordionItems.map((item, index) => (
                            <AccordionItem
                                key={item.id}
                                item={item}
                                isActive={index === activeIndex}
                                onMouseEnter={() => handleItemHover(index)}
                            />
                        ))}
                    </div>
                     {/* Mobile Stacked Cards */}
                    <div className="flex flex-col md:hidden items-center justify-center gap-4 mt-8">
                        {accordionItems.map((item) => (
                            <div key={item.id} className="w-full p-6 bg-gray-100 border border-gray-200 rounded-2xl text-black shadow-lg">
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-base">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};