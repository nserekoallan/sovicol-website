import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Package, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS, CATEGORY_INFO, getProductCategories } from '@/data/products';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our complete range of automotive paints including basecoats, clearcoats, primers, and specialty finishes.',
};

/**
 * Products catalog page
 * Shows all products organized by category
 */
export default function ProductsPage() {
  const categories = getProductCategories();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Professional-grade automotive paints and coatings for every
            application. From premium basecoats to specialty finishes.
          </p>
        </div>
      </div>

      {/* Categories Overview */}
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map(({ category, count }) => {
            const info = CATEGORY_INFO[category];
            return (
              <Card
                key={category}
                className="text-center hover:border-primary/50 transition-colors"
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.name}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{count} products</Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* All Products by Category */}
        {categories.map(({ category }) => {
          const info = CATEGORY_INFO[category];
          const categoryProducts = PRODUCTS.filter(
            (p) => p.category === category
          );

          return (
            <section key={category} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">{info.name}</h2>
                <Badge variant="outline" className="capitalize">
                  {categoryProducts.length} products
                </Badge>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="h-full hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1">
                          <CardTitle className="text-lg">
                            {product.name}
                          </CardTitle>
                          <CardDescription className="mt-1">
                            {product.shortDescription}
                          </CardDescription>
                        </div>
                        <Badge
                          variant={product.inStock ? 'default' : 'secondary'}
                        >
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Features */}
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        {product.price && (
                          <p className="font-semibold text-primary">
                            {product.price.currency}{' '}
                            {product.price.amount.toLocaleString()}
                            <span className="text-sm font-normal text-muted-foreground">
                              {' '}
                              / {product.price.unit}
                            </span>
                          </p>
                        )}
                        <Link href="/quote">
                          <Button size="sm" variant="outline" className="gap-1">
                            Get Quote
                            <ArrowRight className="h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <div className="mt-8 p-8 rounded-xl bg-primary/5 border text-center">
          <h3 className="text-xl font-bold mb-2">Need Help Choosing?</h3>
          <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
            Our paint specialists can help you select the right products for
            your project. Contact us for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/quote">
              <Button className="gap-2">
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
