'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Palette, Shield, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Dynamically import the 3D canvas to avoid SSR issues
 */
const HeroCarCanvas = dynamic(
  () => import('./hero-car-canvas').then((mod) => mod.HeroCarCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    ),
  }
);

/**
 * Premium automotive hero section with 3D car visualization
 */
export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Premium dark overlay pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Ambient glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 container pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-12rem)]">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="order-2 lg:order-1"
          >
            {/* Brand tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm font-medium tracking-[0.2em] uppercase text-primary mb-4"
            >
              Professional Automotive Finishes
            </motion.p>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="block">Precision Color</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Perfect Finish
              </span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Industry-leading automotive paints engineered for professionals.
              Visualize your color choice on our real-time 3D simulator before
              committing to your project.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/simulator">
                <Button size="lg" className="gap-2 text-base px-8 h-14 w-full sm:w-auto">
                  <Palette className="h-5 w-5" />
                  Launch 3D Simulator
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/colors">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base px-8 h-14 w-full sm:w-auto border-2"
                >
                  Explore Color Catalog
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 flex flex-wrap gap-8"
            >
              {[
                { icon: Palette, label: '50+ Premium Colors', sublabel: 'Extensive catalog' },
                { icon: Shield, label: 'UV Protected', sublabel: '5-year warranty' },
                { icon: Award, label: 'Pro Grade', sublabel: 'Industry standard' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{item.label}</div>
                    <div className="text-xs text-muted-foreground">{item.sublabel}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* 3D Car Visualization - Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-square max-w-2xl mx-auto">
              {/* Glow ring behind car */}
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 blur-2xl" />

              {/* 3D Car Canvas */}
              <div className="relative w-full h-full">
                <HeroCarCanvas />
              </div>

              {/* Interactive hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-muted-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Drag to rotate
              </motion.div>

              {/* Color picker floating indicator */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-8 right-0 lg:-right-4"
              >
                <Link href="/simulator">
                  <div className="group flex items-center gap-3 bg-card border rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex -space-x-2">
                      {['#ff0800', '#1e3a5f', '#2d5a27', '#f7e500'].map((color, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-card shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <div className="text-sm pr-2">
                      <div className="font-medium">Try Colors</div>
                      <div className="text-xs text-muted-foreground">50+ shades</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-muted/50 to-transparent pointer-events-none" />
    </section>
  );
}
