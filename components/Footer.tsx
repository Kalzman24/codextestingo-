import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-black border-t border-gray-900">
      <div className="container mx-auto text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} MyNtropy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
