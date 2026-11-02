import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Product side navigation. White or navy-900; active item brand-soft + brand text. */
export function SideNav({ items = [], active, onSelect, tone = 'light', header, footer, width = 232, style }) {
  const dark = tone === 'dark';
  const [hover, setHover] = React.useState(null);
  return (
    <nav aria-label="Main" style={{ width, flexShrink: 0, display: 'flex', flexDirection: 'column', background: dark ? 'var(--navy-900)' : '#fff', borderRight: dark ? 0 : '1px solid var(--color-line)', color: dark ? '#fff' : 'var(--color-text)', ...style }}>
      {header && <div style={{ padding: '16px 16px 12px' }}>{header}</div>}
      <ul style={{ listStyle: 'none', margin: 0, padding: '4px 8px', display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
        {items.map(it => {
          if (it.section) return <li key={it.section} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: '16px', letterSpacing: '0.08em', textTransform: 'uppercase', color: dark ? 'var(--navy-400)' : 'var(--color-text-muted)', padding: '16px 8px 6px' }}>{it.section}</li>;
          const on = it.id === active;
          const bg = on ? (dark ? 'var(--navy-800)' : 'var(--color-brand-soft)') : hover === it.id ? (dark ? 'var(--navy-800)' : 'var(--navy-50)') : 'transparent';
          const fg = on ? (dark ? '#fff' : 'var(--blue-700)') : dark ? 'var(--navy-200)' : 'var(--color-text-secondary)';
          return (
            <li key={it.id}>
              <button type="button" aria-current={on ? 'page' : undefined} onClick={() => onSelect && onSelect(it.id)} onMouseEnter={() => setHover(it.id)} onMouseLeave={() => setHover(null)}
                style={{ width: '100%', height: 36, display: 'flex', alignItems: 'center', gap: 10, padding: '0 10px', border: 0, borderRadius: 'var(--radius-sm)', background: bg, color: fg, fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '20px', fontWeight: on ? 500 : 400, cursor: 'pointer', textAlign: 'left', transition: 'background var(--duration-fast) var(--ease-out)' }}>
                {it.icon && <Icon name={it.icon} size={20} color={on && dark ? 'var(--blue-400)' : undefined} />}
                <span style={{ flex: 1 }}>{it.label}</span>
                {it.count !== undefined && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: on ? fg : dark ? 'var(--navy-400)' : 'var(--color-text-muted)' }}>{it.count}</span>}
              </button>
            </li>
          );
        })}
      </ul>
      {footer && <div style={{ padding: 12, borderTop: '1px solid ' + (dark ? 'var(--navy-800)' : 'var(--color-line)') }}>{footer}</div>}
    </nav>
  );
}
