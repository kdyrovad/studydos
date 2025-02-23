import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/Home';
import AiAssistantPage from './pages/AiAssistant';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ai-assistant" element={<AiAssistantPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
