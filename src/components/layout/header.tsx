'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { NAV_ITEMS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/**
 * Main site header with navigation
 * Simplified for functional pages only
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo/sovicol.png"
            alt="Sovicol"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              {item.featured ? (
                <Link href={item.href}>
                  <Button
                    variant="default"
                    size="sm"
                    className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <Sparkles className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact">
            <Button variant="outline" size="sm">
              Contact
            </Button>
          </Link>
          <Link href="/quote">
            <Button size="sm">Get a Quote</Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/images/logo/sovicol.png"
                  alt="Sovicol"
                  width={100}
                  height={33}
                  className="h-8 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'block py-2 text-lg font-medium transition-colors hover:text-primary',
                    item.featured && 'text-accent'
                  )}
                >
                  {item.featured && <Sparkles className="inline h-4 w-4 mr-2" />}
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/quote" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full">Get a Quote</Button>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
