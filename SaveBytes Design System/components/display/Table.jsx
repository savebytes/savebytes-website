import React from 'react';

/** Data table. Header surface-sunken, rows 44px (36 dense), mono right-aligned numbers, hover navy-50, selected brand-soft. */
export function Table({ columns = [], rows = [], rowKey = 'id', dense = false, selectedKey, onRowClick, caption, style }) {
  const [hover, setHover] = React.useState(null);
  const h = dense ? 36 : 44;
  return (
    <div style={{ border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', overflow: 'auto', background: '#fff', ...style }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, lineHeight: '20px' }}>
        {caption && <caption style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 600 }}>{caption}</caption>}
        <thead>
          <tr>
            {columns.map(c => (
              <th key={c.key} scope="col" style={{ height: dense ? 32 : 36, padding: '0 12px', background: 'var(--color-surface-sunken)', fontSize: 13, lineHeight: '18px', fontWeight: 500, color: 'var(--color-text-secondary)', textAlign: c.align || (c.numeric ? 'right' : 'left'), whiteSpace: 'nowrap', width: c.width, borderBottom: '1px solid var(--color-line)' }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const k = r[rowKey] !== undefined ? r[rowKey] : i;
            const sel = selectedKey !== undefined && selectedKey === k;
            return (
              <tr key={k} onClick={onRowClick ? () => onRowClick(r) : undefined} onMouseEnter={() => setHover(k)} onMouseLeave={() => setHover(null)}
                style={{ background: sel ? 'var(--color-brand-soft)' : hover === k ? 'var(--navy-50)' : 'transparent', cursor: onRowClick ? 'pointer' : undefined, transition: 'background var(--duration-fast) var(--ease-out)' }}>
                {columns.map(c => (
                  <td key={c.key} style={{ height: h, padding: '0 12px', borderBottom: i === rows.length - 1 ? 0 : '1px solid var(--color-line)', textAlign: c.align || (c.numeric ? 'right' : 'left'), fontFamily: c.mono || c.numeric ? 'var(--font-mono)' : undefined, fontVariantNumeric: 'tabular-nums', verticalAlign: 'middle', color: 'var(--color-text)' }}>
                    {c.render ? c.render(r) : r[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
