import React from 'react';
import Link from 'next/link';
import { site } from '../config/site';

const RULES = [
  ['Waste nothing.', 'If a click, a field or a screen does not help the doctor, it goes.'],
  ['Your data stays yours.', 'A clinic’s records belong to the clinic, and it can take them with it any time.'],
  ['No lock-in.', 'Records are kept in an open format, so they can move with you.'],
  ['Built to be trusted.', 'We say what is ready and what is not, and nothing more.'],
  ['Doctors decide.', 'Software can suggest. A clinician always has the final say.'],
];

export default function About() {
  return (
    <div className="frame read">
      <section className="lede" aria-labelledby="about-title">
        <h1 id="about-title" className="t-display">It started as a repository name.</h1>
        <div className="byline">
          <img src="/img/founder-sm.jpg" alt="" width="56" height="56" decoding="async" />
          <p><b>{site.founder.name}</b><span>{site.founder.role}, {site.location}</span></p>
        </div>
      </section>

      <section className="block" aria-labelledby="name">
        <h2 id="name" className="t-head">Where the name came from.</h2>
        <div className="prose">
          <p>In my first year of engineering college I was naming a GitHub repository and went through a long list of bad ideas. SaveBytes stuck. As an engineer you learn quickly that good software is software that uses less: less memory, fewer steps, less waiting. I have tried to write code that way ever since.</p>
          <p>Years later the name was still with me: on my GitHub, on my portfolio at savebytes.in, in how I think about building things. So when I decided to start a company, it already had a name.</p>
        </div>
      </section>

      <section className="block" aria-labelledby="clinics">
        <h2 id="clinics" className="t-head">Why we start with clinics.</h2>
        <div className="prose">
          <p>Healthcare is where wasted time hurts the most. A doctor in a busy clinic sees dozens of patients a day, and most software makes that harder. We want to build the opposite.</p>
          <p>Near where I live there are clinics with a queue out the door every morning, and almost all of it runs on paper. Entries go in a register. Token numbers are written by hand. Payments go in a notebook. The places that do use software usually have a different tool for each counter: one for the pharmacy, one for lab reports, one for prescriptions. None of them talk to each other, so the patient ends up carrying the paper between desks.</p>
          <p>I want one workspace for the whole visit. The patient registers once. The doctor writes the prescription in the same place. That is what <Link href="/health">SaveBytes Health</Link> is, and it grows one careful piece at a time.</p>
        </div>
      </section>

      <section className="block" aria-labelledby="rules">
        <h2 id="rules" className="t-head">Five rules we build by.</h2>
        <dl className="facts">
          {RULES.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}
        </dl>
      </section>

      <section className="close" aria-labelledby="small">
        <h2 id="small" className="t-head">Small on purpose.</h2>
        <p className="t-lead">Right now SaveBytes is one person. If you write to us, the founder reads it.</p>
        <Link href="/contact" className="act">Write to us</Link>
      </section>
    </div>
  );
}
