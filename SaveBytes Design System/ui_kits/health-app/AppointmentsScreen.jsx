function AppointmentsScreen() {
  const { Table, DatePicker, Pagination, Button, VisitStatusBadge, Select } = window.SaveBytesDesignSystem_ad9a34;
  const [page, setPage] = React.useState(1);
  const rows = [
    ['9:45 am', 'Nikhil Sawant', '0004-2810', 'Acidity', 'noshow'], ['10:00 am', 'Meera Kulkarni', '0004-2701', 'Thyroid review', 'closed'],
    ['10:15 am', 'Rohan Patil', '0004-2822', 'Follow-up, BP', 'signed'], ['10:30 am', 'Priya Deshmukh', '0004-2817', 'Fever, 3 days', 'in-consult'],
    ['10:45 am', 'Aarav Joshi', '0004-2840', 'Cough', 'vitals'], ['11:00 am', 'Sunita Naik', '0004-1190', 'Diabetes review', 'arrived'],
    ['11:15 am', 'Imran Shaikh', '0004-2830', 'Back pain', 'booked'], ['11:30 am', 'Kavita Iyer', '0004-2851', 'Headache', 'booked'],
  ].map(([t, n, m, r, s], i) => ({ id: i, t, n, m, r, s, dr: i % 3 === 2 ? 'Dr Rekha Menon' : 'Dr Anil Kulkarni' }));
  return (
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 1040 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end' }}>
        <DatePicker label="Date" defaultValue={new Date(2026, 2, 12)} style={{ width: 200 }} />
        <Select label="Doctor" options={['All doctors', 'Dr Anil Kulkarni', 'Dr Rekha Menon']} style={{ width: 220 }} />
        <span style={{ flex: 1 }} />
        <Button icon="plus">Book appointment</Button>
      </div>
      <Table dense rows={rows} columns={[{ key: 't', label: 'Time', mono: true, width: 100 }, { key: 'n', label: 'Patient', render: r => <span style={{ fontWeight: 500 }}>{r.n}</span> }, { key: 'm', label: 'MRN', mono: true }, { key: 'r', label: 'Reason' }, { key: 'dr', label: 'Doctor' }, { key: 's', label: 'Status', render: r => <VisitStatusBadge status={r.s} /> }]} />
      <Pagination page={page} pageCount={3} total={42} pageSize={14} onChange={setPage} />
    </div>
  );
}
window.AppointmentsScreen = AppointmentsScreen;
