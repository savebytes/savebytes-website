import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Button } from '../core/Button.jsx';

/** Machine-drafted content on warning-soft. Never saved silently. */
export function AiDraft({ title = 'Draft, review before saving', children, onAccept, onEdit, onDiscard, style }) {
  return (
    <div style={{ background: 'var(--color-warning-soft)', borderRadius: 'var(--radius-md)', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, lineHeight: '18px', fontWeight: 600, color: 'var(--color-warning)' }}>
        <Icon name="pencil-line" size={16} />{title}
      </div>
      <div style={{ fontSize: 14, lineHeight: '20px', color: 'var(--color-text)' }}>{children}</div>
      {(onAccept || onEdit || onDiscard) && (
        <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
          {onAccept && <Button size="sm" variant="secondary" icon="check" onClick={onAccept}>Accept</Button>}
          {onEdit && <Button size="sm" variant="ghost" icon="pencil" onClick={onEdit}>Edit</Button>}
          {onDiscard && <Button size="sm" variant="ghost" onClick={onDiscard}>Discard</Button>}
        </div>
      )}
    </div>
  );
}
