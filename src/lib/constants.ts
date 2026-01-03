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

/** Main navigation items */
export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Basecoats',
        href: '/products/basecoats',
        description: 'High-quality base paint colors',
      },
      {
        label: 'Clearcoats',
        href: '/products/clearcoats',
        description: 'Protective clear finishes',
      },
      {
        label: 'Primers',
        href: '/products/primers',
        description: 'Surface preparation primers',
      },
      {
        label: 'Specialty',
        href: '/products/specialty',
        description: 'Special effect paints',
      },
    ],
  },
  {
    label: 'Colors',
    href: '/colors',
    children: [
      {
        label: 'Browse All Colors',
        href: '/colors',
        description: 'Explore our full color catalog',
      },
      {
        label: 'Collections',
        href: '/colors/collections',
        description: 'Curated color collections',
      },
      {
        label: 'Popular Colors',
        href: '/colors?filter=popular',
        description: 'Best-selling paint colors',
      },
    ],
  },
  {
    label: 'Simulator',
    href: '/simulator',
    featured: true,
    description: 'Try colors on a 3D car',
  },
  {
    label: 'Business',
    href: '/business',
    children: [
      {
        label: 'For Auto Shops',
        href: '/business/auto-shops',
        description: 'Professional solutions',
      },
      {
        label: 'Become a Dealer',
        href: '/business/dealers',
        description: 'Partnership opportunities',
      },
      {
        label: 'Find a Dealer',
        href: '/locations',
        description: 'Locate authorized dealers',
      },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      {
        label: 'Blog',
        href: '/resources/blog',
        description: 'Tips, guides, and news',
      },
      {
        label: 'How-To Guides',
        href: '/resources/guides',
        description: 'Step-by-step tutorials',
      },
    ],
  },
];

/** Footer navigation */
export const FOOTER_NAV = {
  products: [
    { label: 'Basecoats', href: '/products/basecoats' },
    { label: 'Clearcoats', href: '/products/clearcoats' },
    { label: 'Primers', href: '/products/primers' },
    { label: 'Specialty Paints', href: '/products/specialty' },
    { label: 'Accessories', href: '/products/accessories' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Story', href: '/about#story' },
    { label: 'Quality', href: '/about#quality' },
    { label: 'Careers', href: '/about#careers' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'Find a Dealer', href: '/locations' },
    { label: 'Technical Support', href: '/contact?type=support' },
    { label: 'FAQs', href: '/resources/faqs' },
    { label: 'Request a Quote', href: '/quote' },
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
    id: 'sedan',
    name: 'Sedan',
    description: 'Classic sedan body style',
    modelPath: '/models/car-sedan.glb',
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Sport utility vehicle',
    modelPath: '/models/car-suv.glb',
  },
  {
    id: 'sports',
    name: 'Sports Car',
    description: 'High-performance sports car',
    modelPath: '/models/car-sports.glb',
  },
] as const;
