import React, { useState, useEffect } from 'react';
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SceneBackground from './components/3D/SceneBackground';
import Intro from './pages/Intro';
import Home from './pages/Home'; 
import Navbar from './components/Navigation/Navbar';

const TRANSITION_DURATION_MS = 1800;
const CONTENT_REVEAL_DELAY_MS = 800;

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  const isCurrentlyInPage = location.pathname !== '/';

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(isCurrentlyInPage);

  const handleInit = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setShowContent(true);
    }, CONTENT_REVEAL_DELAY_MS);

    setTimeout(() => {
      navigate('/about');
      setIsTransitioning(false); 
    }, TRANSITION_DURATION_MS);
  };

  return (
    <>
      <SceneBackground
        isTransitioning={isTransitioning}
        showPrompt={location.pathname === '/'}
        onInit={handleInit}
      />
      
      <div
        className="pointer-events-none relative z-10 flex h-full w-full flex-col transition-opacity duration-700"
        style={{ opacity: showContent ? 1 : 0 }}
      >
        
        <div className="pointer-events-auto">
          {isCurrentlyInPage && <Navbar />}
        </div>

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Intro />} />
            
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Home />} /> 
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

      </div>
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="h-screen w-full overflow-x-hidden bg-[#020205]">
        <AppShell />
      </div>
    </HashRouter>
  );
}

export default App;