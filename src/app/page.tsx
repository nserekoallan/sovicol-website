import {
  HeroSection,
  FeaturesSection,
  ColorsPreview,
  CTASection,
} from '@/components/home';

/**
 * Sovicol Homepage
 * Premium automotive paint solutions with 3D color simulator
 */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ColorsPreview />
      <CTASection />
    </>
  );
}
