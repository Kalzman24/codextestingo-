import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#hero', label: 'MyNtropy' },
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#features', label: 'Features' },
    { href: '#partners', label: 'Partners' },
  ];

  const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <button type="button" onClick={() => scrollToSection('#hero')} className="text-2xl font-bold tracking-wider text-white bg-transparent border-0 p-0">
                myntropy
              </button>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button type="button" onClick={() => scrollToSection(link.href)} className="text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm font-medium bg-transparent border-0 p-0">
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block">
              <button type="button" onClick={() => scrollToSection('#contact')} className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300">
                Request Invite
              </button>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="mobile-menu"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full">
           <ul className="text-center">
              {navLinks.map((link) => (
                <li key={link.href} className="my-4">
                  <button
                    type="button"
                    onClick={() => {
                      scrollToSection(link.href);
                      setIsMenuOpen(false);
                    }}
                    className="text-gray-300 hover:text-orange-400 block px-3 py-2 rounded-md text-3xl font-medium bg-transparent border-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
           </ul>
           <div className="mt-12">
            <button
              type="button"
              onClick={() => {
                scrollToSection('#contact');
                setIsMenuOpen(false);
              }}
              className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black px-8 py-3 rounded-md text-xl font-medium transition-colors duration-300"
            >
              Request Invite
            </button>
           </div>
        </div>
      </div>
    </>
  );
};

export default Header;