import React from 'react';

function Home() {
  return (
    <div className="pointer-events-auto relative z-10 h-full w-full overflow-y-auto overflow-x-hidden">
      {/* 
        Mobile: Stacked, top padding clears 3D image space.
        Desktop (md:): Side-by-side, aligned right.
      */}
      <div className="flex min-h-[140vh] w-full flex-col items-center p-6 pt-[450px] md:flex-row md:items-start md:justify-end md:p-10 md:pt-32 md:pr-20">
        


        {/* Content Card */}
        <div className="w-full max-w-[500px] rounded-xl border border-[#334155] bg-space-card/80 p-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h1 className="mb-2 text-3xl font-bold text-white">Ricardo Guerra</h1>
          <p className="mb-6 uppercase tracking-widest text-[#8ea0bf]">Software Engineer</p>
          
          <p className="leading-relaxed text-gray-300">
            Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>



      </div>
    </div>
  );
}

export default Home;