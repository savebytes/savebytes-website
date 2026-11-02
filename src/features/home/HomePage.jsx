'use client';
import React from 'react';
import DS from '../../components/ds';
import { useGo } from '../../lib/navigation';
import { Overline, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, QUEUE, Principles, Timeline, CtaBand, HeroBackdrop, FounderPhoto } from '../../components/sections';
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

export default function HomePage({ headline = 'Software that wastes nothing.' }) {
  const go = useGo();
  const { Logo, Button, Link, Card, Badge, Icon, Avatar } = DS;
  const [playing, setPlaying] = React.useState(false);
  const logoRef = React.useRef(null);
  const panelRef = React.useRef(null);

  // Decide once per session whether the intro plays. Reduced motion gets a plain fade, no movement.
  React.useEffect(() => {
    const panel = panelRef.current; if (!panel) return;
    let seen = false; try { seen = sessionStorage.getItem('sb-intro-played') === '1'; } catch (e) {}
    if (seen) return;
    try { sessionStorage.setItem('sb-intro-played', '1'); } catch (e) {}
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400, easing: 'ease-out' });
      return;
    }
    panel.style.opacity = '0';
    setPlaying(true);
  }, []);

  // The focal moment: logo intro (1.6s) -> brief hold -> the logo glides into the panel's title bar
  // while the panel unfolds downward from it, and the SaveBytes mark dissolves into the Health mark.
  React.useEffect(() => {
    if (!playing) return;
    const panel = panelRef.current, logo = logoRef.current;
    const mark = panel && panel.querySelector('[data-sb-mark]');
    if (!panel || !logo || !mark) { if (panel) panel.style.opacity = ''; setPlaying(false); return; }
    const anims = [];
    const settle = () => { panel.style.opacity = ''; mark.style.opacity = ''; setPlaying(false); };
    const t = setTimeout(() => {
      const lr = logo.getBoundingClientRect(), mr = mark.getBoundingClientRect();
      const dx = mr.left + mr.width / 2 - (lr.left + lr.width / 2), dy = mr.top + mr.height / 2 - (lr.top + lr.height / 2);
      const glide = 'cubic-bezier(0.65, 0, 0.35, 1)', arrive = 'cubic-bezier(0.16, 1, 0.3, 1)';
      mark.style.opacity = '0';
      panel.style.opacity = '';
      anims.push(panel.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 450, easing: 'ease-out', fill: 'backwards' }));
      anims.push(panel.animate(
        [{ clipPath: 'inset(0 0 calc(100% - 44px) 0 round 16px)' }, { clipPath: 'inset(0 0 0 0 round 16px)' }],
        { duration: 950, delay: 800, easing: arrive, fill: 'backwards' }));
      const flight = logo.animate(
        [{ transform: 'none' }, { transform: `translate(${dx}px, ${dy}px) scale(${mr.width / lr.width})` }],
        { duration: 1200, easing: glide, fill: 'forwards' });
      anims.push(flight);
      flight.finished.then(() => {
        mark.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 240, easing: 'ease-out', fill: 'forwards' });
        const out = logo.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 240, easing: 'ease-out', fill: 'forwards' });
        out.finished.then(settle, settle);
      }, settle);
    }, 2100);
    return () => { clearTimeout(t); anims.forEach(a => a.cancel()); panel.style.opacity = ''; mark.style.opacity = ''; };
  }, [playing]);
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
            {playing && <div aria-hidden="true" style={{ position: 'absolute', left: 0, top: '50%', marginTop: -80, zIndex: 2, pointerEvents: 'none' }}><div ref={logoRef} style={{ transformOrigin: 'center', willChange: 'transform, opacity' }}><Logo size={160} animate="intro" /></div></div>}
            <div ref={panelRef}><QueuePanel /></div>
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
                      {link && <Link href="/health" arrow onClick={e => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; e.preventDefault(); go('health'); }}>Learn more</Link>}
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
              {['FHIR R4', 'Medplum', 'TypeScript', 'Per-clinic isolation', 'Audit trail', 'Export anytime'].map(t => <span key={t} style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '18px', color: 'var(--navy-200)', border: '1px solid var(--navy-800)', borderRadius: 4, padding: '4px 8px', whiteSpace: 'nowrap' }}>{t}</span>)}
            </div>
          </div>
          <div className="sb-diagram" aria-label="Your clinic connects to SaveBytes Health, which stores records in an isolated FHIR data space">
            {[['building-2', 'Your clinic', 'Reception, nurse, doctor'], ['layout-panel-left', 'SaveBytes Health', 'One fast screen per job'], ['database', 'Isolated FHIR data space', 'Yours. Export anytime.']].map(([ic, t, d], i) => (
              <React.Fragment key={t}>
                {i > 0 && <span aria-hidden="true" style={{ width: 1, height: 28, background: 'var(--navy-700)', margin: '0 auto' }} />}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', border: '1px solid ' + (i === 1 ? 'var(--blue-400)' : 'var(--navy-700)'), borderRadius: 'var(--radius-md)', background: 'var(--navy-900)' }}>
                  <span style={{ color: i === 1 ? 'var(--blue-400)' : 'var(--navy-300)', display: 'flex' }}><Icon name={ic} size={20} /></span>
                  <div><div style={{ fontWeight: 600, fontSize: 15, lineHeight: '22px', color: '#fff' }}>{t}</div><div style={{ fontSize: 13, lineHeight: '18px', color: 'var(--navy-300)' }}>{d}</div></div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div style={{ maxWidth: 'var(--reading-max)', display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Overline>05 / The name</Overline>
          <blockquote className="sb-h2" style={{ margin: 0, fontWeight: 500 }}>“I named my first GitHub repo SaveBytes because good software should use less: less memory, less time, less of your patience. It turned into a company.”</blockquote>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <FounderPhoto id="founder-home" size={48} />
            <div><div style={{ fontWeight: 600, fontSize: 15, lineHeight: '22px' }}>Ankit Singh</div><div style={{ fontSize: 13, lineHeight: '18px', color: 'var(--color-text-muted)' }}>Founder &amp; CEO</div></div>
            <span style={{ marginLeft: 'auto' }}><Link href="/about" arrow onClick={e => { if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; e.preventDefault(); go('about'); }}>Read the story</Link></span>
          </div>
        </div>
      </Section>

      <CtaBand onCta={() => go('contact')} />
    </>
  );
}
