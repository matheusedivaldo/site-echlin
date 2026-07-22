import { Hero } from './sections/Hero';
import { SocialBar } from './sections/SocialBar';
import { PlateSearch } from './sections/PlateSearch';
import { ProductGrid } from './sections/ProductGrid';
import { AboutSummary } from './sections/AboutSummary';
import { ContactForm } from './sections/ContactForm';
import { PartnerCTA } from './sections/PartnerCTA';

export function Home() {
  return (
    <>
      <Hero />
      <SocialBar />
      <PlateSearch />
      <ProductGrid />
      <AboutSummary />
      <ContactForm />
      <PartnerCTA />
    </>
  );
}
