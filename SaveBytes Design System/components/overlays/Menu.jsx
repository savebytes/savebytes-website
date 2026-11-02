import React from 'react';
import { Popover } from './Popover.jsx';
import { Icon } from '../core/Icon.jsx';

function Item({ it, close }) {
  const [h, setH] = React.useState(false);
  return (
    <button type="button" role="menuitem" disabled={it.disabled} onClick={() => { it.onClick && it.onClick(); close(); }} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, height: 36, padding: '0 10px', border: 0, borderRadius: 4, background: h && !it.disabled ? (it.danger ? 'var(--color-danger-soft)' : 'var(--navy-50)') : 'transparent', color: it.disabled ? 'var(--navy-400)' : it.danger ? 'var(--color-danger)' : 'var(--color-text)', fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: '20px', cursor: it.disabled ? 'not-allowed' : 'pointer', textAlign: 'left' }}>
      {it.icon && <Icon name={it.icon} size={16} />}
      <span style={{ flex: 1, whiteSpace: 'nowrap' }}>{it.label}</span>
      {it.shortcut && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>{it.shortcut}</span>}
    </button>
  );
}

/** Action menu: white, shadow-md, 36px items, optional dividers and danger items. */
export function Menu({ trigger, items = [], align = 'start', open, onOpenChange }) {
  return (
    <Popover trigger={trigger} align={align} open={open} onOpenChange={onOpenChange}>
      {close => (
        <div role="menu" style={{ padding: 4, display: 'flex', flexDirection: 'column' }}>
          {items.map((it, i) => it.divider ? <div key={i} role="separator" style={{ height: 1, background: 'var(--color-line)', margin: '4px 0' }} /> : <Item key={i} it={it} close={close} />)}
        </div>
      )}
    </Popover>
  );
}
