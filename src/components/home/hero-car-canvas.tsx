'use client';

import { Suspense, useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Lightformer,
  useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';
import { FINISH_PRESETS } from '@/data/colors';

/**
 * Animated 3D car model for hero section
 * Rotates automatically and changes color periodically
 */
function HeroCarModel() {
  const groupRef = useRef<THREE.Group>(null);
  const [colorIndex, setColorIndex] = useState(0);

  // Showcase colors for auto-rotation
  const showcaseColors = useMemo(
    () => ['#ff0800', '#1e3a5f', '#2d5a27', '#c0c0c0', '#f7e500', '#4a0080'],
    []
  );

  // Load the car model
  const { scene } = useGLTF('/models/car.glb');

  // Get metallic finish properties
  const finishPreset = FINISH_PRESETS.metallic;

  // Create paint material with current showcase color
  const paintMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(showcaseColors[colorIndex]),
      metalness: finishPreset.metalness,
      roughness: finishPreset.roughness,
      clearcoat: finishPreset.clearcoat,
      clearcoatRoughness: finishPreset.clearcoatRoughness,
      envMapIntensity: 2.5,
    });
  }, [colorIndex, showcaseColors, finishPreset]);

  // Apply paint material to car body parts
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          const name = child.name.toLowerCase();
          if (
            name.includes('body') ||
            name.includes('paint') ||
            name.includes('hood') ||
            name.includes('door') ||
            name.includes('fender') ||
            name.includes('roof') ||
            name.includes('trunk') ||
            name.includes('bumper')
          ) {
            child.material = paintMaterial;
          }
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene, paintMaterial]);

  // Auto-rotate color every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % showcaseColors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showcaseColors.length]);

  // Gentle float animation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.02 - 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={0.6}>
      <primitive object={scene} />
    </group>
  );
}

// Preload the model
useGLTF.preload('/models/car.glb');

/**
 * Hero section 3D canvas with car showcase
 */
export function HeroCarCanvas() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [4, 1.5, 4], fov: 35 }}
        gl={{ antialias: true, alpha: true, toneMappingExposure: 0.9 }}
        dpr={[1, 2]}
        shadows
      >
        <Suspense fallback={null}>
          {/* Ambient fill light */}
          <ambientLight intensity={0.4} />

          {/* Key light */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />

          {/* Fill light */}
          <directionalLight
            position={[-5, 5, -5]}
            intensity={0.4}
            color="#e0f0ff"
          />

          {/* Rim light */}
          <directionalLight
            position={[0, 3, -8]}
            intensity={0.6}
            color="#fff5e6"
          />

          {/* Professional showroom environment */}
          <Environment resolution={128} blur={0.5}>
            <Lightformer
              form="rect"
              intensity={1.5}
              position={[0, 5, 0]}
              scale={[10, 1, 10]}
              rotation-x={Math.PI / 2}
              color="white"
            />
            <Lightformer
              form="rect"
              intensity={0.8}
              position={[0, 1, 5]}
              scale={[5, 2, 1]}
              color="#e8f4ff"
            />
            <Lightformer
              form="rect"
              intensity={0.6}
              position={[5, 2, 0]}
              scale={[1, 3, 5]}
              rotation-y={-Math.PI / 2}
              color="#fff8f0"
            />
            <Lightformer
              form="rect"
              intensity={0.6}
              position={[-5, 2, 0]}
              scale={[1, 3, 5]}
              rotation-y={Math.PI / 2}
              color="#fff8f0"
            />
          </Environment>

          {/* Car Model */}
          <HeroCarModel />

          {/* Ground shadow */}
          <ContactShadows
            position={[0, -0.49, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
            color="#1a1a1a"
          />

          {/* Camera Controls - auto-rotate enabled */}
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.8}
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            target={[0, 0, 0]}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
