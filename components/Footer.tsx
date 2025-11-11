
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950/50 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
           <p className="text-white text-xl font-medium tracking-tighter">mytropy</p>
           <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} MyNtropy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
