import React from 'react';

const Features = () => {
  const networkingFeatures = [
    { title: "Precision Access", description: "Reciprocity and access — ace-every-time. The right time, the right way." },
    { title: "Explainable Intelligence", description: "Every recommendation or counterparty has a reason. Engagement matters." },
    { title: "Private Flow", description: "Privacy by design. Anonymity is a feature, never a flaw. E2E NDR Protocol." }
  ];

  const metrics = [
    { value: "12 h", description: "Average time to first relevant reply. Speed with conscience." },
    { value: "-90%", description: "Wasted time & cognitive load vs existing channels." },
    { value: "-100%", description: "Custom thesis fit & integrity. Trust mass-solved - off-promised." }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-[#050505]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Precision Networking */}
        <div className="max-w-xl">
          <h2 className="text-4xl font-light text-white mb-8">Precision networking for the top 1%</h2>
          <div className="space-y-8">
            {networkingFeatures.map(feature => (
              <div key={feature.title}>
                <h3 className="text-xl text-orange-400 mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quiet Metrics */}
        <div>
          <h2 className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-8">Quiet Metrics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {metrics.map(metric => (
              <div key={metric.value} className="p-6 border border-gray-900 bg-black rounded-lg">
                <p className="text-5xl font-light text-orange-400 mb-4">{metric.value}</p>
                <p className="text-gray-500">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
