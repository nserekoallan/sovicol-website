'use client';

import { motion } from 'framer-motion';
import {
  Palette,
  Sparkles,
  Shield,
  Droplets,
  Sun,
  Award,
} from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: '3D Color Simulator',
    description:
      'Visualize your perfect color on a realistic 3D car model before making a decision.',
  },
  {
    icon: Palette,
    title: '50+ Premium Colors',
    description:
      'Extensive color catalog featuring metallic, pearl, matte, and solid finishes.',
  },
  {
    icon: Shield,
    title: 'Durable Formula',
    description:
      'Professional-grade paint that withstands harsh weather and everyday wear.',
  },
  {
    icon: Droplets,
    title: 'Easy Application',
    description:
      'Smooth flow and excellent coverage for professional and DIY painters alike.',
  },
  {
    icon: Sun,
    title: 'UV Protection',
    description:
      'Advanced UV-resistant formula keeps your color vibrant for years.',
  },
  {
    icon: Award,
    title: 'Quality Certified',
    description:
      'All products meet international automotive paint quality standards.',
  },
];

/**
 * Features section showcasing product benefits
 */
export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose <span className="text-primary">Sovicol</span>?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Premium automotive paints engineered for perfection. From innovative
            color simulation to industry-leading durability.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-xl p-6 border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
