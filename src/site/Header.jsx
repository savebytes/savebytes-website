'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Icon from './Icon';
import { navLinks } from '../config/routes';

/** The logo, the pages, and one action. On phones the pages fold into a menu. */
export default function Header() {
  const path = usePathname() || '/';
  const [open, setOpen] = React.useState(false);
  const button = React.useRef(null);
  const here = (href) => path === href || path.startsWith(href + '/');

  React.useEffect(() => setOpen(false), [path]);
  React.useEffect(() => {
    if (!open) return;
    const key = (e) => { if (e.key === 'Escape') { setOpen(false); button.current?.focus(); } };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  }, [open]);

  return (
    <header className="top">
      <div className="top-bar frame">
        <Link href="/" className="top-logo" aria-label="SaveBytes home"><Logo id="hd" /></Link>
        <nav className="top-nav" aria-label="Main">
          {navLinks.map((l) => <Link key={l.id} href={l.href} aria-current={here(l.href) ? 'page' : undefined}>{l.label}</Link>)}
        </nav>
        <Link href="/contact" className="act act--sm top-act" aria-current={here('/contact') ? 'page' : undefined}>Get in touch</Link>
        <button ref={button} type="button" className="top-menu" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((o) => !o)}>
          <Icon name={open ? 'x' : 'menu'} size={22} />
          <span className="sr">{open ? 'Close menu' : 'Menu'}</span>
        </button>
      </div>
      {open && (
        <nav id="menu" className="sheet frame" aria-label="Menu">
          {navLinks.map((l) => <Link key={l.id} href={l.href} aria-current={here(l.href) ? 'page' : undefined}>{l.label}</Link>)}
          <Link href="/contact" aria-current={here('/contact') ? 'page' : undefined}>Get in touch</Link>
        </nav>
      )}
    </header>
  );
}
