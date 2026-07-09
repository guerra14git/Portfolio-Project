import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Moon() {
  const groupRef = useRef();
  const geomRef = useRef();
  const materialRef = useRef();
  const { viewport } = useThree();

  const responsiveScale = Math.min(0.7, viewport.width / 10);

  const baseGeometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(1, 2).toNonIndexed();
  }, []);

  const originalData = useMemo(() => {
    const source = baseGeometry.attributes.position.array;
    const directions = new Float32Array(source.length);

    for (let i = 0; i < source.length; i += 3) {
      const ox = source[i];
      const oy = source[i + 1];
      const oz = source[i + 2];
      const length = Math.hypot(ox, oy, oz) || 1;

      directions[i] = ox / length;
      directions[i + 1] = oy / length;
      directions[i + 2] = oz / length;
    }

    return directions;
  }, [baseGeometry]);

  const blockData = useMemo(() => {
    const data = new Float32Array(baseGeometry.attributes.position.count * 3);
    const blockSize = 0.35;

    for (let i = 0, j = 0; i < originalData.length; i += 3, j += 3) {
      data[j] = Math.floor(originalData[i] / blockSize) * blockSize;
      data[j + 1] = Math.floor(originalData[i + 1] / blockSize) * blockSize;
      data[j + 2] = Math.floor(originalData[i + 2] / blockSize) * blockSize;
    }

    return data;
  }, [baseGeometry, originalData]);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.08;
    }

    if (geomRef.current) {
      const pos = geomRef.current.attributes.position;
      const original = originalData;
      const blocks = blockData;

      for (let i = 0, j = 0; i < pos.count; i++, j += 3) {
        const dirX = original[j];
        const dirY = original[j + 1];
        const dirZ = original[j + 2];

        const sx = blocks[j];
        const sy = blocks[j + 1];
        const sz = blocks[j + 2];

        const pulse =
          Math.sin(sx * 5.0 + time * 0.85) *
          Math.cos(sy * 5.0 + time * 0.85) *
          Math.sin(sz * 5.0 + time * 0.85);

        const radius = 1.0 + pulse * 0.05;
        pos.setXYZ(i, dirX * radius, dirY * radius, dirZ * radius);
      }

      pos.needsUpdate = true;
    }

    if (materialRef.current) {
      materialRef.current.uniforms.time.value = time;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={[-2.6, 1.8, -2]} 
      scale={[responsiveScale, responsiveScale, responsiveScale]}
    >
      <mesh>
        <primitive object={baseGeometry} attach="geometry" ref={geomRef} />
        <meshStandardMaterial
          color="#334155"
          transparent
          opacity={0.24}
          emissive="#0b101e"
          emissiveIntensity={0.1}
          roughness={0.95}
          metalness={0.03}
          depthWrite={false}
          flatShading
        />
      </mesh>

      <mesh scale={[1.01, 1.01, 1.01]}>
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
              float alpha = 0.18;

              float intensity = 0.0;
              
              float loopSize = 6.0;
              float tailLength = 1.4;
              float baseSpeed = 0.45;
              float varSpeed = 0.7;
              float maxInt = 0.26;

              vec3 grid = vPos * 4.0;

              float lineIdX = floor(grid.x + 0.5);
              float lineIdY = floor(grid.y + 0.5);
              float lineIdZ = floor(grid.z + 0.5);

              float onX = step(abs(grid.x - lineIdX), 0.1);
              float onY = step(abs(grid.y - lineIdY), 0.1);
              float onZ = step(abs(grid.z - lineIdZ), 0.1);

              if (onY > 0.5) {
                float speed = random(vec2(lineIdY, 1.1)) * varSpeed + baseSpeed;
                float offset = random(vec2(lineIdY, 2.2)) * 100.0;
                float dist = mod(grid.x - (time * speed + offset), loopSize);
                if (dist < tailLength) intensity += (1.0 - (dist / tailLength)) * maxInt;
              }

              if (onX > 0.5) {
                float speed = random(vec2(lineIdX, 3.3)) * varSpeed + baseSpeed;
                float offset = random(vec2(lineIdX, 4.4)) * 100.0;
                float dist = mod(grid.y - (time * speed + offset), loopSize);
                if (dist < tailLength) intensity += (1.0 - (dist / tailLength)) * maxInt;
              }
              
              if (onZ > 0.5) {
                float speed = random(vec2(lineIdZ, 5.5)) * varSpeed + baseSpeed;
                float offset = random(vec2(lineIdZ, 6.6)) * 100.0;
                float dist = mod(grid.x - (time * speed + offset), loopSize);
                if (dist < tailLength) intensity += (1.0 - (dist / tailLength)) * maxInt;
              }

              vec3 finalColor = mix(baseColor, glowColor, clamp(intensity, 0.0, 1.0));
              float finalAlpha = max(alpha, intensity * 0.8);

              gl_FragColor = vec4(finalColor, finalAlpha);
            }
          `}
        />
      </mesh>
    </group>
  );
}

export default Moon;