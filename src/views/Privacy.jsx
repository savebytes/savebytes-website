import React from 'react';
import { site } from '../config/site';

const Ph = ({ children }) => <mark className="ph">{children}</mark>;

export default function Privacy() {
  const rows = [
    ['What we collect', 'Only what you type into the contact form: your name, clinic or company, role, phone or email, city and an optional message.'],
    ['Why', 'To reply to you, and if you join early access, to set up the pilot with you. Nothing else. No newsletters unless you ask.'],
    ['Where it goes', <>The form is sent by email through <Ph>[email service, for example Resend or Formspree]</Ph>. This website does not keep its own copy.</>],
    ['How long we keep it', <>Your message stays in our inbox for <Ph>[retention period]</Ph>, or until you ask us to delete it.</>],
    ['Analytics', <>We count page visits with <Ph>[Plausible or Umami]</Ph>, which does not use cookies or track you across sites. That is why there is no cookie banner.</>],
    ['Patient data', 'This website never sees patient records.'],
    ['Deleting your details', <>Write to <a href={site.email.href}>{site.email.label}</a> and we will delete what we have and confirm when it is done.</>],
  ];
  return (
    <div className="frame read">
      <section className="lede" aria-labelledby="privacy-title">
        <h1 id="privacy-title" className="t-display">What we do with your details.</h1>
        <p className="t-lead">Short version: very little. Here is all of it, in plain words.</p>
        <p><Ph>[Have this reviewed before launch.]</Ph></p>
      </section>
      <section className="block" aria-label="Details">
        <dl className="facts facts--wide">
          {rows.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
        </dl>
        <p className="small">Last updated <Ph>[dd Mmm 2026]</Ph></p>
      </section>
    </div>
  );
}
