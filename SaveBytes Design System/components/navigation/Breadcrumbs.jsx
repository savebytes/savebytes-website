import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Breadcrumb trail. Last item is the current page. */
export function Breadcrumbs({ items = [], onNavigate, style }) {
  return (
    <nav aria-label="Breadcrumb" style={style}>
      <ol style={{ display: 'flex', alignItems: 'center', gap: 6, listStyle: 'none', margin: 0, padding: 0, fontSize: 13, lineHeight: '18px' }}>
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {last ? <span aria-current="page" style={{ color: 'var(--color-text)', fontWeight: 500 }}>{it.label}</span>
                : <a href={it.href || '#'} onClick={e => { if (onNavigate) { e.preventDefault(); onNavigate(it); } }} style={{ color: 'var(--color-text-muted)' }}>{it.label}</a>}
              {!last && <Icon name="chevron-right" size={14} color="var(--navy-400)" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
