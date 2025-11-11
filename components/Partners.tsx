import React from 'react';

const PartnerLogo: React.FC<{ children: React.ReactNode; ariaLabel: string }> = ({ children, ariaLabel }) => (
  <div
    className="flex items-center justify-center h-24 p-4"
    role="img"
    aria-label={ariaLabel}
  >
    <div className="h-12 w-auto text-gray-500 fill-current grayscale opacity-70 hover:grayscale-0 hover:opacity-100 hover:text-gray-300 transition-all duration-300">
      {children}
    </div>
  </div>
);

const Partners: React.FC = () => {
  return (
    <section id="partners" className="bg-black py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
            Engaging with Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            We are engaging with partners to build a connected and intelligent ecosystem.
          </p>
        </div>

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <PartnerLogo ariaLabel="Harvard University">
            <svg viewBox="0 0 24 27" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L1.5 4.5V13.5C1.5 19.5 6 25.5 12 27C18 25.5 22.5 19.5 22.5 13.5V4.5L12 0ZM10.5 8.25H4.5V6H10.5V8.25ZM19.5 8.25H13.5V6H19.5V8.25ZM10.5 12.75H4.5V10.5H10.5V12.75ZM19.5 12.75H13.5V10.5H19.5V12.75ZM10.5 17.25H4.5V15H10.5V17.25ZM19.5 17.25H13.5V15H19.5V17.25Z"/>
            </svg>
          </PartnerLogo>

          <PartnerLogo ariaLabel="LIFE Lebanon">
            <svg viewBox="0 0 120 40" className="w-auto h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V40H12V0H0ZM32 0V40H44V28H62V40H74V0H62V12H44V0H32ZM84 0V40H96V0H84ZM106 0L106 24H120L120 40H94L94 0H106Z" />
            </svg>
          </PartnerLogo>

          <PartnerLogo ariaLabel="YPO">
            <svg viewBox="0 0 100 40" className="w-auto h-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0V18L14 18V40H28V18L42 18V0H0ZM48 0V40H62V22L75 40H90L70 18L90 0H75L62 14V0H48ZM88 22C88 31.9411 95.0589 40 105 40C114.941 40 122 31.9411 122 22C122 12.0589 114.941 4 105 4C95.0589 4 88 12.0589 88 22ZM105 30C100.582 30 97 26.4183 97 22C97 17.5817 100.582 14 105 14C109.418 14 113 17.5817 113 22C113 26.4183 109.418 30 105 30Z"/>
            </svg>
          </PartnerLogo>
          
          <PartnerLogo ariaLabel="Brazilian Chamber of Commerce">
             <svg viewBox="0 0 50 50" className="w-auto h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 0L50 25L25 50L0 25L25 0ZM25 10C18.3726 10 13 15.3726 13 22C13 28.6274 18.3726 34 25 34C31.6274 34 37 28.6274 37 22C37 15.3726 31.6274 10 25 10Z" />
             </svg>
          </PartnerLogo>
        </div>
      </div>
    </section>
  );
};

export default Partners;