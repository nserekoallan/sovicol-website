import type { Metadata } from 'next';
import { SimulatorClient } from '@/components/simulator/simulator-client';

export const metadata: Metadata = {
  title: '3D Car Color Simulator',
  description:
    'Visualize your dream car color with our interactive 3D simulator. Try different paint colors and finishes in real-time.',
  openGraph: {
    title: '3D Car Color Simulator | Sovicol',
    description:
      'Visualize your dream car color with our interactive 3D simulator.',
  },
};

/**
 * 3D Car Color Simulator page
 * Flagship feature for visualizing paint colors
 */
export default function SimulatorPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-8">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold">
            3D Color <span className="text-primary">Simulator</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Visualize your perfect paint color on a 3D car model. Choose from our
            extensive color catalog and see how different finishes look in
            real-time.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        <SimulatorClient />

        {/* Tips Section */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {[
            {
              title: 'Choose Your Color',
              description:
                'Browse our catalog of 50+ colors or enter a custom hex code.',
            },
            {
              title: 'Select a Finish',
              description:
                'See how Solid, Metallic, Pearl, and Matte finishes look.',
            },
            {
              title: 'Share & Quote',
              description:
                'Save your design, share it, or request a quote instantly.',
            },
          ].map((tip, i) => (
            <div key={i} className="text-center p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-primary">{i + 1}</span>
              </div>
              <h3 className="font-semibold">{tip.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
