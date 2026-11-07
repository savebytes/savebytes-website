import { site } from './site';
// @ts-ignore: plain JS data modules
import { PRODUCTS } from '../products';
// @ts-ignore: plain JS data modules
import { hasWriting } from '../writing';

type Page = { id: string; path: string; title: string; description: string };

/**
 * The site's own pages. Products come from src/products and Writing from src/writing; the header,
 * footer, sitemap and page metadata are all built from these three sources.
 */
export const pages: Page[] = [
  { id: 'home', path: '/', title: 'SaveBytes · Quiet software for busy places', description: site.description },
  { id: 'writing', path: '/writing', title: 'Writing · SaveBytes', description: 'Notes from SaveBytes on technology, strategy and how we build.' },
  { id: 'about', path: '/about', title: 'About SaveBytes', description: 'How a GitHub repository name became a software company, and how we build.' },
  { id: 'contact', path: '/contact', title: 'Contact SaveBytes', description: 'Talk to SaveBytes about your clinic, a partnership, or what we are building.' },
  { id: 'privacy', path: '/privacy', title: 'Privacy · SaveBytes', description: 'How savebytes.in handles the details you send us.' },
];

type Link = { id: string; label: string; href: string };
const productLinks: Link[] = PRODUCTS.map((p: { slug: string; nav: string }) => ({ id: p.slug, label: p.nav, href: '/' + p.slug }));
const writingLinks: Link[] = hasWriting() ? [{ id: 'writing', label: 'Writing', href: '/writing' }] : [];

/** Header: products, then Writing (once there is any), then About. Contact is the header's one action. */
export const navLinks: Link[] = [...productLinks, ...writingLinks, { id: 'about', label: 'About', href: '/about' }];

export const footerColumns = [
  { title: 'Products', links: productLinks },
  { title: 'Company', links: [...writingLinks, { id: 'about', label: 'About', href: '/about' }, { id: 'contact', label: 'Contact', href: '/contact' }] },
  { title: 'Legal', links: [{ id: 'privacy', label: 'Privacy', href: '/privacy' }] },
];

/** Every address in the sitemap. */
export const sitemapPaths = (): string[] => [
  ...pages.filter((p) => p.id !== 'writing' || hasWriting()).map((p) => p.path),
  ...productLinks.map((l) => l.href),
];

export function metadataFor(title: string, description: string, path: string) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName: site.name, locale: site.locale, type: 'website' as const },
  };
}

export function pageMetadata(id: string) {
  const p = pages.find((x) => x.id === id)!;
  return metadataFor(p.title, p.description, p.path);
}
