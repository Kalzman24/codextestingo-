
import React from 'react';

const GradientGlow: React.FC = () => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"
      aria-hidden="true"
    >
      <div className="absolute top-[-20%] left-[10%] w-[800px] h-[800px] bg-orange-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-30%] right-[-10%] w-[1000px] h-[1000px] bg-orange-500/10 rounded-full filter blur-3xl opacity-40 animate-pulse animation-delay-4000"></div>
    </div>
  );
};

export default GradientGlow;
