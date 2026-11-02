import React from 'react';

/** Anchored white panel (shadow-md). Click trigger to toggle; outside click closes. */
export function Popover({ trigger, children, open: controlled, onOpenChange, align = 'start', width, style }) {
  const [inner, setInner] = React.useState(false);
  const open = controlled !== undefined ? controlled : inner;
  const set = v => { if (controlled === undefined) setInner(v); onOpenChange && onOpenChange(v); };
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const h = e => ref.current && !ref.current.contains(e.target) && set(false);
    const k = e => e.key === 'Escape' && set(false);
    document.addEventListener('mousedown', h); document.addEventListener('keydown', k);
    return () => { document.removeEventListener('mousedown', h); document.removeEventListener('keydown', k); };
  }, [open]);
  return (
    <span ref={ref} style={{ position: 'relative', display: 'inline-flex' }}>
      <span onClick={() => set(!open)} style={{ display: 'inline-flex' }}>{trigger}</span>
      {open && (
        <div style={{ position: 'absolute', top: 'calc(100% + 6px)', [align === 'end' ? 'right' : 'left']: 0, zIndex: 60, width, minWidth: 180, background: '#fff', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', animation: 'sb-fade var(--duration-base) var(--ease-out)', ...style }}>
          {typeof children === 'function' ? children(() => set(false)) : children}
        </div>
      )}
    </span>
  );
}
