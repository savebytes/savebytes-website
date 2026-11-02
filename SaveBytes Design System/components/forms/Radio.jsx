import React from 'react';

/** Radio group. 16px circles, brand when checked. */
export function Radio({ name, options = [], value, defaultValue, onChange, label, direction = 'column', disabled }) {
  const auto = React.useId ? React.useId() : 'r';
  const n = name || auto;
  const [inner, setInner] = React.useState(defaultValue);
  const v = value !== undefined ? value : inner;
  return (
    <fieldset style={{ border: 0, margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {label && <legend style={{ padding: 0, marginBottom: 8, fontSize: 13, lineHeight: '18px', fontWeight: 500 }}>{label}</legend>}
      <div style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 20 : 8 }}>
        {options.map(o => {
          const val = o.value || o, lab = o.label || o, on = v === val;
          return (
            <label key={val} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, lineHeight: '20px', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1 }}>
              <span style={{ position: 'relative', width: 16, height: 16, flexShrink: 0 }}>
                <input type="radio" name={n} value={val} checked={on} disabled={disabled}
                  onChange={() => { if (value === undefined) setInner(val); onChange && onChange(val); }}
                  style={{ position: 'absolute', inset: 0, margin: 0, opacity: 0, cursor: 'inherit' }} />
                <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: on ? '5px solid var(--color-brand)' : '1px solid var(--color-border-control)', background: '#fff', transition: 'border var(--duration-fast) var(--ease-out)', pointerEvents: 'none', boxSizing: 'border-box' }} />
              </span>
              {lab}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
