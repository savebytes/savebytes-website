import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Side drawer: full height, shadow-lg, navy overlay. */
export function Drawer({ open, onClose, title, children, footer, side = 'right', width = 420 }) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    document.addEventListener('keydown', k); return () => document.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 90, background: 'var(--color-overlay)', display: 'flex', justifyContent: side === 'left' ? 'flex-start' : 'flex-end', animation: 'sb-fade var(--duration-base) var(--ease-out)' }}>
      <aside role="dialog" aria-modal="true" aria-label={typeof title === 'string' ? title : undefined} onClick={e => e.stopPropagation()}
        style={{ width, maxWidth: '100vw', height: '100%', background: '#fff', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', borderRadius: side === 'left' ? '0 16px 16px 0' : '16px 0 0 16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 64, padding: '0 20px', borderBottom: '1px solid var(--color-line)' }}>
          <h2 style={{ margin: 0, flex: 1, fontSize: 18, lineHeight: '26px', fontWeight: 600 }}>{title}</h2>
          <button type="button" aria-label="Close" onClick={onClose} style={{ width: 32, height: 32, border: 0, background: 'none', borderRadius: 'var(--radius-sm)', color: 'var(--navy-600)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="x" size={20} /></button>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: 20 }}>{children}</div>
        {footer && <div style={{ padding: '12px 20px', borderTop: '1px solid var(--color-line)', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>{footer}</div>}
      </aside>
    </div>
  );
}
