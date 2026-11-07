import About from '../../../src/views/About';
import { pageMetadata } from '../../../src/config/routes';

export const metadata = pageMetadata('about');
export default function Page() {
  return <About />;
}
