import React from 'react';

/** White surface with line border, radius-md. Optional header (title, subtitle, actions). */
export function Card({ title, subtitle, actions, footer, variant = 'product', padding, elevated = false, interactive = false, onClick, children, style }) {
  const [hover, setHover] = React.useState(false);
  const web = variant === 'website';
  const pad = padding !== undefined ? padding : web ? 'var(--space-6)' : 'var(--space-4)';
  return (
    <section onClick={onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ background: 'var(--color-surface)', border: '1px solid ' + (interactive && hover ? 'var(--color-line-strong)' : 'var(--color-line)'), borderRadius: web ? 'var(--radius-lg)' : 'var(--radius-md)', boxShadow: elevated ? 'var(--shadow-sm)' : 'none', cursor: interactive ? 'pointer' : undefined, transition: 'border-color var(--duration-fast) var(--ease-out)', display: 'flex', flexDirection: 'column', minWidth: 0, ...style }}>
      {(title || actions) && (
        <header style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, padding: pad, paddingBottom: 0 }}>
          <div style={{ minWidth: 0 }}>
            {title && <h3 style={{ margin: 0, fontSize: web ? 24 : 18, lineHeight: web ? '32px' : '26px', fontWeight: 600, letterSpacing: web ? '-0.005em' : 0 }}>{title}</h3>}
            {subtitle && <div style={{ fontSize: 13, lineHeight: '18px', color: 'var(--color-text-muted)', marginTop: 2 }}>{subtitle}</div>}
          </div>
          {actions && <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>{actions}</div>}
        </header>
      )}
      <div style={{ padding: pad, flex: 1, minWidth: 0 }}>{children}</div>
      {footer && <footer style={{ padding: '12px ' + (web ? '24px' : '16px'), borderTop: '1px solid var(--color-line)', display: 'flex', gap: 8, justifyContent: 'flex-end' }}>{footer}</footer>}
    </section>
  );
}
