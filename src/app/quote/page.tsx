import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { QuoteForm } from '@/components/forms/quote-form';

export const metadata: Metadata = {
  title: 'Request a Quote',
  description:
    'Get a personalized quote for Sovicol automotive paints. Tell us about your project and we\'ll provide competitive pricing.',
};

/**
 * Quote request page
 */
export default function QuotePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Request a <span className="text-primary">Quote</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Tell us about your project and we&apos;ll provide you with a personalized
            quote. Whether you need a single color or bulk quantities, we&apos;ve got
            you covered.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>
                Fill out the form below with your requirements. Our team will get
                back to you within 24 hours with a detailed quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <QuoteForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
