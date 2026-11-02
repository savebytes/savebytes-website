function ConsultScreen({ token, queue, setQueue, back, toast }) {
  const DS = window.SaveBytesDesignSystem_ad9a34;
  const { PatientBanner, VitalsStrip, PrescriptionTable, SearchInput, Textarea, AiDraft, Button, Card, Tabs, LabResultsTable, SignedRecord, Breadcrumbs, Menu, Dialog, TextInput, Badge, Alert, Skeleton } = DS;
  const row = queue.find(r => r.token === token) || queue[0];
  const p = PATIENTS[token] || { name: row.name, age: row.age, gender: row.sex === 'F' ? 'Female' : 'Male', mrn: '0004-' + (2800 + token), mobile: '98XXX XXXXX', allergies: null };
  const signed = row.status === 'signed' || row.status === 'closed';
  const [tab, setTab] = React.useState('consult');
  const [rx, setRx] = React.useState([MEDICINES[0].item]);
  const [dx, setDx] = React.useState([DIAGNOSES[1]]);
  const [draft, setDraft] = React.useState(true);
  const [note, setNote] = React.useState('');
  const [voiding, setVoiding] = React.useState(null);
  const [signing, setSigning] = React.useState(false);
  const [labsLoading, setLabsLoading] = React.useState(true);
  React.useEffect(() => { if (tab === 'labs') { setLabsLoading(true); const t = setTimeout(() => setLabsLoading(false), 700); return () => clearTimeout(t); } }, [tab]);
  const sign = () => { setQueue(q => q.map(x => x.token === token ? { ...x, status: 'signed' } : x)); setSigning(false); toast('Visit signed. Prescription PDF ready.'); };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 5 }}>
        <PatientBanner {...p} status={row.status} actions={signed ? null : <Button onClick={() => setSigning(true)} icon="lock">Sign visit</Button>} />
      </div>
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1100 }}>
        <Breadcrumbs onNavigate={back} items={[{ label: 'OPD queue' }, { label: 'Token ' + String(token).padStart(2, '0') + ' · ' + p.name }]} />
        <Tabs value={tab} onChange={setTab} items={[{ id: 'consult', label: 'Consult' }, { id: 'labs', label: 'Lab results', count: LABS.length }, { id: 'history', label: 'Past visits', count: 3 }]} />
        {tab === 'consult' && (
          <>
            <VitalsStrip vitals={row.status === 'booked' || row.status === 'arrived' ? [{ label: 'BP', value: null, unit: 'mmHg' }, { label: 'Pulse', value: null, unit: 'bpm' }, { label: 'Temp', value: null, unit: '°F' }, { label: 'SpO₂', value: null, unit: '%' }, { label: 'Weight', value: null, unit: 'kg' }, { label: 'BMI', value: null, unit: 'kg/m²' }]
              : [{ label: 'BP', value: '142/92', unit: 'mmHg', flag: 'high' }, { label: 'Pulse', value: 78, unit: 'bpm', time: '10:12 am' }, { label: 'Temp', value: '100.8', unit: '°F', flag: 'high' }, { label: 'SpO₂', value: 98, unit: '%', time: '10:12 am' }, { label: 'Weight', value: '64.5', unit: 'kg', time: '10:12 am' }, { label: 'BMI', value: '24.3', unit: 'kg/m²', note: 'Calculated' }]} />
            {signed && <SignedRecord by="Dr Anil Kulkarni" at="12 Mar 2026, 10:41 am" />}
            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 16, alignItems: 'start' }}>
              <Card title="Notes">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {draft && !signed && <AiDraft onAccept={() => { setNote('Fever for 3 days, max 101.4 °F. No cough. Throat congested. No rash.'); setDraft(false); }} onEdit={() => { setNote('Fever for 3 days, max 101.4 °F. No cough. Throat congested. No rash. '); setDraft(false); }} onDiscard={() => setDraft(false)}>Fever for 3 days, max 101.4 °F. No cough. Throat congested. No rash.</AiDraft>}
                  <Textarea label="Complaints and findings" rows={4} value={note} onChange={e => setNote(e.target.value)} disabled={signed} placeholder="Type, or accept the draft above" />
                </div>
              </Card>
              <Card title="Diagnosis">
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {!signed && <SearchInput placeholder="Diagnosis name or ICD-10 code" options={DIAGNOSES} onSelect={o => setDx(d => d.find(x => x.value === o.value) ? d : [...d, o])} />}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {dx.map(d => <span key={d.value} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '4px 8px', border: '1px solid var(--color-line)', borderRadius: 4, fontSize: 14 }}>{d.label}<span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>{d.meta}</span></span>)}
                  </div>
                  {p.allergies && p.allergies.length > 0 && <Alert tone="danger" title={'Allergic to ' + p.allergies.map(a => a.substance).join(', ')}>Check before prescribing.</Alert>}
                </div>
              </Card>
            </div>
            <Card title="Prescription" subtitle={rx.filter(m => !m.voided).length + ' medicines'} actions={!signed && <Button size="sm" variant="ghost" icon="repeat" onClick={() => { setRx(r => [...r, MEDICINES[1].item]); toast('Last prescription repeated'); }}>Repeat last</Button>}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {!signed && <SearchInput placeholder="Add medicine from your clinic list" options={MEDICINES} onSelect={o => setRx(r => [...r, o.item])} />}
                <PrescriptionTable items={rx} actions={signed ? null : (m, i) => m.voided ? null : (
                  <Menu align="end" trigger={<Button size="sm" variant="ghost" icon="ellipsis" aria-label="Line actions" />} items={[{ label: 'Edit line', icon: 'pencil' }, { divider: true }, { label: 'Void line', icon: 'ban', danger: true, onClick: () => setVoiding(i) }]} />
                )} />
              </div>
            </Card>
          </>
        )}
        {tab === 'labs' && (labsLoading ? <Card><Skeleton lines={5} height={18} gap={14} /></Card> : <LabResultsTable title="CBC + CRP · 10 Mar 2026" results={LABS} />)}
        {tab === 'history' && (
          <DS.Table rows={[{ id: 1, d: '10 Mar 2026', r: 'Fever, 1 day', dr: 'Dr Anil Kulkarni', s: 'signed' }, { id: 2, d: '14 Nov 2025', r: 'Acidity', dr: 'Dr Anil Kulkarni', s: 'closed' }, { id: 3, d: '02 Aug 2025', r: 'Annual check-up', dr: 'Dr Rekha Menon', s: 'closed' }]}
            columns={[{ key: 'd', label: 'Date', mono: true }, { key: 'r', label: 'Reason' }, { key: 'dr', label: 'Doctor' }, { key: 's', label: 'Status', render: r => <DS.VisitStatusBadge status={r.s} /> }]} />
        )}
      </div>
      <Dialog open={voiding !== null} onClose={() => setVoiding(null)} title="Void this line?" description="It stays in the record, struck through, with your reason."
        footer={<><Button variant="secondary" onClick={() => setVoiding(null)}>Cancel</Button><Button variant="danger" onClick={() => { setRx(r => r.map((m, i) => i === voiding ? { ...m, voided: true, voidReason: 'Wrong strength entered' } : m)); setVoiding(null); }}>Void line</Button></>}>
        <TextInput label="Reason" defaultValue="Wrong strength entered" />
      </Dialog>
      <Dialog open={signing} onClose={() => setSigning(false)} title="Sign this visit?" description="The record becomes read-only. You can still add an addendum."
        footer={<><Button variant="secondary" onClick={() => setSigning(false)}>Cancel</Button><Button icon="lock" onClick={sign}>Sign visit</Button></>}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14 }}>
          <span>{dx.length} diagnosis · {rx.filter(m => !m.voided).length} medicines</span>
          <span style={{ color: 'var(--color-text-muted)' }}>Prescription PDF will be sent to <span style={{ fontFamily: 'var(--font-mono)' }}>{p.mobile}</span></span>
        </div>
      </Dialog>
    </div>
  );
}
window.ConsultScreen = ConsultScreen;
