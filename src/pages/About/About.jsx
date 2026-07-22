import company from '@/data/company.json';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ProductGrid } from '@/pages/Home/sections/ProductGrid';
import { PartnerCTA } from '@/pages/Home/sections/PartnerCTA';
import styles from './About.module.css';

export function About() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <SectionTitle
            eyebrow="Sobre a Echlin"
            title={company.about.title}
            align="center"
          />
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          {company.about.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <ProductGrid />
      <PartnerCTA />
    </article>
  );
}
