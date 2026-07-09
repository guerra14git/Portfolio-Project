import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import Moon from '../components/3D/Moon';
import Mountain from '../components/3D/Mountain';
import { Suspense, useEffect, useState } from 'react';

function HackerPrompt3D() {
  const command = './init_portfolio.sh';
  const [typed, setTyped] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (!isDeleting && typed.length < command.length) {
      const typeSpeed = 100 + Math.random() * 150;
      timeoutId = setTimeout(() => {
        setTyped(command.slice(0, typed.length + 1));
      }, typeSpeed);

    } else if (!isDeleting && typed.length === command.length) {
      if (!isGlowing) {
        timeoutId = setTimeout(() => {
          setIsGlowing(true);
        }, 500);
      } else {
        timeoutId = setTimeout(() => {
          setIsGlowing(false);
          setIsDeleting(true);
        }, 1200);
      }

    } else if (isDeleting && typed.length > 0) {
      const deleteSpeed = 60 + Math.random() * 60;
      timeoutId = setTimeout(() => {
        setTyped(command.slice(0, typed.length - 1));
      }, deleteSpeed);

    } else {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
      }, 500);
    }

    return () => clearTimeout(timeoutId);
  }, [command, typed, isDeleting, isGlowing]);

  return (
    <Html
      position={[0, 1.8, -2]} 
      transform
      sprite
      distanceFactor={0.7} 
      occlude={false}
      zIndexRange={[100, 0]}
      style={{ pointerEvents: 'none' }} 
    >
      <div className="select-none px-4 py-2">
        <p
          className="whitespace-nowrap font-bold tracking-widest"
          style={{
            fontFamily: 'Fira Code, monospace',
            fontSize: '150px',
            WebkitFontSmoothing: 'antialiased',
            willChange: 'transform, text-shadow, opacity',
            color: '#707C95',
            opacity: 0.85,
            textShadow: isGlowing
              ? '0 0 20px rgba(74, 91, 122, 0.6), 0 0 40px rgba(74, 91, 122, 0.3)'
              : '0 0 0px rgba(74, 91, 122, 0)',
            transition: 'text-shadow 0.8s ease-in-out',
          }}
        >
          <span className="mr-8">{'>'}</span>
          {typed}
          <span
            className="ml-4 inline-block h-[1.1em] w-[0.6ch] animate-pulse align-middle"
            style={{ opacity: 1.0, backgroundColor: '#4a5b7a' }}
          />
        </p>
      </div>
    </Html>
  );
}

function Intro() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-space-dark">

      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#030308', 1, 20]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={5} color="#cbd5e1" />
        <Stars radius={100} depth={50} count={1800} factor={2.2} saturation={0} fade speed={0.45} />
        <Suspense fallback={null}>
          <Moon />
        </Suspense>
        <HackerPrompt3D />
        <Mountain />
        <OrbitControls
          enableZoom={false}
          enablePan={false}

          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 1.8}

          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={Math.PI / 8}
        />
      </Canvas>
    </div>
  );
}

export default Intro;