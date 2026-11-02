import React from 'react';
import { Icon } from '../core/Icon.jsx';

const T = {
  info: ['var(--color-info-soft)', 'var(--color-info)', 'info'],
  success: ['var(--color-success-soft)', 'var(--color-success)', 'circle-check'],
  warning: ['var(--color-warning-soft)', 'var(--color-warning)', 'triangle-alert'],
  danger: ['var(--color-danger-soft)', 'var(--color-danger)', 'circle-alert'],
};

/** Callout: icon + title + text + optional action. Soft background, no stripe. */
export function Alert({ tone = 'info', title, children, action, onClose, style }) {
  const [bg, fg, icon] = T[tone] || T.info;
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 14px', borderRadius: 'var(--radius-md)', background: bg, ...style }}>
      <Icon name={icon} size={20} color={fg} style={{ marginTop: 0 }} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {title && <div style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600, color: tone === 'info' ? 'var(--blue-900)' : fg }}>{title}</div>}
        {children && <div style={{ fontSize: 14, lineHeight: '20px', color: 'var(--color-text-secondary)' }}>{children}</div>}
        {action && <div style={{ marginTop: 6 }}>{action}</div>}
      </div>
      {onClose && <button type="button" aria-label="Dismiss" onClick={onClose} style={{ border: 0, background: 'none', padding: 2, cursor: 'pointer', color: 'var(--navy-600)', display: 'flex' }}><Icon name="x" size={16} /></button>}
    </div>
  );
}
