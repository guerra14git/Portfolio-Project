import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Intro from './pages/Intro';
import Home from './pages/Home';
import SceneBackground from './components/3D/SceneBackground';

const NAVIGATE_DELAY_MS = 1350;
const CONTENT_REVEAL_DELAY_MS = 1600;

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showContent, setShowContent] = useState(location.pathname !== '/');

  useEffect(() => {
    if (!isTransitioning) return;

    // Step 1: change the route after the camera zoom-in finishes.
    const navTimer = setTimeout(() => {
      navigate('/home');
    }, NAVIGATE_DELAY_MS);

    // Step 2: reveal the Home content slightly later so the
    //         3D scene has time to settle before text appears.
    const contentTimer = setTimeout(() => {
      setShowContent(true);
      setIsTransitioning(false);
    }, CONTENT_REVEAL_DELAY_MS);

    return () => {
      clearTimeout(navTimer);
      clearTimeout(contentTimer);
    };
  }, [isTransitioning, navigate]);

  // Reset content visibility when navigating back to Intro.
  useEffect(() => {
    if (location.pathname === '/') {
      setShowContent(false);
      setIsTransitioning(false);
    }
  }, [location.pathname]);

  const handleInit = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
  };

  return (
    <>
      <SceneBackground
        isTransitioning={isTransitioning}
        showPrompt={location.pathname === '/'}
        onInit={handleInit}
      />
      {/* Fade-in wrapper: content is invisible until showContent becomes true */}
      <div
        className="pointer-events-none relative z-10 h-full w-full transition-opacity duration-700"
        style={{ opacity: showContent ? 1 : 0 }}
      >
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen bg-[#020205]">
        <AppShell />
      </div>
    </BrowserRouter>
  );
}

export default App;