
import React from 'react';
import { cn } from '../../lib/utils';

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  reverse?: boolean;
  className?: string;
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  gap = 42,
  speed = 80,
  speedOnHover = 25,
  reverse = false,
  className,
}) => {
    const sliderStyle: React.CSSProperties = {
        '--speed': `${speed}s`,
        '--speed-on-hover': `${speedOnHover}s`,
        animationDirection: reverse ? 'reverse' : 'normal',
        animationDuration: `var(--speed)`,
        gap: `${gap}px`,
    };

  return (
    <div className={cn('group w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]', className)}>
      <div className="flex flex-nowrap">
        <div
            className="animate-scroll flex w-max items-center justify-center flex-shrink-0"
            style={sliderStyle}
        >
            {children}
        </div>
        <div
            className="animate-scroll flex w-max items-center justify-center flex-shrink-0"
            style={sliderStyle}
            aria-hidden="true"
        >
            {children}
        </div>
      </div>
    </div>
  );
};
