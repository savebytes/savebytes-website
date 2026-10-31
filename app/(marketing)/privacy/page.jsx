import PrivacyPage from '../../../src/features/privacy/PrivacyPage';
import { pageMetadata } from '../../../src/config/routes';

export const metadata = pageMetadata('privacy');
export default function Page() {
  return <PrivacyPage />;
}
