'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SITE_CONFIG } from '@/lib/constants';

/**
 * Call-to-action section
 */
export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Get in touch with our team for personalized recommendations,
              bulk pricing, or to become an authorized dealer.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/quote">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12"
          >
            <a
              href={`tel:${SITE_CONFIG.links.phone}`}
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Phone className="h-5 w-5" />
              {SITE_CONFIG.links.phone}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.links.email}`}
              className="flex items-center justify-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors"
            >
              <Mail className="h-5 w-5" />
              {SITE_CONFIG.links.email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
