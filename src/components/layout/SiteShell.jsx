'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import DS from '../ds';
import Footer from './Footer';
import { useGo } from '../../lib/navigation';
import { navLinks } from '../../config/routes';

export default function SiteShell({ children }) {
  const { SiteHeader } = DS;
  const go = useGo();
  const path = usePathname();
  const page = path === '/' ? 'home' : path.replace(/^\//, '');
  const [scrolled, setScrolled] = React.useState(false);
  const [mobile, setMobile] = React.useState(false);
  React.useEffect(() => {
    const s = () => setScrolled(window.scrollY > 8);
    const r = () => setMobile(window.innerWidth < 760);
    s(); r();
    window.addEventListener('scroll', s, { passive: true });
    window.addEventListener('resize', r);
    return () => { window.removeEventListener('scroll', s); window.removeEventListener('resize', r); };
  }, []);
  React.useEffect(() => {
    if (window.location.hash === '#platform') setTimeout(() => go('platform'), 60);
    else window.scrollTo(0, 0);
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <a href="#main" className="sb-skip">Skip to content</a>
      <SiteHeader links={navLinks} active={page} onNavigate={go} onCta={() => go('contact')} scrolled={scrolled} mobile={mobile} tone={page === 'health' ? 'health' : 'brand'} />
      <main id="main" style={{ marginTop: 'calc(-1 * var(--header-height))', paddingTop: 'var(--header-height)' }}>{children}</main>
      <Footer />
    </>
  );
}
