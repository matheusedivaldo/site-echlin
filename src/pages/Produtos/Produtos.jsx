import { Seo } from '@/components/Seo/Seo';
import { Products } from '@/components/Products/Products';

export function Produtos() {
  return (
    <>
      <Seo
        title="Produtos Echlin | Interruptores, Cabos de Ignição e Sensores"
        description="Explore o portfólio Echlin: interruptores automotivos, cabos de vela e sensores de temperatura com a mesma tecnologia usada pelas montadoras."
        path="/produtos"
      />
      <h1 className="sr-only">Produtos Echlin</h1>
      <Products />
    </>
  );
}
