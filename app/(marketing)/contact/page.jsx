import ContactPage from '../../../src/features/contact/ContactPage';
import { pageMetadata } from '../../../src/config/routes';

export const metadata = pageMetadata('contact');
export default function Page() {
  return <ContactPage />;
}
