function VitalsDialog({ row, onClose, onSave }) {
  const { Dialog, TextInput, Button } = window.SaveBytesDesignSystem_ad9a34;
  const [w, setW] = React.useState('64.5'); const [h, setH] = React.useState('163');
  const bmi = w && h ? (parseFloat(w) / Math.pow(parseFloat(h) / 100, 2)).toFixed(1) : '—';
  return (
    <Dialog open={!!row} onClose={onClose} width={560} title={row ? 'Vitals · Token ' + String(row.token).padStart(2, '0') : ''} description={row ? row.name + ' · ' + row.age + ' · ' + row.sex : ''}
      footer={<><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={onSave}>Save vitals</Button></>}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <TextInput label="BP" mono suffix="mmHg" defaultValue="128/84" />
        <TextInput label="Pulse" mono suffix="bpm" defaultValue="78" />
        <TextInput label="Temp" mono suffix="°F" defaultValue="98.6" />
        <TextInput label="SpO₂" mono suffix="%" defaultValue="98" />
        <TextInput label="Weight" mono suffix="kg" value={w} onChange={e => setW(e.target.value)} />
        <TextInput label="Height" mono suffix="cm" value={h} onChange={e => setH(e.target.value)} />
      </div>
      <div style={{ marginTop: 16, fontSize: 13, color: 'var(--color-text-muted)' }}>BMI <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text)', fontWeight: 500 }}>{bmi}</span> kg/m², calculated</div>
    </Dialog>
  );
}

function RegisterDrawer({ open, onClose, onSave }) {
  const { Drawer, TextInput, Select, Radio, DatePicker, Button, Checkbox } = window.SaveBytesDesignSystem_ad9a34;
  return (
    <Drawer open={open} onClose={onClose} title="Register patient" footer={<><Button variant="secondary" onClick={onClose}>Cancel</Button><Button onClick={onSave}>Register and check in</Button></>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TextInput label="Full name" required placeholder="As on Aadhaar or ID" />
        <TextInput label="Mobile" required mono icon="phone" placeholder="98XXX XXXXX" />
        <Radio label="Gender" direction="row" options={['Female', 'Male', 'Other']} />
        <DatePicker label="Date of birth" helper="If unknown, enter age instead and we'll mark it (est.)" />
        <Select label="Reason for visit" placeholder="Choose or type" options={['Fever', 'Follow-up', 'Cough', 'Review', 'Other']} />
        <Checkbox label="Patient consents to digital records" description="Required before saving clinical notes." defaultChecked />
      </div>
    </Drawer>
  );
}

function QueueScreen({ queue, setQueue, openConsult, toast }) {
  const { Tabs, OpdQueue, Button, Card, EmptyState } = window.SaveBytesDesignSystem_ad9a34;
  const [tab, setTab] = React.useState('waiting');
  const [vitals, setVitals] = React.useState(null);
  const [reg, setReg] = React.useState(false);
  const groups = { waiting: ['booked', 'arrived', 'vitals', 'in-consult'], done: ['signed', 'closed'], noshow: ['noshow'] };
  const rows = queue.filter(r => groups[tab].includes(r.status)).sort((a, b) => a.token - b.token);
  const count = k => queue.filter(r => groups[k].includes(r.status)).length;
  const select = r => {
    if (r.status === 'booked') { setQueue(q => q.map(x => x.token === r.token ? { ...x, status: 'arrived' } : x)); toast('Token ' + String(r.token).padStart(2, '0') + ' checked in'); }
    else if (r.status === 'arrived') setVitals(r);
    else openConsult(r.token);
  };
  return (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1040 }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
        <Tabs value={tab} onChange={setTab} style={{ flex: 1 }} items={[{ id: 'waiting', label: 'Waiting', count: count('waiting') }, { id: 'done', label: 'Done', count: count('done') }, { id: 'noshow', label: 'No-show', count: count('noshow') }]} />
        <Button icon="user-plus" onClick={() => setReg(true)}>Register patient</Button>
      </div>
      {rows.length ? <OpdQueue rows={rows} onSelect={select} /> : <Card><EmptyState icon="list-ordered" title="Nobody here yet">Patients appear here when they are checked in.</EmptyState></Card>}
      <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>Click a booked row to check in, a checked-in row to record vitals, any other row to open the consult.</div>
      <VitalsDialog row={vitals} onClose={() => setVitals(null)} onSave={() => { setQueue(q => q.map(x => x.token === vitals.token ? { ...x, status: 'vitals' } : x)); toast('Vitals saved for ' + vitals.name); setVitals(null); }} />
      <RegisterDrawer open={reg} onClose={() => setReg(false)} onSave={() => { setReg(false); setQueue(q => [...q, { token: 12, name: 'New patient', age: '— y', sex: 'F', reason: 'Fever', time: '11:45 am', status: 'arrived' }]); toast('Registered and checked in as token 12'); }} />
    </div>
  );
}
window.QueueScreen = QueueScreen;
