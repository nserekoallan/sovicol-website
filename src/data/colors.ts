import type { PaintColor, ColorFamily, FinishPreset, PaintFinish } from '@/types';

/** Finish presets for 3D material rendering */
export const FINISH_PRESETS: Record<PaintFinish, FinishPreset> = {
  solid: {
    metalness: 0.0,
    roughness: 0.4,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
  },
  metallic: {
    metalness: 0.9,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
  },
  pearl: {
    metalness: 0.3,
    roughness: 0.2,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
  },
  matte: {
    metalness: 0.0,
    roughness: 0.8,
    clearcoat: 0.0,
    clearcoatRoughness: 0.0,
  },
};

/** Sovicol paint color catalog */
export const SOVICOL_COLORS: PaintColor[] = [
  // Reds
  {
    code: 'SC-R001',
    name: 'Candy Apple Red',
    hex: '#ff0800',
    family: 'reds',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-R002',
    name: 'Crimson Metallic',
    hex: '#dc143c',
    family: 'reds',
    finish: 'metallic',
  },
  {
    code: 'SC-R003',
    name: 'Cherry Pearl',
    hex: '#9e0508',
    family: 'reds',
    finish: 'pearl',
    popular: true,
  },
  {
    code: 'SC-R004',
    name: 'Racing Red',
    hex: '#d10000',
    family: 'reds',
    finish: 'solid',
  },
  {
    code: 'SC-R005',
    name: 'Burgundy Matte',
    hex: '#722f37',
    family: 'reds',
    finish: 'matte',
  },

  // Oranges
  {
    code: 'SC-O001',
    name: 'Sunset Orange',
    hex: '#ff5733',
    family: 'oranges',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-O002',
    name: 'Tangerine Pearl',
    hex: '#ff8c00',
    family: 'oranges',
    finish: 'pearl',
  },
  {
    code: 'SC-O003',
    name: 'Burnt Orange',
    hex: '#cc5500',
    family: 'oranges',
    finish: 'solid',
  },

  // Yellows
  {
    code: 'SC-Y001',
    name: 'Sovicol Yellow',
    hex: '#f7e500',
    family: 'yellows',
    finish: 'solid',
    popular: true,
  },
  {
    code: 'SC-Y002',
    name: 'Gold Metallic',
    hex: '#ffd700',
    family: 'yellows',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-Y003',
    name: 'Champagne Pearl',
    hex: '#f7e7ce',
    family: 'yellows',
    finish: 'pearl',
  },

  // Greens
  {
    code: 'SC-G001',
    name: 'British Racing Green',
    hex: '#004225',
    family: 'greens',
    finish: 'solid',
    popular: true,
  },
  {
    code: 'SC-G002',
    name: 'Emerald Metallic',
    hex: '#046307',
    family: 'greens',
    finish: 'metallic',
  },
  {
    code: 'SC-G003',
    name: 'Lime Green Pearl',
    hex: '#32cd32',
    family: 'greens',
    finish: 'pearl',
  },
  {
    code: 'SC-G004',
    name: 'Army Green Matte',
    hex: '#4b5320',
    family: 'greens',
    finish: 'matte',
  },

  // Blues
  {
    code: 'SC-B001',
    name: 'Midnight Blue',
    hex: '#191970',
    family: 'blues',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-B002',
    name: 'Electric Blue',
    hex: '#0892d0',
    family: 'blues',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-B003',
    name: 'Sovicol Navy',
    hex: '#1e3a5f',
    family: 'blues',
    finish: 'solid',
    popular: true,
  },
  {
    code: 'SC-B004',
    name: 'Sky Blue Pearl',
    hex: '#87ceeb',
    family: 'blues',
    finish: 'pearl',
  },
  {
    code: 'SC-B005',
    name: 'Deep Ocean Blue',
    hex: '#003366',
    family: 'blues',
    finish: 'metallic',
  },
  {
    code: 'SC-B006',
    name: 'Ice Blue Matte',
    hex: '#a5d8e6',
    family: 'blues',
    finish: 'matte',
  },

  // Purples
  {
    code: 'SC-P001',
    name: 'Royal Purple',
    hex: '#7851a9',
    family: 'purples',
    finish: 'metallic',
  },
  {
    code: 'SC-P002',
    name: 'Violet Pearl',
    hex: '#8f00ff',
    family: 'purples',
    finish: 'pearl',
    popular: true,
  },
  {
    code: 'SC-P003',
    name: 'Plum Matte',
    hex: '#4a0e4e',
    family: 'purples',
    finish: 'matte',
  },

  // Neutrals (Grays)
  {
    code: 'SC-N001',
    name: 'Gunmetal Gray',
    hex: '#2a3439',
    family: 'neutrals',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-N002',
    name: 'Silver Metallic',
    hex: '#c0c0c0',
    family: 'neutrals',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-N003',
    name: 'Charcoal Matte',
    hex: '#36454f',
    family: 'neutrals',
    finish: 'matte',
  },
  {
    code: 'SC-N004',
    name: 'Titanium Gray',
    hex: '#878787',
    family: 'neutrals',
    finish: 'metallic',
  },

  // Whites
  {
    code: 'SC-W001',
    name: 'Pearl White',
    hex: '#f8f8ff',
    family: 'whites',
    finish: 'pearl',
    popular: true,
  },
  {
    code: 'SC-W002',
    name: 'Alpine White',
    hex: '#ffffff',
    family: 'whites',
    finish: 'solid',
    popular: true,
  },
  {
    code: 'SC-W003',
    name: 'Ivory Pearl',
    hex: '#fffff0',
    family: 'whites',
    finish: 'pearl',
  },

  // Blacks
  {
    code: 'SC-K001',
    name: 'Jet Black',
    hex: '#0a0a0a',
    family: 'blacks',
    finish: 'solid',
    popular: true,
  },
  {
    code: 'SC-K002',
    name: 'Black Metallic',
    hex: '#1c1c1c',
    family: 'blacks',
    finish: 'metallic',
    popular: true,
  },
  {
    code: 'SC-K003',
    name: 'Stealth Black Matte',
    hex: '#2b2b2b',
    family: 'blacks',
    finish: 'matte',
    popular: true,
  },
];

/** Color family display names and descriptions */
export const COLOR_FAMILIES: Record<
  ColorFamily,
  { name: string; description: string }
> = {
  reds: {
    name: 'Reds',
    description: 'Bold and passionate reds for statement vehicles',
  },
  oranges: {
    name: 'Oranges',
    description: 'Vibrant oranges that turn heads',
  },
  yellows: {
    name: 'Yellows & Golds',
    description: 'Bright yellows and luxurious golds',
  },
  greens: {
    name: 'Greens',
    description: 'From classic racing green to modern emerald',
  },
  blues: {
    name: 'Blues',
    description: 'Cool blues from sky to midnight',
  },
  purples: {
    name: 'Purples',
    description: 'Regal purples and violets',
  },
  neutrals: {
    name: 'Grays & Silvers',
    description: 'Sophisticated neutrals and metallic silvers',
  },
  whites: {
    name: 'Whites',
    description: 'Clean whites and elegant pearls',
  },
  blacks: {
    name: 'Blacks',
    description: 'Classic blacks in every finish',
  },
};

/** Helper functions */
export function getColorsByFamily(family: ColorFamily): PaintColor[] {
  return SOVICOL_COLORS.filter((color) => color.family === family);
}

export function getColorsByFinish(finish: PaintFinish): PaintColor[] {
  return SOVICOL_COLORS.filter((color) => color.finish === finish);
}

export function getPopularColors(): PaintColor[] {
  return SOVICOL_COLORS.filter((color) => color.popular);
}

export function getColorByCode(code: string): PaintColor | undefined {
  return SOVICOL_COLORS.find((color) => color.code === code);
}
