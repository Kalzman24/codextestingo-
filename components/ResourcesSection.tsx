import React from 'react';
import { StaticResourcesSection } from './StaticResourcesSection';

// Note: The original ResourcesSection is no longer used and can be considered deprecated.
// This file now exports the ResourcesPage which uses the new stable static section.

export const ResourcesPage: React.FC = () => {
    return (
      <main className="bg-white">
        {/* Simple header for the standalone resources page */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4 px-6 lg:px-8">
            <a href="/" className="font-bold text-lg text-black">WhiteSpaceInc</a>
            <nav className="hidden sm:flex items-center gap-4 text-sm font-medium">
              <a href="/consultancy" className="text-gray-600 hover:text-black transition-colors">Consultancy</a>
              <a href="/venture-studio" className="text-gray-600 hover:text-black transition-colors">Venture Studio</a>
              <a href="/contact" className="text-gray-600 hover:text-black transition-colors">Contact</a>
            </nav>
          </div>
        </header>
        <StaticResourcesSection id="resources" />
      </main>
    );
  };
