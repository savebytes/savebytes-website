'use client';
import React from 'react';
import DS from '../../components/ds';
import * as SEC from '../../components/sections';
import * as HC from '../../content/health';
const { Overline, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, QUEUE } = SEC;
const { VISIT_STEPS } = HC;

function StepCard({ step }) {
  const { SearchInput, OpdQueue, VitalsStrip, PrescriptionTable, SignedRecord, Button } = DS;
  if (step === 0) return <SearchInput label="Find patient" defaultValue="Priya" placeholder="Name, mobile or clinic number" options={[{ value: '1', label: 'Priya Deshmukh', meta: '98201 44718' }, { value: '2', label: 'Priyanka Kale', meta: '99675 20831' }]} />;
  if (step === 1) return <OpdQueue dense rows={QUEUE.slice(1, 4).map((r, i) => i === 0 ? { ...r, status: 'arrived' } : r)} activeToken={7} />;
  if (step === 2) return <VitalsStrip dense vitals={[{ label: 'BP', value: '142/92', unit: 'mmHg', flag: 'high' }, { label: 'Pulse', value: 78, unit: 'bpm', time: '10:12 am' }, { label: 'Temp', value: '100.8', unit: '°F', flag: 'high' }, { label: 'SpO₂', value: 98, unit: '%', time: '10:12 am' }, { label: 'BMI', value: '24.3', unit: 'kg/m²', note: 'Calculated' }]} />;
  if (step === 3) return <PrescriptionTable dense items={[{ name: 'Dolo', strength: '650 mg', form: 'Tablet', generic: 'Paracetamol', dose: '1 tab', frequency: '1-0-1', when: 'After food', duration: '5 days' }, { name: 'Cetzine', strength: '10 mg', form: 'Tablet', generic: 'Cetirizine', dose: '1 tab', frequency: '0-0-1', when: 'After food', duration: '5 days' }]} />;
  return <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}><SignedRecord by="Dr Anil Kulkarni" at="12 Mar 2026, 10:41 am" /><div style={{ display: 'flex', gap: 8 }}><Button size="sm" variant="secondary" icon="file-text">Prescription PDF</Button><Button size="sm" variant="secondary" icon="send">Send to 98201 44718</Button></div></div>;
}

export default function VisitFlow() {
  const { VisitStatusBadge } = DS;
  const [s, setS] = React.useState(0);
  const [auto, setAuto] = React.useState(true);
  const [inView, setInView] = React.useState(false);
  const [scrolly, setScrolly] = React.useState(false);
  const [frac, setFrac] = React.useState(0);
  const ref = React.useRef(null);
  const track = React.useRef(null);
  // Desktop with motion allowed: the stage sticks and scrolling through the section walks the five steps.
  React.useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (min-height: 640px) and (prefers-reduced-motion: no-preference)');
    const sync = () => setScrolly(mq.matches);
    sync(); mq.addEventListener('change', sync); return () => mq.removeEventListener('change', sync);
  }, []);
  React.useEffect(() => {
    if (!scrolly) return;
    const el = track.current; if (!el) return;
    let raf = 0;
    const paint = () => {
      raf = 0;
      const r = el.getBoundingClientRect(), travel = r.height - window.innerHeight;
      const p = Math.max(0, Math.min(0.9999, -r.top / Math.max(1, travel)));
      const n = VISIT_STEPS.length, i = Math.floor(p * n);
      setS(i); setFrac(p * n - i);
    };
    const tick = () => { if (!raf) raf = requestAnimationFrame(paint); };
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { window.addEventListener('scroll', tick, { passive: true }); tick(); } else window.removeEventListener('scroll', tick); }, { rootMargin: '10% 0px' });
    io.observe(el); setAuto(false);
    return () => { io.disconnect(); window.removeEventListener('scroll', tick); cancelAnimationFrame(raf); };
  }, [scrolly]);
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
  const pick = i => {
    setAuto(false);
    if (scrolly && track.current) {
      const r = track.current.getBoundingClientRect(), travel = r.height - window.innerHeight;
      window.scrollTo({ top: window.scrollY + r.top + travel * ((i + 0.5) / VISIT_STEPS.length), behavior: 'smooth' });
    } else setS(i);
  };
  const header = <SectionHeader overline="01 / A visit, start to finish" title="One patient. Five steps. No paper register on the side." />;
  const stage = (
    <div ref={ref} style={{ display: 'flex', flexDirection: 'column', gap: 32, marginTop: scrolly ? 32 : 48 }}>
      <ol className="sb-flow" role="tablist">
        {VISIT_STEPS.map(([t, , st], i) => (
          <li key={t}>
            <button type="button" role="tab" aria-selected={i === s} onClick={() => pick(i)} className="sb-flow-step" style={{ borderColor: i === s ? 'var(--color-brand)' : 'var(--color-line)', background: i === s ? 'var(--color-brand-soft)' : '#fff' }}>
              <span style={{ fontSize: 13, lineHeight: '18px', fontWeight: 500, color: i <= s ? 'var(--color-brand)' : 'var(--color-text-muted)' }}>Step {i + 1}</span>
              <span style={{ fontWeight: 600, fontSize: 15, lineHeight: '22px', color: 'var(--color-text)' }}>{t.replace('.', '')}</span>
              <VisitStatusBadge status={st} />
              <span aria-hidden="true" style={{ alignSelf: 'stretch', height: 2, borderRadius: 1, background: 'var(--navy-200)', overflow: 'hidden', marginTop: 4 }}><span key={s + '-' + auto} style={{ display: 'block', height: '100%', background: 'var(--color-brand)', width: i < s ? '100%' : i === s ? (scrolly ? (frac * 100).toFixed(1) + '%' : '100%') : '0%', transformOrigin: 'left', animation: i === s && !scrolly && auto && inView ? 'sb-flow-fill 3200ms linear both' : 'none' }}></span></span>
            </button>
          </li>
        ))}
      </ol>
      <div className="sb-split" style={{ alignItems: 'start', minHeight: scrolly ? 260 : undefined }}>
        <div key={'t' + s} style={{ animation: 'sb-rise 320ms var(--ease-out)' }}>
          <h3 className="sb-h2">{VISIT_STEPS[s][0]}</h3>
          <p className="sb-body-lg" style={{ color: 'var(--color-text-secondary)', marginTop: 12 }}>{VISIT_STEPS[s][1]}</p>
        </div>
        <div key={'c' + s} style={{ animation: 'sb-rise 320ms var(--ease-out) 60ms both' }}><ScreenPanel title={['Reception', 'OPD queue', 'Vitals', 'Prescription', 'Signed visit'][s]}><StepCard step={s} /></ScreenPanel></div>
      </div>
    </div>
  );
  return scrolly ? <div ref={track} className="sb-flowscene"><div className="sb-flowscene-stick">{header}{stage}</div></div> : <>{header}{stage}</>;
}
