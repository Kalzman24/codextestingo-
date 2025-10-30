import React, { useEffect, useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeIcon, MenuIcon, XIcon, ArrowRight } from "./Icons";

// A hook to detect user's preference for reduced motion.
const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        setPrefersReducedMotion(mediaQuery.matches);
        const listener = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener("change", listener);
        return () => mediaQuery.removeEventListener("change", listener);
    }, []);
    return prefersReducedMotion;
};

const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export interface NavItem {
  name: string;
  url?: string;
  onClick?: () => void;
  icon: IconComponent;
}

interface NavBarProps {
  navItems: NavItem[];
  onGoHome: () => void;
  onStartDiagnosis?: () => void;
  showDiagnosisButton?: boolean;
}

const _NavBar: React.FC<NavBarProps> = ({ navItems, onStartDiagnosis, onGoHome, showDiagnosisButton = true }) => {
  const [activeTab, setActiveTab] = useState(navItems[0]?.name || '');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (item.onClick) {
        item.onClick();
        setActiveTab(item.name);
    } else if (item.url) {
        const targetId = item.url.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveTab(item.name);
    }
  };
  
  useEffect(() => {
    const throttle = (func: () => void, limit: number) => {
        let inThrottle: boolean;
        return () => {
            if (!inThrottle) {
                func();
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    };

    const handleScroll = () => {
        const sections = navItems
            .filter(item => item.url)
            .map(item => document.getElementById(item.url!.substring(1)));

        const scrollPosition = window.scrollY + 150;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
                const correspondingNavItem = navItems.find(item => item.url === `#${section.id}`);
                if (correspondingNavItem) {
                    setActiveTab(correspondingNavItem.name);
                    break;
                }
            }
        }
    };

    const throttledScrollHandler = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [navItems]);

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0">
        <div className="flex w-full max-w-sm md:w-full md:max-w-4xl items-center justify-between bg-[#0a0a0a]/50 border border-white/10 backdrop-blur-lg py-1 px-4 rounded-full shadow-lg">
          
          <button onClick={onGoHome} className="text-white font-bold text-sm whitespace-nowrap hover:text-white/80 transition-colors">
              White Space
          </button>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.name;
              return (
                <a
                  key={item.name}
                  href={item.url || '#'}
                  onClick={(e) => handleNavClick(e, item)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors",
                    "text-white/80 hover:text-white",
                    isActive && "text-white"
                  )}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp-desktop"
                      className="absolute inset-0 w-full bg-white/5 rounded-full -z-10"
                      initial={false}
                      transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                        <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </a>
              );
            })}
          </div>
          
          <div className="flex items-center">
             {showDiagnosisButton && onStartDiagnosis && (
               <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onStartDiagnosis();
                  }}
                  className={cn(
                    "hidden md:flex relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-colors items-center gap-2",
                    "text-white hover:text-white/90 bg-white/10"
                  )}
                >
                  <span>Diagnosis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
             )}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                className="p-2 -mr-2 text-white/80 hover:text-white transition-colors"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeInOut' }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/50 backdrop-blur-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="mt-24 px-6">
              <div className="flex flex-col items-center gap-2 bg-[#1a1a1a] p-4 rounded-2xl border border-white/10">
                 <button onClick={onGoHome} className="relative w-full cursor-pointer text-md font-semibold px-4 py-3 rounded-xl transition-colors flex items-center gap-4 text-white/80 hover:text-white hover:bg-white/5">
                    <HomeIcon className="w-5 h-5" />
                    Home
                 </button>
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.name;

                  return (
                    <a
                      key={item.name}
                      href={item.url || '#'}
                      onClick={(e) => handleNavClick(e, item)}
                      className={cn(
                        "relative w-full cursor-pointer text-md font-semibold px-4 py-3 rounded-xl transition-colors flex items-center gap-4",
                        "text-white/80 hover:text-white hover:bg-white/5",
                        isActive && "text-white"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="lamp-mobile"
                          className="absolute inset-0 w-full bg-white/10 rounded-xl -z-10"
                          initial={false}
                          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0 }}
                        />
                      )}
                    </a>
                  );
                })}
                {showDiagnosisButton && onStartDiagnosis && (
                  <a
                    key="diagnosis-mobile"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      onStartDiagnosis();
                    }}
                    className={cn(
                      "relative w-full cursor-pointer text-md font-semibold px-4 py-3 rounded-xl transition-colors flex items-center gap-4",
                      "text-white/80 hover:text-white hover:bg-white/5",
                    )}
                  >
                    <HomeIcon className="w-5 h-5" />
                    <span>Diagnosis</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export const NavBar = memo(_NavBar);