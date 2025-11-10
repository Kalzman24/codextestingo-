import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SystemOfClarity from './components/SystemOfClarity';
import Features from './components/Features';
import Partners from './components/Partners';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black text-gray-200 font-light overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Background decorative elements can be added here */}
      </div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SystemOfClarity />
          <Features />
          <Partners />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
