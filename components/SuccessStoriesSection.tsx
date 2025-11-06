import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    client: "Logistics & Supply Chain",
    problem: "Frequent stockouts and excess inventory due to inaccurate manual forecasting.",
    impact: [
        "Analyzes real-time sales data and market trends 24/7.",
        "Automates inventory replenishment decisions.",
        "Optimizes stock levels to prevent waste and missed sales."
    ],
    result: "25% Fewer Stockouts",
    resultDescription: "& 15% Lower Carrying Costs."
  },
  {
    client: "Customer Service",
    problem: "High volume of repetitive queries led to slow response times and overwhelmed support teams.",
    impact: [
        "Provides instant, 24/7 answers to common customer questions.",
        "Integrates with order management systems for real-time updates.",
        "Frees up human agents to handle complex, high-value issues."
    ],
    result: "75% Automation",
    resultDescription: "of Tier-1 support queries & 30% higher customer satisfaction."
  },
  {
    client: "Sales & Business Development",
    problem: "Sales teams spent over 50% of their time on manual lead qualification and data entry.",
    impact: [
        "Autonomously researches, qualifies, and enriches new leads.",
        "Drafts personalized outreach emails based on lead data.",
        "Schedules meetings directly into sales reps' calendars."
    ],
    result: "40% More",
    resultDescription: "qualified meetings booked, increasing team focus on closing deals."
  }
];

export const SuccessStoriesSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="bg-white text-black min-h-screen flex flex-col justify-center scroll-mt-20 snap-start py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tighter">
            Our Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            The power of our agentic AI framework is its adaptability. While these stories highlight specific sectors, the core principles of automation and intelligent execution apply to any business challenge. Here's a glimpse into the value we create.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="flex flex-col bg-gray-50 border border-gray-200/80 rounded-2xl p-8 transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-xl">
              <div className="flex-grow">
                <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{study.client}</p>
                <h3 className="text-xl font-bold mt-4 text-black">The Problem</h3>
                <p className="mt-2 text-gray-600">{study.problem}</p>
                <h3 className="text-xl font-bold mt-6 text-black">Agentic AI Impact</h3>
                <ul className="mt-2 space-y-2 text-gray-600 list-disc list-inside">
                    {study.impact.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-5xl font-bold text-black">{study.result}</p>
                <p className="mt-2 text-gray-600">{study.resultDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};