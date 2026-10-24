import Link from 'next/link';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        paddingTop: '160px',
        paddingBottom: '90px',
        background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        
        {/* Main Hero Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '24px' }}>
            <span className="badge-dot"></span>
            <span>Web Development • App Development • Digital Marketing Support</span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              marginBottom: '24px',
              lineHeight: 1.15,
              color: 'var(--text-primary)',
            }}
          >
            Engineering Scalable Digital Realities for{' '}
            <span className="gradient-text-blue">Modern Enterprises.</span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '700px',
              margin: '0 auto 36px auto',
            }}
          >
            DigMa IT Solutions specializes in custom web development, high-performance mobile app development, and ROI-driven digital marketing support for ambitious brands.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '36px' }}>
            <Link href="/contact" className="btn btn-primary" style={{ padding: '14px 30px', fontSize: '1rem' }} id="hero-cta-primary">
              <span>Schedule Discovery Call</span>
              <ArrowRight size={18} />
            </Link>
            
            <Link href="/portfolio" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }} id="hero-cta-secondary">
              <span>View Case Studies</span>
              <ArrowUpRight size={17} color="var(--text-muted)" />
            </Link>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', justifyContent: 'center', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--accent-primary)" /> Senior Staff Architects
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--accent-primary)" /> 2-Week Agile Sprints
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} color="var(--accent-primary)" /> 100% Guaranteed Delivery
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
