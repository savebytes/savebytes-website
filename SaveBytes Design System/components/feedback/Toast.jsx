import React from 'react';
import { Icon } from '../core/Icon.jsx';

const T = { info: ['info', 'var(--blue-400)'], success: ['circle-check', '#5FD3A5'], warning: ['triangle-alert', '#F5B66B'], danger: ['circle-alert', '#FF8A9A'] };

/** Bottom-right notification. Auto-hides after 5s unless tone is danger. */
export function Toast({ tone = 'success', children, actionLabel, onAction, onClose, duration = 5000, floating = false, style }) {
  React.useEffect(() => {
    if (tone === 'danger' || !onClose || !duration) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [tone, onClose, duration]);
  const [icon, c] = T[tone] || T.info;
  return (
    <div role={tone === 'danger' ? 'alert' : 'status'} style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 280, maxWidth: 420, padding: '10px 12px 10px 14px', borderRadius: 'var(--radius-md)', background: 'var(--navy-900)', color: '#fff', boxShadow: 'var(--shadow-lg)', fontSize: 14, lineHeight: '20px', animation: 'sb-rise var(--duration-base) var(--ease-out)', ...(floating ? { position: 'fixed', right: 24, bottom: 24, zIndex: 100 } : null), ...style }}>
      <Icon name={icon} size={20} color={c} />
      <span style={{ flex: 1 }}>{children}</span>
      {actionLabel && <button type="button" onClick={onAction} style={{ border: 0, background: 'none', color: 'var(--blue-400)', font: 'inherit', fontWeight: 500, cursor: 'pointer', padding: '4px 6px' }}>{actionLabel}</button>}
      {onClose && <button type="button" aria-label="Dismiss" onClick={onClose} style={{ border: 0, background: 'none', color: 'var(--navy-300)', cursor: 'pointer', padding: 4, display: 'flex' }}><Icon name="x" size={16} /></button>}
    </div>
  );
}
