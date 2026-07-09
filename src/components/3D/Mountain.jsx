import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

function Mountain() {
  const geomRef = useRef();
  const materialRef = useRef();

  const baseGeometry = useMemo(() => new THREE.PlaneGeometry(50, 50, 50, 50), []);
  const cachedSteps = useMemo(() => {
    const position = baseGeometry.attributes.position.array;
    const steps = new Float32Array(position.length);
    const blockSize = 2.0;

    for (let i = 0; i < position.length; i += 3) {
      const x = position[i];
      const y = position[i + 1];
      steps[i] = Math.floor(x / blockSize) * blockSize;
      steps[i + 1] = Math.floor(y / blockSize) * blockSize;
      steps[i + 2] = blockSize;
    }

    return steps;
  }, [baseGeometry]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (geomRef.current) {
      const pos = geomRef.current.attributes.position;
      for (let i = 0, j = 0; i < pos.count; i++, j += 3) {
        const stepX = cachedSteps[j];
        const stepY = cachedSteps[j + 1];

        let z = Math.sin(stepX * 0.3 + time * 0.8) * Math.cos(stepY * 0.3 + time * 0.8) * 0.6;

        if (stepY > 4) z += (stepY - 4) * 0.25;
        if (stepY < -4) z -= (Math.abs(stepY) - 4) * 0.25;
        if (Math.abs(stepX) > 15) z -= (Math.abs(stepX) - 15) * 0.25;

        pos.setZ(i, z);
      }
      pos.needsUpdate = true; 
    }

    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
    }
  });

  return (
    <group position={[0, -2.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      
      <mesh>
        <primitive object={baseGeometry} attach="geometry" ref={geomRef} />
        <meshBasicMaterial color="#030308" />
      </mesh>

      <mesh position={[0, 0, 0.02]}>
        <primitive object={baseGeometry} attach="geometry" />
        <shaderMaterial
          ref={materialRef}
          wireframe={true}
          transparent={true}
          uniforms={{ time: { value: 0 } }}
          
          vertexShader={`
            varying vec3 vPos;
            void main() {
              vPos = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          
          fragmentShader={`
            uniform float time;
            varying vec3 vPos;

            float random(vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }

            void main() {
              vec3 baseColor = vec3(0.12, 0.16, 0.23); 
              vec3 glowColor = vec3(0.35, 0.60, 0.85); 
              float alpha = 0.3; 

              float intensity = 0.0;
              
              float loopSize = 6.0; 
              float tailLength = 1.5; 
              float baseSpeed = 0.4;  
              float varSpeed = 0.6;   
              float maxInt = 0.25; 

              float lineIdY = floor(vPos.y + 0.5);
              float lineIdX = floor(vPos.x + 0.5);
              float lineIdD1 = floor((vPos.x - vPos.y) + 0.5);
              float lineIdD2 = floor((vPos.x + vPos.y) + 0.5);

              float onHoriz = step(abs(vPos.y - lineIdY), 0.1);
              float onVert  = step(abs(vPos.x - lineIdX), 0.1);
              float onDiag1 = step(abs((vPos.x - vPos.y) - lineIdD1), 0.1);
              float onDiag2 = step(abs((vPos.x + vPos.y) - lineIdD2), 0.1);

              if (onHoriz > 0.5) {
                float speed = random(vec2(lineIdY, 1.1)) * varSpeed + baseSpeed;
                float dir = sign(random(vec2(lineIdY, 1.2)) - 0.5); 
                float offset = random(vec2(lineIdY, 2.2)) * 100.0;
                float dist = mod(vPos.x - (time * speed * dir + offset), loopSize);
                if (dist < tailLength) { intensity += (1.0 - (dist / tailLength)) * maxInt; }
              }

              if (onVert > 0.5) {
                float speed = random(vec2(lineIdX, 3.3)) * varSpeed + baseSpeed;
                float dir = sign(random(vec2(lineIdX, 3.4)) - 0.5);
                float offset = random(vec2(lineIdX, 4.4)) * 100.0;
                float dist = mod(vPos.y - (time * speed * dir + offset), loopSize);
                if (dist < tailLength) { intensity += (1.0 - (dist / tailLength)) * maxInt; }
              }

              if (onDiag1 > 0.5) {
                float speed = random(vec2(lineIdD1, 5.5)) * varSpeed + baseSpeed;
                float dir = sign(random(vec2(lineIdD1, 5.6)) - 0.5);
                float offset = random(vec2(lineIdD1, 6.6)) * 100.0;
                float posAlong = vPos.x + vPos.y; 
                float dist = mod(posAlong - (time * speed * dir + offset), loopSize * 1.4);
                if (dist < tailLength * 1.4) { intensity += (1.0 - (dist / (tailLength * 1.4))) * maxInt; }
              }

              if (onDiag2 > 0.5) {
                float speed = random(vec2(lineIdD2, 7.7)) * varSpeed + baseSpeed;
                float dir = sign(random(vec2(lineIdD2, 7.8)) - 0.5);
                float offset = random(vec2(lineIdD2, 8.8)) * 100.0;
                float posAlong = vPos.x - vPos.y; 
                float dist = mod(posAlong - (time * speed * dir + offset), loopSize * 1.4);
                if (dist < tailLength * 1.4) { intensity += (1.0 - (dist / (tailLength * 1.4))) * maxInt; }
              }

              vec3 finalColor = mix(baseColor, glowColor, clamp(intensity, 0.0, 1.0));
              float finalAlpha = max(alpha, intensity * 0.8);

              vec3 fogColor = vec3(0.012, 0.012, 0.031); 
              
              float distFromCenter = length(vPos.xy);
              
              float fogFade = smoothstep(12.0, 22.0, distFromCenter);
              
              finalColor = mix(finalColor, fogColor, fogFade);

              gl_FragColor = vec4(finalColor, finalAlpha);
            }
          
          `}
        />
      </mesh>
      
    </group>
  );
}

export default Mountain;