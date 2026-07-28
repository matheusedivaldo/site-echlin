import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const SLIDES = [
  {
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80',
    title: 'Interruptores Automotivos',
  },
  {
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    title: 'Cabos de Vela',
  },
  {
    image:
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1200&q=80',
    title: 'Sensores de Temperatura',
  },
];

const TRUST_POINTS = ['Peças 100% testadas', 'Entrega para todo o Brasil', '+50 anos de tradição'];

export function Hero() {
  const [active, setActive] = useState(0);
  const total = SLIDES.length;
  const nextIndex = (active + 1) % total;
  const prevIndex = (active - 1 + total) % total;

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={`${styles.eyebrow} ${styles.animItem}`}>Tradição desde 1970</span>

          <h1 className={`${styles.title} ${styles.animItem} ${styles.delay1}`}>
            A confiança que atravessa <span className={styles.highlight}>gerações</span>
          </h1>

          <p className={`${styles.subtitle} ${styles.animItem} ${styles.delay2}`}>
            Peças automotivas com a qualidade que garante o seu serviço e a tecnologia de
            montadora original.
          </p>

          <div className={`${styles.actions} ${styles.animItem} ${styles.delay3}`}>
            <a href="#produtos" className={styles.primaryButton}>
              Ver produtos
              <ArrowRight size={18} strokeWidth={2.5} className={styles.buttonIcon} />
            </a>
            <a href="#contato" className={styles.secondaryLink}>
              Fale com a gente
            </a>
          </div>

          <p className={`${styles.trustLine} ${styles.animItem} ${styles.delay4}`}>
            {TRUST_POINTS.join('   ·   ')}
          </p>
        </div>

        <div className={`${styles.carousel} ${styles.animItem} ${styles.delay2}`}>
          <div className={`${styles.ghostCard} ${styles.ghostCardBlue}`}>
            <img src={SLIDES[nextIndex].image} alt="" className={styles.ghostImage} />
          </div>

          <div className={`${styles.ghostCard} ${styles.ghostCardOrange}`}>
            <img src={SLIDES[prevIndex].image} alt="" className={styles.ghostImage} />
          </div>

          <div className={styles.cardStack}>
            {SLIDES.map((slide, index) => (
              <figure
                key={slide.title}
                className={`${styles.slide} ${index === active ? styles.slideActive : ''}`}
              >
                <img src={slide.image} alt={slide.title} className={styles.slideImage} />
                <figcaption className={styles.slideCaption}>{slide.title}</figcaption>
              </figure>
            ))}
          </div>

          <div className={styles.dots}>
            {SLIDES.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                aria-label={`Ver slide ${slide.title}`}
                aria-current={index === active}
                className={`${styles.dot} ${index === active ? styles.dotActive : ''}`}
                onClick={() => setActive(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
