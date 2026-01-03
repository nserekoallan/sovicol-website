'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getPopularColors } from '@/data/colors';
import { cn } from '@/lib/utils';

/**
 * Preview of popular colors on the homepage
 */
export function ColorsPreview() {
  const popularColors = getPopularColors().slice(0, 8);

  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Popular <span className="text-primary">Colors</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our most loved colors by customers worldwide
            </p>
          </div>
          <Link href="/colors">
            <Button variant="outline" className="gap-2">
              View All Colors
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>

        {/* Colors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {popularColors.map((color, index) => (
            <motion.div
              key={color.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={`/simulator?color=${color.code}`}
                className="group block"
              >
                <div
                  className={cn(
                    'paint-swatch aspect-square rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-105',
                    color.finish
                  )}
                  style={{ backgroundColor: color.hex }}
                />
                <div className="mt-2 text-center">
                  <p className="text-sm font-medium truncate">{color.name}</p>
                  <p className="text-xs text-muted-foreground capitalize">
                    {color.finish}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Finish Types */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {['Solid', 'Metallic', 'Pearl', 'Matte'].map((finish) => (
            <Link
              key={finish}
              href={`/colors?finish=${finish.toLowerCase()}`}
              className="px-4 py-2 rounded-full border hover:border-primary hover:bg-primary/5 transition-colors text-sm"
            >
              {finish} Finish
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
