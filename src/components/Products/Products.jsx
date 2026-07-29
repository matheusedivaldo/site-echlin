import { useState } from 'react';
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

export function Products() {
  const [activeSlug, setActiveSlug] = useState(products[0].slug);
  const active = products.find((product) => product.slug === activeSlug);

  return (
    <section id="produtos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Portfólio Echlin</span>
          <h2 className={styles.title}>A mesma tecnologia das montadoras, na sua oficina</h2>
        </div>

        <div className={styles.tabs} role="tablist">
          {products.map((product) => {
            const Icon = ICONS[product.slug];
            const isActive = product.slug === activeSlug;
            return (
              <button
                key={product.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                onClick={() => setActiveSlug(product.slug)}
              >
                <Icon size={18} strokeWidth={2} />
                {product.title.replace(' Echlin', '')}
              </button>
            );
          })}
        </div>

        <div className={styles.panel}>
          <div className={styles.imageWrapper}>
            {products.map((product) => (
              <img
                key={product.slug}
                src={IMAGES[product.image]}
                alt={product.title}
                className={`${styles.image} ${
                  product.slug === activeSlug ? styles.imageActive : ''
                }`}
              />
            ))}
          </div>

          <div className={styles.details}>
            <span className={styles.subtitle}>{active.subtitle}</span>
            <p className={styles.description}>{active.description}</p>

            <ul className={styles.benefits}>
              {active.benefits.slice(0, 4).map((benefit) => (
                <li key={benefit} className={styles.benefit}>
                  <CheckCircle2 size={18} strokeWidth={2} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a href="#contato" className={styles.link}>
              Falar sobre esse produto
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
