import React, { useRef, type ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange' | 'black';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean;
}

const glowColorMap = {
  blue: { base: 220, spread: 200, saturation: 100, lightness: 50 },
  purple: { base: 280, spread: 300, saturation: 100, lightness: 50 },
  green: { base: 120, spread: 200, saturation: 100, lightness: 50 },
  red: { base: 0, spread: 200, saturation: 100, lightness: 50 },
  orange: { base: 30, spread: 200, saturation: 100, lightness: 50 },
  black: { base: 0, spread: 0, saturation: 0, lightness: 0 },
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

export const GlowCard: React.FC<GlowCardProps> = ({ 
  children, 
  className = '', 
  glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const { base, spread, saturation, lightness } = glowColorMap[glowColor];

  const getSizeClasses = () => {
    if (customSize) return '';
    return sizeMap[size];
  };

  const getInlineStyles = (): React.CSSProperties => {
    const baseStyles: any = {
      '--base': base,
      '--spread': spread,
      '--saturation': saturation,
      '--lightness': lightness,
      '--radius': 24,
      '--border': 2,
      '--backdrop': 'hsl(0 0% 100% / 0.15)',
      '--backup-border': 'hsl(0 0% 100% / 0.2)',
      '--size': 300,
      '--border-size': 'calc(var(--border, 2) * 1px)',
      '--spotlight-size': 'calc(var(--size, 150) * 1px)',
      '--hue': `calc(var(--base) + (0.5 * var(--spread, 0)))`,
      backgroundImage: `radial-gradient(
        var(--spotlight-size) var(--spotlight-size) at 50% 50%,
        hsl(var(--hue, 0) calc(var(--saturation, 0) * 1%) calc(var(--lightness, 0) * 1%) / var(--bg-spot-opacity, 0.05)), transparent
      )`,
      backgroundColor: 'var(--backdrop, transparent)',
      backgroundSize: 'calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)))',
      backgroundPosition: '50% 50%',
      border: 'var(--border-size) solid var(--backup-border)',
      position: 'relative',
      touchAction: 'none',
    };

    if (customSize && width) baseStyles.width = typeof width === 'number' ? `${width}px` : width;
    if (customSize && height) baseStyles.height = typeof height === 'number' ? `${height}px` : height;

    return baseStyles;
  };

  const beforeAfterStyles = `
    @keyframes pulse-glow {
      0% { 
        --bg-spot-opacity: 0.05;
        --border-spot-opacity: 0.5;
      }
      50% { 
        --bg-spot-opacity: 0.1;
        --border-spot-opacity: 1;
      }
      100% { 
        --bg-spot-opacity: 0.05;
        --border-spot-opacity: 0.5;
      }
    }

    [data-glow] {
      animation: pulse-glow 6s infinite ease-in-out;
    }

    [data-glow]::before,
    [data-glow]::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--border-size) * -1);
      border: var(--border-size) solid transparent;
      border-radius: calc(var(--radius) * 1px);
      background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    
    [data-glow]::before {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at 50% 50%,
        hsl(var(--hue, 0) calc(var(--saturation, 0) * 1%) calc(var(--lightness, 0) * 1%) / var(--border-spot-opacity, 0.8)), transparent 100%
      );
      filter: brightness(1.2);
    }
    
    [data-glow]::after {
      background-image: radial-gradient(
        calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at 50% 50%,
        hsl(0 0% 10% / 0.8), transparent 100%
      );
    }
    
    [data-glow] > [data-glow] {
      position: absolute;
      inset: 0;
      will-change: filter;
      opacity: 1;
      border-radius: calc(var(--radius) * 1px);
      border-width: calc(var(--border-size) * 20);
      filter: blur(calc(var(--border-size) * 10));
      background: none;
      pointer-events: none;
      border: none;
    }
    
    [data-glow] > [data-glow]::before {
      inset: -10px;
      border-width: 10px;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
      <div
        ref={cardRef}
        data-glow
        style={getInlineStyles()}
        className={`
          ${getSizeClasses()}
          relative 
          rounded-3xl
          shadow-lg
          backdrop-blur-xl
          ${className}
        `}
      >
        <div ref={innerRef} data-glow></div>
        {children}
      </div>
    </>
  );
};