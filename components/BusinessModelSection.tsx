import React from 'react';

const cardItems = [
    {
        title: "The Agent Side: Backend",
        description: "Our autonomous AI agents unify your operations, working 24/7 to handle complex tasks, analyze data, and drive core business processes across every functional department for maximum, enterprise-wide efficiency.",
        src: "/n8n.webp",
    },
    {
        title: "The Dashboard: Frontend",
        description: "A custom dashboard provides real-time performance metrics and actionable insights, giving you full control to monitor and manage your AI workforce.",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1920&h=1080&auto=format&fit=crop",
    }
];

export const BusinessModelSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section id={id} className="bg-[#0a0a0a] text-white min-h-screen flex flex-col justify-center scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Services: Agentic AI Execution
          </h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-white/70">
            We deliver a complete solution, from intelligent backend agents that power your operations to intuitive frontend dashboards that provide full control.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cardItems.map((item) => (
            <div key={item.title} className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 motion-reduce:transform-none motion-reduce:transition-none">
              <img src={item.src} alt={item.title} className="w-full h-48 md:h-60 object-cover" />
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
