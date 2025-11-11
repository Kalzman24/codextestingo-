
import React from 'react';
import { ConnectIcon, SmartInputIcon, ExplainableAIIcon } from './icons/FeatureIcons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg text-left backdrop-blur-sm">
    <div className="mb-4 text-orange-400">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PhilosophySection: React.FC = () => {
  const features = [
    {
      icon: <ConnectIcon />,
      title: 'Seamless, secure connection',
      description: 'myNtropy connects directly to your existing member network through official APIs - read only and fully governed.',
    },
    {
      icon: <SmartInputIcon />,
      title: 'Smart input and preferences',
      description: 'Members describe what they are looking for - a deal partner, advisor, or opportunity - with complete freedom. No rigid forms, just natural input.',
    },
    {
      icon: <ExplainableAIIcon />,
      title: 'Explainable AI Matching',
      description: 'myNtropy intelligently matches members across all connected networks - providing clear reasoning behind every suggestion and a structured view of your ecosystem.',
    },
  ];

  return (
    <section id="philosophy" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Turn Network Noise into Signal</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">MyNtropy turns network noise into explainable, consented intros - fast enough to matter.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
