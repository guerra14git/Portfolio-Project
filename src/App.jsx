import React, { useState, useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SceneBackground from './components/3D/SceneBackground';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Navbar from './components/Navigation/Navbar';

// Configuration
const TRANSITION_DURATION_MS = 1800;
const CONTENT_REVEAL_DELAY_MS = 800;

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  // State initialization
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(location.pathname !== '/');

  // Handle initialization sequence
  const handleInit = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setShowContent(true);
      setIsTransitioning(false);
    }, CONTENT_REVEAL_DELAY_MS);

    setTimeout(() => {
      navigate('/home');
    }, TRANSITION_DURATION_MS);
  };

  return (
    <>
      <SceneBackground
        isTransitioning={isTransitioning}
        showPrompt={location.pathname === '/'}
        onInit={handleInit}
      />
      
      {/* 2D Overlay Container */}
      <div
        className="pointer-events-none relative z-10 flex h-full w-full flex-col transition-opacity duration-700"
        style={{ opacity: showContent ? 1 : 0 }}
      >
        
        {/* Navigation Layer: Clickable and only visible outside the intro */}
        <div className="pointer-events-auto">
          {location.pathname !== '/' && <Navbar />}
        </div>

        {/* Page Routing Layer */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

      </div>
    </>
  );
}

function App() {
  return (
    // HashRouter required for GitHub Pages deployment
    <HashRouter>
      <div className="h-screen w-full bg-[#020205] overflow-x-hidden">
        <AppShell />
      </div>
    </HashRouter>
  );
}

export default App;