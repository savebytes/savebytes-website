import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Numbered steps. Done steps show a check, current is brand, upcoming muted. */
export function Stepper({ steps = [], current = 0, onStepClick, orientation = 'horizontal', style }) {
  const vertical = orientation === 'vertical';
  return (
    <ol style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', gap: vertical ? 0 : 8, listStyle: 'none', margin: 0, padding: 0, ...style }}>
      {steps.map((s, i) => {
        const done = i < current, on = i === current;
        const label = typeof s === 'string' ? s : s.label;
        const desc = typeof s === 'string' ? null : s.description;
        return (
          <li key={i} style={{ flex: vertical ? undefined : 1, display: 'flex', flexDirection: vertical ? 'row' : 'column', gap: vertical ? 12 : 8, minWidth: 0 }}>
            <div style={{ display: 'flex', flexDirection: vertical ? 'column' : 'row', alignItems: 'center', gap: 8 }}>
              <button type="button" disabled={!onStepClick} onClick={() => onStepClick && onStepClick(i)} aria-current={on ? 'step' : undefined}
                style={{ width: 24, height: 24, borderRadius: 'var(--radius-xs)', border: '1px solid ' + (done || on ? 'var(--color-brand)' : 'var(--color-line-strong)'), background: done ? 'var(--color-brand)' : on ? 'var(--color-brand-soft)' : '#fff', color: done ? '#fff' : on ? 'var(--blue-900)' : 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: onStepClick ? 'pointer' : 'default', padding: 0 }}>
                {done ? <Icon name="check" size={14} strokeWidth={2.5} /> : String(i + 1).padStart(2, '0')}
              </button>
              {i < steps.length - 1 && <span aria-hidden="true" style={vertical ? { width: 1, flex: 1, minHeight: 24, background: done ? 'var(--color-brand)' : 'var(--color-line)' } : { height: 1, flex: 1, background: done ? 'var(--color-brand)' : 'var(--color-line)' }} />}
            </div>
            <div style={{ paddingBottom: vertical ? 20 : 0, minWidth: 0 }}>
              <div style={{ fontSize: 13, lineHeight: '18px', fontWeight: 500, color: on || done ? 'var(--color-text)' : 'var(--color-text-muted)' }}>{label}</div>
              {desc && <div style={{ fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)', marginTop: 2 }}>{desc}</div>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
