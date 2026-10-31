'use client';
import React from 'react';
import DS from '../../components/ds';
import * as SEC from '../../components/sections';
import * as HC from '../../content/health';
const { SectionHeader, Section, Reveal } = SEC;
const { WORKSPACE } = HC;

export default function Workspace() {
  const { Icon } = DS;
  return (
    <ol className="sb-ws" aria-label="How one visit moves through the clinic">
      {WORKSPACE.map(([ic, t, d, st], i) => {
        const now = st === 'First release';
        return (
          <Reveal key={t} delay={i * 60}>
            <li className={'sb-ws-step' + (now ? '' : ' is-planned')}>
              <span className="sb-ws-icon"><Icon name={ic} size={20} /></span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, fontSize: 16, color: '#fff' }}>{t}</span>
                  <span className="sb-ws-status">{st}</span>
                </div>
                <span style={{ fontSize: 14, lineHeight: '22px', color: 'var(--navy-200)' }}>{d}</span>
                {i === 4 && (
                  <div className="sb-ws-note" role="img" aria-label="Example notification: CBC report ready for Priya Deshmukh, token 07, marked urgent">
                    <span style={{ color: 'var(--color-danger)', display: 'flex' }}><Icon name="circle-alert" size={16} /></span>
                    <span style={{ fontWeight: 500 }}>CBC ready</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>Priya Deshmukh · Token 07</span>
                    <span className="sb-ws-urgent">Urgent</span>
                  </div>
                )}
              </div>
            </li>
          </Reveal>
        );
      })}
    </ol>
  );
}


