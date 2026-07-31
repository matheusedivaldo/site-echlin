import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, ToggleLeft, Thermometer, CheckCircle2, ArrowRight } from 'lucide-react';
import products from '@/data/products.json';
import image01 from '@/assets/images/01.png';
import image02 from '@/assets/images/02.png';
import image03 from '@/assets/images/03.png';
import styles from './Products.module.css';

const IMAGES = { '01.png': image01, '02.png': image02, '03.png': image03 };
const ICONS = {
  'cabos-de-vela': Zap,
  'interruptores-automotivos': ToggleLeft,
  'sensores-de-temperatura': Thermometer,
};
const AUTOPLAY_DELAY = 6000;

export function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = products[activeIndex];

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      id="produtos"
      className={styles.section}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Portfólio Echlin</span>
          <h2 className={styles.title}>A mesma tecnologia das montadoras, na sua oficina</h2>
        </div>

        <div className={styles.tabsWrapper}>
          <div className={styles.tabs} role="tablist">
            {products.map((product, index) => {
              const Icon = ICONS[product.slug];
              const isActive = index === activeIndex;
              return (
                <button
                  key={product.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                  <span>{product.title.replace(' Echlin', '')}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.panel}>
          <div className={styles.imageWrapper}>
            {products.map((product, index) => (
              <img
                key={product.slug}
                src={IMAGES[product.image]}
                alt={product.title}
                className={`${styles.image} ${index === activeIndex ? styles.imageActive : ''}`}
              />
            ))}
          </div>

          <div key={active.slug} className={styles.details}>
            <div className={styles.detailsHeader}>
              <span className={styles.subtitle}>{active.subtitle}</span>
              <p className={styles.description}>{active.description}</p>
            </div>

            <ul className={styles.benefits}>
              {active.benefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className={styles.benefit}>
                  <CheckCircle2 size={20} strokeWidth={2.5} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/contato" className={styles.link}>
              Falar sobre esse produto
              <ArrowRight size={18} strokeWidth={2.5} className={styles.linkIcon} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}