function Home() {
  return (
    // Adicionámos overflow-y-auto e z-10 para o scroll funcionar por cima do 3D
    <div className="pointer-events-auto relative z-10 h-full w-full overflow-y-auto overflow-x-hidden">
      
      {/* min-h-[200vh] obriga a página a ter 2x a altura do ecrã para forçar o scroll */}
      <div className="flex min-h-[200vh] w-full items-start justify-end p-10 pt-32 md:pr-20">
        
        <div className="w-[500px] bg-space-card/80 backdrop-blur-md border border-[#334155] rounded-xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h1 className="mb-2 text-3xl font-bold text-white">Ricardo Guerra</h1>
          <p className="mb-6 text-[#8ea0bf] uppercase tracking-widest">Software Engineer</p>
          
          <p className="leading-relaxed text-gray-300">
            Faz scroll para baixo! Repara como a fotografia ali do lado não está colada ao vidro, 
            ela flutua no mundo 3D e reage à tua navegação.
          </p>

          {/* Um bloco lá para baixo só para veres o scroll a funcionar */}
          <div className="mt-[600px] rounded-lg border border-[#334155] p-6">
            <h2 className="text-xl font-bold text-white">Mais Informação...</h2>
            <p className="text-gray-400">O teu conteúdo do futuro fica aqui.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;