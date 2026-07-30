import { useEffect, useRef, useState } from 'react';
import { History, Handshake } from 'lucide-react';
import styles from './About.module.css';

const PLACEHOLDER_IMAGE =
  'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80';

const FEATURES = [
  {
    icon: History,
    title: 'Longevidade e sinônimo de qualidade',
    description:
      'A Echlin é uma marca tradicional na memória dos mecânicos, se posicionando como sinônimo de qualidade.',
  },
  {
    icon: Handshake,
    title: 'O ponto de confiança de todo mecânico',
    description:
      'Ontem, hoje e sempre: a Echlin oferece a qualidade e a confiança para a execução de um reparo bem feito, sem retrabalho.',
  },
];

export function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.inner}>
        <div className={`${styles.heading} ${styles.animItem}`}>
          <span className={styles.eyebrow}>Sobre Nós</span>

          <h2 className={styles.title}>
            Tem coisas que o tempo não apaga. A{' '}
            <span className={styles.highlight}>confiança</span> é uma delas.
          </h2>

          <p className={styles.description}>
            Há mais de 50 anos a Echlin tem sido, na opinião dos mecânicos, um símbolo de
            confiança e qualidade que passa de geração em geração — e que agora está de volta
            para fortalecer a sua oficina.
          </p>
        </div>

        <img
          src={PLACEHOLDER_IMAGE}
          alt="Mecânico trabalhando com peças Echlin"
          className={`${styles.image} ${styles.animItem} ${styles.delay1}`}
        />

        <div className={`${styles.grid} ${styles.animItem} ${styles.delay2}`}>
          <div className={styles.stat}>
            <strong className={styles.statNumber}>+50</strong>
            <span className={styles.statLabel}>anos de tradição no mercado</span>
          </div>

          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.feature}>
              <span className={styles.featureIcon}>
                <Icon size={20} strokeWidth={2} />
              </span>
              <h3 className={styles.featureTitle}>{title}</h3>
              <p className={styles.featureDescription}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
