import Product from '../../../src/views/Product';
import { getProduct } from '../../../src/products/index.js';
import { metadataFor } from '../../../src/config/routes';

// Each product page is this file with its own slug. The content lives in src/products/index.js.
const p = getProduct('health');
export const metadata = metadataFor(p.meta.title, p.meta.description, '/' + p.slug);
export default function Page() {
  return <Product product={p} />;
}
