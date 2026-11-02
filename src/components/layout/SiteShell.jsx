'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import { useGo } from '../../lib/navigation';
import { navLinks } from '../../config/routes';

export default function SiteShell({ children }) {
  const go = useGo();
  const path = usePathname();
  const page = path === '/' ? 'home' : path.replace(/^\//, '');
  React.useEffect(() => {
    if (window.location.hash === '#platform') setTimeout(() => go('platform'), 60);
    else window.scrollTo(0, 0);
  }, [path]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <>
      <a href="#main" className="sb-skip">Skip to content</a>
      <SiteHeader links={navLinks} active={page} homeHref="/" onNavigate={go} onCta={() => go('contact')} tone={page === 'health' ? 'health' : 'brand'} />
      <main id="main" style={{ paddingTop: 'var(--header-height)' }}>{children}</main>
      <Footer />
    </>
  );
}
