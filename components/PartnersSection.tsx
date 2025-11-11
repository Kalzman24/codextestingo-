
import React from 'react';
import { LogoCloud } from './ui/LogoCloud';

const logos = [
    { src: 'https://user-images.githubusercontent.com/12588137/181404113-d0964177-3802-4c28-aca0-2f9a26027a44.png', alt: 'TCV' },
    { src: 'https://user-images.githubusercontent.com/12588137/181404118-8f553255-89f3-424a-935f-4a35606d860d.png', alt: 'Harvard University' },
    { src: 'https://user-images.githubusercontent.com/12588137/181404120-0a562817-578d-4e14-8c81-3444ab065362.png', alt: 'Life' },
    // Repeat for a smoother visual loop with more items
    { src: 'https://user-images.githubusercontent.com/12588137/181404113-d0964177-3802-4c28-aca0-2f9a26027a44.png', alt: 'TCV' },
    { src: 'https://user-images.githubusercontent.com/12588137/181404118-8f553255-89f3-424a-935f-4a35606d860d.png', alt: 'Harvard University' },
    { src: 'https://user-images.githubusercontent.com/12588137/181404120-0a562817-578d-4e14-8c81-3444ab065362.png', alt: 'Life' },
];

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
           <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Engaging with Industry Leaders</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">We are engaging with partners to build a connected and intelligent ecosystem.</p>
        </div>
        <div className="mt-16">
            <LogoCloud logos={logos} />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;