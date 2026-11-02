import React from 'react';

/** Toggle switch. Track navy-300 off, brand on. */
export function Switch({ label, checked, defaultChecked = false, onChange, disabled, id }) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  return (
    <label htmlFor={fid} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 14, lineHeight: '20px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1 }}>
      <span style={{ position: 'relative', width: 32, height: 18, flexShrink: 0 }}>
        <input id={fid} type="checkbox" role="switch" checked={on} disabled={disabled}
          onChange={e => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e.target.checked); }}
          style={{ position: 'absolute', inset: 0, margin: 0, opacity: 0, cursor: 'inherit' }} />
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 9999, background: on ? 'var(--color-brand)' : 'var(--navy-300)', transition: 'background var(--duration-fast) var(--ease-out)', pointerEvents: 'none' }}>
          <span style={{ position: 'absolute', top: 2, left: on ? 16 : 2, width: 14, height: 14, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)', transition: 'left var(--duration-base) var(--ease-out)' }} />
        </span>
      </span>
      {label}
    </label>
  );
}
