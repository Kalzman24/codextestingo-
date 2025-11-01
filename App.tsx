import React, { useEffect } from 'react';
import { Routes, Route, useLocation, useParams, Link } from 'react-router-dom';
import { ConsultancyPage } from './components/ConsultancyPage';
import { VentureStudioPage } from './components/VentureStudioPage';
import { ArticlePage } from './components/ArticlePage';
import { articles } from './data/articles';
import { ContactPage } from './components/ui/contact-page';
import { ResourcesPage } from './components/ResourcesSection';

// A helper component to handle scrolling to hash IDs and to the top of the page.
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to the corresponding element
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // A short timeout ensures the page has had time to render before scrolling.
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      // Otherwise, scroll to the top of the page on navigation
      window.scrollTo(0, 0);
    }
  }, [location]); // This effect runs every time the location changes

  return null; // This component does not render any UI
};

// A "Not Found" component to be used as a fallback.
const NotFound = () => (
    <div className="bg-white min-h-screen flex items-center justify-center text-center p-4">
        <div>
            <h1 className="text-4xl font-bold text-black">404 - Not Found</h1>
            <p className="text-gray-600 mt-4">The page you are looking for does not exist.</p>
            <Link to="/" className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
                Go to Homepage
            </Link>
        </div>
    </div>
);


// A wrapper component to find and render the correct article based on the URL parameter.
const ArticleRouteWrapper = () => {
    const { articleId } = useParams<{ articleId: string }>();
    const article = articles.find(a => a.id === articleId);
    
    if (article) {
        return <ArticlePage article={article} />;
    }
    // A proper "Not Found" fallback is much more robust.
    return <NotFound />; 
};


const App = () => {
  return (
    <>
      <ScrollHandler />
      <Routes>
        <Route path="/venture-studio" element={<VentureStudioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:articleId" element={<ArticleRouteWrapper />} />
        
        {/* Default and fallback routes */}
        <Route path="/consultancy" element={<ConsultancyPage />} />
        <Route path="/" element={<ConsultancyPage />} />
        
        {/* Catch-all route for any other path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;