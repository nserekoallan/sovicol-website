/** Paint finish types available */
export type PaintFinish = 'solid' | 'metallic' | 'pearl' | 'matte';

/** Car model types for the simulator */
export type CarModel = 'sedan' | 'suv' | 'sports';

/** Camera preset angles */
export type CameraPreset = 'front' | 'side' | 'rear' | 'quarter' | 'top';

/** Color family categories */
export type ColorFamily =
  | 'reds'
  | 'oranges'
  | 'yellows'
  | 'greens'
  | 'blues'
  | 'purples'
  | 'neutrals'
  | 'whites'
  | 'blacks';

/** Paint color definition */
export interface PaintColor {
  code: string;
  name: string;
  hex: string;
  family: ColorFamily;
  finish: PaintFinish;
  popular?: boolean;
}

/** Paint finish preset configuration */
export interface FinishPreset {
  metalness: number;
  roughness: number;
  clearcoat: number;
  clearcoatRoughness: number;
}

/** Product category */
export type ProductCategory =
  | 'basecoats'
  | 'clearcoats'
  | 'primers'
  | 'specialty'
  | 'accessories';

/** Product definition */
export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  category: ProductCategory;
  price?: {
    amount: number;
    currency: string;
    unit: string;
  };
  colors?: PaintColor[];
  finishes?: PaintFinish[];
  images: string[];
  features: string[];
  specs?: Record<string, string>;
  inStock: boolean;
}

/** Dealer location */
export interface DealerLocation {
  id: string;
  name: string;
  type: 'dealer' | 'auto-shop' | 'distributor';
  address: string;
  city: string;
  country: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

/** Blog post */
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  category: 'guides' | 'news' | 'tips' | 'showcase';
  tags: string[];
}

/** Contact form data */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  type: 'general' | 'quote' | 'support' | 'dealer';
}

/** Quote request form data */
export interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  type: 'individual' | 'business';
  products: string[];
  quantity: string;
  colorCodes?: string[];
  message?: string;
  preferredContact: 'email' | 'phone' | 'whatsapp';
}

/** Simulator configuration state */
export interface SimulatorConfig {
  carModel: CarModel;
  color: string;
  finish: PaintFinish;
  cameraPreset: CameraPreset;
}

/** Navigation item */
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  featured?: boolean;
  description?: string;
}
