'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
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
 */
export function CarCanvas({ className }: CarCanvasProps) {
  const { autoRotate } = useSimulatorStore();

  return (
    <div className={`relative w-full h-full min-h-[400px] ${className}`}>
      <Suspense fallback={<CanvasLoader />}>
        <Canvas
          camera={{ position: [4, 2, 4], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          {/* Environment for reflections */}
          <Environment preset="studio" />

          {/* Car Model */}
          <CarModel />

          {/* Ground shadow */}
          <ContactShadows
            position={[0, -0.5, 0]}
            opacity={0.5}
            scale={10}
            blur={2}
            far={4}
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
          />
        </Canvas>
      </Suspense>
    </div>
  );
}
