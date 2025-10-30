import React from 'react';
import { ArticleCard } from './ArticleCard';
import { articles } from '../data/articles';

interface ResourcesSectionProps {
  id: string;
  onSelectArticle: (articleId: string) => void;
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({ id, onSelectArticle }) => {
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
            <ArticleCard
              key={article.id}
              category={article.category}
              title={article.title}
              imageUrl={article.imageUrl}
              gradient={article.gradient}
              onClick={() => onSelectArticle(article.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
