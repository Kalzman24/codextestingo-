import React from 'react';

const IconCard: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex flex-col items-center space-y-3">
    <div className="text-orange-500 w-16 h-16">{icon}</div>
    <span className="text-gray-300 font-medium">{title}</span>
  </div>
);

const HowItWorks: React.FC = () => {
  const features = [
    {
      title: "Seamless, secure connection;",
      description: "myNtropy connects directly to your existing member network though official APIs - read only and fully governed.",
    },
    {
      title: "Smart input and preferences;",
      description: "members describe what they are looking for - a deal partner, advisor, or opportunity - with complete freedom. No rigid forms, just natural input.",
    },
    {
      title: "Explainable AI Matching;",
      description: "myNtropy intelligently matches members across all connected networks - providing clear reasoning behind every suggestion and a structured view of your ecosystem.",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-black py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-96 -mt-24 pointer-events-none">
        <div
          className="w-full h-full bg-transparent"
          style={{
            maskImage: 'radial-gradient(ellipse 50% 30% at 50% 100%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 50% 30% at 50% 100%, black 0%, transparent 100%)',
            background: 'radial-gradient(ellipse at center, rgba(234, 88, 12, 0.2) 0%, transparent 60%)'
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tighter">Own the chaos. Choose the signal.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            MyNtropy turns network noise into explainable, consented intros - fast enough to matter.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <IconCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 10V20H20V10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10Z"/><line x1="8" y1="20" x2="8" y2="15"/><line x1="16" y1="20" x2="16" y2="15"/></svg>}
            title="The Gate"
          />
          <IconCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 12C7 6 17 18 21 12"/></svg>}
            title="The Signal"
          />
          <IconCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4L18 4L12 12L6 20H18L12 12L6 4Z"/></svg>}
            title="The Window"
          />
          <IconCard
            icon={<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="9"/></svg>}
            title="The Mirror"
          />
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto">
           <div className="space-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-orange-900/50 text-orange-400 font-bold text-xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                  <p className="mt-2 text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;