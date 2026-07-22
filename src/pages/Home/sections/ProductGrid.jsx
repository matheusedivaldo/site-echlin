import products from '@/data/products.json';
import { SectionTitle } from '@/components/SectionTitle/SectionTitle';
import { ProductCard } from '@/components/ProductCard/ProductCard';
import styles from './ProductGrid.module.css';

export function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <SectionTitle
          eyebrow="Linhas de produto"
          title="Peças com tecnologia de montadora original"
          description="Portfólio completo para reparos seguros, duráveis e sem retrabalho."
          align="center"
        />
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
