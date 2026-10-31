'use client';
import React from 'react';
import DS from '../../components/ds';
import * as SEC from '../../components/sections';
import * as HC from '../../content/health';
import VisitFlow from './VisitFlow';
import Workspace from './Workspace';
import { useGo } from '../../lib/navigation';
const { Overline, SectionMark, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, Principles, Timeline, CtaBand, HeroBackdrop } = SEC;
const { FAQ } = HC;

export default function HealthPage() {
  const go = useGo();
  const { Logo, Button, PatientBanner, VitalsStrip, PrescriptionTable } = DS;
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
