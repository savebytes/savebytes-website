'use client';
import React from 'react';
import DS from '../../components/ds';
import { site } from '../../config/site';
import { Overline, SectionMark, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, QUEUE, Principles, Timeline, CtaBand, HeroBackdrop, Spotlight, FounderPhoto } from '../../components/sections';
export default function PrivacyPage() {
  const { Link } = DS;
  const rows = [
    ['What we collect', 'Only what you type into the contact form: your name, clinic or company, role, phone or email, city and an optional message.'],
    ['Why', 'To reply to you, and if you join early access, to set up the pilot with you. Nothing else. No newsletters unless you ask.'],
    ['Where it goes', <>The form is sent by email through <span className="sb-placeholder">[email service, for example Resend or Formspree]</span>. This website does not keep its own copy.</>],
    ['How long we keep it', <>Your message stays in our inbox for <span className="sb-placeholder">[retention period]</span>, or until you ask us to delete it.</>],
    ['Analytics', <>We count page visits with <span className="sb-placeholder">[Plausible or Umami]</span>, which does not use cookies or track you across sites. That is why there is no cookie banner.</>],
    ['Patient data', 'This website never sees patient records. SaveBytes Health keeps clinical data in a separate, isolated space for each clinic, covered by its own terms.'],
    ['Deleting your details', <>Write to <Link href={site.email.href}>{site.email.label}</Link> and we'll delete what we have and confirm when it's done.</>],
  ];
  return (
    <>
      <section className="sb-section sb-hero sb-has-backdrop"><HeroBackdrop />
        <div className="sb-container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Overline>Privacy</Overline>
          <h1 className="sb-display-xl" style={{ maxWidth: 900 }}>What this website does with your details.</h1>
          <p className="sb-lead" style={{ color: 'var(--color-text-secondary)', maxWidth: 'var(--reading-max)' }}>Short version: very little. Here is all of it, in plain words.</p>
          <div><span className="sb-placeholder">[Have this reviewed before launch.]</span></div>
        </div>
      </section>
      <Section style={{ paddingTop: 0 }}>
        <dl style={{ margin: 0, maxWidth: 880, display: 'flex', flexDirection: 'column' }}>
          {rows.map(([t, d]) => (
            <div key={t} className="sb-privacy-row">
              <dt className="sb-h3">{t}</dt>
              <dd className="sb-body" style={{ margin: 0, color: 'var(--color-text-secondary)', maxWidth: 'var(--reading-max)' }}>{d}</dd>
            </div>
          ))}
        </dl>
        <p className="sb-overline" style={{ color: 'var(--color-text-muted)', marginTop: 40 }}>Last updated <span className="sb-placeholder">[dd Mmm 2026]</span></p>
      </Section>
    </>
  );
}
