import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Alexander Wright',
      role: 'Chief Technology Officer',
      company: 'Aurum Global Capital',
      quote: 'DigMa restructured our core payments infrastructure in record time. Their senior engineers delivered sub-20ms transaction latency, enabling us to handle massive peak volume without a glitch.',
      stars: 5,
      impact: '480% Volume Scale'
    },
    {
      name: 'Dr. Elena Rostova',
      role: 'VP of Product Innovation',
      company: 'Apex Health Systems',
      quote: 'The team engineered our telehealth mobile suite with impeccable attention to HIPAA compliance and UX design. We crossed 120,000 monthly active patients with glowing App Store reviews.',
      stars: 5,
      impact: '4.9★ App Rating'
    },
    {
      name: 'Marcus Vance',
      role: 'Head of E-Commerce Growth',
      company: 'Lumina Luxury Group',
      quote: 'Migrating to DigMa’s headless architecture cut our page load times down to 800ms globally. Checkout conversions jumped by 62% in the first quarter post-launch. Outstanding partner.',
      stars: 5,
      impact: '+62% Conversions'
    }
  ];

  return (
    <section className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px auto' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot"></span>
            <span>Executive Endorsements</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Trusted by Leaders <span className="gradient-text-blue">Who Demand Excellence</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Hear directly from the founders, CTOs, and product directors scaling global platforms with DigMa IT Solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
                borderRadius: '18px',
                background: '#ffffff',
              }}
            >
              <div>
                {/* Header Stars & Quote Icon */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                    ))}
                  </div>
                  <Quote size={22} color="#cbd5e1" />
                </div>

                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                  "{t.quote}"
                </p>
              </div>

              <div style={{ paddingTop: '18px', borderTop: '1px solid #f1f5f9' }}>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {t.role} • <span style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{t.company}</span>
                </div>

                <div style={{ marginTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.75rem', fontWeight: 600, color: '#059669', background: '#ecfdf5', padding: '3px 8px', borderRadius: '4px' }}>
                  <CheckCircle size={12} />
                  <span>Verified Outcome: {t.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
