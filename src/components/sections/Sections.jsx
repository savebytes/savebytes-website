'use client';
import React from 'react';
import DS from '../ds';
import { QUEUE } from '../../content/queue';
import { PRINCIPLES } from '../../content/principles';
import { ROADMAP } from '../../content/roadmap';

const { Logo, Button, Link, Icon, Card, Badge, OpdQueue, VisitStatusBadge } = DS;

function Overline({ children, inverse }) {
  return <div className="sb-overline" style={{ color: inverse ? 'var(--navy-300)' : 'var(--color-text-muted)' }}>{children}</div>;
}

function SectionMark({ children, label: text, inverse }) {
  const src = text != null ? text : children;
  const m = String(src).match(/^0?(\d+)\s*\/\s*(.+)$/);
  const num = m ? m[1] : null, label = m ? m[2] : src;
  return (
    <div className={'sb-mark' + (inverse ? ' sb-mark-inverse' : '')}>
      {num && <span className="sb-mark-num">{num}</span>}
      <span className="sb-mark-rule" aria-hidden="true"></span>
      <span>{label}</span>
    </div>
  );
}

function SectionHeader({ overline, title, intro, inverse, center }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 760, textAlign: center ? 'center' : 'left', alignItems: center ? 'center' : 'flex-start', margin: center ? '0 auto' : undefined }}>
      {overline && <SectionMark inverse={inverse} label={overline} />}
      <h2 className="sb-display" style={{ color: inverse ? '#fff' : 'var(--color-text)' }}>{title}</h2>
      {intro && <p className="sb-lead" style={{ color: inverse ? 'var(--navy-200)' : 'var(--color-text-secondary)' }}>{intro}</p>}
    </div>
  );
}

function Section({ tone = 'white', id, children, style, grid }) {
  const bg = tone === 'subtle' ? 'var(--color-surface-subtle)' : tone === 'inverse' ? 'var(--color-surface-inverse)' : tone === 'soft' ? 'var(--color-brand-soft)' : '#fff';
  return (
    <section id={id} data-tone={tone} className="sb-section" style={{ background: grid ? (tone === 'inverse' ? 'var(--dot-grid-inverse), ' : 'var(--dot-grid), ') + bg : bg, ...style }}>
      {tone === 'inverse' && <Spotlight inverse />}
      <div className="sb-container">{children}</div>
    </section>
  );
}

function Spotlight({ inverse }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia('(hover: none), (prefers-reduced-motion: reduce)').matches) return;
    const host = el.parentElement; let raf = 0, x = 0, y = 0;
    const paint = () => { raf = 0; el.style.setProperty('--mx', x + 'px'); el.style.setProperty('--my', y + 'px'); };
    const move = e => { const r = host.getBoundingClientRect(); x = e.clientX - r.left; y = e.clientY - r.top; el.style.opacity = 1; if (!raf) raf = requestAnimationFrame(paint); };
    const leave = () => { el.style.opacity = 0; };
    host.addEventListener('pointermove', move); host.addEventListener('pointerleave', leave);
    return () => { host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', leave); cancelAnimationFrame(raf); };
  }, []);
  return <div ref={ref} aria-hidden="true" className={'sb-spot' + (inverse ? ' sb-spot-inverse' : '')}></div>;
}

function HeroBackdrop({ tone = 'brand' }) {
  return (
    <div aria-hidden="true" className={'sb-backdrop' + (tone === 'health' ? ' sb-backdrop-health' : '')}>
      <div className="sb-bd-wash"></div>
      <div className="sb-bd-dots"></div>
      <svg className="sb-bd-cut" viewBox="0 0 600 800" preserveAspectRatio="none"><path pathLength="1" d="M470 -10C470 250 150 250 150 400C150 550 470 550 470 810" fill="none" stroke="var(--navy-300)" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path></svg>
      <Spotlight />
    </div>
  );
}

function Reveal({ children, delay = 0, style }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ opacity: on ? 1 : 0, transform: on ? 'none' : 'translateY(12px)', transition: 'opacity 320ms var(--ease-out) ' + delay + 'ms, transform 320ms var(--ease-out) ' + delay + 'ms', ...style }}>{children}</div>;
}

function ScreenPanel({ children, title = 'OPD queue · Today', style }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, height: 44, padding: '0 16px', borderBottom: '1px solid var(--color-line)', background: 'var(--color-surface-subtle)' }}>
        <Logo size={16} tone="health" />
        <span style={{ fontSize: 13, fontWeight: 500 }}>{title}</span>
        <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-text-muted)' }}>12 Mar 2026</span>
      </div>
      <div style={{ padding: 16 }}>{children}</div>
    </div>
  );
}


function QueuePanel({ style }) {
  return <ScreenPanel style={style}><OpdQueue dense rows={QUEUE} /></ScreenPanel>;
}


function Principles({ extra }) {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column' }}>
      {PRINCIPLES.map(([t, d], i) => (
        <Reveal key={t} delay={i * 60}>
          <li className="sb-principle">
            <span className="sb-principle-num">{i + 1}</span>
            <div>
              <div style={{ fontSize: 18, lineHeight: '28px', fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 16, lineHeight: '26px', color: 'var(--color-text-secondary)', marginTop: 2 }}>{d}{extra && extra[i] ? ' ' + extra[i] : ''}</div>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}


function Timeline() {
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative' }}>
      <span aria-hidden="true" style={{ position: 'absolute', left: 11, top: 12, bottom: 12, width: 1, background: 'var(--color-line)' }} />
      {ROADMAP.map(([t, d, s], i) => (
        <li key={t} style={{ position: 'relative', display: 'grid', gridTemplateColumns: '24px 1fr', gap: 20, padding: '0 0 28px' }}>
          <span style={{ background: '#fff', padding: '2px 0', display: 'flex', justifyContent: 'center', color: 'var(--navy-300)' }}>
            {i === 0 ? <Logo size={20} /> : <Logo size={20} tone="current" />}
          </span>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontSize: 18, lineHeight: '26px', fontWeight: 600 }}>{t}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: i === 0 ? 'var(--color-brand)' : 'var(--color-text-muted)' }}>{s}</span>
            </div>
            <div style={{ fontSize: 16, lineHeight: '26px', color: 'var(--color-text-secondary)' }}>{d}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CtaBand({ title = 'Running a clinic in Navi Mumbai or Mumbai?', body, onCta }) {
  return (
    <Section tone="soft">
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}>
        <div style={{ maxWidth: 680, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 className="sb-h1">{title}</h2>
          <p className="sb-body" style={{ color: 'var(--color-text-secondary)' }}>{body || "We're looking for a few clinics to use SaveBytes Health first and tell us what's wrong with it. You'll get it early, and a direct line to the people building it."}</p>
        </div>
        <Button size="lg" onClick={onCta}>Join early access</Button>
      </div>
    </Section>
  );
}

function FounderPhoto({ id, size = 56 }) {
  return <img src="/img/founder.png" alt="Ankit Singh, founder of SaveBytes" width={size} height={size} style={{ width: size, height: size, flex: 'none', display: 'block', borderRadius: '50%', objectFit: 'cover', objectPosition: '40% 30%' }} />;
}

export {SectionMark, Spotlight, HeroBackdrop, FounderPhoto, Overline, SectionHeader, Section, Reveal, ScreenPanel, QueuePanel, QUEUE, Principles, Timeline, CtaBand };
