
import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'WHAT IT DOES', href: '#what-it-does' },
    { name: 'THE NEED', href: '#the-need' },
    { name: 'THE SYSTEM', href: '#the-system' },
    { name: 'SIX PILLARS', href: '#six-pillars' },
    { name: 'FOUNDER', href: '#founder' },
    { name: 'GET ACCESS', href: '#get-access' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; 
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-100 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <div 
          className="text-2xl font-montserrat font-bold tracking-tighter cursor-pointer select-none" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          My<span className="text-brand-orange">Ntropy</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-[10px] font-bold tracking-[0.1em] text-zinc-900 hover:text-brand-orange transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex flex-col gap-1.5 cursor-pointer">
          <div className="w-6 h-[2px] bg-brand-dark"></div>
          <div className="w-6 h-[2px] bg-brand-dark"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
