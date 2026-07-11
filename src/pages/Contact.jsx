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

              <button className="w-full rounded-xl border border-cyan-500/50  py-1.5 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300">
                DOWNLOAD CV
              </button>
            </div>
          </div>
        </aside>

        {/*right sidebar*/}
        <main className="flex-1 w-full rounded-2xl border border-[#334155]/40 bg-cyber-card/40 p-8 shadow-cyber-cyan backdrop-blur-[8px] md:p-10">
          
          {/* Título da Página */}
          <h2 className="mb-10 text-4xl font-bold text-cyber-white">
            Contact
            <div className="mt-4 h-[3px] w-12 rounded-full bg-cyber-accent/80"></div>
          </h2>

          {/* =======================
              SECÇÃO: MAPA 
              ======================= */}
          <div className="mb-12">
            <div className="overflow-hidden rounded-2xl border border-[#334155]/50 shadow-[0_0_15px_rgba(0,0,0,0.3)]">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=Vila%20Real,%20Portugal&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full opacity-70 transition-all duration-500 hover:opacity-100 hover:contrast-[100%]"
              ></iframe>
            </div>
          </div>

          {/* =======================
              SECÇÃO: FORMULÁRIO 
              ======================= */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-cyber-white">Contact Form</h3>
            
            <form className="flex flex-col gap-6">
              
              {/* Linha 1: Nome e Email (Lado a lado no PC, em cima um do outro no telemóvel) */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input 
                  type="text" 
                  placeholder="Full name" 
                  className="w-full rounded-xl border border-[#334155]/50 bg-cyber-black/40 px-5 py-4 text-sm text-cyber-white placeholder-cyber-gray transition-colors focus:border-cyber-accent focus:bg-cyber-black/60 focus:outline-none focus:ring-1 focus:ring-cyber-accent"
                />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full rounded-xl border border-[#334155]/50 bg-cyber-black/40 px-5 py-4 text-sm text-cyber-white placeholder-cyber-gray transition-colors focus:border-cyber-accent focus:bg-cyber-black/60 focus:outline-none focus:ring-1 focus:ring-cyber-accent"
                />
              </div>

              {/* Linha 2: Assunto */}
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full rounded-xl border border-[#334155]/50 bg-cyber-black/40 px-5 py-4 text-sm text-cyber-white placeholder-cyber-gray transition-colors focus:border-cyber-accent focus:bg-cyber-black/60 focus:outline-none focus:ring-1 focus:ring-cyber-accent"
              />

              {/* Linha 3: Mensagem */}
              <textarea 
                placeholder="Your Message" 
                rows="5"
                className="w-full resize-none rounded-xl border border-[#334155]/50 bg-cyber-black/40 px-5 py-4 text-sm text-cyber-white placeholder-cyber-gray transition-colors focus:border-cyber-accent focus:bg-cyber-black/60 focus:outline-none focus:ring-1 focus:ring-cyber-accent"
              ></textarea>

              {/* Botão de Envio */}
              <div className="mt-2 flex justify-end">
                <button 
                  type="button" 
                  className="group flex items-center gap-3 rounded-xl border border-[#334155]/50 bg-cyber-card/50 px-6 py-3 font-medium text-cyber-accent transition-all duration-300 hover:border-cyber-accent/50 hover:bg-cyber-accent/10"
                >
                  <svg className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </main>
        

      </div>
    </div>
  );
}

export default Home;