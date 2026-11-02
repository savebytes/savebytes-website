function TopBar({ title, children, tenant, setTenant }) {
  const { Avatar, Menu, Button, Icon } = window.SaveBytesDesignSystem_ad9a34;
  return (
    <div style={{ height: 56, flexShrink: 0, display: 'flex', alignItems: 'center', gap: 16, padding: '0 20px', background: '#fff', borderBottom: '1px solid var(--color-line)' }}>
      <h1 style={{ fontSize: 18, lineHeight: '26px', fontWeight: 600, whiteSpace: 'nowrap' }}>{title}</h1>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 12 }}>{children}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: 2, borderRadius: 6, background: 'var(--navy-100)' }} role="radiogroup" aria-label="Tenant branding (white-label demo)">
        {[['savebytes', 'SaveBytes'], ['tenant', 'Tenant']].map(([id, l]) => (
          <button key={id} role="radio" aria-checked={tenant === id} onClick={() => setTenant(id)} style={{ height: 28, padding: '0 10px', border: 0, borderRadius: 4, fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, cursor: 'pointer', background: tenant === id ? '#fff' : 'transparent', color: tenant === id ? 'var(--color-text)' : 'var(--color-text-muted)', boxShadow: tenant === id ? 'var(--shadow-sm)' : 'none' }}>{l}</button>
        ))}
      </div>
      <Menu align="end" trigger={<button aria-label="Account" style={{ border: 0, background: 'none', padding: 0, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}><Avatar name="Dr Anil Kulkarni" size={32} /><Icon name="chevron-down" size={16} color="var(--navy-500)" /></button>}
        items={[{ label: 'Dr Anil Kulkarni', icon: 'user', disabled: true }, { divider: true }, { label: 'Compact density', icon: 'rows-3' }, { label: 'Sign out', icon: 'log-out' }]} />
    </div>
  );
}

function Shell({ screen, setScreen, tenant, setTenant, title, toolbar, children, counts }) {
  const { SideNav, Logo } = window.SaveBytesDesignSystem_ad9a34;
  const t = tenant === 'tenant';
  return (
    <div style={{ display: 'flex', height: '100vh', background: 'var(--color-surface-subtle)' }}>
      <SideNav active={screen === 'consult' ? 'queue' : screen} onSelect={setScreen}
        header={t ? <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><span style={{ width: 28, height: 28, borderRadius: 6, background: 'var(--blue-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: 13 }}>AC</span><span style={{ fontWeight: 600, fontSize: 15 }}>Arogya Clinic</span></span> : <Logo lockup="horizontal" tone="health" size={22} hoverBreathe />}
        footer={<div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, lineHeight: '16px', color: 'var(--color-text-muted)' }}><span>{t ? 'Arogya Clinic, Vashi' : 'Kulkarni Clinic, Vashi'}</span>{t && <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>Powered by <Logo lockup="horizontal" tone="navy" size={12} /></span>}</div>}
        items={[{ section: 'Today' }, { id: 'queue', label: 'OPD queue', icon: 'list-ordered', count: counts.queue }, { id: 'appointments', label: 'Appointments', icon: 'calendar-days', count: counts.appts }, { section: 'Records' }, { id: 'patients', label: 'Patients', icon: 'users' }, { id: 'settings', label: 'Settings', icon: 'settings' }]} />
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <TopBar title={title} tenant={tenant} setTenant={setTenant}>{toolbar}</TopBar>
        <div style={{ flex: 1, overflow: 'auto' }}>{children}</div>
      </div>
    </div>
  );
}
Object.assign(window, { Shell, TopBar });
