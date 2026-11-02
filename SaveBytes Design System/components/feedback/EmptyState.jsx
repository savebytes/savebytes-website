import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Empty / error state: short sentence, one action. */
export function EmptyState({ icon = 'inbox', title, children, action, tone = 'neutral', style }) {
  const c = tone === 'danger' ? 'var(--color-danger)' : 'var(--navy-500)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, padding: '32px 24px', ...style }}>
      <span style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: tone === 'danger' ? 'var(--color-danger-soft)' : 'var(--navy-100)', color: c, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={icon} size={20} /></span>
      {title && <div style={{ fontSize: 15, lineHeight: '22px', fontWeight: 600, marginTop: 4 }}>{title}</div>}
      {children && <div style={{ fontSize: 14, lineHeight: '20px', color: 'var(--color-text-muted)', maxWidth: 420 }}>{children}</div>}
      {action && <div style={{ marginTop: 8 }}>{action}</div>}
    </div>
  );
}
