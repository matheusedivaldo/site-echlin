import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Products } from '@/components/Products/Products';
import { Catalogs } from '@/components/Catalogs/Catalogs';
import { Contact } from '@/components/Contact/Contact';
import { Footer } from '@/components/Footer/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp/FloatingWhatsApp';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Catalogs />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
