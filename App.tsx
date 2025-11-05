import React, { useState } from 'react';
import { GatewayPage } from './components/GatewayPage';
import { ConsultancyPage } from './components/ConsultancyPage';
import { VentureStudioPage } from './components/VentureStudioPage';
import { ArticlePage } from './components/ArticlePage';
import { articles } from './data/articles';
import { NextChapterPage } from './components/ContactSection';

const App: React.FC = () => {
  const [page, setPage] = useState<'gateway' | 'consultancy' | 'venture' | 'nextchapter'>('gateway');
  const [previousPage, setPreviousPage] = useState<'gateway' | 'consultancy' | 'venture'>('gateway');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);

  const showConsultancy = () => setPage('consultancy');
  const showVentureStudio = () => setPage('venture');
  const showNextChapter = () => {
    if (page !== 'nextchapter') {
      setPreviousPage(page);
    }
    setPage('nextchapter');
    window.scrollTo(0, 0);
  };
  const showGateway = () => {
    setPage('gateway');
    setSelectedArticleId(null);
  }

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
    return <ConsultancyPage onGoHome={showGateway} onSelectArticle={handleSelectArticle} onGoToNextChapter={showNextChapter} />;
  }

  if (page === 'venture') {
    return <VentureStudioPage onGoHome={showGateway} onGoToNextChapter={showNextChapter} />;
  }

  return <GatewayPage onSelectConsultancy={showConsultancy} onSelectVenture={showVentureStudio} />;
};

export default App;