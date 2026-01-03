import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, FileText, HelpCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Access guides, tutorials, FAQs, and technical resources for Sovicol automotive paints.',
};

const resources = [
  {
    icon: BookOpen,
    title: 'How-To Guides',
    description: 'Step-by-step tutorials for paint application and techniques.',
    href: '/resources/guides',
    items: [
      'Preparing your vehicle for paint',
      'Applying basecoat correctly',
      'Achieving the perfect clearcoat finish',
      'Working with metallic paints',
    ],
  },
  {
    icon: FileText,
    title: 'Blog',
    description: 'Latest news, tips, and inspiration from the world of automotive paint.',
    href: '/resources/blog',
    items: [
      'Color trends for 2024',
      'Professional vs DIY painting',
      'Understanding paint finishes',
      'Maintenance tips for painted vehicles',
    ],
  },
  {
    icon: HelpCircle,
    title: 'FAQs',
    description: 'Answers to commonly asked questions about our products.',
    href: '/resources/faqs',
    items: [
      'Which products do I need?',
      'How much paint do I need?',
      'Drying and curing times',
      'Storage and shelf life',
    ],
  },
];

/**
 * Resources hub page
 */
export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold">
            <span className="text-primary">Resources</span> & Guides
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Everything you need to get the best results with Sovicol paints.
            From beginner guides to advanced techniques.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Resource Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.title} className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <resource.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <ul className="space-y-2 mb-6 flex-1">
                  {resource.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={resource.href}>
                  <Button variant="outline" className="w-full gap-2">
                    View All
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Start Guide */}
        <div className="mt-16 p-8 rounded-2xl bg-muted/50 border">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">New to Automotive Paint?</h2>
            <p className="text-muted-foreground mb-6">
              Start with our comprehensive beginner&apos;s guide. Learn the basics
              of automotive painting, from surface preparation to final clearcoat.
            </p>
            <Link href="/resources/guides/beginners-guide">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Read Beginner&apos;s Guide
              </Button>
            </Link>
          </div>
        </div>

        {/* Need Help CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <Link href="/contact">
            <Button variant="outline">Contact Technical Support</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
