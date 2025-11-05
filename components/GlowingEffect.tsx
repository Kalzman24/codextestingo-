import React from 'react';

interface GlowingEffectProps {
  disabled?: boolean;
  className?: string;
}

export const GlowingEffect: React.FC<GlowingEffectProps> = ({ disabled = false, className }) => {
  if (disabled) {
    return null;
  }

  // Using a style tag for the keyframes animation to make the component self-contained.
  const styles = `
    @keyframes glowing-background {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div
        className={`
          absolute -inset-2 rounded-2xl z-0
          bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
          opacity-30 blur-xl 
          animate-[glowing-background_15s_ease-in-out_infinite] [background-size:400%_400%]
          ${className || ''}
        `}
        aria-hidden="true"
      />
    </>
  );
};
