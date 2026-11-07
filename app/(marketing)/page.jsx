import Home from '../../src/views/Home';
import { pageMetadata } from '../../src/config/routes';

export const metadata = pageMetadata('home');
export default function Page() {
  return <Home />;
}
