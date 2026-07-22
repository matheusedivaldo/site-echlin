import { useParams, Navigate } from 'react-router-dom';
import { useProductBySlug } from '@/hooks/useProductBySlug';
import { Button } from '@/components/Button/Button';
import styles from './ProductLine.module.css';

export function ProductLine() {
  const { slug } = useParams();
  const product = useProductBySlug(slug);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  let imageSrc;
  try {
    imageSrc = new URL(`../../assets/products/${product.image}`, import.meta.url).href;
  } catch {
    imageSrc = undefined;
  }

  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerText}>
            <span className={styles.eyebrow}>Linha de produto</span>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.subtitle}>{product.subtitle}</p>
            <div className={styles.actions}>
              <Button href={product.catalogUrl} variant="primary" target="_blank" rel="noopener noreferrer">
                Baixar catálogo (PDF)
              </Button>
              <Button
                href={product.searchUrl}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver produtos disponíveis
              </Button>
            </div>
          </div>
          {imageSrc ? (
            <div className={styles.imageWrapper}>
              <img src={imageSrc} alt={product.title} className={styles.image} />
            </div>
          ) : null}
        </div>
      </header>

      <section className={styles.content}>
        <div className={styles.contentInner}>
          <p className={styles.description}>{product.description}</p>

          <h2 className={styles.benefitsTitle}>Diferenciais</h2>
          <ul className={styles.benefits}>
            {product.benefits.map((benefit) => (
              <li key={benefit} className={styles.benefit}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
