'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Hero section for the homepage with animated elements
 */
export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Paint splash decoration */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            fill="currentColor"
            className="text-primary"
            d="M45.7,-78.5C59.1,-71.1,70,-58.5,78.5,-44.2C87,-29.9,93.1,-14.9,92.8,-0.2C92.4,14.6,85.6,29.2,76.3,41.5C67,53.8,55.2,63.8,42,71.5C28.8,79.2,14.4,84.6,-0.8,86C-16,87.4,-32,84.8,-45.1,77.1C-58.2,69.4,-68.4,56.6,-75.4,42.3C-82.4,28,-86.2,12.2,-85.3,-3.3C-84.4,-18.8,-78.7,-33.9,-69.8,-47C-60.9,-60.1,-48.7,-71.2,-35,-77.8C-21.3,-84.4,-6.1,-86.5,5.5,-84.8C17.1,-83.1,32.3,-85.9,45.7,-78.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="h-4 w-4 text-accent" />
              Premium Automotive Paint
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Transform Your
              <span className="block text-primary">Vehicle&apos;s Look</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Experience the future of car customization with our professional-grade
              paints and cutting-edge 3D color simulator. See your dream color come
              to life before you paint.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/simulator">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <Sparkles className="h-5 w-5" />
                  Try 3D Simulator
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 w-full sm:w-auto"
                >
                  Browse Products
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12 grid grid-cols-3 gap-8 border-t pt-8"
            >
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">
                  Paint Colors
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">
                  Finish Types
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Quality Guarantee
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Content - 3D Car Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-square max-w-lg mx-auto lg:max-w-none"
          >
            {/* Placeholder for 3D car - will be replaced with actual 3D component */}
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-border/50 overflow-hidden">
              {/* Animated color swatches around the car placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl" />
                  <p className="text-lg font-medium text-muted-foreground">
                    3D Car Simulator
                  </p>
                  <p className="text-sm text-muted-foreground/70">
                    Interactive preview
                  </p>
                </div>
              </div>

              {/* Floating color swatches */}
              {[
                { color: '#ff0800', position: 'top-4 left-4' },
                { color: '#1e3a5f', position: 'top-4 right-4' },
                { color: '#f7e500', position: 'bottom-4 left-4' },
                { color: '#c0c0c0', position: 'bottom-4 right-4' },
              ].map((swatch, i) => (
                <motion.div
                  key={i}
                  className={`absolute ${swatch.position} w-12 h-12 rounded-lg shadow-lg`}
                  style={{ backgroundColor: swatch.color }}
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Play button overlay */}
            <Link
              href="/simulator"
              className="absolute inset-0 flex items-center justify-center group"
            >
              <motion.div
                className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-xl group-hover:bg-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-8 w-8 text-primary-foreground ml-1" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
