import company from '@/data/company.json';
import { Button } from '@/components/Button/Button';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{company.heroTitle}</h1>
        <p className={styles.subtitle}>{company.heroSubtitle}</p>
        <div className={styles.actions}>
          <Button href="#busca-placa" variant="primary">
            Buscar peça pela placa
          </Button>
          <Button to="/sobre" variant="outlineLight">
            Conheça a Echlin
          </Button>
        </div>
      </div>
    </section>
  );
}
