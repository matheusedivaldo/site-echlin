import { Seo } from '@/components/Seo/Seo';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Products } from '@/components/Products/Products';
import { Catalogs } from '@/components/Catalogs/Catalogs';
import { Contact } from '@/components/Contact/Contact';

export function Home() {
  return (
    <>
      <Seo
        title="Echlin do Brasil | Peças Automotivas com Tradição e Qualidade"
        description="Há mais de 50 anos a Echlin oferece interruptores, cabos de ignição e sensores de temperatura com a qualidade de montadora que sua oficina precisa."
        path="/"
      />
      <Hero />
      <About />
      <Products />
      <Catalogs />
      <Contact />
    </>
  );
}
