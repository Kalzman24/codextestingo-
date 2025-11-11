import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', text: 'MyNtropy' },
    { href: '#how-it-works', text: 'How It Works' },
    { href: '#features', text: 'Features' },
    { href: '#partners', text: 'Partners' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={handleNavClick} className="text-white text-2xl font-medium tracking-tighter">mytropy</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium">
                  {link.text}
                </a>
              ))}
              <a
                href="#how-it-works"
                onClick={handleNavClick}
                className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition-all duration-300"
              >
                See Your Top 3 Matches
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleNavClick} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{link.text}</a>
            ))}
             <a
                href="#how-it-works"
                onClick={handleNavClick}
                className="bg-orange-600 text-white block text-center mt-2 mx-3 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-500 transition-all duration-300"
              >
                See Your Top 3 Matches
              </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;