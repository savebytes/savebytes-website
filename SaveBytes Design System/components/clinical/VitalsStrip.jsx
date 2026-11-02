import React from 'react';
import { ResultFlag } from './ResultFlag.jsx';

/** Row of vitals cells: label, big mono value, unit, then time or flag. */
export function VitalsStrip({ vitals = [], dense = false, style }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + vitals.length + ', minmax(0, 1fr))', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', background: '#fff', overflow: 'hidden', ...style }}>
      {vitals.map((v, i) => (
        <div key={v.label} style={{ padding: dense ? '8px 12px' : '12px 16px', borderLeft: i ? '1px solid var(--color-line)' : 0, minWidth: 0, background: v.flag && v.flag.startsWith('critical') ? 'var(--color-danger-soft)' : undefined }}>
          <div style={{ fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>{v.label}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', columnGap: 4, marginTop: 2 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: dense ? 18 : 24, lineHeight: dense ? '26px' : '32px', fontWeight: 500, fontVariantNumeric: 'tabular-nums', color: v.value == null ? 'var(--navy-300)' : 'var(--color-text)' }}>{v.value == null ? '—' : v.value}</span>
            {v.unit && <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{v.unit}</span>}
          </div>
          <div style={{ marginTop: 2, minHeight: 18, fontSize: 12, lineHeight: '18px', color: 'var(--color-text-muted)', fontFamily: v.flag ? undefined : 'var(--font-mono)' }}>
            {v.flag && v.flag !== 'normal' ? <ResultFlag flag={v.flag} /> : v.time || (v.note ? <span style={{ fontFamily: 'var(--font-sans)' }}>{v.note}</span> : null)}
          </div>
        </div>
      ))}
    </div>
  );
}
