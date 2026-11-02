import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** 16px checkbox, radius-xs, brand when checked. Supports indeterminate. */
export function Checkbox({ label, description, checked, defaultChecked = false, indeterminate = false, onChange, disabled, id }) {
  const auto = React.useId ? React.useId() : undefined;
  const fid = id || auto;
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const filled = on || indeterminate;
  return (
    <label htmlFor={fid} style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 8, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.55 : 1 }}>
      <span style={{ position: 'relative', width: 16, height: 16, marginTop: 2, flexShrink: 0 }}>
        <input id={fid} type="checkbox" checked={on} disabled={disabled} ref={el => el && (el.indeterminate = indeterminate)}
          onChange={e => { if (checked === undefined) setInner(e.target.checked); onChange && onChange(e.target.checked); }}
          style={{ position: 'absolute', inset: 0, margin: 0, opacity: 0, cursor: 'inherit' }} />
        <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 'var(--radius-xs)', border: '1px solid ' + (filled ? 'var(--color-brand)' : 'var(--color-border-control)'), background: filled ? 'var(--color-brand)' : '#fff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background var(--duration-fast) var(--ease-out)', pointerEvents: 'none' }}>
          {indeterminate ? <Icon name="minus" size={12} strokeWidth={3} /> : on ? <Icon name="check" size={12} strokeWidth={3} /> : null}
        </span>
      </span>
      {(label || description) && (
        <span style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: 14, lineHeight: '20px', color: 'var(--color-text)' }}>{label}</span>
          {description && <span style={{ fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)' }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
