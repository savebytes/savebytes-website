import React from 'react';
import { Icon } from '../core/Icon.jsx';

const TONE = {
  neutral: ['var(--navy-100)', 'var(--navy-700)', 'var(--navy-700)'],
  brand: ['var(--color-brand-soft)', 'var(--blue-900)', 'var(--color-brand)'],
  success: ['var(--color-success-soft)', 'var(--color-success)', 'var(--color-success)'],
  warning: ['var(--color-warning-soft)', 'var(--color-warning)', 'var(--color-warning)'],
  danger: ['var(--color-danger-soft)', 'var(--color-danger)', 'var(--color-danger)'],
  health: ['var(--color-health-soft)', 'var(--color-health-text)', 'var(--color-health-text)'],
};

/** Small status/category label. Soft by default, solid for emphasis. */
export function Badge({ tone = 'neutral', variant = 'soft', dot = false, icon, pill = false, children, style }) {
  const [soft, text, solid] = TONE[tone] || TONE.neutral;
  const isSolid = variant === 'solid';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 20, padding: '0 6px', borderRadius: pill ? 9999 : 'var(--radius-xs)', background: isSolid ? solid : soft, color: isSolid ? '#fff' : text, fontFamily: 'var(--font-sans)', fontSize: 12, lineHeight: '16px', fontWeight: 500, whiteSpace: 'nowrap', ...style }}>
      {dot && <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: isSolid ? '#fff' : solid }} />}
      {icon && <Icon name={icon} size={12} strokeWidth={2} />}
      {children}
    </span>
  );
}
