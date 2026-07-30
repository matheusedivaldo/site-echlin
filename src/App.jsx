import { Navbar } from '@/components/Navbar/Navbar';
import { Hero } from '@/components/Hero/Hero';
import { Products } from '@/components/Products/Products';
import { Catalogs } from '@/components/Catalogs/Catalogs';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Catalogs />
      </main>
    </>
  );
}
