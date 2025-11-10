import React from 'react';
import { MyNtropyLogo } from './Logo';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-8 md:p-12 z-20">
      <div className="container mx-auto flex justify-end">
        <MyNtropyLogo className="scale-75 md:scale-100" />
      </div>
    </header>
  );
};

export default Header;
