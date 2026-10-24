import Link from 'next/link';
import { ArrowRight, PhoneCall, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section" style={{ background: '#ffffff', position: 'relative' }}>
      <div className="container">
        <div
          style={{
            position: 'relative',
            borderRadius: '24px',
            padding: '64px 40px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '0 auto',
            color: '#ffffff',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#38bdf8',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={14} />
            <span>Ready For Rapid Execution?</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '18px',
              color: '#ffffff',
            }}
          >
            Let's Engineer Your Next High-Performance Platform
          </h2>

          <p
            style={{
              color: '#cbd5e1',
              fontSize: '1.1rem',
              maxWidth: '640px',
              margin: '0 auto 36px auto',
              lineHeight: 1.7,
            }}
          >
            Whether you need to architect a new cloud solution from scratch or modernize existing systems, 
            our senior engineering team is ready to deploy.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link
              href="/contact"
              className="btn btn-primary"
              style={{
                padding: '14px 32px',
                fontSize: '1rem',
                background: '#0284c7',
                borderColor: '#0284c7',
              }}
            >
              <span>Book Discovery Consultation</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+18005553446"
              className="btn btn-secondary"
              style={{
                padding: '14px 28px',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <PhoneCall size={17} color="#38bdf8" />
              <span>+1 (800) 555-DIGMA</span>
            </a>
          </div>

          <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', fontSize: '0.8125rem', color: '#94a3b8' }}>
            <span>✓ No-Obligation Architecture Audit</span>
            <span>✓ Detailed Technical Proposal</span>
            <span>✓ Strict NDA Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}
