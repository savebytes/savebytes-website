'use client';
import React from 'react';
import DS from '../ds';

/**
 * Header that is transparent and full-width at the top of the page, and the moment you scroll becomes a
 * floating frosted-glass pill (backdrop blur). The morph is one element changing inset, height, radius and
 * glass, so it reads as the same bar lifting off the page. Scroll state comes from an IntersectionObserver
 * on a sentinel, not a scroll listener. Glass is a deliberate exception to the design system's flat rule.
 */
export default function SiteHeader({ links = [], active, homeHref = '/', ctaLabel = 'Join early access', tone = 'brand', onNavigate, onCta }) {
  const { Logo, Button, Icon } = DS;
  const [pill, setPill] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const sentinel = React.useRef(null);
  const toggle = React.useRef(null);
  const sheet = React.useRef(null);

  React.useEffect(() => {
    const el = sentinel.current; if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setPill(!e.isIntersecting), { threshold: 0 });
    io.observe(el); return () => io.disconnect();
  }, []);

  // Full-screen sheet on phones: lock page scroll, move focus in, keep it inside, Escape closes and returns focus.
  React.useEffect(() => {
    if (!open) return;
    const root = document.documentElement, prev = root.style.overflow; root.style.overflow = 'hidden';
    const items = () => [toggle.current, ...sheet.current.querySelectorAll('a,button')].filter(Boolean);
    sheet.current.querySelector('a')?.focus();
    const key = e => {
      if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); return; }
      if (e.key !== 'Tab') return;
      const f = items(), first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    const resize = () => { if (window.innerWidth >= 760) setOpen(false); };
    document.addEventListener('keydown', key); window.addEventListener('resize', resize);
    return () => { root.style.overflow = prev; document.removeEventListener('keydown', key); window.removeEventListener('resize', resize); };
  }, [open]);

  const nav = (id, e) => {
    if (e && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1)) return; // let the browser open a new tab
    e && e.preventDefault(); setOpen(false); onNavigate && onNavigate(id);
  };

  return (
    <>
      <div ref={sentinel} aria-hidden="true" className="sb-hdr-sentinel" />
      <header className="sb-hdr" data-state={pill || open ? 'pill' : 'top'} data-open={open || undefined}>
        <div className="sb-hdr-bar">
          <div className="sb-hdr-in">
            <a href={homeHref} onClick={e => nav('home', e)} aria-label="SaveBytes home" className="sb-hdr-logo">
              <Logo lockup="horizontal" tone={tone} size={28} hoverBreathe />
            </a>
            <nav aria-label="Main" className="sb-hdr-nav">
              {links.map(l => (
                <a key={l.id} href={l.href} onClick={e => nav(l.id, e)} aria-current={active === l.id ? 'page' : undefined}>{l.label}</a>
              ))}
            </nav>
            <div className="sb-hdr-end">
              <span className="sb-hdr-cta"><Button onClick={onCta} style={{ borderRadius: 'var(--radius-full)', paddingInline: 20 }}>{ctaLabel}</Button></span>
              <button ref={toggle} type="button" className="sb-hdr-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="sb-menu" onClick={() => setOpen(o => !o)}>
                <Icon name={open ? 'x' : 'menu'} size={20} />
              </button>
            </div>
          </div>
        </div>
        {open && (
          <div id="sb-menu" ref={sheet} className="sb-hdr-sheet">
            {links.map(l => (
              <a key={l.id} href={l.href} onClick={e => nav(l.id, e)} aria-current={active === l.id ? 'page' : undefined}>{l.label}</a>
            ))}
            <div className="sb-hdr-sheet-cta"><Button size="lg" fullWidth onClick={() => { setOpen(false); onCta && onCta(); }}>{ctaLabel}</Button></div>
          </div>
        )}
      </header>
    </>
  );
}
