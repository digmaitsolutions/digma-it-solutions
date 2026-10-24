import CTA from '@/components/CTA';
import Link from 'next/link';
import { Target, ShieldCheck, HeartHandshake, Zap, Award } from 'lucide-react';

export const metadata = {
  title: 'About DigMa IT Solutions | Company Vision & Senior Engineering',
  description: 'Learn about DigMa IT Solutions, our mission, senior engineering philosophy, and track record in delivering mission-critical digital systems.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Architectural Excellence',
      desc: 'We refuse sloppy compromises. Every database schema, frontend component, and API endpoint is built for speed, resilience, and longevity.',
      color: '#0284c7',
      bgColor: '#f0f9ff'
    },
    {
      icon: HeartHandshake,
      title: 'Radical Transparency',
      desc: 'No black-box development. Direct Slack access to your technical leads, weekly milestone demos, and open source repository sync.',
      color: '#059669',
      bgColor: '#ecfdf5'
    },
    {
      icon: Zap,
      title: 'Commercial Velocity',
      desc: 'Speed matters. We streamline bureaucracy and ship high-impact features every two-week sprint to keep you ahead of competitors.',
      color: '#d97706',
      bgColor: '#fffbeb'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security by Default',
      desc: 'Security isn’t an afterthought. Zero-trust architecture, automated vulnerability scanning, and strict compliance are built-in from day one.',
      color: '#4f46e5',
      bgColor: '#eef2ff'
    }
  ];

  return (
    <div style={{ paddingTop: '130px' }}>
      <div className="container">
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 72px auto' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot"></span>
            <span>About DigMa IT Solutions</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', marginBottom: '20px', lineHeight: 1.2, color: 'var(--text-primary)' }}>
            We Build The Technologies That{' '}
            <span className="gradient-text-blue">Power Industry Leaders</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.7 }}>
            Founded on the conviction that engineering quality directly determines business outcomes, 
            DigMa IT Solutions operates as a trusted strategic software partner for high-growth enterprises worldwide.
          </p>
        </div>

        {/* Core Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginBottom: '80px',
          }}
        >
          <div className="card" style={{ textAlign: 'center', padding: '36px', background: '#ffffff' }}>
            <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)' }}>150+</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.9375rem' }}>Global Projects Shipped</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '36px', background: '#ffffff' }}>
            <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#059669' }}>99.8%</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.9375rem' }}>Client Retention Rate</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '36px', background: '#ffffff' }}>
            <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4f46e5' }}>40+</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.9375rem' }}>Senior Staff Engineers</div>
          </div>
          <div className="card" style={{ textAlign: 'center', padding: '36px', background: '#ffffff' }}>
            <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#d97706' }}>7+</div>
            <div style={{ color: 'var(--text-secondary)', marginTop: '8px', fontSize: '0.9375rem' }}>Years of Engineering Focus</div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', marginBottom: '88px' }}>
          <div className="card" style={{ padding: '36px', background: '#ffffff' }}>
            <div style={{ color: 'var(--accent-primary)', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              Our Mission
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
              Empowering Visionaries With Resilient Code
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We eliminate technical debt and architecture bottlenecks. Our mission is to accelerate our partners' 
              commercial trajectory by delivering software that performs reliably under extreme scale, 
              delights end users, and generates measurable ROI.
            </p>
          </div>

          <div className="card" style={{ padding: '36px', background: '#ffffff' }}>
            <div style={{ color: '#059669', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
              Our Engineering Philosophy
            </div>
            <h2 style={{ fontSize: '1.6rem', marginBottom: '14px', color: 'var(--text-primary)' }}>
              Elite Senior Pods Over Fragmented Outsourcing
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              We believe a focused pod of top-percentile senior developers out-ships large, fragmented outsourced teams 
              by a factor of ten. By keeping teams concentrated and aligned, we maintain absolute architectural coherence.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div style={{ marginBottom: '88px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Principles That Guide Every Commit
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              These foundational tenets define how our engineers think, build, and partner.
            </p>
          </div>

          <div className="grid-2">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card" style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', background: '#ffffff' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '12px', background: v.bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={22} color={v.color} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{v.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <CTA />
    </div>
  );
}
