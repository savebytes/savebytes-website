import React from 'react';
import { Icon } from '../core/Icon.jsx';

/** Prev/next with page numbers and a range summary. */
export function Pagination({ page = 1, pageCount = 1, total, pageSize = 20, onChange, style }) {
  const go = p => p >= 1 && p <= pageCount && p !== page && onChange && onChange(p);
  const nums = [];
  for (let p = 1; p <= pageCount; p++) if (p === 1 || p === pageCount || Math.abs(p - page) <= 1) nums.push(p); else if (nums[nums.length - 1] !== '…') nums.push('…');
  const btn = (on, dis) => ({ minWidth: 32, height: 32, padding: '0 8px', border: '1px solid ' + (on ? 'var(--color-brand)' : 'var(--color-line)'), background: on ? 'var(--color-brand-soft)' : '#fff', color: dis ? 'var(--navy-300)' : on ? 'var(--blue-900)' : 'var(--color-text)', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-mono)', fontSize: 13, cursor: dis ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' });
  return (
    <nav aria-label="Pagination" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, ...style }}>
      {total !== undefined ? <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}><span style={{ fontFamily: 'var(--font-mono)' }}>{(page - 1) * pageSize + 1}–{Math.min(page * pageSize, total)}</span> of <span style={{ fontFamily: 'var(--font-mono)' }}>{total}</span></span> : <span />}
      <div style={{ display: 'flex', gap: 4 }}>
        <button type="button" aria-label="Previous page" disabled={page <= 1} onClick={() => go(page - 1)} style={btn(false, page <= 1)}><Icon name="chevron-left" size={16} /></button>
        {nums.map((n, i) => n === '…' ? <span key={'e' + i} style={{ width: 24, textAlign: 'center', color: 'var(--color-text-muted)', lineHeight: '32px' }}>…</span>
          : <button key={n} type="button" aria-current={n === page ? 'page' : undefined} onClick={() => go(n)} style={btn(n === page)}>{n}</button>)}
        <button type="button" aria-label="Next page" disabled={page >= pageCount} onClick={() => go(page + 1)} style={btn(false, page >= pageCount)}><Icon name="chevron-right" size={16} /></button>
      </div>
    </nav>
  );
}
