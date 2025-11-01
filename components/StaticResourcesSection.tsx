import React from 'react';
import { articles } from '../data/articles';
import { cn } from '../lib/utils';
import type { Article } from '../data/articles';

type StaticArticleCardProps = {
  article: Article;
};

// A simple, static card component that avoids the problematic forwardRef pattern.
const StaticArticleCard = ({ article }: StaticArticleCardProps) => {
  return (
    <a 
      href={`/resources/${article.id}`}
      className={cn(
        'group relative flex h-80 cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-cover bg-center p-6 text-white shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl'
      )}
      style={{ backgroundImage: `url(${article.imageUrl})` }}
    >
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-t opacity-70 transition-opacity duration-300 group-hover:opacity-80',
          article.gradient
        )}
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
            {article.category}
          </p>
          <h2 className="text-2xl font-bold">{article.title}</h2>
        </div>
        <div className="self-start">
          <div className="rounded-md bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm transition-all duration-300 group-hover:bg-white/30">
            Read Article
          </div>
        </div>
      </div>
    </a>
  );
};


type StaticResourcesSectionProps = {
  id: string;
};

export const StaticResourcesSection = ({ id }: StaticResourcesSectionProps) => {
  return (
    <section id={id} className="bg-white text-black min-h-screen flex flex-col justify-center scroll-mt-20 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight tracking-tighter">
            Resources
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Insights and perspectives on AI strategy, execution, and the future of business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {articles.map((article) => (
            <StaticArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};