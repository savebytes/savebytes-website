import { notFound } from 'next/navigation';
import Product from '../../../src/views/Product';
import { PRODUCTS, getProduct } from '../../../src/products';
import { metadataFor } from '../../../src/config/routes';

export const dynamicParams = false;
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ product: p.slug }));
}
export function generateMetadata({ params }) {
  const p = getProduct(params.product);
  return p ? metadataFor(p.meta.title, p.meta.description, '/' + p.slug) : {};
}
export default function Page({ params }) {
  const p = getProduct(params.product);
  if (!p) notFound();
  return <Product product={p} />;
}
