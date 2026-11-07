import { notFound } from 'next/navigation';
import { Post } from '../../../../src/views/Writing';
import { POSTS, getPost } from '../../../../src/writing';
import { metadataFor } from '../../../../src/config/routes';

export const dynamicParams = false;
export function generateStaticParams() {
  // A static export needs at least one address here; until the first post exists this one renders "not found".
  return POSTS.length ? POSTS.map((p) => ({ slug: p.slug })) : [{ slug: 'none' }];
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
