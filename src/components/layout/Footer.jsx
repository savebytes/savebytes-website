'use client';
import React from 'react';
import DS from '../ds';
import { useGo } from '../../lib/navigation';
import { site } from '../../config/site';
import { footerColumns } from '../../config/routes';
const { Logo, Link } = DS;

function usePageWeight() {
  const [kb, setKb] = React.useState(null);
  React.useEffect(() => {
    const measure = () => {
      const entries = [...performance.getEntriesByType('navigation'), ...performance.getEntriesByType('resource')];
      const bytes = entries.reduce((n, e) => n + (e.transferSize || e.encodedBodySize || e.decodedBodySize || 0), 0);
      if (bytes) setKb(Math.round(bytes / 1024));
    };
    const t = setTimeout(measure, 1200);
    let po; try { po = new PerformanceObserver(measure); po.observe({ type: 'resource', buffered: false }); } catch (e) {}
    return () => { clearTimeout(t); po && po.disconnect(); };
  }, []);
  return kb;
}

export default function Footer() {
  const go = useGo();
  const kb = usePageWeight();
  const col = ({ title: t, links }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="sb-overline" style={{ color: 'var(--navy-400)' }}>{t}</div>
      {links.map(({ id, label: l, href }) => <a key={id} href={href} onClick={e => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; e.preventDefault(); go(id); }} style={{ color: 'var(--navy-200)', fontSize: 15 }}>{l}</a>)}
    </div>
  );
  return (
    <footer style={{ background: 'var(--color-surface-inverse)', color: '#fff' }}>
      <div className="sb-container" style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div className="sb-footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
            <Logo lockup="horizontal" tone="white" size={28} />
            <p style={{ color: 'var(--navy-200)', fontSize: 15, lineHeight: '24px' }}>SaveBytes builds fast, focused software. Made in Navi Mumbai.</p>
            <Link href={site.email.href} inverse>{site.email.label}</Link>
          </div>
          {footerColumns.map(c => <React.Fragment key={c.title}>{col(c)}</React.Fragment>)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginTop: 48, paddingTop: 20, borderTop: '1px solid var(--navy-800)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--navy-400)' }}>
          <span>© 2026 SaveBytes</span><span title="Measured in your browser from every file this page loaded">{kb ? 'This page weighs ' + kb.toLocaleString('en-IN') + ' KB.' : 'Weighing this page…'}</span>
        </div>
      </div>
    </footer>
  );
}

