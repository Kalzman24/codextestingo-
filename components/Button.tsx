import React from 'react';

// FIX: Changed from an interface to a type alias. This is a critical fix to prevent a subtle
// type-checking error that crashes the React renderer, which has been the root cause of
// blank screen issues in several other components within this project.
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "dark";
  size?: "sm" | "lg";
  children: React.ReactNode;
  href?: string;
  theme?: 'light' | 'dark';
};

const Button = ({ variant = "default", size = "sm", className = "", children, href, theme = 'dark', ...props }: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-white text-black hover:bg-gray-100 focus-visible:ring-black/50",
    outline: theme === 'dark' 
      ? "border border-white/20 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30 focus-visible:ring-white/20"
      : "border border-black/10 bg-transparent text-black hover:bg-black/5 focus-visible:ring-black/20",
    ghost: theme === 'dark'
      ? "text-white/90 hover:text-white hover:bg-white/10 focus-visible:ring-white/20"
      : "text-black/70 hover:text-black hover:bg-black/5 focus-visible:ring-black/20",
    dark: "bg-black text-white hover:bg-gray-800 focus-visible:ring-black"
  };

  const sizes = {
    sm: "h-9 px-4 py-2 text-sm",
    lg: "px-8 py-6 text-lg",
  };
  
  const finalClassName = `group relative overflow-hidden rounded-full ${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center">{children}</span>
      <div className="absolute inset-0 -top-2 -bottom-2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={finalClassName} {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={finalClassName}
      {...props}
    >
      {content}
    </button>
  );
};

export default Button;