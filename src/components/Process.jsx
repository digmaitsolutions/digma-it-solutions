export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Strategic Roadmap',
      subtitle: 'Week 1',
      description: 'We audit your technical requirements, analyze business objectives, map user journeys, and draft complete architectural specifications.',
      badge: 'Architecture Spec'
    },
    {
      number: '02',
      title: 'UI/UX Design & Prototyping',
      subtitle: 'Week 2 - 3',
      description: 'Our product designers create intuitive Figma design systems, responsive wireframes, and interactive clickable prototypes for team signoff.',
      badge: 'Design System'
    },
    {
      number: '03',
      title: 'Agile Engineering & QA',
      subtitle: 'Week 4 - 8',
      description: 'Full-stack development in rapid 2-week sprints with automated test suites, staging environment builds, and transparent code reviews.',
      badge: 'Sprint Releases'
    },
    {
      number: '04',
      title: 'Global Launch & Continuous Scale',
      subtitle: 'Production & Beyond',
      description: 'Zero-downtime deployment to multi-region cloud infrastructure, SEO indexing, real-time APM telemetry, and 24/7 dedicated support.',
      badge: 'Production Scale'
    }
  ];

  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 64px auto' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot"></span>
            <span>Execution Methodology</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            How We Turn Vision into <span className="gradient-text-blue">Flawless Software</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            A proven, predictable development lifecycle designed to minimize technical risk and accelerate time-to-market.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="card"
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px 24px',
                borderRadius: '16px',
                background: '#ffffff',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span
                    className="font-display"
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      background: '#f0f9ff',
                      color: 'var(--accent-primary)',
                      border: '1px solid #bae6fd',
                      fontWeight: 600,
                    }}
                  >
                    {step.subtitle}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {step.description}
                </p>
              </div>

              <div style={{ marginTop: '24px', paddingTop: '16px', borderTop: '1px solid #f1f5f9' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Deliverable: <strong style={{ color: 'var(--text-primary)' }}>{step.badge}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
