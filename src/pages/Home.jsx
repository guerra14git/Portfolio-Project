import React from 'react';

function Home() {
  return (
    // Main scroll container
    <div className="pointer-events-auto relative z-10 h-full w-full overflow-y-auto overflow-x-hidden scroll-smooth">
      
      {/* Hero Section */}
      <div className="flex min-h-[100svh] w-full flex-col items-center justify-center p-6 pt-24">
        
        {/* Main Info Card */}
        <div className="w-full max-w-[600px] rounded-xl border border-[#334155]/40 bg-space-card/60 p-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.4)]">
          
          {/* Header Profile Section: Image + Titles */}
          <div className="mb-6 flex flex-col items-center gap-6 sm:flex-row sm:items-center">
            
            {/* Circular Profile Picture */}
            <img 
              src="/myImg.jpg" 
              alt="Ricardo Guerra"
              className="h-32 w-32 shrink-0 rounded-full border-2 border-[#334155]/50 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)] md:h-40 md:w-40"
            />
            
            <div className="text-center sm:text-left">
              <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">Ricardo Guerra</h1>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8ea0bf]">Software Engineer</p>
            </div>
          </div>
          
          {/* Text Description */}
          <div className="text-center sm:text-left">
            <p className="text-sm leading-relaxed text-gray-300 md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
              <button className="rounded-full border border-cyan-500/50 px-6 py-2 text-sm text-cyan-400 transition hover:bg-cyan-500/10">
                VIEW MY PROJECTS
              </button>
              <button className="rounded-full bg-[#1e293b] px-6 py-2 text-sm text-white transition hover:bg-[#334155]">
                CONTACT ME
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Additional Content Section */}
      <div className="flex min-h-[100svh] w-full flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl rounded-xl border border-[#334155]/30 bg-[#020205]/50 p-10 backdrop-blur-sm">
          <h2 className="mb-4 text-3xl font-bold text-white">More Content</h2>
          <p className="text-gray-400">
            Keep scrolling to discover more about my projects and experience.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Home;