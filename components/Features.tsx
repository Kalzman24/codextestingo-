import React from 'react';

const FeatureItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="flex items-start space-x-4">
        <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-gray-300 text-lg">{children}</p>
    </div>
);

const Features: React.FC = () => {
    const featureList = [
        "Private, consent-based integrations - Your data stays inside your clubs framework",
        "Learns your clubs unique culture - adapts to you specific norms and language including events, fundraising etc.",
        "Instantly delivers precise matches - always with clear explanations and next steps",
        "Overview and organizing your networks in one unified ecosystem",
        "Smart calendar (events, dinners, fundraising etc), network heat mapping, global network view, industry analytics"
    ];

    return (
        <section id="features" className="bg-gray-950/50 py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-light tracking-tighter text-white sm:text-4xl">
                           Core Features
                        </h2>
                        <p className="mt-3 text-xl text-gray-400">
                            Everything you need in one unified ecosystem.
                        </p>
                    </div>
                    <div className="mt-12 space-y-6">
                        {featureList.map((feature, index) => (
                            <FeatureItem key={index}>{feature}</FeatureItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;