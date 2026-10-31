import { features, type FeatureFlag } from './features';
import { site } from './site';

export type RouteId = 'home' | 'health' | 'platform' | 'about' | 'contact' | 'privacy';

export interface Route {
  id: RouteId;
  path: string;
  title: string;
  description: string;
  /** Show in the header nav. */
  nav?: { label: string };
  /** Show in a footer column. */
  footer?: { column: 'Products' | 'Company' | 'Legal'; label: string };
  /** Omit from the sitemap (anchors, etc). */
  noIndex?: boolean;
  /** Only available when this feature flag is on. */
  flag?: FeatureFlag;
}

/**
 * THE route registry. Header, footer, sitemap, navigation and per-page metadata are all derived from it.
 * To add a page: add an entry here, a view in src/features/, and a page.tsx under app/(marketing)/.
 */
export const routes: Route[] = [
  { id: 'home', path: '/', title: 'SaveBytes · Software that wastes nothing', description: site.description },
  {
    id: 'health', path: '/health', title: 'SaveBytes Health · EHR for Indian clinics',
    description: 'Appointments, queue, vitals, consult and prescriptions on one fast screen. Built for clinics with 2–5 doctors. In development.',
    nav: { label: 'Health' }, footer: { column: 'Products', label: 'Health' },
  },
  {
    id: 'platform', path: '/#platform', title: 'SaveBytes Platform', description: site.description,
    nav: { label: 'Platform' }, footer: { column: 'Products', label: 'Platform' }, noIndex: true,
  },
  {
    id: 'about', path: '/about', title: 'About SaveBytes',
    description: 'How a GitHub repository name became a software company, and how we build.',
    nav: { label: 'About' }, footer: { column: 'Company', label: 'About' },
  },
  {
    id: 'contact', path: '/contact', title: 'Contact SaveBytes',
    description: 'Run a clinic in Navi Mumbai or Mumbai? Join early access to SaveBytes Health.',
    nav: { label: 'Contact' }, footer: { column: 'Company', label: 'Contact' },
  },
  {
    id: 'privacy', path: '/privacy', title: 'Privacy · SaveBytes',
    description: 'How savebytes.in handles the details you send us.',
    footer: { column: 'Legal', label: 'Privacy' },
  },
];

export const enabledRoutes = routes.filter((r) => !r.flag || features[r.flag]);
export const getRoute = (id: RouteId) => routes.find((r) => r.id === id)!;
export const hrefFor = (id: string) => routes.find((r) => r.id === id)?.path ?? '/';

export const navLinks = enabledRoutes.filter((r) => r.nav).map((r) => ({ id: r.id, label: r.nav!.label, href: r.path }));

export const footerColumns = (['Products', 'Company', 'Legal'] as const).map((title) => ({
  title,
  links: enabledRoutes.filter((r) => r.footer?.column === title).map((r) => ({ id: r.id, label: r.footer!.label, href: r.path })),
}));

/** Next.js metadata for a page, built from the registry. */
export function pageMetadata(id: RouteId) {
  const r = getRoute(id);
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: r.path },
    openGraph: { title: r.title, description: r.description, url: r.path, siteName: site.name, locale: site.locale, type: 'website' as const },
  };
}
