import React, { useState } from 'react';
import Button from './Button';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Incubate',
    description: 'From vision to validated product — helping founders identify market opportunities, refine concepts, and validate early traction.',
  },
  {
    id: 2,
    title: 'Co-build',
    description: 'End-to-end collaboration with Whitespace’s strategists, technologists, and product experts to design, develop, and launch AI-powered solutions.',
  },
  {
    id: 3,
    title: 'Scale',
    description: 'Support for growth, funding, and market access through our network of investors, partners, and enterprise clients.',
  },
];

type AccordionItemData = {
    title: string;
    description: string;
};

type AccordionItemProps = {
    item: AccordionItemData;
    isActive: boolean;
    onMouseEnter: () => void;
};

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out motion-reduce:transition-none bg-white
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Content that appears on hover */}
      <div className={`absolute top-24 left-8 right-8 transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${isActive ? 'opacity-100 delay-300' : 'opacity-0'}`}>
        <p className="text-gray-700 text-lg">{item.description}</p>
      </div>

      {/* Title that moves and rotates */}
      <h3
        className={`
          absolute text-black text-3xl font-bold whitespace-nowrap
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

type VentureStudioSectionProps = {
    id: string;
};

// --- Main Section Component ---
export const VentureStudioSection: React.FC<VentureStudioSectionProps> = ({ id }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={id} className="bg-[#0a0a0a] text-white min-h-screen flex flex-col justify-center scroll-mt-20 snap-start py-24 sm:py-32">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                
                {/* Left Side: Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tighter">
                        WS Venture Studio
                    </h2>
                    <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto md:mx-0">
                        Whitespace’s Venture Studio partners with exceptional founders shaping the next wave of AI innovation. This selective platform extends our consultancy into co-building the future.
                    </p>
                     <p className="mt-8 text-lg text-white/80 max-w-xl mx-auto md:mx-0">
                        Whitespace Venture Studio transforms bold concepts into AI-powered ventures built to last.
                    </p>
                    <div className="mt-10">
                        <Button 
                            onClick={handleContactClick}
                            size="lg"
                            variant="outline"
                            className="font-semibold"
                        >
                            Contact Us
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
                            <div key={item.id} className="w-full p-6 bg-white rounded-2xl text-black shadow-lg">
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
}