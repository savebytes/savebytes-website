import HealthPage from '../../../src/features/health/HealthPage';
import { pageMetadata } from '../../../src/config/routes';

export const metadata = pageMetadata('health');
export default function Page() {
  return <HealthPage />;
}
