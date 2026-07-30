import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';
import capaInterruptores from '@/assets/images/capa-catalogo-interruptores-sensores.png';
import capaCabos from '@/assets/images/capa-catalogo-cabos.png';
import styles from './Catalogs.module.css';

const CATALOGS = [
  {
    title: 'Interruptores e Sensores de Temperatura',
    cover: capaInterruptores,
    file: '/catalogos/catalogo-interruptores-sensores.pdf',
    size: '7,8 MB',
  },
  {
    title: 'Cabos de Ignição',
    cover: capaCabos,
    file: '/catalogos/catalogo-cabos-de-ignicao.pdf',
    size: '390 KB',
  },
];

export function Catalogs() {
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
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="catalogos"
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.inner}>
        <div className={`${styles.heading} ${styles.animItem}`}>
          <span className={styles.eyebrow}>Material Técnico</span>
          <h2 className={styles.title}>Catálogos completos para download</h2>
        </div>

        <div className={styles.grid}>
          {CATALOGS.map((catalog, index) => (
            <a
              key={catalog.title}
              href={catalog.file}
              download
              className={`${styles.card} ${styles.animItem} ${index === 0 ? styles.delay1 : styles.delay2}`}
            >
              <img
                src={catalog.cover}
                alt={`Capa do catálogo ${catalog.title}`}
                className={styles.cover}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{catalog.title}</h3>
                <span className={styles.cardMeta}>
                  <Download size={18} strokeWidth={2.5} className={styles.downloadIcon} />
                  <span>Baixar PDF · {catalog.size}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}