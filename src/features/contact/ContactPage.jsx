'use client';
import React from 'react';
import DS from '../../components/ds';
import { site } from '../../config/site';
import { submitLead } from '../../lib/forms';
import { track } from '../../lib/analytics';
import { ROLES, LIMITS, validateField, validateLead, cleanLead } from '../../lib/validation/lead';
import { Overline, SectionMark, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, QUEUE, Principles, Timeline, CtaBand, HeroBackdrop, Spotlight, FounderPhoto } from '../../components/sections';
export default function ContactPage() {
  const { TextInput, Select, Textarea, Button, Icon, Link } = DS;
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState({});
  const [sendErr, setSendErr] = React.useState('');
  const onFieldBlur = e => {
    const n = e.target.name; if (!n || n === 'company_website') return;
    setErr(x => ({ ...x, [n]: validateField(n, e.target.value) }));
  };
  const onFieldChange = e => {
    const n = e.target.name;
    if (n && err[n]) setErr(x => ({ ...x, [n]: validateField(n, e.target.value) }));
  };
  const submit = async e => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const values = Object.fromEntries(f.entries());
    const n = validateLead(values);
    setErr(n);
    const first = Object.keys(n)[0];
    if (first) { form.elements[first]?.focus(); return; }
    if (values.company_website) { setSent(true); return; } // honeypot: bots fill the hidden field, people never see it
    setBusy(true); setSendErr('');
    const lead = cleanLead(values);
    const res = await submitLead(lead);
    if (res.ok) { setSent(true); track('lead_submitted', { role: lead.role }); }
    else setSendErr("That didn't send. Please try again, or write to us directly.");
    setBusy(false);
  };
  return (
    <section className="sb-section sb-hero sb-has-backdrop"><HeroBackdrop />
      <div className="sb-container sb-split" style={{ alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <h1 className="sb-display-xl">Talk to us.</h1>
          <p className="sb-lead" style={{ color: 'var(--color-text-secondary)' }}>Whether you run a clinic, want to partner, or just want to see what we're building, write to us. We reply within one working day.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8, fontSize: 16 }}>
            {[['mail', site.email.label], ['phone', site.phone.label], ['map-pin', site.location]].map(([i, t]) => <span key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--color-text-secondary)' }}><Icon name={i} size={20} color="var(--navy-500)" />{t}</span>)}
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-lg)', padding: 32, boxShadow: 'var(--shadow-sm)' }}>
          {sent ? (
            <div role="status" style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '24px 0', animation: 'sb-rise 320ms var(--ease-out)' }}>
              <span style={{ width: 40, height: 40, borderRadius: 6, background: 'var(--color-success-soft)', color: 'var(--color-success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={20} /></span>
              <h2 className="sb-h2">Thanks, we've got it.</h2>
              <p className="sb-body" style={{ color: 'var(--color-text-secondary)' }}>We'll be in touch within a working day.</p>
            </div>
          ) : (
            <form onSubmit={submit} onBlur={onFieldBlur} onChange={onFieldChange} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="sb-grid-2" style={{ gap: 16 }}>
                <TextInput name="name" label="Name" required error={err.name} size="lg" autoComplete="name" maxLength={LIMITS.name} />
                <TextInput name="clinic" label="Clinic or company" error={err.clinic} size="lg" autoComplete="organization" maxLength={LIMITS.clinic} />
                <Select name="role" label="Role" placeholder="Choose one" size="lg" error={err.role} options={[...ROLES]} />
                <TextInput name="city" label="City" error={err.city} size="lg" placeholder="Navi Mumbai" autoComplete="address-level2" maxLength={LIMITS.city} />
              </div>
              <TextInput name="reach" label="Phone or email" required error={err.reach} helper="Whichever you give us, that is how we will reply." size="lg" autoComplete="on" maxLength={LIMITS.reach} />
              <Textarea name="message" label="Message" optional error={err.message} rows={4} maxLength={LIMITS.message} />
              <div aria-hidden="true" style={{ position: 'absolute', left: -9999, width: 1, height: 1, overflow: 'hidden' }}><label>Leave this empty<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <Button type="submit" size="lg" loading={busy}>Send</Button>
                {sendErr && <span role="alert" style={{ color: 'var(--color-danger)', fontSize: 14 }}>{sendErr}</span>}
                <span style={{ fontSize: 13, color: 'var(--color-text-muted)', flex: 1, minWidth: 200 }}>We use these details only to reply to you. No newsletters unless you ask.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
