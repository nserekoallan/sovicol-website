'use client';

import dynamic from 'next/dynamic';
import { SimulatorControls } from '@/components/simulator';

/**
 * Dynamically import the 3D canvas to avoid SSR issues
 * This must be in a client component
 */
const CarCanvas = dynamic(
  () => import('@/components/simulator/car-canvas').then((mod) => mod.CarCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-muted/30 rounded-xl">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-sm text-muted-foreground">
            Loading 3D Simulator...
          </p>
        </div>
      </div>
    ),
  }
);

/**
 * Client-side simulator component with 3D canvas and controls
 */
export function SimulatorClient() {
  return (
    <div className="grid lg:grid-cols-[1fr,380px] gap-8">
      {/* 3D Canvas */}
      <div className="relative aspect-video lg:aspect-auto lg:min-h-[500px] rounded-xl border bg-gradient-to-br from-muted/30 to-muted/10 overflow-hidden">
        <CarCanvas className="absolute inset-0" />

        {/* Canvas instructions overlay */}
        <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-muted-foreground">
            <span>🖱️ Drag to rotate</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
            <span>🔍 Scroll to zoom</span>
          </div>
        </div>
      </div>

      {/* Controls Panel */}
      <div className="lg:h-[500px] p-6 rounded-xl border bg-card">
        <SimulatorControls />
      </div>
    </div>
  );
}
