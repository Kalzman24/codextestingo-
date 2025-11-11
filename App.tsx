import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Partners from './components/Partners';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Partners />
      </main>
      <Footer />
    </div>
  );
};

export default App;