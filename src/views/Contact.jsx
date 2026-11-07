'use client';
import React from 'react';
import Icon from '../site/Icon';
import { site, socialLinks } from '../config/site';
import { submitLead } from '../lib/forms';
import { track } from '../lib/analytics';
import { ROLES, LIMITS, validateField, validateLead, cleanLead } from '../lib/validation/lead';

const SOCIAL_ICON = { whatsapp: 'message-circle', linkedin: 'linkedin', instagram: 'instagram', x: 'x-twitter', portfolio: 'globe' };

function Field({ name, label, error, helper, optional, required, as = 'input', children, ...rest }) {
  const id = 'f-' + name;
  const describedBy = [helper && id + '-help', error && id + '-err'].filter(Boolean).join(' ') || undefined;
  const Tag = as;
  return (
    <div className={'field' + (error ? ' has-error' : '')}>
      <label htmlFor={id}>{label}{optional && <span className="field-opt"> (optional)</span>}</label>
      <Tag id={id} name={name} aria-invalid={error ? true : undefined} aria-describedby={describedBy} aria-required={required || undefined} {...rest}>{children}</Tag>
      {helper && <p id={id + '-help'} className="field-help">{helper}</p>}
      {error && <p id={id + '-err'} className="field-err">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState({});
  const [sendErr, setSendErr] = React.useState('');

  const onBlur = (e) => {
    const n = e.target.name; if (!n || n === 'company_website') return;
    // An empty field is not an error until the visitor tries to send: leaving it should not
    // push the Send button out from under their pointer.
    if (!e.target.value.trim() && !err[n]) return;
    setErr((x) => ({ ...x, [n]: validateField(n, e.target.value) }));
  };
  const onChange = (e) => {
    const n = e.target.name;
    if (n && err[n]) setErr((x) => ({ ...x, [n]: validateField(n, e.target.value) }));
  };
  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    const n = validateLead(values);
    setErr(n);
    const first = Object.keys(n)[0];
    if (first) { form.elements[first]?.focus(); return; }
    if (values.company_website) { setSent(true); return; } // bots fill the hidden field; people never see it
    setBusy(true); setSendErr('');
    const lead = cleanLead(values);
    const res = await submitLead(lead);
    if (res.ok) { setSent(true); track('lead_submitted', { role: lead.role }); }
    else setSendErr("That didn't send. Please try again, or write to us directly.");
    setBusy(false);
  };

  return (
    <div className="frame contact">
      <section className="contact-intro" aria-labelledby="contact-title">
        <h1 id="contact-title" className="t-display">Talk to us.</h1>
        <p className="t-lead">Whether you run a clinic, want to partner, or just want to see what we are building, write to us. We reply within one working day.</p>
        <ul className="lines">
          <li><a href={site.email.href}><Icon name="mail" /><span>{site.email.label}</span></a></li>
          {socialLinks.map((s) => (
            <li key={s.id}><a href={s.href} target="_blank" rel="noopener noreferrer"><Icon name={SOCIAL_ICON[s.id]} /><span>{s.label}<i>{s.text}</i></span></a></li>
          ))}
          <li><span><Icon name="map-pin" /><span>{site.location}</span></span></li>
        </ul>
      </section>

      <section className="contact-form" aria-label="Contact form">
        {sent ? (
          <div role="status" className="sent">
            <span className="sent-mark"><Icon name="check" size={22} /></span>
            <h2 className="t-head">Thanks, we have got it.</h2>
            <p>We will be in touch within a working day.</p>
          </div>
        ) : (
          <form onSubmit={submit} onBlur={onBlur} onChange={onChange} noValidate>
            <div className="field-pair">
              <Field name="name" label="Name" required error={err.name} autoComplete="name" maxLength={LIMITS.name} />
              <Field name="clinic" label="Clinic or company" optional error={err.clinic} autoComplete="organization" maxLength={LIMITS.clinic} />
            </div>
            <div className="field-pair">
              <Field name="role" label="Role" optional as="select" error={err.role} defaultValue="">
                <option value="">Choose one</option>
                {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
              </Field>
              <Field name="city" label="City" optional error={err.city} placeholder="Navi Mumbai" autoComplete="address-level2" maxLength={LIMITS.city} />
            </div>
            <Field name="reach" label="Phone or email" required error={err.reach} helper="Whichever you give us, that is how we will reply." autoComplete="on" maxLength={LIMITS.reach} />
            <Field name="message" label="Message" optional as="textarea" rows={5} error={err.message} maxLength={LIMITS.message} />
            <div aria-hidden="true" className="honey"><label>Leave this empty<input type="text" name="company_website" tabIndex={-1} autoComplete="off" /></label></div>
            <div className="form-end">
              <button type="submit" className="act" disabled={busy} aria-busy={busy || undefined}>{busy ? 'Sending…' : 'Send'}</button>
              <p className="form-note">We use these details only to reply to you. No newsletters unless you ask.</p>
            </div>
            {sendErr && <p role="alert" className="field-err">{sendErr}</p>}
          </form>
        )}
      </section>
    </div>
  );
}
