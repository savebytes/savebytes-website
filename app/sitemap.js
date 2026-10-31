import { enabledRoutes } from '../src/config/routes';
import { site } from '../src/config/site';

export const dynamic = 'force-static';
export default function sitemap() {
  return enabledRoutes.filter((r) => !r.noIndex).map((r) => ({ url: site.url + r.path, lastModified: new Date() }));
}
