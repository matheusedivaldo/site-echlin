import { Seo } from '@/components/Seo/Seo';
import { Contact } from '@/components/Contact/Contact';

export function Contato() {
  return (
    <>
      <Seo
        title="Contato | Fale com a Echlin do Brasil"
        description="Entre em contato com a Echlin do Brasil por telefone, e-mail, WhatsApp ou pelo formulário e fale com o nosso time comercial."
        path="/contato"
      />
      <h1 className="sr-only">Contato Echlin do Brasil</h1>
      <Contact />
    </>
  );
}
