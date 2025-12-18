
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'What It Does', href: '#what-it-does' },
    { name: 'The Need', href: '#the-need' },
    { name: 'The System', href: '#the-system' },
    { name: 'Six Pillars', href: '#six-pillars' },
    { name: 'Founder', href: '#founder' },
    { name: 'Get Access', href: '#get-access' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Offset is 79 to ensure we hide the junction between sections perfectly
      const offset = 79; 
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetPosition = rect.top + scrollTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-grey">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-montserrat font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          My<span className="text-brand-orange">Ntropy</span>
        </div>
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-[10px] font-bold uppercase tracking-widest text-brand-dark hover:text-brand-orange transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:hidden flex flex-col gap-1.5 cursor-pointer">
          <div className="w-6 h-[2px] bg-brand-dark"></div>
          <div className="w-6 h-[2px] bg-brand-dark"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
