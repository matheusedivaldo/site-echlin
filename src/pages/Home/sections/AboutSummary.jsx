import company from '@/data/company.json';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { Button } from '@/components/Button/Button';
import styles from './AboutSummary.module.css';

export function AboutSummary() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle eyebrow="Sobre a Echlin" title={company.about.title} />
        <div className={styles.content}>
          {company.about.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
          <Button to="/sobre" variant="secondary">
            Conheça nossa história
          </Button>
        </div>
      </div>
    </section>
  );
}
