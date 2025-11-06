import React, { useState } from 'react';
import { ConsultancyPage } from './components/ConsultancyPage';
import { VentureStudioPage } from './components/VentureStudioPage';
import { ArticlePage } from './components/ArticlePage';
import { articles } from './data/articles';
import { NextChapterPage } from './components/ContactSection';

const App: React.FC = () => {
  const [page, setPage] = useState<'consultancy' | 'venture' | 'nextchapter'>('consultancy');
  const [previousPage, setPreviousPage] = useState<'consultancy' | 'venture'>('consultancy');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const showConsultancy = () => {
    setPage('consultancy');
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
  };
  const showVentureStudio = () => {
    setPage('venture');
    setSelectedArticleId(null);
    window.scrollTo(0, 0);
  };

  const showNextChapter = () => {
    if (page !== 'nextchapter') {
      setPreviousPage(page);
    }
    setPage('nextchapter');
    window.scrollTo(0, 0);
  };

  const handleBackFromNextChapter = () => {
    setPage(previousPage);
  };

  const handleSelectArticle = (articleId: string) => {
    setSelectedArticleId(articleId);
    window.scrollTo(0, 0);
  };
  
  const handleBackToConsultancy = () => {
    setSelectedArticleId(null);
    setPage('consultancy');
    // Use a timeout to ensure the ConsultancyPage has rendered before scrolling.
    setTimeout(() => {
      const resourcesSection = document.getElementById('resources');
      if (resourcesSection) {
        resourcesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const article = articles.find(a => a.id === selectedArticleId);

  if (article) {
    return <ArticlePage article={article} onBack={handleBackToConsultancy} />;
  }

  if (page === 'nextchapter') {
    return <NextChapterPage onBack={handleBackFromNextChapter} />;
  }

  if (page === 'consultancy') {
    return <ConsultancyPage onGoHome={showConsultancy} onSelectArticle={handleSelectArticle} onGoToNextChapter={showNextChapter} onGoToVentureStudio={showVentureStudio} />;
  }

  if (page === 'venture') {
    return <VentureStudioPage onGoHome={showConsultancy} onGoToNextChapter={showNextChapter} onGoToConsultancy={showConsultancy} />;
  }

  return <ConsultancyPage onGoHome={showConsultancy} onSelectArticle={handleSelectArticle} onGoToNextChapter={showNextChapter} onGoToVentureStudio={showVentureStudio} />;
};

export default App;