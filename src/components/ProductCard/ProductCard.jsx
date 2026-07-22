import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

export function ProductCard({ slug, title, cardDescription, image }) {
  let imageSrc;
  try {
    imageSrc = new URL(`../../assets/products/${image}`, import.meta.url).href;
  } catch {
    imageSrc = undefined;
  }

  return (
    <Link to={`/produtos/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {imageSrc ? <img src={imageSrc} alt={title} className={styles.image} /> : null}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{cardDescription}</p>
      <span className={styles.link}>Ver detalhes →</span>
    </Link>
  );
}
