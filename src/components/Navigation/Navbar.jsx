import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    // Wrapper container to keep both pill and dropdown centered
    <div className="fixed top-6 left-1/2 z-50 w-[90%] max-w-3xl -translate-x-1/2">
      
      {/* Main Navigation Pill */}
      <nav className="flex items-center justify-between rounded-full border border-[#334155]/50 bg-[#020205]/60 px-8 py-4 backdrop-blur-md">
        
        {/* Logo / Brand */}
        <div className="font-mono text-x2 tracking-widest text-white">
          ricardoguerra<span className="text-cyan-500">.</span>dev
        </div>
        
        {/* Desktop Navigation Links (Hidden on mobile) */}
        <div className="hidden space-x-8 text-xs uppercase tracking-[0.2em] text-[#8ea0bf] md:flex">
          <Link to="/home" className="transition-colors hover:text-white">Home</Link>
          <Link to="/projects" className="transition-colors hover:text-white">Projects</Link>
          <Link to="/about" className="transition-colors hover:text-white">About</Link>
          <Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
        </div>

        {/* Mobile Hamburger Button (Hidden on desktop) */}
        <button 
          className="text-[#8ea0bf] transition-colors hover:text-white md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              // Close icon (X)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              // Hamburger icon (3 lines)
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Floating Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 mt-4 flex w-full flex-col space-y-6 rounded-2xl border border-[#334155]/50 bg-[#020205]/95 p-6 text-center shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-xl md:hidden">
          {/* Note: onClick added to links to close the menu when a page is selected */}
          <Link to="/home" onClick={toggleMenu} className="text-sm uppercase tracking-[0.2em] text-[#8ea0bf] transition-colors hover:text-white">Home</Link>
          <Link to="/projects" onClick={toggleMenu} className="text-sm uppercase tracking-[0.2em] text-[#8ea0bf] transition-colors hover:text-white">Projects</Link>
          <Link to="/about" onClick={toggleMenu} className="text-sm uppercase tracking-[0.2em] text-[#8ea0bf] transition-colors hover:text-white">About</Link>
          <Link to="/contact" onClick={toggleMenu} className="text-sm uppercase tracking-[0.2em] text-[#8ea0bf] transition-colors hover:text-white">Contact</Link>
        </div>
      )}

    </div>
  );
}

export default Navbar;