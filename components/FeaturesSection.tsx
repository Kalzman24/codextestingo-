
import React from 'react';
import { CheckCircleIcon } from './icons/FeatureIcons';

const featuresList = [
  'Private, consent-based integrations - Your data stays inside your clubs framework',
  'Learns your clubs unique culture - adapts to you specific norms and language including events, fundraising etc.',
  'Instantly delivers precise matches - always with clear explanations and next steps',
  'Overview and organizing your networks in one unified ecosystem',
];

const smartFeatures = [
    'Smart calendar (events, dinners, fundraising etc)',
    'Network heat mapping',
    'Global network view',
    'Industry analytics',
];

const FeatureListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start">
    <div className="flex-shrink-0">
      <CheckCircleIcon className="h-6 w-6 text-orange-400 mt-1" />
    </div>
    <span className="ml-3 text-gray-300">{children}</span>
  </li>
);

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
           <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">An Intelligent, Unified Ecosystem</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Designed for privacy, culture, and precision.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Core Features</h3>
                 <ul className="space-y-4">
                    {featuresList.map((feature, index) => (
                        <FeatureListItem key={index}>{feature}</FeatureListItem>
                    ))}
                </ul>
            </div>
             <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-white">Advanced Capabilities</h3>
                 <ul className="mt-6 space-y-4">
                    {smartFeatures.map((feature, index) => (
                        <FeatureListItem key={index}>{feature}</FeatureListItem>
                    ))}
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
