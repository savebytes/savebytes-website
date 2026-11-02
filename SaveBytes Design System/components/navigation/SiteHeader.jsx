import React from 'react';
import { Logo } from '../core/Logo.jsx';
import { Button } from '../core/Button.jsx';
import { Icon } from '../core/Icon.jsx';

/** Website header: 72px, max 1200, logo left, links, primary CTA right. Transparent until scrolled. */
export function SiteHeader({ links = [], active, onNavigate, ctaLabel = 'Join early access', onCta, scrolled = false, tone = 'brand', mobile = false, style }) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const nav = (id, e) => { if (onNavigate) { e && e.preventDefault(); onNavigate(id); } setOpen(false); };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 40, height: 'var(--header-height)', background: scrolled || open ? '#fff' : 'transparent', borderBottom: '1px solid ' + (scrolled ? 'var(--color-line)' : 'transparent'), boxShadow: scrolled ? 'var(--shadow-md)' : 'none', transition: 'background var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)', ...style }}>
      <div style={{ maxWidth: 'var(--content-max)', height: '100%', margin: '0 auto', padding: mobile ? '0 20px' : '0 48px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <a href="#" onClick={e => nav('home', e)} aria-label="SaveBytes home" style={{ display: 'flex' }}><Logo lockup="horizontal" tone={tone} size={28} hoverBreathe /></a>
        {!mobile && (
          <nav aria-label="Main" style={{ display: 'flex', gap: 28, marginLeft: 'auto' }}>
            {links.map(l => (
              <a key={l.id} href={l.href || '#'} onClick={e => nav(l.id, e)} onMouseEnter={() => setHover(l.id)} onMouseLeave={() => setHover(null)} aria-current={active === l.id ? 'page' : undefined}
                style={{ fontSize: 15, lineHeight: '22px', fontWeight: 500, color: active === l.id || hover === l.id ? 'var(--color-text)' : 'var(--color-text-secondary)', textDecoration: 'none' }}>{l.label}</a>
            ))}
          </nav>
        )}
        {!mobile ? <Button onClick={onCta}>{ctaLabel}</Button> : (
          <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(o => !o)} style={{ marginLeft: 'auto', width: 44, height: 44, border: 0, background: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-text)', cursor: 'pointer' }}>
            <Icon name={open ? 'x' : 'menu'} size={20} />
          </button>
        )}
      </div>
      {mobile && open && (
        <div style={{ position: 'fixed', inset: 'var(--header-height) 0 0 0', background: '#fff', padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: 4, animation: 'sb-fade var(--duration-base) var(--ease-out)' }}>
          {links.map(l => <a key={l.id} href={l.href || '#'} onClick={e => nav(l.id, e)} style={{ fontSize: 24, lineHeight: '32px', fontWeight: 600, padding: '10px 0', color: 'var(--color-text)', textDecoration: 'none', borderBottom: '1px solid var(--color-line)' }}>{l.label}</a>)}
          <div style={{ marginTop: 24 }}><Button size="lg" fullWidth onClick={onCta}>{ctaLabel}</Button></div>
        </div>
      )}
    </header>
  );
}
