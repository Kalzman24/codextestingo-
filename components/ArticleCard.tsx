import React from 'react';
import { cn } from '../lib/utils'; 

// FIX: Changed from an interface to a type alias to fix complex type inheritance issues with forwardRef.
// Using a type alias with an intersection is more robust for components that accept DOM attributes.
type ArticleCardProps = React.ComponentPropsWithoutRef<'div'> & {
  category: string;
  title: string;
  imageUrl: string;
  gradient: string;
};

export const ArticleCard = React.forwardRef<HTMLDivElement, ArticleCardProps>(
  ({ category, title, imageUrl, gradient, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl',
          className
        )}
        style={{ backgroundImage: `url(${imageUrl})` }}
        {...props}
      >
        {/* Gradient Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80',
            gradient
          )}
        />
        
        {/* Content Container */}
        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Top Section: Category */}
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
              {category}
            </p>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
          
          {/* Bottom Section: Read Button */}
          <div className="self-start">
            <div
              className={cn(
                'rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30'
              )}
            >
              Read Article
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ArticleCard.displayName = 'ArticleCard';