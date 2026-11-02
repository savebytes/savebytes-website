function AboutPage({ go }) {
  const { Avatar } = window.SaveBytesDesignSystem_ad9a34;
  return (
    <>
      <section className="sb-section sb-hero">
        <div className="sb-container" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Overline>About</Overline>
          <h1 className="sb-display-xl" style={{ maxWidth: 900 }}>It started as a repository name.</h1>
        </div>
      </section>
      <Section style={{ paddingTop: 0 }}>
        <div style={{ maxWidth: 'var(--reading-max)', display: 'flex', flexDirection: 'column', gap: 24 }} className="sb-body-lg">
          <p>In my first year of engineering college I was naming a GitHub repository and went through a long list of bad ideas. SaveBytes stuck. As an engineer you learn quickly that good software is software that uses less: less memory, fewer steps, less waiting. I've tried to write code that way ever since.</p>
          <p>Years later the name was still with me: on my GitHub, on my portfolio at savebytes.in, in how I think about building things. So when I decided to start a company, it already had a name.</p>
          <p>We're starting with healthcare because it's where wasted time hurts the most. A doctor in a busy clinic sees dozens of patients a day, and most software makes that harder. We want to build the opposite. <span className="sb-placeholder">[Add a line about what you saw in clinics that made you start, a specific moment if you have one]</span></p>
        </div>
      </Section>
      <Section tone="subtle">
        <div className="sb-split">
          <SectionHeader overline="01 / Principles" title="Five rules we build by." />
          <Principles extra={['We count clicks per visit and try to remove one every release.', 'Isolation is enforced in the data layer, not by convention.', 'Leaving should be as easy as joining.', 'The audit trail is part of the product, not an add-on.', 'Drafts are visually distinct and never saved silently.']} />
        </div>
      </Section>
      <Section>
        <div className="sb-split">
          <SectionHeader overline="02 / How we build" title="For the technical reader." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 'var(--reading-max)' }} className="sb-body">
            <p><strong>Open standards.</strong> Clinical records are FHIR R4 resources, so any system that speaks FHIR can read them.</p>
            <p><strong>A proven foundation.</strong> Medplum handles the data model, access control and audit, the parts that must not be clever.</p>
            <p><strong>One codebase, configured per clinic.</strong> Forms, roles and branding are configuration. Nobody gets a fork.</p>
            <p><strong>Server-side permissions and audit.</strong> Every clinical action is logged. Export and deletion were designed in from day one.</p>
          </div>
        </div>
      </Section>
      <Section tone="subtle">
        <SectionHeader overline="03 / The team" title="We're small on purpose." intro="If you write to us, a founder reads it." />
        <div className="sb-grid-3" style={{ marginTop: 40 }}>
          {[['[Founder name]', '[Role, one line on background]'], ['[Co-founder / director name]', '[If applicable]']].map(([n, r]) => (
            <div key={n} style={{ display: 'flex', gap: 14, alignItems: 'center', background: '#fff', border: '1px solid var(--color-line)', borderRadius: 'var(--radius-md)', padding: 20 }}>
              <Avatar name="Founder" size={56} />
              <div><div style={{ fontWeight: 600 }} className="sb-placeholder-text">{n}</div><div style={{ fontSize: 14, color: 'var(--color-text-muted)' }}>{r}</div></div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand onCta={() => go('contact')} />
    </>
  );
}
window.AboutPage = AboutPage;
