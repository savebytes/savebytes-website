import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Label above, control, helper or error below. Shared anatomy for every form control. */
export function Field({ label, htmlFor, helper, error, required, optional, children, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, minWidth: 0, ...style }}>
      {label && (
        <label htmlFor={htmlFor} style={{ fontSize: 'var(--text-label-size)', lineHeight: 'var(--text-label-lh)', fontWeight: 500, color: 'var(--color-text)' }}>
          {label}
          {required && <span aria-hidden="true" style={{ color: 'var(--color-danger)', marginLeft: 2 }}>*</span>}
          {optional && <span style={{ color: 'var(--color-text-muted)', fontWeight: 400, marginLeft: 6 }}>Optional</span>}
        </label>
      )}
      {children}
      {error ? (
        <div role="alert" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, lineHeight: '16px', color: 'var(--color-danger)' }}>
          <Icon name="circle-alert" size={16} />{error}
        </div>
      ) : helper ? (
        <div style={{ fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)' }}>{helper}</div>
      ) : null}
    </div>
  );
}

export function controlStyle({ focus, hover, error, disabled, size = 'md', mono }) {
  const h = size === 'sm' ? 'var(--control-sm)' : size === 'lg' ? 'var(--control-lg)' : 'var(--control-md)';
  return {
    height: h, width: '100%', boxSizing: 'border-box', padding: '0 12px', borderRadius: 'var(--radius-sm)',
    border: '1px solid ' + (error ? 'var(--color-danger)' : focus ? 'var(--color-brand)' : hover && !disabled ? 'var(--navy-500)' : 'var(--color-border-control)'),
    background: disabled ? 'var(--navy-50)' : '#fff', color: disabled ? 'var(--navy-500)' : 'var(--color-text)',
    fontFamily: mono ? 'var(--font-mono)' : 'var(--font-sans)', fontSize: size === 'lg' ? 16 : size === 'sm' ? 13 : 14, lineHeight: '20px',
    outline: 'none', boxShadow: focus ? '0 0 0 2px #fff, 0 0 0 4px var(--color-focus-ring)' : 'none',
    transition: 'border-color var(--duration-fast) var(--ease-out)', cursor: disabled ? 'not-allowed' : undefined,
  };
}
