import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Lock icon + "Signed by Dr … · 12 Mar 2026, 11:42 am". Record is read-only. */
export function SignedRecord({ by, at, style }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 'var(--radius-sm)', background: 'var(--color-success-soft)', color: 'var(--color-success)', fontSize: 13, lineHeight: '18px', ...style }}>
      <Icon name="lock" size={16} />
      <span><span style={{ fontWeight: 500 }}>Signed by {by}</span> · {at}</span>
    </div>
  );
}
