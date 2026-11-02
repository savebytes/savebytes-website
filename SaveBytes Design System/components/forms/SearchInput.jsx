import React from 'react';
import { Field, controlStyle } from './Field.jsx';
import { Icon } from '../core/Icon.jsx';

/** Search / combobox: leading search icon, clear button, optional filtered options list. */
export function SearchInput({ label, helper, id, value, defaultValue = '', onChange, onSelect, options, placeholder = 'Search', size = 'md', style }) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  const set = x => { if (value === undefined) setInner(x); onChange && onChange(x); };
  const [focus, setFocus] = React.useState(false);
  const [active, setActive] = React.useState(0);
  const list = options && v ? options.filter(o => (o.label || o).toLowerCase().includes(v.toLowerCase())).slice(0, 6) : [];
  const open = focus && list.length > 0;
  const pick = o => { set(o.label || o); onSelect && onSelect(o); setFocus(false); };
  const cs = controlStyle({ focus, size });
  return (
    <Field label={label} htmlFor={fid} helper={helper} style={style}>
      <div style={{ position: 'relative' }}>
        <span style={{ position: 'absolute', left: 12, top: 0, bottom: 0, color: 'var(--navy-500)', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}><Icon name="search" size={16} /></span>
        <input id={fid} role="combobox" aria-expanded={open} aria-autocomplete="list" value={v} placeholder={placeholder}
          onChange={e => { set(e.target.value); setActive(0); }} onFocus={() => setFocus(true)} onBlur={() => setTimeout(() => setFocus(false), 120)}
          onKeyDown={e => { if (!open) return; if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(a + 1, list.length - 1)); } if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(a - 1, 0)); } if (e.key === 'Enter') { e.preventDefault(); pick(list[active]); } }}
          style={{ ...cs, paddingLeft: 36, paddingRight: v ? 36 : 12 }} />
        {v && (
          <button type="button" aria-label="Clear search" onClick={() => set('')}
            style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', width: 28, height: 28, border: 0, background: 'transparent', borderRadius: 4, color: 'var(--navy-500)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Icon name="x" size={16} />
          </button>
        )}
        {open && (
          <ul role="listbox" style={{ position: 'absolute', zIndex: 20, top: 'calc(100% + 4px)', left: 0, right: 0, margin: 0, padding: 4, listStyle: 'none', background: '#fff', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)' }}>
            {list.map((o, i) => (
              <li key={(o.value || o) + i} role="option" aria-selected={i === active} onMouseDown={() => pick(o)} onMouseEnter={() => setActive(i)}
                style={{ padding: '8px 10px', borderRadius: 4, fontSize: 14, lineHeight: '20px', cursor: 'pointer', background: i === active ? 'var(--navy-50)' : 'transparent', display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                <span>{o.label || o}</span>{o.meta && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-text-muted)' }}>{o.meta}</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Field>
  );
}
