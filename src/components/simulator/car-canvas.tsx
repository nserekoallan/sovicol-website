'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Lightformer,
} from '@react-three/drei';
import { CarModel } from './car-model';
import { useSimulatorStore } from '@/stores/simulator-store';

/**
 * Loading fallback for 3D canvas
 */
function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-sm text-muted-foreground">Loading 3D Model...</p>
      </div>
    </div>
  );
}

interface CarCanvasProps {
  className?: string;
}

/**
 * Main 3D canvas wrapper for the car simulator
 * Features professional automotive showroom lighting
 */
export function CarCanvas({ className }: CarCanvasProps) {
  const { autoRotate } = useSimulatorStore();

  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [4, 2, 4], fov: 40 }}
          gl={{ antialias: true, alpha: true, toneMappingExposure: 0.8 }}
          dpr={[1, 2]}
          shadows
        >
          {/* Ambient fill light */}
          <ambientLight intensity={0.3} />

          {/* Key light - main illumination from front-right */}
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-bias={-0.0001}
          />

          {/* Fill light - softer from left side */}
          <directionalLight
            position={[-5, 5, -5]}
            intensity={0.5}
            color="#e0f0ff"
          />

          {/* Rim light - highlights edges from behind */}
          <directionalLight
            position={[0, 3, -8]}
            intensity={0.8}
            color="#fff5e6"
          />

          {/* Professional automotive showroom environment */}
          <Environment resolution={256} blur={0.5}>
            {/* Top lights - simulating showroom ceiling */}
            <Lightformer
              form="rect"
              intensity={2}
              position={[0, 5, 0]}
              scale={[10, 1, 10]}
              rotation-x={Math.PI / 2}
              color="white"
            />
            {/* Front highlight */}
            <Lightformer
              form="rect"
              intensity={1}
              position={[0, 1, 5]}
              scale={[5, 2, 1]}
              color="#e8f4ff"
            />
            {/* Side highlights for reflections */}
            <Lightformer
              form="rect"
              intensity={0.8}
              position={[5, 2, 0]}
              scale={[1, 3, 5]}
              rotation-y={-Math.PI / 2}
              color="#fff8f0"
            />
            <Lightformer
              form="rect"
              intensity={0.8}
              position={[-5, 2, 0]}
              scale={[1, 3, 5]}
              rotation-y={Math.PI / 2}
              color="#fff8f0"
            />
            {/* Ground reflection */}
            <Lightformer
              form="rect"
              intensity={0.3}
              position={[0, -1, 0]}
              scale={[10, 1, 10]}
              rotation-x={-Math.PI / 2}
              color="#f0f0f0"
            />
          </Environment>

          {/* Car Model */}
          <CarModel />

          {/* Ground shadow - softer and more realistic */}
          <ContactShadows
            position={[0, -0.49, 0]}
            opacity={0.6}
            scale={12}
            blur={2.5}
            far={4}
            color="#1a1a1a"
          />

          {/* Camera Controls */}
          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={0.5}
            enablePan={false}
            minDistance={3}
            maxDistance={8}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            target={[0, 0.2, 0]}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
