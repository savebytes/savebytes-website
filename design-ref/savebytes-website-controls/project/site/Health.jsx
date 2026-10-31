const VISIT_STEPS = [
  ['Book or walk in.', 'The receptionist finds the patient by name, mobile or clinic number, or registers them in under a minute.', 'booked'],
  ['Check in.', 'A token number is assigned and the queue updates on every screen in the clinic, live.', 'arrived'],
  ['Vitals.', 'The nurse records BP, pulse, temperature, SpO₂ and weight. BMI is calculated for you.', 'vitals'],
  ['Consult.', "The doctor sees vitals, allergies and past visits next to the note. Diagnosis by name or ICD-10 code. Medicines from your clinic's own list, with dose, 1-0-1 frequency, timing and duration.", 'in-consult'],
  ['Sign and hand over.', "The visit is locked when signed. A prescription PDF with your clinic's logo is ready immediately and can be sent to the patient's phone.", 'signed'],
];

function StepCard({ step }) {
  const { SearchInput, OpdQueue, VitalsStrip, PrescriptionTable, SignedRecord, Button } = window.SaveBytesDesignSystem_ad9a34;
  if (step === 0) return <SearchInput label="Find patient" defaultValue="Priya" placeholder="Name, mobile or clinic number" options={[{ value: '1', label: 'Priya Deshmukh', meta: '98201 44718' }, { value: '2', label: 'Priyanka Kale', meta: '99675 20831' }]} />;
  if (step === 1) return <OpdQueue dense rows={QUEUE.slice(1, 4).map((r, i) => i === 0 ? { ...r, status: 'arrived' } : r)} activeToken={7} />;
  if (step === 2) return <VitalsStrip dense vitals={[{ label: 'BP', value: '142/92', unit: 'mmHg', flag: 'high' }, { label: 'Pulse', value: 78, unit: 'bpm', time: '10:12 am' }, { label: 'Temp', value: '100.8', unit: '°F', flag: 'high' }, { label: 'SpO₂', value: 98, unit: '%', time: '10:12 am' }, { label: 'BMI', value: '24.3', unit: 'kg/m²', note: 'Calculated' }]} />;
  if (step === 3) return <PrescriptionTable dense items={[{ name: 'Dolo', strength: '650 mg', form: 'Tablet', generic: 'Paracetamol', dose: '1 tab', frequency: '1-0-1', when: 'After food', duration: '5 days' }, { name: 'Cetzine', strength: '10 mg', form: 'Tablet', generic: 'Cetirizine', dose: '1 tab', frequency: '0-0-1', when: 'After food', duration: '5 days' }]} />;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}><SignedRecord by="Dr Anil Kulkarni" at="12 Mar 2026, 10:41 am" /><div style={{ display: 'flex', gap: 8 }}><Button size="sm" variant="secondary" icon="file-text">Prescription PDF</Button><Button size="sm" variant="secondary" icon="send">Send to 98201 44718</Button></div></div>;
}

function VisitFlow() {
  const { VisitStatusBadge } = window.SaveBytesDesignSystem_ad9a34;
  const [s, setS] = React.useState(0);
  const [auto, setAuto] = React.useState(true);
  const [inView, setInView] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setAuto(false); return; }
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    ref.current && io.observe(ref.current); return () => io.disconnect();
  }, []);
  React.useEffect(() => {
    if (!auto || !inView) return;
    const t = setTimeout(() => { if (s === VISIT_STEPS.length - 1) setAuto(false); else setS(s + 1); }, 3200);
    return () => clearTimeout(t);
  }, [s, auto, inView]);
  const pick = i => { setAuto(false); setS(i); };
  return (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: 48 }}>
      <ol className="sb-flow" role="tablist">
        {VISIT_STEPS.map(([t, , st], i) => (
          <li key={t}>
            <button type="button" role="tab" aria-selected={i === s} onClick={() => pick(i)} className="sb-flow-step" style={{ borderColor: i === s ? 'var(--color-brand)' : 'var(--color-line)', background: i === s ? 'var(--color-brand-soft)' : '#fff' }}>
              <span style={{ fontSize: 13, lineHeight: '18px', fontWeight: 500, color: i <= s ? 'var(--color-brand)' : 'var(--color-text-muted)' }}>Step {i + 1}</span>
              <span style={{ fontWeight: 600, fontSize: 15, lineHeight: '22px', color: 'var(--color-text)' }}>{t.replace('.', '')}</span>
              <VisitStatusBadge status={st} />
              <span aria-hidden="true" style={{ alignSelf: 'stretch', height: 2, borderRadius: 1, background: 'var(--navy-200)', overflow: 'hidden', marginTop: 4 }}><span key={s + '-' + auto} style={{ display: 'block', height: '100%', background: 'var(--color-brand)', width: i < s ? '100%' : i === s ? (auto && inView ? '100%' : '100%') : '0%', transformOrigin: 'left', animation: i === s && auto && inView ? 'sb-flow-fill 3200ms linear both' : 'none' }}></span></span>
            </button>
          </li>
        ))}
      </ol>
      <div className="sb-split" style={{ alignItems: 'start' }}>
        <div key={'t' + s} style={{ animation: 'sb-rise 320ms var(--ease-out)' }}>
          <h3 className="sb-h2">{VISIT_STEPS[s][0]}</h3>
          <p className="sb-body-lg" style={{ color: 'var(--color-text-secondary)', marginTop: 12 }}>{VISIT_STEPS[s][1]}</p>
        </div>
        <div key={'c' + s} style={{ animation: 'sb-rise 320ms var(--ease-out) 60ms both' }}><ScreenPanel title={['Reception', 'OPD queue', 'Vitals', 'Prescription', 'Signed visit'][s]}><StepCard step={s} /></ScreenPanel></div>
      </div>
    </div>
  );
}

const WORKSPACE = [
  ['user-plus', 'Register', 'Reception registers the patient once. Every counter sees the same record.', 'First release'],
  ['calendar-clock', 'Appointment', 'Booked with the right doctor, or added to the queue as a walk-in.', 'First release'],
  ['file-pen-line', 'Consult', 'The doctor reviews past visits, writes the Rx and orders tests (CBC, X-ray, whatever is needed) from the same screen.', 'First release'],
  ['flask-conical', 'Lab', 'The order is already waiting at the lab. The technician uploads the report against it. Urgent orders go to the top.', 'Planned'],
  ['bell', 'Results back', 'The report lands on the patient chart and the doctor who asked for it is told it is ready.', 'Planned'],
  ['package-check', 'Pharmacy', 'The pharmacy dispenses from the signed prescription. Nobody retypes it.', 'Planned'],
];

function Workspace() {
  const { Icon } = window.SaveBytesDesignSystem_ad9a34;
  return (
    <ol className="sb-ws" aria-label="How one visit moves through the clinic">
      {WORKSPACE.map(([ic, t, d, st], i) => {
        const now = st === 'First release';
        return (
          <Reveal key={t} delay={i * 60}>
            <li className={'sb-ws-step' + (now ? '' : ' is-planned')}>
              <span className="sb-ws-icon"><Icon name={ic} size={20} /></span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, fontSize: 16, color: '#fff' }}>{t}</span>
                  <span className="sb-ws-status">{st}</span>
                </div>
                <span style={{ fontSize: 14, lineHeight: '22px', color: 'var(--navy-200)' }}>{d}</span>
                {i === 4 && (
                  <div className="sb-ws-note" role="img" aria-label="Example notification: CBC report ready for Priya Deshmukh, token 07, marked urgent">
                    <span style={{ color: 'var(--color-danger)', display: 'flex' }}><Icon name="circle-alert" size={16} /></span>
                    <span style={{ fontWeight: 500 }}>CBC ready</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>Priya Deshmukh · Token 07</span>
                    <span className="sb-ws-urgent">Urgent</span>
                  </div>
                )}
              </div>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}

const FAQ = [
  ['Will it slow me down?', "It's built around a single consult screen. Your favourite medicines and “repeat last prescription” are one click. We measure speed the way you would: seconds per patient."],
  ["Who can see my patients' data?", 'Only the people you give access to, by role. Each clinic\u2019s records live in their own isolated space, and every view and change is logged.'],
  ['What if I want to leave?', 'Your records are stored in FHIR, an open international format. You can export all of it.'],
    ["My staff aren't very technical.", "If they can use WhatsApp, they can use this. We'll set it up with you, in person, in Navi Mumbai and Mumbai."],
  ['What about ABDM and ABHA?', "It's on our roadmap. We'll say more when it's actually connected, not before."],
];

function HealthPage({ go }) {
  const { Logo, Button, PatientBanner, VitalsStrip, PrescriptionTable } = window.SaveBytesDesignSystem_ad9a34;
  return (
    <>
      <section className="sb-section sb-hero sb-has-backdrop"><HeroBackdrop tone="health" />
        <div className="sb-container sb-hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <Logo lockup="horizontal" tone="health" size={32} />
            <Overline>SaveBytes Health · In development</Overline>
            <h1 className="sb-display-xl">The clinic day, done properly.</h1>
            <p className="sb-lead" style={{ color: 'var(--color-text-secondary)', maxWidth: 560 }}>An EHR built for Indian clinics with two to five doctors. Book, check in, take vitals, consult, prescribe, sign, without the screen getting in the way.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <Button size="lg" onClick={() => go('contact')}>Join early access</Button>
              <Button size="lg" variant="secondary" onClick={() => document.getElementById('flow') && window.scrollTo({ top: document.getElementById('flow').offsetTop - 72, behavior: 'smooth' })}>See the visit flow</Button>
            </div>
          </div>
          <ScreenPanel title="Consult · Token 07" style={{ alignSelf: 'center' }}>
            <div style={{ margin: -16, marginBottom: 0 }}><PatientBanner name="Priya Deshmukh" age="34 y" gender="Female" born="14 Aug 1991" mrn="0004-2817" mobile="98201 44718" allergies={[{ substance: 'Penicillin', reaction: 'rash' }]} status="in-consult" /></div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
              <VitalsStrip dense vitals={[{ label: 'BP', value: '142/92', unit: 'mmHg', flag: 'high' }, { label: 'Pulse', value: 78, unit: 'bpm', time: '10:12 am' }, { label: 'Temp', value: '100.8', unit: '°F', flag: 'high' }, { label: 'SpO₂', value: 98, unit: '%', time: '10:12 am' }]} />
              <PrescriptionTable dense showLegend={false} items={[{ name: 'Dolo', strength: '650 mg', form: 'Tablet', generic: 'Paracetamol', dose: '1 tab', frequency: '1-0-1', when: 'After food', duration: '5 days' }]} />
            </div>
          </ScreenPanel>
        </div>
      </section>

      <Section tone="subtle" id="flow">
        <SectionHeader overline="A visit, start to finish" title="One patient. Five steps. No paper register on the side." />
        <VisitFlow />
      </Section>

      <Section tone="inverse" grid id="workspace">
        <div className="sb-split">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <SectionHeader inverse overline="Where we're headed" title="One workspace for the whole clinic." />
            <p className="sb-body-lg" style={{ color: 'var(--navy-200)', maxWidth: 'var(--reading-max)' }}>A busy clinic often runs on a separate tool for each counter: one for the pharmacy, one for lab reports, one for prescriptions. None of them talk to each other, so the patient carries paper from one desk to the next.</p>
            <p className="sb-body-lg" style={{ color: 'var(--navy-200)', maxWidth: 'var(--reading-max)' }}>We're building the visit as one connected record. The doctor orders a test and the lab already has it. The report comes back and the doctor knows.</p>
            <p className="sb-body" style={{ color: 'var(--navy-300)', maxWidth: 'var(--reading-max)' }}>The first release covers the OPD. Lab, results and pharmacy come after, on the same patient record.</p>
          </div>
          <Workspace />
        </div>
      </Section>

      <Section>
        <SectionHeader overline="Straight answers" title="Answers to the questions doctors actually ask." />
        <div className="sb-grid-3" style={{ marginTop: 48 }}>
          {FAQ.map(([q, a, ph], i) => (
            <Reveal key={q} delay={(i % 3) * 60}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 20, borderTop: '1px solid var(--color-line)' }}>
                <h3 className="sb-h3">“{q}”</h3>
                <p className="sb-body" style={{ color: 'var(--color-text-secondary)' }}>{a}{ph && <> <span className="sb-placeholder">{ph}</span></>}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="subtle">
        <div className="sb-split">
          <SectionHeader overline="Specialties" title="One chart, shaped to how you practise." />
          <p className="sb-body-lg" style={{ color: 'var(--color-text-secondary)', maxWidth: 'var(--reading-max)' }}>Specialties are add-ons with their own forms, vitals and favourite diagnoses (for example growth charts for paediatrics), all on the same patient chart. We'll build them one at a time, starting with what our first clinics need.</p>
        </div>
      </Section>

      <Section>
        <div className="sb-split">
          <SectionHeader overline="What's being built now" title="An honest roadmap." />
          <div>
            <Timeline />
            <p className="sb-body" style={{ color: 'var(--color-text-muted)', fontStyle: 'normal' }}>Dates are deliberately missing. We'll add them when we're sure of them.</p>
            <p style={{ marginTop: 12 }}><span className="sb-placeholder">[Update these labels from the Dashboard tab of the build tracker before launch, and again as each phase completes.]</span></p>
          </div>
        </div>
      </Section>

      <CtaBand title="Want to shape SaveBytes Health?" body="We're looking for a few owner-doctors to use it first and tell us what's wrong with it. You get it early, with a direct line to the people building it." onCta={() => go('contact')} />
    </>
  );
}
window.HealthPage = HealthPage;
