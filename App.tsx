
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatItDoes from './components/WhatItDoes';
import TheNeed from './components/TheNeed';
import TheSystem from './components/TheSystem';
import SixPillars from './components/SixPillars';
import Founder from './components/Founder';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white bg-white">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="what-it-does">
          <WhatItDoes />
        </div>
        <div id="the-need">
          <TheNeed />
        </div>
        <div id="the-system">
          <TheSystem />
        </div>
        <div id="six-pillars">
          <SixPillars />
        </div>
        <div id="founder">
          <Founder />
        </div>
        <div id="get-access">
          <CallToAction />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
