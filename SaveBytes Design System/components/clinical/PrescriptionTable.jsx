import React from 'react';
import { Badge } from '../feedback/Badge.jsx';

const th = { height: 32, padding: '0 10px', background: 'var(--color-surface-sunken)', fontSize: 13, lineHeight: '18px', fontWeight: 500, color: 'var(--color-text-secondary)', textAlign: 'left', whiteSpace: 'nowrap', borderBottom: '1px solid var(--color-line)' };

/** MedicationRequest lines grouped by visit. Frequency in Indian 1-0-1 notation. */
export function PrescriptionTable({ items = [], showLegend = true, dense = false, actions, style }) {
  const td = { padding: dense ? '8px 10px' : '10px 10px', borderBottom: '1px solid var(--color-line)', verticalAlign: 'top', fontSize: 14, lineHeight: '20px' };
  return (
    <div style={style}>
      <div style={{ border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', overflow: 'auto', background: '#fff' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr>
            <th style={{ ...th, width: 36 }}>#</th><th style={th}>Medicine</th><th style={th}>Dose</th><th style={th}>Frequency</th><th style={th}>When</th><th style={th}>Duration</th><th style={th}>Instructions</th>{actions && <th style={{ ...th, width: 40 }} aria-label="Actions" />}
          </tr></thead>
          <tbody>
            {items.map((m, i) => {
              const v = m.voided;
              const strike = v ? { textDecoration: 'line-through', color: 'var(--color-text-muted)' } : null;
              return (
                <tr key={i} style={{ background: v ? 'var(--navy-50)' : undefined }}>
                  <td style={{ ...td, fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>{i + 1}</td>
                  <td style={td}>
                    <div style={{ fontWeight: 500, ...strike }}>{m.name} {m.strength} <span style={{ fontWeight: 400, color: 'var(--color-text-muted)' }}>{m.form}</span></div>
                    {m.generic && <div style={{ fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)', ...strike }}>{m.generic}</div>}
                    {v && <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}><Badge tone="danger">Voided</Badge><span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{m.voidReason}</span></div>}
                  </td>
                  <td style={{ ...td, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', ...strike }}>{m.dose}</td>
                  <td style={{ ...td, fontFamily: 'var(--font-mono)', fontWeight: 500, whiteSpace: 'nowrap', ...strike }}>{m.frequency}</td>
                  <td style={{ ...td, whiteSpace: 'nowrap', ...strike }}>{m.when}</td>
                  <td style={{ ...td, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', ...strike }}>{m.duration}</td>
                  <td style={{ ...td, color: 'var(--color-text-secondary)', ...strike }}>{m.instructions}</td>
                  {actions && <td style={td}>{actions(m, i)}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showLegend && <div style={{ marginTop: 6, fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)' }}><span style={{ fontFamily: 'var(--font-mono)' }}>1-0-1</span> = morning – afternoon – night</div>}
    </div>
  );
}
