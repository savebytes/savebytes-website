'use client';
import React from 'react';
import DS from '../../components/ds';
import { ScreenPanel } from '../../components/sections';
import usePointerParallax from '../../components/motion/usePointerParallax';
import { QUEUE } from '../../content/queue';
import { HERO_VITALS, HERO_RX } from '../../content/health';

const { PatientBanner, VitalsStrip, PrescriptionTable, SignedRecord, OpdQueue, Button, Icon } = DS;

/**
 * Health hero: a working slice of the consult screen. "Sign visit" does what the product does: the record locks, the
 * prescription PDF becomes available, and the queue behind it moves on to the next patient.
 */
export default function HealthHeroScene() {
  const [signed, setSigned] = React.useState(false);
  const [said, setSaid] = React.useState('');
  const sceneRef = React.useRef(null);
  usePointerParallax(sceneRef);
  const queue = [{ ...QUEUE[1], status: signed ? 'signed' : 'in-consult' }, { ...QUEUE[2], status: signed ? 'in-consult' : 'vitals' }];
  const sign = () => { setSigned(true); setSaid('Priya Deshmukh signed. Aarav Joshi is next.'); };
  const reset = () => { setSigned(false); setSaid('Demo reset. Priya Deshmukh is in consult.'); };

  return (
    <div ref={sceneRef} className="sb-scene sb-scene-health" data-ready>
      <div className="sb-scene-back">
        <ScreenPanel title="OPD queue · Today" style={{ boxShadow: 'var(--shadow-md)' }}>
          <OpdQueue dense rows={queue} />
        </ScreenPanel>
      </div>
      <div className="sb-scene-front" data-signed={signed || undefined}>
        <ScreenPanel title="Consult · Token 07">
          <div style={{ margin: -16, marginBottom: 0 }}>
            <PatientBanner name="Priya Deshmukh" age="34 y" gender="Female" born="14 Aug 1991" mrn="0004-2817" mobile="98201 44718" allergies={[{ substance: 'Penicillin', reaction: 'rash' }]} status={signed ? 'signed' : 'in-consult'} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
            <VitalsStrip dense vitals={HERO_VITALS} />
            <div className="sb-locked" data-locked={signed || undefined}><PrescriptionTable dense showLegend={false} items={HERO_RX} /></div>
            <div className="sb-sign-slot">
              {signed
                ? <SignedRecord by="Dr Anil Kulkarni" at="12 Mar 2026, 10:41 am" />
                : <span className="sb-sign-hint"><Icon name="lock" size={16} />Signing locks this record.</span>}
            </div>
            <div className="sb-scene-foot">
              <span className="sb-scene-hint">{signed ? 'Signed records are read-only.' : 'Live demo with sample data.'}</span>
              <span className="sb-scene-actions">
                {signed ? (
                  <>
                    <Button size="sm" variant="ghost" onClick={reset}>Reset demo</Button>
                    <Button size="sm" variant="secondary" icon="file-text">Prescription PDF</Button>
                  </>
                ) : (
                  <Button size="sm" icon="pencil-line" onClick={sign}>Sign visit</Button>
                )}
              </span>
            </div>
          </div>
        </ScreenPanel>
        <p className="sb-sr" role="status" aria-live="polite">{said}</p>
      </div>
    </div>
  );
}
