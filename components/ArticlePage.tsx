import React from 'react';
import type { Article } from '../data/articles';
import { ArrowLeft } from './Icons';
import Button from './Button';

interface ArticlePageProps {
  article: Article;
  onBack: () => void;
}

const renderContent = (content: string) => {
  const paragraphs = content.split('\n\n').map((p, i) => {
    if (p.startsWith('**') && p.endsWith('**')) {
      return <h3 key={i} className="text-2xl font-bold mt-8 mb-4 text-black">{p.slice(2, -2)}</h3>;
    }
    if (p.includes('\n- ')) {
      const lines = p.split('\n');
      const heading = lines[0].endsWith(':') ? <p className="text-lg font-semibold mb-2">{lines[0]}</p> : null;
      const listItems = (heading ? lines.slice(1) : lines).map(line => line.replace(/^- /, ''));
      return (
        <div key={i} className="my-4">
          {heading}
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
            {listItems.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      )
    }
    return <p key={i} className="text-lg leading-relaxed my-4 text-gray-800">{p}</p>;
  });
  return <>{paragraphs}</>;
};

export const ArticlePage: React.FC<ArticlePageProps> = ({ article, onBack }) => {
  return (
    <div className="bg-white min-h-screen">
      <header className="relative h-[24rem] md:h-96">
        <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${article.gradient} opacity-80`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <p className="text-sm font-bold uppercase tracking-widest">{article.category}</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-4 max-w-4xl">{article.title}</h1>
        </div>
        <div className="absolute top-6 left-6 z-10">
            <button 
                onClick={onBack} 
                className="h-12 w-12 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50 transition-colors backdrop-blur-sm"
                aria-label="Go back"
            >
                <ArrowLeft className="w-6 h-6" />
            </button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto py-12 px-6">
        <article className="prose prose-lg max-w-none">
          {renderContent(article.content)}
        </article>
        <div className="mt-12 border-t pt-8 text-center">
          <Button onClick={onBack} variant="dark" theme="light" size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
          </Button>
        </div>
      </main>
    </div>
  );
};
