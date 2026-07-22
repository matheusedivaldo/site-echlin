import company from '@/data/company.json';
import { Button } from '@/components/Button/Button';
import styles from './PartnerCTA.module.css';

export function PartnerCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{company.partnerCta.title}</h2>
        <p className={styles.text}>{company.partnerCta.text}</p>
        <Button href="#contato" variant="primary">
          Quero ser parceiro
        </Button>
      </div>
    </section>
  );
}
