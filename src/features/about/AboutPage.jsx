'use client';
import React from 'react';
import DS from '../../components/ds';
import { useGo } from '../../lib/navigation';
import { Overline, SectionMark, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, QUEUE, Principles, Timeline, CtaBand, HeroBackdrop, Spotlight, FounderPhoto } from '../../components/sections';
export default function AboutPage() {
  const go = useGo();
  const { Avatar } = DS;
  return (
    <>
      <section className="sb-section sb-hero sb-has-backdrop"><HeroBackdrop />
        <div className="sb-container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 className="sb-display-xl" style={{ maxWidth: 900 }}>It started as a repository name.</h1>
        </div>
      </section>
      <Section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 'var(--reading-max)', display: 'flex', flexDirection: 'column', gap: 24 }} className="sb-body-lg">
          <p>In my first year of engineering college I was naming a GitHub repository and went through a long list of bad ideas. SaveBytes stuck. As an engineer you learn quickly that good software is software that uses less: less memory, fewer steps, less waiting. I've tried to write code that way ever since.</p>
          <p>Years later the name was still with me: on my GitHub, on my portfolio at savebytes.in, in how I think about building things. So when I decided to start a company, it already had a name.</p>
          <p>We're starting with healthcare because it's where wasted time hurts the most. A doctor in a busy clinic sees dozens of patients a day, and most software makes that harder. We want to build the opposite.</p>
          <p>Near where I live there are clinics with a queue out the door every morning, and almost all of it runs on paper. Entries go in a register. Token numbers are written by hand. Payments go in a notebook. The places that do use software usually have a different tool for each counter: one for the pharmacy, one for lab reports, one for prescriptions. None of them talk to each other, so the patient ends up carrying the paper between desks.</p>
          <p>I want one workspace for the whole visit. The patient registers once. The doctor writes the prescription and orders the tests in the same place. The lab uploads the report against that order, and the doctor is told it's ready, with the urgent ones first. That's what SaveBytes Health is growing into, one careful piece at a time.</p>
        </div>
      </Section>
      <Section tone="subtle">
        <div className="sb-split">
          <SectionHeader title="Five rules we build by." />
          <Principles extra={['We count clicks per visit and try to remove one every release.', 'Isolation is enforced in the data layer, not by convention.', 'Leaving should be as easy as joining.', 'The audit trail is part of the product, not an add-on.', 'Drafts are visually distinct and never saved silently.']} />
        </div>
      </Section>
      <Section>
        <div className="sb-split">
          <SectionHeader title="For the technical reader." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 'var(--reading-max)' }} className="sb-body">
            <p><strong>Open standards.</strong> Clinical records are FHIR R4 resources, so any system that speaks FHIR can read them.</p>
            <p><strong>A proven foundation.</strong> Medplum handles the data model, access control and audit, the parts that must not be clever.</p>
            <p><strong>One codebase, configured per clinic.</strong> Forms, roles and branding are configuration. Nobody gets a fork.</p>
            <p><strong>Server-side permissions and audit.</strong> Every clinical action is logged. Export and deletion were designed in from day one.</p>
          </div>
        </div>
      </Section>
      <Section tone="subtle">
        <div className="sb-team">
          <img src="/img/founder.jpg" alt="Ankit Singh, founder of SaveBytes" className="sb-team-photo" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <h2 className="sb-display">We're small on purpose.</h2>
            <p className="sb-lead" style={{ color: 'var(--color-text-secondary)' }}>Right now SaveBytes is one person. If you write to us, the founder reads it.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-start', marginTop: 8, paddingTop: 20, borderTop: '1px solid var(--color-line)', alignSelf: 'stretch' }}>
              <span style={{ fontSize: 18, lineHeight: '26px', fontWeight: 600 }}>Ankit Singh</span>
              <span style={{ fontSize: 15, color: 'var(--color-text-muted)' }}>Founder &amp; CEO</span>
              <p className="sb-body" style={{ color: 'var(--color-text-secondary)', marginTop: 6, maxWidth: 520 }}>Building software that makes clinic work simpler, connects the reception, doctor, lab and pharmacy, and puts good digital records within reach of small clinics.</p>
            </div>
          </div>
        </div>
      </Section>
      <CtaBand onCta={() => go('contact')} />
    </>
  );
}
