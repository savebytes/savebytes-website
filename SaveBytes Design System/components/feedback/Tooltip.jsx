import React from 'react';

/** navy-900 tooltip with white text on hover/focus. */
export function Tooltip({ label, placement = 'top', children }) {
  const [open, setOpen] = React.useState(false);
  const pos = placement === 'bottom' ? { top: 'calc(100% + 6px)' } : { bottom: 'calc(100% + 6px)' };
  return (
    <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      {open && (
        <span role="tooltip" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', ...pos, zIndex: 50, background: 'var(--navy-900)', color: '#fff', fontSize: 12, lineHeight: '16px', padding: '6px 8px', borderRadius: 'var(--radius-xs)', whiteSpace: 'nowrap', pointerEvents: 'none', animation: 'sb-fade var(--duration-base) var(--ease-out)' }}>{label}</span>
      )}
    </span>
  );
}
