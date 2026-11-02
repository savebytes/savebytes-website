import React from 'react';
import { Icon } from '../core/Icon.jsx';

const FLAGS = {
  high: ['arrow-up', 'High', 'var(--color-warning)'],
  low: ['arrow-down', 'Low', 'var(--color-warning)'],
  'critical-high': ['arrow-up', 'Critical high', 'var(--color-danger)'],
  'critical-low': ['arrow-down', 'Critical low', 'var(--color-danger)'],
};

/** Arrow + word + colour for Observation.interpretation. Normal shows nothing (or muted "Normal"). */
export function ResultFlag({ flag, showNormal = false }) {
  const f = FLAGS[flag];
  if (!f) return showNormal ? <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Normal</span> : null;
  const crit = flag.startsWith('critical');
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 13, lineHeight: '18px', fontWeight: crit ? 600 : 500, color: f[2], whiteSpace: 'nowrap' }}>
      <Icon name={f[0]} size={14} strokeWidth={2.25} />{f[1]}
    </span>
  );
}
