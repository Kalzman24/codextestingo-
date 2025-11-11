import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-white">Ready to bring clarity to your network?</h2>
        <div className="mt-8">
            <button type="button" className="inline-block bg-orange-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-orange-400 transition-all duration-300 transform hover:scale-105">
              Request an Invitation
            </button>
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
            &copy; {new Date().getFullYear()} MyNtropy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
