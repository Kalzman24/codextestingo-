
import React from 'react';
const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-48 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center" style={{ backgroundImage: `u'/Photos/70.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="bg-brand-grey px-5 py-1.5 mb-10 rounded-full text-[10px] tracking-[0.3em] uppercase text-brand-dark">
        From Chaos to Clarity
      </div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl mb-12 leading-[1.1] tracking-tight max-w-6xl">
        From chaos to clarity. <br />
        <span className="text-brand-orange">From searching to matching.</span>
      </h1>
      <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mb-14 font-bold uppercase tracking-tight leading-relaxed">
        Turning identity, intent, and context into precise, explainable matches.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <a 
          href="#the-system" 
          onClick={(e) => handleScroll(e, '#the-system')}
          className="px-12 py-5 bg-brand-orange text-white text-xs uppercase tracking-widest hover:brightness-110 transition-all rounded-sm"
        >
          Explore the System
        </a>
        <a 
          href="#get-access" 
          onClick={(e) => handleScroll(e, '#get-access')}
          className="px-12 py-5 border-2 border-brand-grey text-brand-dark text-xs uppercase tracking-widest hover:bg-brand-grey transition-all rounded-sm"
        >
          Show Interest
        </a>
      </div>
    </div>
  );
};

export default Hero;
