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
  return (
    <section id="catalogos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.heading}>
          <span className={styles.eyebrow}>Material técnico</span>
          <h2 className={styles.title}>Catálogos completos para download</h2>
        </div>

        <div className={styles.grid}>
          {CATALOGS.map((catalog) => (
            <a key={catalog.title} href={catalog.file} download className={styles.card}>
              <img
                src={catalog.cover}
                alt={`Capa do catálogo ${catalog.title}`}
                className={styles.cover}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{catalog.title}</h3>
                <span className={styles.cardMeta}>
                  <Download size={16} strokeWidth={2.25} />
                  Baixar PDF · {catalog.size}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
