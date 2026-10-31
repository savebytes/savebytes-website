import AboutPage from '../../../src/features/about/AboutPage';
import { pageMetadata } from '../../../src/config/routes';

export const metadata = pageMetadata('about');
export default function Page() {
  return <AboutPage />;
}
