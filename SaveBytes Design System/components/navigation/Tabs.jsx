import React from 'react';

/** Underline tabs: active tab in text colour with a 2px brand bar. Optional count. */
export function Tabs({ items = [], value, defaultValue, onChange, style }) {
  const [inner, setInner] = React.useState(defaultValue || (items[0] && items[0].id));
  const v = value !== undefined ? value : inner;
  const [hover, setHover] = React.useState(null);
  return (
    <div role="tablist" style={{ display: 'flex', gap: 24, borderBottom: '1px solid var(--color-line)', ...style }}>
      {items.map(it => {
        const on = it.id === v;
        return (
          <button key={it.id} role="tab" type="button" aria-selected={on} onClick={() => { if (value === undefined) setInner(it.id); onChange && onChange(it.id); }}
            onMouseEnter={() => setHover(it.id)} onMouseLeave={() => setHover(null)}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: 6, height: 40, padding: 0, border: 0, background: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: '18px', fontWeight: 500, color: on || hover === it.id ? 'var(--color-text)' : 'var(--color-text-muted)', transition: 'color var(--duration-fast) var(--ease-out)' }}>
            {it.label}
            {it.count !== undefined && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: '16px', padding: '0 5px', borderRadius: 4, background: on ? 'var(--color-brand-soft)' : 'var(--navy-100)', color: on ? 'var(--blue-900)' : 'var(--navy-700)' }}>{it.count}</span>}
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 2, background: on ? 'var(--color-brand)' : 'transparent', transition: 'background var(--duration-base) var(--ease-out)' }} />
          </button>
        );
      })}
    </div>
  );
}
