import React, { useState } from 'react';

const projectsList = [
  {
    id: 1,
    title: "ESP32 Network Scanner",
    description: "A small hardware lab experiment using an ESP32 to scan and map local Wi-Fi networks.",
    technologies: ["C++", "ESP32", "IoT"],
    githubLink: "https://github.com/oteuuser/esp32-scanner"
  },
  {
    id: 2,
    title: "Simple Port Scanner",
    description: "A lightweight Python script created to understand TCP/IP connections and identify open ports on local machines.",
    technologies: ["Python", "Networking", "Security"],
    githubLink: "https://github.com/oteuuser/port-scanner"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "My personal digital space built from scratch to showcase my journey in software engineering and cybersecurity.",
    technologies: ["React", "Tailwind CSS", "Vite"],
    githubLink: "https://github.com/oteuuser/portfolio"
  }
];

function Projects() {
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  return (
    <div className="pointer-events-auto relative z-10 flex min-h-[100svh] w-full justify-center px-4 pb-12 pt-28 sm:px-8">
      
      <div className="flex w-full max-w-[1300px] flex-col items-start gap-8 lg:flex-row">
        
        {/* leftside */}
        <aside className="w-full shrink-0 rounded-2xl border border-[#334155]/40 bg-cyber-black/50 p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-[3px] lg:sticky lg:top-28 lg:w-[320px] lg:p-8">
          
          {/* Header */}
          <div className="flex items-center lg:flex-col lg:text-center">
            <img 
              src="/myImg.jpg" 
              alt="Ricardo Guerra"
              className="h-16 w-16 rounded-xl border border-[#334155]/50 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)] lg:mb-6 lg:h-36 lg:w-36 lg:rounded-2xl"
            />
            
            <div className="ml-4 flex flex-1 flex-col items-start justify-center lg:ml-0 lg:items-center">
              <h1 className="text-xl font-bold text-white lg:mb-2 lg:text-2xl">Ricardo Guerra</h1>
            </div>

            <button 
              onClick={() => setIsInfoExpanded(!isInfoExpanded)}
              className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 transition-all duration-300 hover:bg-[#334155]/50 lg:hidden"
            >
              <svg 
                className={`h-5 w-5 transition-transform duration-300 ${isInfoExpanded ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Collapsible area */}
          <div className={`grid transition-all duration-500 ease-in-out lg:mt-0 lg:grid-rows-[1fr] lg:opacity-100 ${isInfoExpanded ? 'mt-6 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              
              <div className="mb-6 flex justify-center lg:justify-center">
                <div className="rounded-md border border-cyber-card/50 px-3 py-1 lg:px-4 lg:py-1.5">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-cyber-gray lg:text-xs">Computer Science Engineer</p>
                </div>
              </div>

              <div className="mb-6 w-full border-t border-[#334155]/30"></div>

              <div className="mb-6 flex w-full flex-col gap-5 text-left">
                {/* Email */}
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-cyber-gray">Email</span>
                    <span className="truncate text-sm text-white" title="generic@email.com">generic@email.com</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-cyber-gray">Location</span>
                    <span className="truncate text-sm text-white">Vila Real, Portugal</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 w-full border-t border-[#334155]/30"></div>

              <button className="w-full rounded-xl border border-cyan-500/50 py-1.5 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </aside>

        {/* rightside */}
        <main className="flex-1 w-full rounded-2xl border border-[#334155]/40 bg-cyber-card/40 p-8 shadow-cyber-cyan backdrop-blur-[8px] md:p-10">
          
          <h2 className="mb-2 flex items-center gap-4 text-3xl font-bold text-cyber-white">
            Projects
            <div className="h-[2px] w-32 bg-gradient-to-r from-cyan-500/80 to-transparent"></div>
          </h2>
          <p className="mb-10 text-cyber-gray">
            A collection of small experiments, micro-tools, and university labs I've been building to practice and learn.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projectsList.map((project) => (
              <div 
                key={project.id} 
                className="group flex flex-col justify-between rounded-xl border border-[#334155]/30 bg-cyber-black/30 p-6 transition-all hover:-translate-y-1 hover:border-cyber-accent/50 hover:bg-cyber-card/50"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyber-accent/10 text-cyber-accent">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyber-gray transition-colors hover:text-cyber-white"
                    >
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  
                  <h3 className="mb-2 text-lg font-semibold text-cyber-white">{project.title}</h3>
                  <p className="mb-6 text-sm text-cyber-gray">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="rounded-md bg-cyber-accent/10 px-2.5 py-1 text-xs font-medium text-cyber-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}

export default Projects;