import Contact from '../../../src/views/Contact';
import { pageMetadata } from '../../../src/config/routes';

export const metadata = pageMetadata('contact');
export default function Page() {
  return <Contact />;
}
