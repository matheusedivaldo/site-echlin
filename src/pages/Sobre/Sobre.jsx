import { Seo } from '@/components/Seo/Seo';
import { About } from '@/components/About/About';

export function Sobre() {
  return (
    <>
      <Seo
        title="Sobre a Echlin | Tradição e Confiança desde Sempre"
        description="Conheça a história da Echlin: mais de 50 anos como sinônimo de qualidade e confiança na memória dos mecânicos de todo o Brasil."
        path="/sobre"
      />
      <h1 className="sr-only">Sobre a Echlin do Brasil</h1>
      <About />
    </>
  );
}
