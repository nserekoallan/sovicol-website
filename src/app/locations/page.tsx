import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Find a Dealer',
  description:
    'Find Sovicol authorized dealers and distributors near you. Get our premium automotive paints from trusted partners.',
};

// Sample dealer data - in production, this would come from a database
const dealers = [
  {
    id: '1',
    name: 'Kampala Auto Paints',
    type: 'dealer',
    address: 'Plot 45, Industrial Area',
    city: 'Kampala',
    country: 'Uganda',
    phone: '+256 700 123 456',
    whatsapp: '+256700123456',
    email: 'info@kampalaAutopaints.com',
  },
  {
    id: '2',
    name: 'East Africa Coatings',
    type: 'distributor',
    address: 'Mombasa Road, Industrial Park',
    city: 'Nairobi',
    country: 'Kenya',
    phone: '+254 700 234 567',
    whatsapp: '+254700234567',
    email: 'sales@eacoatings.co.ke',
  },
  {
    id: '3',
    name: 'Premium Auto Finishes',
    type: 'dealer',
    address: '123 Posta Road',
    city: 'Dar es Salaam',
    country: 'Tanzania',
    phone: '+255 700 345 678',
    whatsapp: '+255700345678',
    email: 'info@premiumautotz.com',
  },
  {
    id: '4',
    name: 'Kigali Paint Supplies',
    type: 'dealer',
    address: 'KN 5 Ave',
    city: 'Kigali',
    country: 'Rwanda',
    phone: '+250 700 456 789',
    whatsapp: '+250700456789',
    email: 'sales@kigalipaint.rw',
  },
];

const countries = ['Uganda', 'Kenya', 'Tanzania', 'Rwanda'];

/**
 * Dealer locator page
 */
export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Find a <span className="text-primary">Dealer</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Locate authorized Sovicol dealers and distributors in East Africa.
            Our partners provide genuine products and expert advice.
          </p>
        </div>
      </div>

      <div className="container py-12">
        {/* Countries Quick Links */}
        <div className="flex flex-wrap gap-3 mb-8">
          {countries.map((country) => (
            <a
              key={country}
              href={`#${country.toLowerCase()}`}
              className="px-4 py-2 rounded-full border hover:border-primary hover:bg-primary/5 transition-colors"
            >
              {country}
            </a>
          ))}
        </div>

        {/* Dealers by Country */}
        <div className="space-y-12">
          {countries.map((country) => {
            const countryDealers = dealers.filter((d) => d.country === country);
            if (countryDealers.length === 0) return null;

            return (
              <section key={country} id={country.toLowerCase()}>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  {country}
                  <Badge variant="secondary">{countryDealers.length}</Badge>
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {countryDealers.map((dealer) => (
                    <Card key={dealer.id}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{dealer.name}</CardTitle>
                            <CardDescription>{dealer.city}</CardDescription>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {dealer.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          {dealer.address}
                        </p>

                        <div className="flex flex-col gap-2">
                          <a
                            href={`tel:${dealer.phone}`}
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            {dealer.phone}
                          </a>
                          <a
                            href={`mailto:${dealer.email}`}
                            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            {dealer.email}
                          </a>
                        </div>

                        <a
                          href={`https://wa.me/${dealer.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full gap-2 mt-2"
                          >
                            <ExternalLink className="h-4 w-4" />
                            WhatsApp
                          </Button>
                        </a>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Become a Dealer CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-primary text-primary-foreground text-center">
          <h2 className="text-2xl font-bold mb-4">Become a Dealer</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
            Interested in becoming an authorized Sovicol dealer or distributor?
            Join our growing network of partners across East Africa.
          </p>
          <Link href="/business/dealers">
            <Button
              size="lg"
              variant="secondary"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
