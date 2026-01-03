import type { NavItem } from '@/types';

/** Site metadata */
export const SITE_CONFIG = {
  name: 'Sovicol',
  description:
    'Premium automotive paint solutions. Transform your vehicle with our professional-grade car paints, featuring advanced color simulation technology.',
  url: 'https://sovicol.com',
  ogImage: '/images/og-image.png',
  links: {
    whatsapp: 'https://wa.me/256700000000', // Update with actual number
    email: 'info@sovicol.com',
    phone: '+256 700 000 000', // Update with actual number
  },
  social: {
    twitter: '@sovicol',
    instagram: '@sovicol',
    facebook: 'sovicol',
  },
};

/** Main navigation items - Only functional pages */
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Colors',
    href: '/colors',
  },
  {
    label: 'Simulator',
    href: '/simulator',
    featured: true,
    description: 'Try colors on a 3D car',
  },
  {
    label: 'Find Dealers',
    href: '/locations',
  },
  {
    label: 'About',
    href: '/about',
  },
];

/** Footer navigation */
export const FOOTER_NAV = {
  products: [
    { label: 'All Products', href: '/products' },
    { label: 'Colors', href: '/colors' },
    { label: '3D Simulator', href: '/simulator' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Find Dealers', href: '/locations' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'Request a Quote', href: '/quote' },
    { label: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Terms of Service', href: '/legal/terms' },
  ],
};

/** Camera presets for 3D simulator */
export const CAMERA_PRESETS = {
  front: { position: [0, 1, 5], target: [0, 0.5, 0] },
  side: { position: [5, 1, 0], target: [0, 0.5, 0] },
  rear: { position: [0, 1, -5], target: [0, 0.5, 0] },
  quarter: { position: [4, 2, 4], target: [0, 0.5, 0] },
  top: { position: [0, 6, 0], target: [0, 0, 0] },
} as const;

/** Available car models in simulator */
export const CAR_MODELS = [
  {
    id: 'sports',
    name: 'Sports Car',
    description: 'High-performance sports car',
    modelPath: '/models/ferrari.glb',
  },
] as const;
