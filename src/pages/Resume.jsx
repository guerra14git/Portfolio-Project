import React, { useState } from 'react';

function Home() {
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);

  return (
    <div className="pointer-events-auto relative z-10 flex min-h-[100svh] w-full justify-center px-4 pb-12 pt-28 sm:px-8">
      
      <div className="flex w-full max-w-[1300px] flex-col items-start gap-8 lg:flex-row">
        
        {/* left sidebar */}
        <aside className="w-full shrink-0 rounded-2xl border border-[#334155]/40 bg-cyber-black/50 p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-[3px] lg:sticky lg:top-28 lg:w-[320px] lg:p-8">
          
          {/* header */}
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

          {/* collapsible area */}
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
                    <span className="truncate text-sm text-white" title="contacts@ricardoguerra.dev">contacts@ricardoguerra.dev</span>
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

              <button className="w-full rounded-xl border border-cyan-500/50  py-1.5 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </aside>

        {/*right sidebar*/}
        <main className="flex-1 w-full rounded-2xl border border-[#334155]/40 bg-cyber-card/40 p-8 shadow-cyber-cyan backdrop-blur-[8px] md:p-10">
          
          {/* Título da Página (Estilo da imagem com linha curta) */}
          <h2 className="mb-10 text-4xl font-bold text-cyber-white">
            Resume
            <div className="mt-4 h-[3px] w-12 rounded-full bg-cyber-accent/80"></div>
          </h2>
          <div className="mb-14">
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-black/40 text-cyber-accent shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyber-white">Education</h3>
            </div>

            <div className="relative ml-[23px] border-l border-[#334155]/50 pl-10">
              
              <div className="relative mb-10">
                <div className="absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                
                <h4 className="text-lg font-bold text-cyber-white">University of Trás-os-Montes and Alto Douro (UTAD)</h4>
                <p className="mt-1 text-base text-cyber-gray">Bachelor of Science in Computer Engineering</p>
                <p className="mt-2 text-sm text-cyber-accent">2024 — Present</p>
              </div>

              <div className="relative">
                <div className="absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                
                <h4 className="text-lg font-bold text-cyber-white">Morgado De Mateus High School</h4>
                <p className="mt-1 text-base text-cyber-gray">Science and Technology</p>
                <p className="mt-2 text-sm text-cyber-accent">2021 — 2024</p>
              </div>

            </div>
          </div>

          <div className="mb-14">
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-black/40 text-cyber-accent shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyber-white">Certifications</h3>
            </div>

            <div className="relative ml-[23px] border-l border-[#334155]/50 pl-10">
              
              <div className="relative mb-10">
                <div className="absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                
                <h4 className="text-lg font-bold text-cyber-white">Ethical Hacker Certification</h4>
                <p className="mt-1 text-base text-cyber-gray">Cisco Network Associate</p>
                <p className="mt-2 text-sm text-cyber-accent">2026 — Present</p>
              </div>
            </div>
          </div>
          
          <div>
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-black/40 text-cyber-accent shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyber-white">Experience</h3>
            </div>

            {/* Contentor da Linha Temporal */}
            <div className="relative ml-[23px] border-l border-[#334155]/50 pl-10">
            
              {/* 
              <div className="relative mb-10">
                <div className="absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                
                <h4 className="text-lg font-bold text-cyber-white">Junior PenTester / Intern</h4>
                <p className="mt-1 text-base text-cyber-gray">Company Name Placeholder</p>
                <div className="mb-4 mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-cyber-accent">Feb, 2024 — Present</span>
                  <span className="text-cyber-gray">•</span>
                  <span className="text-cyber-gray">6 mo</span>
                </div>
                
                
                <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-cyber-gray">
                  <li>Participated in team meetings to discuss new vulnerabilities and project updates.</li>
                  <li>Assisted in analyzing web application security using modern tools.</li>
                  <li>Developed small Python scripts for automated network scanning.</li>
                </ul>
              </div>

              
              <div className="relative">
                <div className="absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent shadow-[0_0_8px_rgba(14,165,233,0.8)]"></div>
                
                <h4 className="text-lg font-bold text-cyber-white">Freelance Developer</h4>
                <p className="mt-1 text-base text-cyber-gray">Self-Employed</p>
                <div className="mb-4 mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-cyber-accent">Jan, 2023 — Jan, 2024</span>
                  <span className="text-cyber-gray">•</span>
                  <span className="text-cyber-gray">1 yr</span>
                </div>
                
                <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-cyber-gray">
                  <li>Designed and developed responsive web applications using React.</li>
                  <li>Integrated third-party APIs for seamless data communication.</li>
                </ul>
              </div>
                  */}
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}

export default Home;