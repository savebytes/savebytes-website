'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import Icon from './Icon';
import { site, socialLinks } from '../config/site';
import { footerColumns } from '../config/routes';

/** The page's real weight, worked out at build time (scripts/page-weights.mjs). */
function usePageWeight() {
  const path = usePathname() || '/';
  const [weights, setWeights] = React.useState(null);
  React.useEffect(() => {
    fetch('/page-weights.json').then((r) => (r.ok ? r.json() : null)).then(setWeights).catch(() => setWeights(null));
  }, []);
  return weights ? weights[path.replace(/\/$/, '') || '/'] ?? null : null;
}

const SOCIAL_ICON = { whatsapp: 'message-circle', linkedin: 'linkedin', instagram: 'instagram', x: 'x-twitter', portfolio: 'globe' };

/** The footer, worded as before; the name returns at full width. */
export default function Footer() {
  const kb = usePageWeight();
  return (
    <footer className="foot">
      <div className="foot-top frame">
        <div className="foot-about">
          <Logo tone="white" id="ft" />
          <p>SaveBytes builds fast, focused software. Made in {site.location}.</p>
          <a href={site.email.href}>{site.email.label}</a>
          <ul className="foot-social">
            {socialLinks.map((s) => (
              <li key={s.id}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label + ' (opens in a new tab)'} title={s.label}>
                  <Icon name={SOCIAL_ICON[s.id]} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {footerColumns.map((c) => (
          <nav key={c.title} aria-label={c.title} className="foot-col">
            <h2>{c.title}</h2>
            {c.links.map((l) => <Link key={l.id} href={l.href}>{l.label}</Link>)}
          </nav>
        ))}
      </div>
      <div className="frame"><p className="foot-name" aria-hidden="true">SaveBytes</p></div>
      <div className="foot-end frame">
        <span>© 2026 SaveBytes</span>
        {kb != null && <span title="This page and every file it needs, compressed">This page weighs {kb.toLocaleString('en-IN')} KB.</span>}
      </div>
    </footer>
  );
}
