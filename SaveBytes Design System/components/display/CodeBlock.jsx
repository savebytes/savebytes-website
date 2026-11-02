import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** surface-sunken block, Plex Mono 13, radius-md, copy button. */
export function CodeBlock({ code = '', language, style }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => { navigator.clipboard && navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500); };
  return (
    <div style={{ position: 'relative', background: 'var(--color-surface-sunken)', borderRadius: 'var(--radius-md)', ...style }}>
      {language && <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)', padding: '10px 14px 0', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{language}</div>}
      <button type="button" aria-label="Copy code" onClick={copy} style={{ position: 'absolute', top: 6, right: 6, height: 28, padding: '0 8px', display: 'flex', alignItems: 'center', gap: 4, border: '1px solid var(--color-line)', background: '#fff', borderRadius: 'var(--radius-sm)', fontSize: 12, color: 'var(--navy-700)', cursor: 'pointer', fontFamily: 'var(--font-sans)' }}>
        <Icon name={copied ? 'check' : 'copy'} size={14} />{copied ? 'Copied' : 'Copy'}
      </button>
      <pre style={{ margin: 0, padding: '12px 14px', overflowX: 'auto', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px', color: 'var(--color-text)' }}><code>{code}</code></pre>
    </div>
  );
}
