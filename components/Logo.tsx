import React from 'react';

export const MyNtropyLogo = ({ className }: { className?: string }) => (
    <img 
        src="/logoK.png" 
        alt="MyNtropy Logo" 
        className={`h-10 w-auto ${className || ''}`} 
    />
);