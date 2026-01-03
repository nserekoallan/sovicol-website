import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Users, Globe, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sovicol - our mission, values, and commitment to delivering premium automotive paint solutions.',
};

const values = [
  {
    icon: Award,
    title: 'Quality First',
    description:
      'Every product meets rigorous quality standards before reaching our customers.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description:
      'We listen to our customers and continuously improve based on their feedback.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description:
      'Constantly developing new colors, finishes, and technologies to stay ahead.',
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description:
      'Committed to eco-friendly formulations and responsible manufacturing.',
  },
];

const stats = [
  { value: '50+', label: 'Paint Colors' },
  { value: '100+', label: 'Happy Dealers' },
  { value: '4', label: 'Finish Types' },
  { value: '5+', label: 'Years Experience' },
];

/**
 * About page
 */
export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold">
              About <span className="text-primary">Sovicol</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              We&apos;re on a mission to transform the automotive paint industry with
              innovative products, cutting-edge technology, and exceptional customer
              service.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <section id="story" className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sovicol was founded with a simple vision: to make professional-grade
                  automotive paint accessible to everyone, from professional body shops
                  to passionate car enthusiasts.
                </p>
                <p>
                  We recognized that the automotive paint market lacked innovation and
                  customer-centric solutions. Traditional paint suppliers focused solely
                  on products, leaving customers to figure out color matching and
                  application on their own.
                </p>
                <p>
                  That&apos;s why we developed our revolutionary 3D Color Simulator -
                  allowing customers to visualize their dream color on a realistic car
                  model before making a purchase. This, combined with our premium paint
                  formulations, has made Sovicol the go-to choice for automotive paint
                  in East Africa.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <Image
                src="/images/logo/sovicol.png"
                alt="Sovicol"
                width={200}
                height={67}
                className="w-48"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Commitment to Quality</h2>
            <p className="text-primary-foreground/80 mb-8">
              Every Sovicol product undergoes rigorous testing to ensure it meets
              international quality standards. Our paints are formulated for
              durability, color accuracy, and ease of application - giving you
              professional results every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  View Products
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
