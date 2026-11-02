'use client';
import React from 'react';
import DS from '../../components/ds';
import { ScreenPanel } from '../../components/sections';
import usePointerParallax from '../../components/motion/usePointerParallax';
import { QUEUE, PATIENTS } from '../../content/queue';

const { OpdQueue, PatientBanner, Button } = DS;

/** Each press moves the queue on one stage: the patient in consult is signed, everyone waiting moves up. */
const NEXT = { booked: 'arrived', arrived: 'vitals', vitals: 'in-consult', 'in-consult': 'signed' };
const advance = rows => rows.map(r => (r.status === 'signed' ? r : { ...r, status: NEXT[r.status] }));
const consultOf = rows => rows.find(r => r.status === 'in-consult');

/**
 * Hero visual: a working slice of SaveBytes Health. The queue is live ("Call next" moves patients through the
 * real visit states) and the consult card behind it always shows whoever is in consult. Layers drift a few px
 * with the pointer (transform only, off for touch and reduced motion).
 */
export default function HeroScene({ panelRef, ready = true }) {
  const [rows, setRows] = React.useState(QUEUE);
  const [said, setSaid] = React.useState('');
  const sceneRef = React.useRef(null);
  const done = rows.every(r => r.status === 'signed');
  const inConsult = consultOf(rows);
  const p = inConsult && PATIENTS[inConsult.token];

  const callNext = () => {
    if (done) { setRows(QUEUE); setSaid('Queue reset. Priya Deshmukh is in consult.'); return; }
    const before = consultOf(rows), next = advance(rows), after = consultOf(next);
    setRows(next);
    setSaid([before && `${before.name} signed.`, after ? `${after.name} is now in consult.` : 'Queue is clear.'].filter(Boolean).join(' '));
  };

  usePointerParallax(sceneRef);

  return (
    <div ref={sceneRef} className="sb-scene" data-ready={ready || undefined}>
      <div className="sb-scene-back" aria-hidden={!inConsult || undefined}>
        <ScreenPanel title={inConsult ? `Consult · Token ${String(inConsult.token).padStart(2, '0')}` : 'Consult · waiting'} style={{ boxShadow: 'var(--shadow-md)' }}>
          <div style={{ margin: -16 }}>
            {inConsult ? (
              <PatientBanner key={inConsult.token} name={inConsult.name} age={inConsult.age} gender={p.gender} born={p.born} mrn={p.mrn} mobile={p.mobile} allergies={p.allergies} status="in-consult" />
            ) : (
              <div style={{ padding: '16px 20px', fontSize: 14, lineHeight: '20px', color: 'var(--color-text-muted)' }}>No patient in consult. Call the next token.</div>
            )}
          </div>
        </ScreenPanel>
      </div>
      <div ref={panelRef} className="sb-scene-front">
        <ScreenPanel>
          <OpdQueue dense rows={rows} />
          <div className="sb-scene-foot">
            <span className="sb-scene-hint">{done ? 'Everyone signed.' : 'Live demo with sample data.'}</span>
            <Button size="sm" variant="secondary" onClick={callNext}>{done ? 'Start again' : 'Call next'}</Button>
          </div>
        </ScreenPanel>
        <p className="sb-sr" role="status" aria-live="polite">{said}</p>
      </div>
    </div>
  );
}
