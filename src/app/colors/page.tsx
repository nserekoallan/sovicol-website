import type { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SOVICOL_COLORS, COLOR_FAMILIES } from '@/data/colors';
import type { ColorFamily } from '@/types';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Color Catalog',
  description:
    'Explore our complete paint color catalog with 50+ colors in solid, metallic, pearl, and matte finishes.',
};

/**
 * Color catalog page
 */
export default function ColorsPage() {
  const families = Object.keys(COLOR_FAMILIES) as ColorFamily[];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold">
                Color <span className="text-primary">Catalog</span>
              </h1>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                Explore our complete range of automotive paint colors. Click any color
                to see it in our 3D simulator.
              </p>
            </div>
            <Link href="/simulator">
              <Button className="gap-2">
                <Sparkles className="h-4 w-4" />
                Try 3D Simulator
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Color Families */}
      <div className="container py-12 space-y-12">
        {families.map((family) => {
          const info = COLOR_FAMILIES[family];
          const colors = SOVICOL_COLORS.filter((c) => c.family === family);

          return (
            <section key={family} id={family}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-2xl font-bold">{info.name}</h2>
                <Badge variant="secondary">{colors.length} colors</Badge>
              </div>
              <p className="text-muted-foreground mb-6">{info.description}</p>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                {colors.map((color) => (
                  <Link
                    key={color.code}
                    href={`/simulator?color=${color.code}`}
                    className="group"
                  >
                    <div
                      className={cn(
                        'aspect-square rounded-xl shadow-md transition-all duration-300',
                        'group-hover:shadow-xl group-hover:scale-105',
                        'paint-swatch',
                        color.finish
                      )}
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="mt-2">
                      <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                        {color.name}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{color.code}</span>
                        <span>•</span>
                        <span className="capitalize">{color.finish}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Finish Guide */}
      <div className="bg-muted/30 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold mb-6">Paint Finish Guide</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                finish: 'Solid',
                description: 'Classic, smooth finish without metallic flakes. Clean, consistent color.',
              },
              {
                finish: 'Metallic',
                description: 'Contains metal flakes that sparkle in light. Dynamic, eye-catching appearance.',
              },
              {
                finish: 'Pearl',
                description: 'Iridescent finish that shifts color at different angles. Luxurious look.',
              },
              {
                finish: 'Matte',
                description: 'Non-reflective, flat finish. Modern, stealth aesthetic.',
              },
            ].map((item) => (
              <div key={item.finish} className="p-4 rounded-lg bg-card border">
                <h3 className="font-semibold mb-2">{item.finish}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
