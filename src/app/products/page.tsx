import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PRODUCTS, CATEGORY_INFO, getProductCategories } from '@/data/products';
import type { ProductCategory } from '@/types';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Browse our complete range of automotive paints including basecoats, clearcoats, primers, and specialty finishes.',
};

/**
 * Products catalog page
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
            Professional-grade automotive paints and coatings for every application.
            From premium basecoats to specialty finishes.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(({ category, count }) => {
            const info = CATEGORY_INFO[category];
            return (
              <Link key={category} href={`/products/${category}`}>
                <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all group">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {info.name}
                      <Badge variant="secondary">{count}</Badge>
                    </CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="gap-2 p-0 h-auto group-hover:text-primary">
                      Browse {info.name}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Featured Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 6).map((product) => (
              <Link key={product.id} href={`/products/${product.category}/${product.slug}`}>
                <Card className="h-full hover:border-primary/50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Badge variant="outline" className="mb-2 capitalize">
                          {product.category}
                        </Badge>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {product.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      {product.price && (
                        <p className="font-semibold text-primary">
                          {product.price.currency}{' '}
                          {product.price.amount.toLocaleString()}{' '}
                          <span className="text-sm font-normal text-muted-foreground">
                            / {product.price.unit}
                          </span>
                        </p>
                      )}
                      <Badge variant={product.inStock ? 'default' : 'secondary'}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
