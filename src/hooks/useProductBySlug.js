import { useMemo } from 'react';
import products from '@/data/products.json';

export function useProductBySlug(slug) {
  return useMemo(() => products.find((product) => product.slug === slug) ?? null, [slug]);
}
