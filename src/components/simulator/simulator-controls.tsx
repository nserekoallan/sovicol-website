'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RotateCcw,
  Share2,
  Download,
  Camera,
  Pause,
  Play,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { ColorPicker } from './color-picker';
import { FinishSelector } from './finish-selector';
import { useSimulatorStore, useSimulatorConfig } from '@/stores/simulator-store';
import { toast } from 'sonner';

/**
 * Control panel for the 3D car simulator
 */
export function SimulatorControls() {
  const {
    autoRotate,
    setAutoRotate,
    resetConfig,
  } = useSimulatorStore();
  const { shareUrl, colorCode, finish, car } = useSimulatorConfig();
  const [isSharing, setIsSharing] = useState(false);

  const handleShare = async () => {
    setIsSharing(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Sovicol Car Design',
          text: `Check out my custom car color: ${colorCode} with ${finish} finish`,
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      // User cancelled or error
      if ((error as Error).name !== 'AbortError') {
        toast.error('Failed to share');
      }
    }
    setIsSharing(false);
  };

  const handleScreenshot = () => {
    // Find the canvas element and capture it
    const canvas = document.querySelector('canvas');
    if (canvas) {
      const link = document.createElement('a');
      link.download = `sovicol-${colorCode}-${finish}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      toast.success('Screenshot saved!');
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b">
        <h2 className="text-lg font-semibold">Customize Your Car</h2>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setAutoRotate(!autoRotate)}
            title={autoRotate ? 'Pause rotation' : 'Auto rotate'}
          >
            {autoRotate ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={resetConfig}
            title="Reset"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="color" className="flex-1 flex flex-col mt-4">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="color">Color</TabsTrigger>
          <TabsTrigger value="finish">Finish</TabsTrigger>
        </TabsList>

        <TabsContent value="color" className="flex-1 overflow-auto mt-4">
          <ColorPicker />
        </TabsContent>

        <TabsContent value="finish" className="flex-1 overflow-auto mt-4">
          <FinishSelector />
        </TabsContent>
      </Tabs>

      {/* Action buttons */}
      <div className="pt-4 border-t space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" className="gap-2" onClick={handleScreenshot}>
            <Camera className="h-4 w-4" />
            Screenshot
          </Button>
          <Button
            variant="outline"
            className="gap-2"
            onClick={handleShare}
            disabled={isSharing}
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>
        <Button className="w-full gap-2" asChild>
          <a href={`/quote?color=${colorCode}&finish=${finish}`}>
            Request Quote
          </a>
        </Button>
      </div>
    </div>
  );
}
