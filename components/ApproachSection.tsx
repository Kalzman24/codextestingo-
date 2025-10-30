import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "We start by understanding your unique business landscape with our AI Readiness Diagnosis."
  },
  {
    number: "02",
    title: "Strategize",
    description: "We architect a clear, actionable AI Roadmap tailored to your goals and opportunities."
  },
  {
    number: "03",
    title: "Execute",
    description: "Our studio builds and deploys intelligent agents to transform your operations and deliver measurable outcomes."
  }
];

export const ApproachSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="bg-white text-black min-h-screen flex flex-col justify-center scroll-mt-20 snap-start py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tighter">
            Our Approach
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Your journey from insight to impact. A structured, transparent process designed to deliver real-world results.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-200 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center lg:text-left">
                {/* Connecting line for mobile/tablet */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-0 left-1/2 w-px h-full bg-gray-200 -translate-x-1/2"></div>
                )}
                <div className="relative z-10 flex flex-col items-center lg:items-start p-6">
                   <div className="flex items-center justify-center lg:justify-start">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white text-2xl font-bold border-4 border-white shadow-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-black">{step.title}</h3>
                  <p className="mt-3 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};