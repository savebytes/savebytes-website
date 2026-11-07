import { notFound } from 'next/navigation';
import { WritingIndex } from '../../../src/views/Writing';
import { published, hasWriting } from '../../../src/writing/index.js';
import { pageMetadata } from '../../../src/config/routes';

export const metadata = pageMetadata('writing');
export default function Page() {
  if (!hasWriting()) notFound();
  return <WritingIndex posts={published()} />;
}
