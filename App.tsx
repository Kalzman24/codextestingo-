
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/HowItWorksSection';
import FeaturesSection from './components/FeaturesSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import GradientGlow from './components/backgrounds/GradientGlow';

function App() {
  return (
    <div className="bg-black min-h-screen text-gray-200 antialiased">
      <GradientGlow />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <PhilosophySection />
          <FeaturesSection />
          <PartnersSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
