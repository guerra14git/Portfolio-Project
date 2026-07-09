import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Moon({
  onClick,
  position = [0, 1.05, -2],
  isTransitioning = false,
  introScaleMultiplier = 1,
  homeScaleMultiplier = 2.65,
  introBodyOpacity = 0.34,
  homeBodyOpacity = 0,
  introWireOpacity = 1,
  homeWireOpacity = 0.42,
  showBody = true,
  showWireframe = true,
}) {
  const groupRef = useRef();
  const geomRef = useRef();
  const bodyMaterialRef = useRef();
  const materialRef = useRef();
  const transitionRef = useRef(0);
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

    transitionRef.current = THREE.MathUtils.lerp(
      transitionRef.current,
      isTransitioning ? 1 : 0,
      delta * 2.2,
    );

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x += delta * 0.08;
      const scaleMultiplier = THREE.MathUtils.lerp(
        introScaleMultiplier,
        homeScaleMultiplier,
        transitionRef.current,
      );
      groupRef.current.scale.setScalar(responsiveScale * scaleMultiplier);
    }

    if (bodyMaterialRef.current) {
      bodyMaterialRef.current.opacity = THREE.MathUtils.lerp(
        introBodyOpacity,
        homeBodyOpacity,
        transitionRef.current,
      );
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
      materialRef.current.uniforms.uOpacity.value = THREE.MathUtils.lerp(
        introWireOpacity,
        homeWireOpacity,
        transitionRef.current,
      );
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position} 
      onClick={onClick}
    >
      <mesh>
        <primitive object={baseGeometry} attach="geometry" ref={geomRef} />
        <meshStandardMaterial
          ref={bodyMaterialRef}
          color="#5d708a"
          transparent
          opacity={introBodyOpacity}
          emissive="#21314b"
          emissiveIntensity={0.22}
          roughness={0.95}
          metalness={0.03}
          depthWrite={false}
          flatShading
          visible={showBody}
        />
      </mesh>

      <mesh scale={[1.01, 1.01, 1.01]}>
        <primitive object={baseGeometry} attach="geometry" />
        <shaderMaterial
          ref={materialRef}
          wireframe={true}
          transparent={true}
          depthWrite={false}
          uniforms={{ time: { value: 0 }, uOpacity: { value: introWireOpacity } }}
          visible={showWireframe}
          
          vertexShader={`
            varying vec3 vPos;
            void main() {
              vPos = position; 
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          
          fragmentShader={`
            uniform float time;
            uniform float uOpacity;
            varying vec3 vPos;

            float random(vec2 st) {
              return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
            }

            void main() {
              vec3 baseColor = vec3(0.24, 0.31, 0.42);
              vec3 glowColor = vec3(0.54, 0.74, 0.96);
              float alpha = 0.28;

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

              vec3 viewDir = normalize(vPos);
              float rimGlow = pow(1.0 - abs(viewDir.z), 2.8) * 0.28;
              float glowMix = clamp(intensity + rimGlow, 0.0, 1.0);

              vec3 finalColor = mix(baseColor, glowColor, glowMix);
              finalColor += vec3(0.10, 0.14, 0.20) * rimGlow;
              float finalAlpha = max(alpha, 0.28 + intensity * 0.7 + rimGlow * 0.45) * uOpacity;

              gl_FragColor = vec4(finalColor, finalAlpha);
            }
          `}
        />
      </mesh>
    </group>
  );
}

export default Moon;