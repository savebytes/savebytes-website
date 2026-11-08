import { notFound } from 'next/navigation';
import { Post } from '../../../../src/views/Writing';
import { POSTS, getPost } from '../../../../src/writing/index.js';
import { metadataFor } from '../../../../src/config/routes';

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}
export function generateMetadata({ params }) {
  const p = getPost(params.slug);
  return p ? metadataFor(p.title + ' · SaveBytes', p.summary, '/writing/' + p.slug) : {};
}
export default function Page({ params }) {
  const p = getPost(params.slug);
  if (!p) notFound();
  return <Post post={p} />;
}
