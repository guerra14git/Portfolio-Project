import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import * as THREE from 'three';
import { useEffect, useRef, useState } from 'react';
import Moon from './Moon';
import Mountain from './Mountain';

function ScrollReactiveImage() {
  const groupRef = useRef();
  // O viewport.aspect diz-nos a proporção do ecrã em tempo real!
  const { viewport } = useThree(); 

  // Se o aspect < 1, o ecrã está de pé (Telemóvel). Se for > 1, está deitado (PC).
  const isMobile = viewport.aspect < 1;
  
  // COORDENADAS "SNIPER-SAFE":
  // No PC fica em -0.9 (ligeiramente à esquerda dentro da mira). 
  // No telemóvel fica no 0 (exatamente no centro).
  const baseX = isMobile ? 0 : -0.9;
  const baseY = isMobile ? 1.4 : 1.05; // 1.05 é a altura exata dos olhos da câmara
  const baseZ = -8; 

  useFrame(() => {
    if (!groupRef.current) return;
    
    // Lê o scroll suavemente
    const scrollY = window.scrollY;
    
    // Animação de Parallax - A imagem sobe e roda conforme desces a página
    groupRef.current.position.y = baseY + (scrollY * 0.003); 
    groupRef.current.rotation.x = scrollY * 0.001;
    groupRef.current.rotation.y = scrollY * 0.0005;
  });

  return (
    <group ref={groupRef} position={[baseX, baseY, baseZ]}>
      <Html
        transform
        distanceFactor={isMobile ? 2.0 : 1.2} // <-- Reduzimos de 3.5/2.5 para 2.0/1.2!
        occlude={false}
      >
        <div className="relative h-[400px] w-[280px]">
          <img 
            src="/myImg.jpg" 
            alt="Ricardo Guerra"
            className="h-full w-full object-cover rounded-2xl border-2 border-[#334155] shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          />
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-[#8ea0bf]/10 blur-md" />
        </div>
      </Html>
    </group>
  );
}

// 2. A TUA CÂMARA
function TransitionCamera({ active, instant }) {
  const { camera } = useThree();

  const progressRef   = useRef(instant ? 1 : 0);
  const originPos     = useRef(new THREE.Vector3(0, 0, 5));
  const targetPos     = useRef(new THREE.Vector3(0, 1.05, -1.6));
  const lookAtTarget  = useRef(new THREE.Vector3(0, 1.05, -2));
  const lerpedPos     = useRef(new THREE.Vector3());

  useFrame((_, delta) => {
    const goal = active ? 1 : 0;

    if (instant && active) {
      progressRef.current = 1;
    } else {
      progressRef.current = THREE.MathUtils.lerp(progressRef.current, goal, delta * 2.2);
    }

    if (progressRef.current < 0.001) return;

    lerpedPos.current.lerpVectors(originPos.current, targetPos.current, progressRef.current);
    camera.position.copy(lerpedPos.current);
    camera.fov = THREE.MathUtils.lerp(60, 18, progressRef.current);
    camera.lookAt(lookAtTarget.current);
    camera.updateProjectionMatrix();
  });

  return null;
}

// 3. O TERMINAL HACKER
function InitPrompt({ active, onInit, visible }) {
  const command = './init_portfolio.sh';
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (!isDeleting && typed.length < command.length) {
      const typeSpeed = 100 + Math.random() * 150;
      timeoutId = setTimeout(() => { setTyped(command.slice(0, typed.length + 1)); }, typeSpeed);
    } else if (!isDeleting && typed.length === command.length) {
      if (!isGlowing) {
        timeoutId = setTimeout(() => { setIsGlowing(true); }, 500);
      } else {
        timeoutId = setTimeout(() => { setIsGlowing(false); setIsDeleting(true); }, 1200);
      }
    } else if (isDeleting && typed.length > 0) {
      const deleteSpeed = 60 + Math.random() * 60;
      timeoutId = setTimeout(() => { setTyped(command.slice(0, typed.length - 1)); }, deleteSpeed);
    } else {
      timeoutId = setTimeout(() => { setIsDeleting(false); }, 500);
    }
    return () => clearTimeout(timeoutId);
  }, [command, typed, isDeleting, isGlowing]);

  return (
    <Html
      position={[0, 0.05, -2]}
      transform
      distanceFactor={0.9}
      occlude={false}
      zIndexRange={[100, 0]}
      style={{ pointerEvents: active ? 'none' : 'auto', transition: 'opacity 0.4s ease', opacity: active ? 0 : 1, display: visible ? 'block' : 'none' }}
    >
      <button
        type="button"
        onClick={onInit}
        className="select-none px-2 py-1 text-left"
        style={{ cursor: 'pointer', transform: 'translateY(10px)' }}
      >
        <p
          className="whitespace-nowrap font-bold tracking-[0.25em]"
          style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: '88px',
            WebkitFontSmoothing: 'antialiased',
            willChange: 'transform, text-shadow, opacity',
            color: '#92a2bf',
            opacity: 0.52,
            textShadow: isGlowing
              ? '0 0 12px rgba(146, 162, 191, 0.35), 0 0 22px rgba(146, 162, 191, 0.16)'
              : '0 0 0px rgba(146, 162, 191, 0)',
            transition: 'text-shadow 0.8s ease-in-out',
          }}
        >
          <span className="mr-4">{'>'}</span>
          {typed}
          <span
            className="ml-3 inline-block h-[1.1em] w-[0.55ch] animate-pulse align-middle"
            style={{ opacity: 0.85, backgroundColor: '#8ea0bf' }}
          />
        </p>
      </button>
    </Html>
  );
}

// 4. A CENA PRINCIPAL
function SceneBackground({ isTransitioning, showPrompt, onInit }) {
  
  const isHomeView = !showPrompt; 
  const forceActive = isTransitioning || isHomeView; 
  const forceInstant = isHomeView && !isTransitioning; 

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#020205]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35,
        }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={5} color="#cbd5e1" />
        <Stars radius={120} depth={70} count={1800} factor={2.1} saturation={0} fade speed={0.18} />
        
        <Moon
          onClick={onInit}
          isTransitioning={forceActive} 
          introScaleMultiplier={1}
          homeScaleMultiplier={2.65}
          introBodyOpacity={0.34}
          homeBodyOpacity={0}
          introWireOpacity={1}
          homeWireOpacity={0.42}
        />
        <Mountain />
        
        <TransitionCamera active={forceActive} instant={forceInstant} />
        
        {!isTransitioning && showPrompt && (
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 1.8}
            minAzimuthAngle={-Math.PI / 8}
            maxAzimuthAngle={Math.PI / 8}
          />
        )}
        
        <InitPrompt active={isTransitioning} onInit={onInit} visible={showPrompt} />

        {/* --- A TUA FOTOGRAFIA AQUI, DENTRO DO CANVAS! --- */}
        {!isTransitioning && !showPrompt && (
          <ScrollReactiveImage />
        )}

      </Canvas>
    </div>
  );
}

export default SceneBackground;