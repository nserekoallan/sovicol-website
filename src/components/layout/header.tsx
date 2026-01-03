'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
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
 */
export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
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
                <button
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-primary',
                    activeDropdown === item.label
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 transition-transform',
                        activeDropdown === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </button>
              )}

              {/* Dropdown */}
              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 top-full pt-2"
                  >
                    <div className="min-w-[220px] rounded-lg border bg-popover p-2 shadow-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-md px-3 py-2 hover:bg-muted transition-colors"
                        >
                          <div className="font-medium text-sm">
                            {child.label}
                          </div>
                          {child.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {child.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'block py-2 text-lg font-medium',
                      item.featured && 'text-accent'
                    )}
                  >
                    {item.featured && <Sparkles className="inline h-4 w-4 mr-2" />}
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
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
