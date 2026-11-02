import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Modal dialog: radius-lg, shadow-lg, navy overlay at 48%. */
export function Dialog({ open, onClose, title, description, children, footer, width = 480, inline = false }) {
  React.useEffect(() => {
    if (!open || inline) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k);
  }, [open, inline, onClose]);
  if (!open) return null;
  const panel = (
    <div role="dialog" aria-modal={!inline} aria-label={typeof title === 'string' ? title : undefined} onClick={e => e.stopPropagation()}
      style={{ width, maxWidth: 'calc(100vw - 32px)', background: '#fff', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', animation: 'sb-rise var(--duration-slow) var(--ease-out)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '20px 24px 0' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ margin: 0, fontSize: 18, lineHeight: '26px', fontWeight: 600 }}>{title}</h2>
          {description && <p style={{ margin: '4px 0 0', fontSize: 14, lineHeight: '20px', color: 'var(--color-text-muted)' }}>{description}</p>}
        </div>
        {onClose && <button type="button" aria-label="Close" onClick={onClose} style={{ width: 32, height: 32, margin: '-4px -8px 0 0', border: 0, background: 'none', borderRadius: 'var(--radius-sm)', color: 'var(--navy-600)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={20} /></button>}
      </div>
      <div style={{ padding: '16px 24px', fontSize: 14, lineHeight: '20px' }}>{children}</div>
      {footer && <div style={{ padding: '12px 24px 20px', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>{footer}</div>}
    </div>
  );
  if (inline) return panel;
  return <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'var(--color-overlay)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, animation: 'sb-fade var(--duration-base) var(--ease-out)' }}>{panel}</div>;
}
