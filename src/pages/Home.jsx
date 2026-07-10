import React from 'react';

function Home() {
  return (
    <div className="pointer-events-auto relative z-10 flex min-h-[100svh] w-full justify-center px-4 pb-12 pt-28 sm:px-8">
      
      <div className="flex w-full max-w-[1100px] flex-col items-start gap-8 lg:flex-row">
        
        <aside className="sticky top-28 w-full shrink-0 rounded-2xl border border-[#334155]/40 bg-[#020205]/60 p-8 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-md lg:w-[320px]">
          
          <div className="flex flex-col items-center text-center">
           
            <img 
              src="/myImg.jpg" 
              alt="Ricardo Guerra"
              className="mb-6 h-36 w-36 rounded-2xl border border-[#334155]/50 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            />
            
            {/* Nome e Título */}
            <h1 className="mb-2 text-2xl font-bold text-white">Ricardo Guerra</h1>
            
            <div className="mb-6 rounded-md px-4 py-1.5">
              <p className="text-xs uppercase tracking-[0.1em] text-[#8ea0bf]">Computer Science Engineer</p>
            </div>

            <div className="my-4 w-full border-t border-[#334155]/30"></div>

            <button className="mt-4 w-full rounded-xl border border-cyan-500/50 py-1 text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300">
              DOWNLOAD CV
            </button>
          </div>
        </aside>

        {/* =========================================
            LADO DIREITO: CONTEÚDO (Faz Scroll)
            ========================================= */}
        <main className="flex-1 rounded-2xl border border-[#334155]/40 bg-[#020205]/60 p-8 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-md md:p-10">
          
          {/* Título Principal */}
          <h2 className="mb-6 flex items-center gap-4 text-3xl font-bold text-white">
            About Me
            <div className="h-[2px] w-32 bg-gradient-to-r from-cyan-500/80 to-transparent"></div>
          </h2>
          
          {/* O texto que estava na Home antiga */}
          <div className="space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
            <p>
              A 19 year-old Computer Engineering student at UTAD, Portugal.
            </p>
            <p>
              Deep interest in learning about Cybersecurity and PenTesting. 
              Currently building my foundational skills in software development and networking!
            </p>
            
            {/* Parágrafo extra só para testares o scroll! Podes apagar depois */}
            <p className="text-[#8ea0bf]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in odio in nisl 
              tempor rutrum. Proin scelerisque urna ut erat fermentum, vel imperdiet urna 
              consequat. Fusce luctus velit nec dolor consectetur, id aliquet nunc lacinia. 
              Aenean vehicula consequat eros, non sodales urna sagittis sed.
            </p>
          </div>

          {/* Secção de Exemplo: What I'm Doing */}
          <h3 className="mb-6 mt-12 text-2xl font-semibold text-white">What I'm Doing</h3>
          
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            
            {/* Cartão de Exemplo 1 */}
            <div className="rounded-xl border border-[#334155]/30 bg-[#020205]/40 p-6 transition-colors hover:bg-[#1e293b]/40">
              <h4 className="mb-2 font-semibold text-white">Web Development</h4>
              <p className="text-sm text-gray-400">Building modern and responsive web applications using React and Tailwind.</p>
            </div>

            {/* Cartão de Exemplo 2 */}
            <div className="rounded-xl border border-[#334155]/30 bg-[#020205]/40 p-6 transition-colors hover:bg-[#1e293b]/40">
              <h4 className="mb-2 font-semibold text-white">Cybersecurity Labs</h4>
              <p className="text-sm text-gray-400">Practicing penetration testing and network defense in controlled environments.</p>
            </div>

            {/* Cartão de Exemplo 3 */}
            <div className="rounded-xl border border-[#334155]/30 bg-[#020205]/40 p-6 transition-colors hover:bg-[#1e293b]/40">
              <h4 className="mb-2 font-semibold text-white">Software Engineering</h4>
              <p className="text-sm text-gray-400">Learning core concepts of algorithms, data structures, and architecture at UTAD.</p>
            </div>

          </div>

        </main>

      </div>
    </div>
  );
}

export default Home;