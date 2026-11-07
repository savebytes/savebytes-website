import React from 'react';

/**
 * The one picture per product: a quiet, rebuilt screen of the product with fictional data.
 * It keeps the product's own borders and tabular figures (data-ui).
 */
const ROWS = [
  ['06', 'Myra Joshi', '7 y · F · Stomach pain', 'With the doctor', 'on'],
  ['07', 'Reyansh Gupta', '4 y · M · Ear pain', 'Vitals taken', ''],
  ['08', 'Saanvi Iyer', '8 y · F · Allergy follow-up', 'Checked in', ''],
  ['05', 'Kabir Khan', '5 y · M · Rash on both arms', 'Signed', 'done'],
];

export function HealthToday() {
  return (
    <div data-ui className="ui" role="img" aria-label="SaveBytes Health showing today's queue at a clinic: who is with the doctor, who is waiting, and who is done. Names are fictional.">
      <div className="ui-head">
        <span className="ui-clinic">Sunrise Kids Clinic</span>
        <span className="ui-day">Today, 10:40 am</span>
      </div>
      <dl className="ui-counts">
        <div><dt>Still to arrive</dt><dd>3</dd></div>
        <div><dt>Waiting</dt><dd>2</dd></div>
        <div><dt>With the doctor</dt><dd>1</dd></div>
        <div><dt>Done</dt><dd>5</dd></div>
      </dl>
      <ul className="ui-rows">
        {ROWS.map(([tok, name, detail, state, kind]) => (
          <li key={tok} className={kind ? 'is-' + kind : undefined}>
            <span className="ui-tok">{tok}</span>
            <span className="ui-who"><b>{name}</b><i>{detail}</i></span>
            <span className="ui-state">{state}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const SCREENS = { HealthToday };
