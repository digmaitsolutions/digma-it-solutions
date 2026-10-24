import { ShieldCheck, Rocket, Users, Target, Lock, Headphones } from 'lucide-react';

export default function WhyChooseUs() {
  const points = [
    {
      icon: Users,
      title: 'Top 1% Senior Talent',
      description: 'Your project is architected and built directly by seasoned staff engineers and technical leads. No junior trial-and-error.',
      color: '#0284c7',
      bgColor: '#f0f9ff'
    },
    {
      icon: Rocket,
      title: 'Rapid Agile Execution',
      description: 'Transparent two-week sprint cycles with live staging environments, continuous integration, and weekly milestone demos.',
      color: '#0369a1',
      bgColor: '#f0f9ff'
    },
    {
      icon: Lock,
      title: 'Zero-Trust Security',
      description: 'Baked-in cybersecurity protocols, encrypted data transit, and compliance frameworks aligned with SOC2, ISO27001, and GDPR.',
      color: '#4f46e5',
      bgColor: '#eef2ff'
    },
    {
      icon: Target,
      title: 'ROI-Driven Architecture',
      description: 'We align technical decisions directly with commercial KPIs—maximizing conversion, lowering cloud compute costs, and driving retention.',
      color: '#059669',
      bgColor: '#ecfdf5'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Code Quality',
      description: 'Rigorous automated unit, integration, and E2E testing pipelines with clean, modular, and fully documented codebases.',
      color: '#d97706',
      bgColor: '#fffbeb'
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Hypercare',
      description: 'Proactive server telemetry, real-time error tracking, and SLA-backed uptime monitoring around the clock post-launch.',
      color: '#7c3aed',
      bgColor: '#f5f3ff'
    }
  ];

  return (
    <section className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px auto' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot"></span>
            <span>Why DigMa IT Solutions</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            The Strategic Partner Behind <span className="gradient-text-blue">High-Growth Tech Leaders</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            We combine silicon-valley engineering standards with boutique agility to deliver resilient digital platforms on schedule.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid-3">
          {points.map((pt) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '18px',
                  padding: '28px',
                  borderRadius: '16px',
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: pt.bgColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={22} color={pt.color} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    {pt.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
