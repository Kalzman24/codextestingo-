import React, { useState } from 'react';
import { GatewayPage } from './components/GatewayPage';
import { ConsultancyPage } from './components/ConsultancyPage';
import { VentureStudioPage } from './components/VentureStudioPage';

const App: React.FC = () => {
  const [page, setPage] = useState<'gateway' | 'consultancy' | 'venture'>('gateway');

  const showConsultancy = () => setPage('consultancy');
  const showVentureStudio = () => setPage('venture');
  const showGateway = () => setPage('gateway');

  if (page === 'consultancy') {
    return <ConsultancyPage onGoHome={showGateway} />;
  }

  if (page === 'venture') {
    return <VentureStudioPage onGoHome={showGateway} />;
  }

  return <GatewayPage onSelectConsultancy={showConsultancy} onSelectVenture={showVentureStudio} />;
};

export default App;
