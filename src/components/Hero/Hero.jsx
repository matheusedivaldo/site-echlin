import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import interruptoresImage from '../../assets/images/hero-interruptores.png';
import cabosVelaImage from '../../assets/images/hero-cabos-vela.png';
import sensoresImage from '../../assets/images/hero-sensores-temperatura.png';

const SLIDES = [
  {
    image: interruptoresImage,
    title: 'Interruptores Automotivos',
  },
  {
    image: cabosVelaImage,
    title: 'Cabos de Vela',
  },
  {
    image: sensoresImage,
    title: 'Sensores de Temperatura',
  },
];

const TRUST_POINTS = ['Peças 100% testadas', 'Entrega nacional', 'Desde 1970'];

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
          <span className={`${styles.eyebrow} ${styles.animItem}`}>Excelência Comprovada</span>

          <h1 className={`${styles.title} ${styles.animItem} ${styles.delay1}`}>
            A confiança que atravessa <span className={styles.highlight}>gerações</span>
          </h1>

          <p className={`${styles.subtitle} ${styles.animItem} ${styles.delay2}`}>
            Qualidade de montadora original e tecnologia avançada para garantir a durabilidade que o
            seu serviço exige.
          </p>

          <div className={`${styles.actions} ${styles.animItem} ${styles.delay3}`}>
            <a href="#produtos" className={styles.primaryButton}>
              Explorar Produtos
              <ArrowRight size={20} strokeWidth={2.5} className={styles.buttonIcon} />
            </a>
            <a href="#contato" className={styles.secondaryLink}>
              Fale com um especialista
            </a>
          </div>

          <p className={`${styles.trustLine} ${styles.animItem} ${styles.delay4}`}>
            {TRUST_POINTS.join('  ·  ')}
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
