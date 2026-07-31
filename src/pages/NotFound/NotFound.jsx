import { Link } from 'react-router-dom';
import { Seo } from '@/components/Seo/Seo';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <section className={styles.section}>
      <Seo
        title="Página não encontrada | Echlin do Brasil"
        description="A página que você procura não existe ou foi movida."
        path="/404"
        noIndex
      />
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Página não encontrada</h1>
        <p className={styles.description}>
          O endereço acessado não existe ou foi movido para outro lugar.
        </p>
        <Link to="/" className={styles.link}>
          Voltar para o início
        </Link>
      </div>
    </section>
  );
}
