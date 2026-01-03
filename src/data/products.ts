import type { Product, ProductCategory } from '@/types';

export const PRODUCTS: Product[] = [
  // Basecoats
  {
    id: 'bc-001',
    slug: 'premium-basecoat',
    name: 'Premium Basecoat',
    description:
      'Professional-grade automotive basecoat paint with excellent coverage and color accuracy. Our premium basecoat provides a smooth, consistent finish that serves as the perfect foundation for any topcoat system.',
    shortDescription: 'High-quality basecoat for professional results',
    category: 'basecoats',
    price: { amount: 150000, currency: 'UGX', unit: 'Litre' },
    finishes: ['solid', 'metallic', 'pearl'],
    images: ['/images/products/basecoat-1.jpg'],
    features: [
      'Excellent color accuracy',
      'Smooth, even coverage',
      'Fast drying time',
      'Compatible with all clearcoats',
      'UV-resistant formula',
    ],
    specs: {
      Coverage: '8-10 m²/L',
      'Dry Time': '15-20 minutes',
      'Recoat Time': '5-10 minutes',
      VOC: '420 g/L',
    },
    inStock: true,
  },
  {
    id: 'bc-002',
    slug: 'metallic-basecoat',
    name: 'Metallic Basecoat',
    description:
      'Specially formulated basecoat with metallic flakes for that stunning sparkle effect. Perfect for achieving a showroom-quality metallic finish.',
    shortDescription: 'Basecoat with metallic flake particles',
    category: 'basecoats',
    price: { amount: 180000, currency: 'UGX', unit: 'Litre' },
    finishes: ['metallic'],
    images: ['/images/products/metallic-basecoat-1.jpg'],
    features: [
      'Premium metallic flakes',
      'Even flake distribution',
      'Rich, deep color',
      'Excellent adhesion',
      'Professional-grade formula',
    ],
    specs: {
      Coverage: '7-9 m²/L',
      'Dry Time': '20-25 minutes',
      'Recoat Time': '10 minutes',
      VOC: '450 g/L',
    },
    inStock: true,
  },
  {
    id: 'bc-003',
    slug: 'pearl-basecoat',
    name: 'Pearl Effect Basecoat',
    description:
      'Achieve stunning pearl and iridescent effects with our specialized pearl basecoat. Features micro pearl particles that create a beautiful color-shifting effect.',
    shortDescription: 'Iridescent pearl effect basecoat',
    category: 'basecoats',
    price: { amount: 200000, currency: 'UGX', unit: 'Litre' },
    finishes: ['pearl'],
    images: ['/images/products/pearl-basecoat-1.jpg'],
    features: [
      'Micro pearl particles',
      'Color-shifting effect',
      'Luxurious finish',
      'Easy application',
      'Consistent results',
    ],
    specs: {
      Coverage: '6-8 m²/L',
      'Dry Time': '20-25 minutes',
      'Recoat Time': '10-15 minutes',
      VOC: '480 g/L',
    },
    inStock: true,
  },

  // Clearcoats
  {
    id: 'cc-001',
    slug: 'high-gloss-clearcoat',
    name: 'High Gloss Clearcoat',
    description:
      'Premium 2K urethane clearcoat that provides exceptional depth, clarity, and UV protection. Delivers a mirror-like finish that enhances the beauty of any basecoat.',
    shortDescription: 'Mirror-like high gloss finish',
    category: 'clearcoats',
    price: { amount: 120000, currency: 'UGX', unit: 'Litre' },
    images: ['/images/products/clearcoat-gloss-1.jpg'],
    features: [
      'Crystal clear finish',
      'Superior UV protection',
      'Scratch resistant',
      'Deep gloss depth',
      'Long-lasting shine',
    ],
    specs: {
      Coverage: '10-12 m²/L',
      'Dry Time': '30-45 minutes',
      'Cure Time': '24 hours',
      VOC: '540 g/L',
    },
    inStock: true,
  },
  {
    id: 'cc-002',
    slug: 'matte-clearcoat',
    name: 'Matte Finish Clearcoat',
    description:
      'Specialized clearcoat that produces a sophisticated flat, non-reflective finish. Perfect for modern, stealth-style vehicle aesthetics.',
    shortDescription: 'Non-reflective matte finish',
    category: 'clearcoats',
    price: { amount: 140000, currency: 'UGX', unit: 'Litre' },
    images: ['/images/products/clearcoat-matte-1.jpg'],
    features: [
      'True matte finish',
      'No gloss or sheen',
      'UV protective',
      'Durable formula',
      'Easy to maintain',
    ],
    specs: {
      Coverage: '8-10 m²/L',
      'Dry Time': '45-60 minutes',
      'Cure Time': '48 hours',
      VOC: '520 g/L',
    },
    inStock: true,
  },
  {
    id: 'cc-003',
    slug: 'ceramic-clearcoat',
    name: 'Ceramic Pro Clearcoat',
    description:
      'Advanced clearcoat infused with ceramic particles for ultimate protection and durability. Provides superior resistance to chemicals, scratches, and environmental damage.',
    shortDescription: 'Ceramic-infused premium protection',
    category: 'clearcoats',
    price: { amount: 250000, currency: 'UGX', unit: 'Litre' },
    images: ['/images/products/clearcoat-ceramic-1.jpg'],
    features: [
      'Ceramic particle technology',
      'Extreme scratch resistance',
      'Chemical resistant',
      'Self-healing properties',
      '5-year durability',
    ],
    specs: {
      Coverage: '8-10 m²/L',
      'Dry Time': '60 minutes',
      'Cure Time': '72 hours',
      VOC: '480 g/L',
    },
    inStock: true,
  },

  // Primers
  {
    id: 'pr-001',
    slug: 'epoxy-primer',
    name: 'Epoxy Primer',
    description:
      'Two-component epoxy primer that provides excellent adhesion to bare metal and previous finishes. Creates a strong foundation for any paint system.',
    shortDescription: '2K epoxy primer for bare metal',
    category: 'primers',
    price: { amount: 100000, currency: 'UGX', unit: 'Litre' },
    images: ['/images/products/primer-epoxy-1.jpg'],
    features: [
      'Superior adhesion',
      'Corrosion resistant',
      'Bare metal compatible',
      'Sandable',
      'Chemical resistant',
    ],
    specs: {
      Coverage: '12-14 m²/L',
      'Dry Time': '30-45 minutes',
      'Sand Time': '2-3 hours',
      VOC: '340 g/L',
    },
    inStock: true,
  },
  {
    id: 'pr-002',
    slug: 'high-build-primer',
    name: 'High Build Primer Surfacer',
    description:
      'Thick-build primer surfacer designed to fill minor imperfections and create a smooth surface for basecoat application. Easy to sand and provides excellent coverage.',
    shortDescription: 'Fill imperfections, smooth surface',
    category: 'primers',
    price: { amount: 90000, currency: 'UGX', unit: 'Litre' },
    images: ['/images/products/primer-highbuild-1.jpg'],
    features: [
      'High build formula',
      'Fills minor scratches',
      'Easy sanding',
      'Smooth finish',
      'Fast drying',
    ],
    specs: {
      Coverage: '6-8 m²/L',
      'Dry Time': '45-60 minutes',
      'Sand Time': '3-4 hours',
      VOC: '380 g/L',
    },
    inStock: true,
  },
  {
    id: 'pr-003',
    slug: 'plastic-primer',
    name: 'Plastic Adhesion Primer',
    description:
      'Specialized primer designed for plastic bumpers, trim, and other plastic components. Promotes excellent adhesion of paint to plastic surfaces.',
    shortDescription: 'For plastic bumpers and trim',
    category: 'primers',
    price: { amount: 85000, currency: 'UGX', unit: 'Litre' },
    images: ['/images/products/primer-plastic-1.jpg'],
    features: [
      'Plastic specific formula',
      'Promotes adhesion',
      'Flexible coating',
      'Fast flash time',
      'Multi-plastic compatible',
    ],
    specs: {
      Coverage: '14-16 m²/L',
      'Dry Time': '10-15 minutes',
      'Recoat Time': '5 minutes',
      VOC: '520 g/L',
    },
    inStock: true,
  },

  // Specialty
  {
    id: 'sp-001',
    slug: 'candy-paint-kit',
    name: 'Candy Paint System',
    description:
      'Complete candy paint system including basecoat, candy concentrate, and clearcoat. Create stunning transparent candy colors with incredible depth.',
    shortDescription: 'Complete candy color system',
    category: 'specialty',
    price: { amount: 450000, currency: 'UGX', unit: 'Kit' },
    images: ['/images/products/candy-kit-1.jpg'],
    features: [
      'Complete system',
      'Deep candy effect',
      'Multiple color options',
      'Professional results',
      'Includes instructions',
    ],
    specs: {
      'Kit Contents': 'Base, Candy, Clear',
      Coverage: '4-5 m² per kit',
      'Colors Available': '12',
    },
    inStock: true,
  },
  {
    id: 'sp-002',
    slug: 'color-shift-paint',
    name: 'Color Shift Chameleon Paint',
    description:
      'Advanced color-shifting paint that changes color depending on viewing angle. Creates a mesmerizing chameleon effect that turns heads.',
    shortDescription: 'Angle-dependent color change',
    category: 'specialty',
    price: { amount: 350000, currency: 'UGX', unit: 'Litre' },
    images: ['/images/products/colorshift-1.jpg'],
    features: [
      'Multi-angle color shift',
      'Unique appearance',
      'Show-quality finish',
      'UV stable',
      'Easy application',
    ],
    specs: {
      Coverage: '4-6 m²/L',
      'Color Shifts': '3-5 colors',
      'Dry Time': '30-45 minutes',
    },
    inStock: true,
  },
];

/** Get products by category */
export function getProductsByCategory(category: ProductCategory): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

/** Get product by slug */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Get all product categories with counts */
export function getProductCategories(): { category: ProductCategory; count: number }[] {
  const categories: ProductCategory[] = ['basecoats', 'clearcoats', 'primers', 'specialty'];
  return categories.map((category) => ({
    category,
    count: PRODUCTS.filter((p) => p.category === category).length,
  }));
}

/** Category display info */
export const CATEGORY_INFO: Record<ProductCategory, { name: string; description: string }> = {
  basecoats: {
    name: 'Basecoats',
    description: 'High-quality basecoat paints in solid, metallic, and pearl finishes.',
  },
  clearcoats: {
    name: 'Clearcoats',
    description: 'Protective clear finishes from high gloss to matte.',
  },
  primers: {
    name: 'Primers',
    description: 'Surface preparation primers for various substrates.',
  },
  specialty: {
    name: 'Specialty Paints',
    description: 'Unique effects including candy, chameleon, and chrome.',
  },
  accessories: {
    name: 'Accessories',
    description: 'Tools and supplies for professional paint application.',
  },
};
