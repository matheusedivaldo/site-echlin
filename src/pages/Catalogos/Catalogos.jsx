import { Seo } from '@/components/Seo/Seo';
import { Catalogs } from '@/components/Catalogs/Catalogs';

export function Catalogos() {
  return (
    <>
      <Seo
        title="Catálogos Echlin | Baixe os Catálogos Técnicos em PDF"
        description="Baixe gratuitamente os catálogos técnicos da Echlin com as especificações completas de interruptores, sensores e cabos de ignição."
        path="/catalogos"
      />
      <h1 className="sr-only">Catálogos Echlin para Download</h1>
      <Catalogs />
    </>
  );
}
