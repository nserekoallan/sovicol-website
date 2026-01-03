import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, FOOTER_NAV } from '@/lib/constants';

/**
 * Site footer with navigation and contact info
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Image
              src="/images/logo/sovicol.png"
              alt="Sovicol"
              width={140}
              height={47}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm text-primary-foreground/80 max-w-sm">
              Premium automotive paint solutions. Transform your vehicle with
              our professional-grade car paints and advanced color simulation
              technology.
            </p>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.links.phone}`}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.links.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <Mail className="h-4 w-4" />
                {SITE_CONFIG.links.email}
              </a>
              <a
                href={SITE_CONFIG.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {FOOTER_NAV.products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {FOOTER_NAV.support.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            &copy; {currentYear} Sovicol. All rights reserved.
          </p>
          <div className="flex gap-6">
            {FOOTER_NAV.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-primary-foreground/60 hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
