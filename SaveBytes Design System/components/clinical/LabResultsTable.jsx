import React from 'react';
import { Table } from '../display/Table.jsx';
import { ResultFlag } from './ResultFlag.jsx';

/** DiagnosticReport → Observations: test, result (mono, right), flag, reference range. */
export function LabResultsTable({ results = [], dense = true, title, style }) {
  const rows = results.map((r, i) => ({ id: i, ...r }));
  return (
    <Table dense={dense} caption={title} style={style} rows={rows} columns={[
      { key: 'test', label: 'Test' },
      { key: 'value', label: 'Result', align: 'right', render: r => (
        <span style={{ fontFamily: 'var(--font-mono)', fontWeight: r.flag && r.flag !== 'normal' ? 500 : 400, color: r.flag && r.flag.startsWith('critical') ? 'var(--color-danger)' : undefined }}>
          {r.value} <span style={{ color: 'var(--color-text-muted)', fontSize: 12, fontWeight: 400 }}>{r.unit}</span>
        </span>) },
      { key: 'flag', label: 'Flag', width: 130, render: r => <ResultFlag flag={r.flag} /> },
      { key: 'range', label: 'Reference range', render: r => <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)', fontSize: 13 }}>{r.range}</span> },
    ]} />
  );
}
