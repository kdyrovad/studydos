import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './pages/Home';
import AiAssistantPage from './pages/AiAssistant';

const Layout: React.FC = () => {
  const location = useLocation();
  // Render Header only if on the home page
  const showHeader = location.pathname === '/';

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '1rem' }}>
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ai-assistant" element={<AiAssistantPage />} />
          <Route path="/ask-study-dos" element={<AiAssistantPage />} />
        </Routes>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;
