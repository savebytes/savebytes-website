import React from 'react';
import { Icon } from './Icon.jsx';
import { Logo } from './Logo.jsx';

const SIZES = {
  sm: { height: 'var(--control-sm)', padding: '0 12px', fontSize: 13, lineHeight: '18px', gap: 6, icon: 16 },
  md: { height: 'var(--control-md)', padding: '0 16px', fontSize: 14, lineHeight: '20px', gap: 8, icon: 20 },
  lg: { height: 'var(--control-lg)', padding: '0 20px', fontSize: 16, lineHeight: '24px', gap: 8, icon: 20 },
};

function look(variant, state) {
  const { hover, press, disabled } = state;
  switch (variant) {
    case 'secondary':
      return { background: disabled ? 'var(--navy-50)' : press ? 'var(--navy-100)' : hover ? 'var(--navy-50)' : '#fff', color: disabled ? 'var(--navy-400)' : 'var(--color-text)', border: '1px solid ' + (disabled ? 'var(--color-line-strong)' : 'var(--color-border-control)') };
    case 'ghost':
      return { background: press ? 'var(--navy-100)' : hover ? 'var(--navy-50)' : 'transparent', color: disabled ? 'var(--navy-400)' : 'var(--color-text)', border: '1px solid transparent' };
    case 'danger':
      return { background: disabled ? 'var(--navy-200)' : press ? '#8F0B21' : hover ? '#A60D26' : 'var(--color-danger)', color: disabled ? 'var(--navy-500)' : '#fff', border: '1px solid transparent' };
    case 'link':
      return { background: 'transparent', color: disabled ? 'var(--navy-400)' : press ? 'var(--color-brand-pressed)' : 'var(--color-link)', border: '1px solid transparent', padding: 0, height: 'auto', textDecoration: hover && !disabled ? 'underline' : 'none', textUnderlineOffset: 3 };
    default:
      return { background: disabled ? 'var(--navy-200)' : press ? 'var(--color-brand-pressed)' : hover ? 'var(--color-brand-hover)' : 'var(--color-brand)', color: disabled ? 'var(--navy-500)' : 'var(--color-on-brand)', border: '1px solid transparent' };
  }
}

/** Primary, secondary, ghost, danger and link buttons. One primary per view. */
export function Button({ variant = 'primary', size = 'md', icon, iconRight, loading = false, disabled = false, fullWidth = false, href, type = 'button', onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const off = disabled || loading;
  const Tag = href ? 'a' : 'button';
  const base = {
    display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, alignItems: 'center', justifyContent: 'center',
    gap: s.gap, height: s.height, padding: s.padding, borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-sans)',
    fontSize: s.fontSize, lineHeight: s.lineHeight, fontWeight: 500, whiteSpace: 'nowrap', textDecoration: 'none',
    cursor: off ? (loading ? 'progress' : 'not-allowed') : 'pointer', boxSizing: 'border-box',
    transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)',
  };
  return (
    <Tag
      href={href} type={href ? undefined : type} disabled={href ? undefined : off} aria-disabled={off || undefined} aria-busy={loading || undefined}
      onClick={off ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)} onMouseUp={() => setPress(false)}
      style={{ ...base, ...look(variant, { hover: hover && !off, press: press && !off, disabled }), ...style }}
      {...rest}
    >
      {loading ? <Logo size={16} tone="current" animate="loader" /> : icon ? <Icon name={icon} size={s.icon === 20 && size === 'sm' ? 16 : size === 'sm' ? 16 : s.icon} /> : null}
      {children}
      {iconRight && !loading ? <Icon name={iconRight} size={size === 'sm' ? 16 : s.icon} /> : null}
    </Tag>
  );
}
