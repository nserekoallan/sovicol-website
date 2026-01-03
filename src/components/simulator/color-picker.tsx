'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  SOVICOL_COLORS,
  COLOR_FAMILIES,
  getColorsByFamily,
} from '@/data/colors';
import { useSimulatorStore } from '@/stores/simulator-store';
import type { ColorFamily } from '@/types';
import { cn } from '@/lib/utils';

/**
 * Color picker component for the simulator
 */
export function ColorPicker() {
  const { selectedColor, selectedColorCode, setColor } = useSimulatorStore();
  const [activeFamily, setActiveFamily] = useState<ColorFamily | 'all'>('all');
  const [customColor, setCustomColor] = useState(selectedColor);

  const families = Object.keys(COLOR_FAMILIES) as ColorFamily[];

  const displayedColors =
    activeFamily === 'all'
      ? SOVICOL_COLORS
      : getColorsByFamily(activeFamily);

  const handleColorSelect = (hex: string, code: string) => {
    setColor(hex, code);
    setCustomColor(hex);
  };

  const handleCustomColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const hex = e.target.value;
    setCustomColor(hex);
    setColor(hex, 'CUSTOM');
  };

  return (
    <div className="space-y-4">
      {/* Family Filter */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={activeFamily === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setActiveFamily('all')}
        >
          All
        </Button>
        {families.map((family) => (
          <Button
            key={family}
            variant={activeFamily === family ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveFamily(family)}
            className="capitalize"
          >
            {COLOR_FAMILIES[family].name}
          </Button>
        ))}
      </div>

      {/* Color Grid */}
      <div className="grid grid-cols-6 sm:grid-cols-8 gap-2 max-h-[200px] overflow-y-auto scrollbar-thin p-1">
        {displayedColors.map((color) => (
          <motion.button
            key={color.code}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleColorSelect(color.hex, color.code)}
            className={cn(
              'relative aspect-square rounded-lg shadow-sm transition-all',
              'paint-swatch',
              color.finish,
              selectedColorCode === color.code &&
                'ring-2 ring-primary ring-offset-2'
            )}
            style={{ backgroundColor: color.hex }}
            title={`${color.name} (${color.code})`}
          >
            {selectedColorCode === color.code && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Check
                  className={cn(
                    'h-4 w-4',
                    isLightColor(color.hex) ? 'text-black' : 'text-white'
                  )}
                />
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>

      {/* Selected Color Info */}
      {selectedColorCode && selectedColorCode !== 'CUSTOM' && (
        <div className="p-3 rounded-lg bg-muted/50 border">
          <div className="flex items-center gap-3">
            <div
              className={cn('w-10 h-10 rounded-lg shadow', 'paint-swatch')}
              style={{ backgroundColor: selectedColor }}
            />
            <div>
              <p className="font-medium">
                {SOVICOL_COLORS.find((c) => c.code === selectedColorCode)?.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedColorCode} •{' '}
                <span className="capitalize">
                  {
                    SOVICOL_COLORS.find((c) => c.code === selectedColorCode)
                      ?.finish
                  }{' '}
                  finish
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Color Input */}
      <div className="pt-2 border-t">
        <Label htmlFor="custom-color" className="text-sm">
          Custom Color
        </Label>
        <div className="flex gap-2 mt-1">
          <Input
            id="custom-color"
            type="color"
            value={customColor}
            onChange={handleCustomColorChange}
            className="w-12 h-10 p-1 cursor-pointer"
          />
          <Input
            type="text"
            value={customColor.toUpperCase()}
            onChange={(e) => {
              const hex = e.target.value;
              if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
                setCustomColor(hex);
                setColor(hex, 'CUSTOM');
              }
            }}
            placeholder="#000000"
            className="font-mono"
          />
        </div>
      </div>
    </div>
  );
}

/** Helper to determine if a color is light (for contrast) */
function isLightColor(hex: string): boolean {
  const c = hex.substring(1);
  const rgb = parseInt(c, 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >> 8) & 0xff;
  const b = (rgb >> 0) & 0xff;
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luma > 128;
}
