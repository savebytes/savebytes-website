const { Logo, Button, Link, Icon, Card, Badge, OpdQueue, VisitStatusBadge } = window.SaveBytesDesignSystem_ad9a34;

function Overline({ children, inverse }) {
  return <div className="sb-overline" style={{ color: inverse ? 'var(--navy-300)' : 'var(--color-text-muted)' }}>{children}</div>;
}

function SectionHeader({ overline, title, intro, inverse, center }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760, textAlign: center ? 'center' : 'left', alignItems: center ? 'center' : 'flex-start', margin: center ? '0 auto' : undefined }}>
      {overline && <Overline inverse={inverse}>{overline}</Overline>}
      <h2 className="sb-display" style={{ color: inverse ? '#fff' : 'var(--color-text)' }}>{title}</h2>
      {intro && <p className="sb-lead" style={{ color: inverse ? 'var(--navy-200)' : 'var(--color-text-secondary)' }}>{intro}</p>}
    </div>
  );
}

function Section({ tone = 'white', id, children, style, grid }) {
  const bg = tone === 'subtle' ? 'var(--color-surface-subtle)' : tone === 'inverse' ? 'var(--color-surface-inverse)' : tone === 'soft' ? 'var(--color-brand-soft)' : '#fff';
  return (
    <section id={id} className="sb-section" style={{ background: grid ? (tone === 'inverse' ? 'var(--dot-grid-inverse), ' : 'var(--dot-grid), ') + bg : bg, ...style }}>
      <div className="sb-container">{children}</div>
    </section>
  );
}

function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(12px)', transition: 'opacity 320ms var(--ease-out) ' + delay + 'ms, transform 320ms var(--ease-out) ' + delay + 'ms', ...style }}>{children}</div>;
}

function ScreenPanel({ children, title = 'OPD queue · Today', style }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 44, padding: '0 16px', borderBottom: '1px solid var(--color-line)', background: 'var(--color-surface-subtle)' }}>
        <Logo size={16} tone="health" />
        <span style={{ fontSize: 13, fontWeight: 500 }}>{title}</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>12 Mar 2026</span>
      </div>
      <div style={{ padding: 16 }}>{children}</div>
    </div>
  );
}

const QUEUE = [
  { token: 6, name: 'Rohan Patil', age: '52 y', sex: 'M', reason: 'Follow-up, BP', time: '10:15 am', status: 'signed' },
  { token: 7, name: 'Priya Deshmukh', age: '34 y', sex: 'F', reason: 'Fever, 3 days', time: '10:30 am', status: 'in-consult' },
  { token: 8, name: 'Aarav Joshi', age: '6 y', sex: 'M', reason: 'Cough', time: '10:45 am', status: 'vitals' },
  { token: 9, name: 'Sunita Naik', age: '61 y', sex: 'F', reason: 'Diabetes review', time: '11:00 am', status: 'arrived' },
  { token: 10, name: 'Imran Shaikh', age: '29 y', sex: 'M', reason: 'Back pain', time: '11:15 am', status: 'booked' },
];

function QueuePanel({ style }) {
  return <ScreenPanel style={style}><OpdQueue dense rows={QUEUE} /></ScreenPanel>;
}

const PRINCIPLES = [
  ['Waste nothing.', "If a click, a field or a screen doesn't help the doctor, it goes."],
  ['Your data stays yours.', 'Each clinic gets its own isolated data space. You can export everything, any time.'],
  ['Open standards, no lock-in.', 'Records are stored as FHIR, the international standard for health data, so they can move with you.'],
  ['Built to be trusted.', 'Every clinical action is logged. Permissions are enforced on the server, not hidden in the interface.'],
  ['Doctors decide.', 'Anything a machine drafts is marked as a draft until a clinician confirms it.'],
];

function Principles({ extra }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
      {PRINCIPLES.map(([t, d], i) => (
        <Reveal key={t} delay={i * 60}>
          <li className="sb-principle">
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: '28px', color: 'var(--color-brand)' }}>// {String(i + 1).padStart(2, '0')}</span>
            <div>
              <div style={{ fontSize: 18, lineHeight: '28px', fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 16, lineHeight: '26px', color: 'var(--color-text-secondary)', marginTop: 2 }}>{d}{extra && extra[i] ? ' ' + extra[i] : ''}</div>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

const ROADMAP = [
  ['Foundation', 'Infrastructure, security, isolated data per clinic.', 'Now'],
  ['Platform core', 'Clinics, staff, roles, permissions, branding.', 'Next'],
  ['Patient records', 'Registration, consent, allergies, problems, documents.', 'Next'],
  ['OPD', 'Appointments, live queue, vitals, consult, prescriptions, PDFs.', 'Then'],
  ['Later', 'Billing, pharmacy, lab, patient app, ABDM.', 'Planned'],
];

function Timeline() {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative' }}>
      <span aria-hidden="true" style={{ position: 'absolute', left: 11, top: 12, bottom: 12, width: 1, background: 'var(--color-line)' }} />
      {ROADMAP.map(([t, d, s], i) => (
        <li key={t} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '24px 1fr', gap: 20, padding: '0 0 28px' }}>
          <span style={{ background: '#fff', padding: '2px 0', display: 'flex', justifyContent: 'center', color: 'var(--navy-300)' }}>
            {i === 0 ? <Logo size={20} /> : <Logo size={20} tone="current" />}
          </span>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontSize: 18, lineHeight: '26px', fontWeight: 600 }}>{t}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: i === 0 ? 'var(--color-brand)' : 'var(--color-text-muted)' }}>{s}</span>
            </div>
            <div style={{ fontSize: 16, lineHeight: '26px', color: 'var(--color-text-secondary)' }}>{d}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CtaBand({ title = 'Running a clinic in Navi Mumbai or Mumbai?', body, onCta }) {
  return (
    <Section tone="soft">
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
        <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 className="sb-h1">{title}</h2>
          <p className="sb-body" style={{ color: 'var(--color-text-secondary)' }}>{body || "We're looking for a few clinics to use SaveBytes Health first and tell us what's wrong with it. You'll get it early, free during the pilot, and a direct line to the people building it."}</p>
        </div>
        <Button size="lg" onClick={onCta}>Join early access</Button>
      </div>
    </Section>
  );
}

function Footer({ go }) {
  const col = (t, links) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div className="sb-overline" style={{ color: 'var(--navy-400)' }}>{t}</div>
      {links.map(([l, id]) => <a key={l} href="#" onClick={e => { e.preventDefault(); go(id); }} style={{ color: 'var(--navy-200)', fontSize: 15 }}>{l}</a>)}
    </div>
  );
  return (
    <footer style={{ background: 'var(--color-surface-inverse)', color: '#fff' }}>
      <div className="sb-container" style={{ padding: '64px 0 32px' }}>
        <div className="sb-footer-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
            <Logo lockup="horizontal" tone="white" size={28} />
            <p style={{ color: 'var(--navy-200)', fontSize: 15, lineHeight: '24px' }}>SaveBytes builds fast, focused software. Made in Navi Mumbai.</p>
            <Link href="#" inverse>[hello@savebytes.in]</Link>
          </div>
          {col('Products', [['Health', 'health'], ['Platform', 'platform']])}
          {col('Company', [['About', 'about'], ['Contact', 'contact']])}
          {col('Legal', [['Privacy', 'privacy']])}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 12, marginTop: 48, paddingTop: 20, borderTop: '1px solid var(--navy-800)', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--navy-400)' }}>
          <span>© 2026 SaveBytes</span><span>This page weighs [xx] KB.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Overline, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, QUEUE, Principles, Timeline, CtaBand, Footer });
