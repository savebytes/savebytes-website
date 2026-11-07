import { sitemapPaths } from '../src/config/routes';
import { site } from '../src/config/site';

export const dynamic = 'force-static';
export default function sitemap() {
  return sitemapPaths().map((path) => ({ url: site.url + path, lastModified: new Date() }));
}
