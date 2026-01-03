'use client';

import { motion } from 'framer-motion';
import { useSimulatorStore } from '@/stores/simulator-store';
import { FINISH_PRESETS } from '@/data/colors';
import type { PaintFinish } from '@/types';
import { cn } from '@/lib/utils';

const finishes: { id: PaintFinish; name: string; description: string }[] = [
  {
    id: 'solid',
    name: 'Solid',
    description: 'Classic smooth finish',
  },
  {
    id: 'metallic',
    name: 'Metallic',
    description: 'Sparkling metal flakes',
  },
  {
    id: 'pearl',
    name: 'Pearl',
    description: 'Iridescent shimmer',
  },
  {
    id: 'matte',
    name: 'Matte',
    description: 'Non-reflective finish',
  },
];

/**
 * Finish type selector for the simulator
 */
export function FinishSelector() {
  const { selectedFinish, selectedColor, setFinish } = useSimulatorStore();

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        {finishes.map((finish) => (
          <motion.button
            key={finish.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setFinish(finish.id)}
            className={cn(
              'relative p-3 rounded-lg border text-left transition-all',
              selectedFinish === finish.id
                ? 'border-primary bg-primary/5'
                : 'border-border hover:border-primary/50'
            )}
          >
            <div className="flex items-start gap-3">
              {/* Preview swatch */}
              <div
                className={cn(
                  'w-10 h-10 rounded-md shadow-sm paint-swatch flex-shrink-0',
                  finish.id
                )}
                style={{ backgroundColor: selectedColor }}
              />
              <div>
                <p className="font-medium text-sm">{finish.name}</p>
                <p className="text-xs text-muted-foreground">
                  {finish.description}
                </p>
              </div>
            </div>
            {selectedFinish === finish.id && (
              <motion.div
                layoutId="finish-indicator"
                className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary"
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Finish properties display */}
      <div className="p-3 rounded-lg bg-muted/50 text-xs">
        <p className="font-medium mb-2">Material Properties:</p>
        <div className="grid grid-cols-2 gap-2 text-muted-foreground">
          <div>
            Metalness:{' '}
            <span className="text-foreground">
              {Math.round(FINISH_PRESETS[selectedFinish].metalness * 100)}%
            </span>
          </div>
          <div>
            Roughness:{' '}
            <span className="text-foreground">
              {Math.round(FINISH_PRESETS[selectedFinish].roughness * 100)}%
            </span>
          </div>
          <div>
            Clearcoat:{' '}
            <span className="text-foreground">
              {Math.round(FINISH_PRESETS[selectedFinish].clearcoat * 100)}%
            </span>
          </div>
          <div>
            Coat Roughness:{' '}
            <span className="text-foreground">
              {Math.round(
                FINISH_PRESETS[selectedFinish].clearcoatRoughness * 100
              )}
              %
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
