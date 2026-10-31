function CutThread() {
  const ref = React.useRef(null);
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const on = () => {
      const el = ref.current; if (!el) return;
      const r = el.parentElement.getBoundingClientRect();
      const vh = window.innerHeight;
      setP(Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height)));
    };
    on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <svg ref={ref} className="sb-thread" viewBox="0 0 48 400" preserveAspectRatio="none" aria-hidden="true">
      <path pathLength="1" d="M34 0C34 100 14 100 14 200C14 300 34 300 34 400" fill="none" stroke="var(--navy-200)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="1" strokeDashoffset={1 - p} />
    </svg>
  );
}

function HomePage({ go, headline = 'Software that wastes nothing.' }) {
  const { Logo, Button, Link, Card, Badge, Icon, Avatar } = window.SaveBytesDesignSystem_ad9a34;
  const skip = React.useMemo(() => sessionStorage.getItem('sb-intro-played') === '1' || window.matchMedia('(prefers-reduced-motion: reduce)').matches, []);
  const [settled, setSettled] = React.useState(skip);
  React.useEffect(() => { if (skip) return; const t = setTimeout(() => { setSettled(true); sessionStorage.setItem('sb-intro-played', '1'); }, 1600); return () => clearTimeout(t); }, []);
  return (
    <>
      <section className="sb-section sb-hero sb-has-backdrop"><HeroBackdrop />
        <div className="sb-container sb-hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Overline>SaveBytes · Navi Mumbai</Overline>
            <h1 className="sb-display-xl">{headline}</h1>
            <p className="sb-lead" style={{ color: 'var(--color-text-secondary)', maxWidth: 560 }}>We build fast, focused software for the places where time matters most. We're starting with clinics: an EHR that keeps up with a busy OPD instead of slowing it down.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <Button size="lg" onClick={() => go('contact')}>Join early access</Button>
              <Button size="lg" variant="secondary" onClick={() => go('health')}>See what we're building</Button>
            </div>
          </div>
          <div className="sb-hero-visual">
            {!skip && <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', opacity: settled ? 0 : 1, transition: 'opacity 320ms var(--ease-out)', pointerEvents: 'none' }}><Logo size={160} animate="intro" /></div>}
            <div style={{ opacity: settled ? 1 : 0, transform: settled ? 'none' : 'translateY(24px)', transition: 'opacity 320ms var(--ease-out), transform 320ms var(--ease-out)' }}><QueuePanel /></div>
          </div>
        </div>
      </section>

      <div style={{ position: 'relative' }}>
        <CutThread />
        <Section tone="subtle">
          <div className="sb-split">
            <SectionHeader overline="01 / Why we exist" title="Most clinic software is built to be sold, not to be used." />
            <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 'var(--reading-max)' }}>
              <p className="sb-body-lg">It comes with forty modules, a week of training and a screen full of buttons. So the doctor goes back to the paper pad, the receptionist keeps a register on the side, and the software becomes one more bill every month.</p>
              <p className="sb-body-lg" style={{ color: 'var(--color-text-secondary)' }}>We think good software should feel like a good assistant: there when you need it, invisible when you don't. That means doing fewer things, and doing them properly.</p>
            </Reveal>
          </div>
        </Section>

        <Section id="platform">
          <SectionHeader overline="02 / What we build" title="A platform first. Products on top." intro="SaveBytes is a technology company. We build one strong, configurable core and shape it into products for specific jobs. Healthcare is where we're starting." />
          <div className="sb-grid-2" style={{ marginTop: 48 }}>
            {[['health', 'SaveBytes Health', 'Clinic and EHR software for Indian clinics and small hospitals. Appointments, queue, vitals, notes, prescriptions, on one fast screen.', true],
              ['platform', 'SaveBytes Platform', 'The configurable core underneath: tenants, roles, forms, branding and audit, built on open healthcare standards. It lets each clinic, or a partner, run the same product shaped to them, without a custom fork of the code.', false]].map(([tone, t, d, link], i) => (
              <Reveal key={t} delay={i * 60} style={{ display: 'flex' }}>
                <Card variant="website" style={{ flex: 1 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
                    <Logo size={40} tone={tone} />
                    <h3 className="sb-h2">{t}</h3>
                    <p className="sb-body" style={{ color: 'var(--color-text-secondary)', flex: 1 }}>{d}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                      <Badge tone="neutral" dot>In development</Badge>
                      {link && <Link href="#" arrow onClick={e => { e.preventDefault(); go('health'); }}>Learn more</Link>}
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section tone="subtle">
          <div className="sb-split">
            <SectionHeader overline="03 / How we work" title="Five rules we build by." />
            <Principles />
          </div>
        </Section>
      </div>

      <Section tone="inverse" grid>
        <div className="sb-split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <SectionHeader inverse overline="04 / Under the hood" title="Boring where it should be. Careful everywhere." />
            <p className="sb-body-lg" style={{ color: 'var(--navy-200)', maxWidth: 'var(--reading-max)' }}>SaveBytes Health is built on Medplum, an open-source healthcare platform, and stores clinical records as FHIR resources. That gives us a proven foundation for the hard, unglamorous parts (data model, access control, audit) so our time goes into the part you actually touch.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {['FHIR R4', 'Medplum', 'TypeScript', 'Per-clinic isolation', 'Audit trail', 'Export anytime'].map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--navy-200)', border: '1px solid var(--navy-800)', borderRadius: 4, padding: '4px 8px', whiteSpace: 'nowrap' }}>{t}</span>)}
            </div>
          </div>
          <div className="sb-diagram" aria-label="Your clinic connects to SaveBytes Health, which stores records in an isolated FHIR data space">
            {[['building-2', 'Your clinic', 'Reception, nurse, doctor'], ['layout-panel-left', 'SaveBytes Health', 'One fast screen per job'], ['database', 'Isolated FHIR data space', 'Yours. Export anytime.']].map(([ic, t, d], i) => (
              <React.Fragment key={t}>
                {i > 0 && <span aria-hidden="true" style={{ width: 1, height: 28, background: 'var(--navy-700)', margin: '0 auto' }} />}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: '1px solid ' + (i === 1 ? 'var(--blue-400)' : 'var(--navy-700)'), borderRadius: 'var(--radius-md)', background: 'var(--navy-900)' }}>
                  <span style={{ color: i === 1 ? 'var(--blue-400)' : 'var(--navy-300)', display: 'flex' }}><Icon name={ic} size={20} /></span>
                  <div><div style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>{t}</div><div style={{ fontSize: 13, color: 'var(--navy-300)' }}>{d}</div></div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 'var(--reading-max)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <SectionMark label="05 / The name" />
          <blockquote className="sb-h2" style={{ margin: 0, fontWeight: 500 }}>"I named my first GitHub repo SaveBytes because good software should use less: less memory, less time, less of your patience. It turned into a company."</blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <FounderPhoto id="founder-home" size={48} />
            <div><div style={{ fontWeight: 600, fontSize: 15 }}>Ankit Singh</div><div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>Founder &amp; CEO</div></div>
            <span style={{ marginLeft: 'auto' }}><Link href="#" arrow onClick={e => { e.preventDefault(); go('about'); }}>Read the story</Link></span>
          </div>
        </div>
      </Section>

      <CtaBand onCta={() => go('contact')} />
    </>
  );
}
window.HomePage = HomePage;
