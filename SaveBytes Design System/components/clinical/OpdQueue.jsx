import React from 'react';
import { VisitStatusBadge } from './VisitStatusBadge.jsx';

function Row({ r, active, onSelect, last, dense }) {
  const [h, setH] = React.useState(false);
  return (
    <li>
      <button type="button" onClick={() => onSelect && onSelect(r)} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-current={active || undefined}
        style={{ width: '100%', display: 'grid', gridTemplateColumns: '56px minmax(0,1fr) auto auto', alignItems: 'center', gap: 16, padding: dense ? '8px 16px' : '12px 16px', border: 0, borderBottom: last ? 0 : '1px solid var(--color-line)', background: active ? 'var(--color-brand-soft)' : h ? 'var(--navy-50)' : '#fff', textAlign: 'left', cursor: onSelect ? 'pointer' : 'default', fontFamily: 'var(--font-sans)', color: 'var(--color-text)', transition: 'background var(--duration-fast) var(--ease-out)' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: dense ? 20 : 24, lineHeight: '32px', fontWeight: 500, color: active ? 'var(--blue-900)' : 'var(--color-text)' }}>{String(r.token).padStart(2, '0')}</span>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 15, lineHeight: '22px', fontWeight: 600 }}>{r.name}</span>
          <span style={{ display: 'block', fontSize: 13, lineHeight: '18px', color: 'var(--color-text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.age} · {r.sex}{r.reason ? ' · ' + r.reason : ''}</span>
        </span>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{r.time}</span>
        <VisitStatusBadge status={r.status} />
      </button>
    </li>
  );
}

/** OPD queue: token (mono, large), name, age/sex · reason, time, status. Patient in consult highlighted. */
export function OpdQueue({ rows = [], activeToken, onSelect, dense = false, style }) {
  const act = activeToken !== undefined ? activeToken : (rows.find(r => r.status === 'in-consult') || {}).token;
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: '#fff', ...style }}>
      {rows.map((r, i) => <Row key={r.token} r={r} active={r.token === act} onSelect={onSelect} last={i === rows.length - 1} dense={dense} />)}
    </ul>
  );
}
