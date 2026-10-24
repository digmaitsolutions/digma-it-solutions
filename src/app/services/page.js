import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { Layers, ShieldCheck, Zap } from 'lucide-react';

export const metadata = {
  title: 'Web, App & Digital Marketing Services | DigMa IT Solutions',
  description: 'DigMa IT Solutions focuses on three core pillars: High-Performance Web Development, Native & Cross-Platform App Development, and ROI-Driven Digital Marketing Support.',
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '130px' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="badge" style={{ marginBottom: '16px' }}>
          <span className="badge-dot"></span>
          <span>Core Pillars</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: '20px', color: 'var(--text-primary)' }}>
          Web, Mobile &amp; Digital Marketing{' '}
          <span className="gradient-text-blue">Solutions</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '720px', margin: '0 auto' }}>
          We focus on what moves the needle most: high-speed web platforms, fluid iOS and Android mobile apps, and continuous digital marketing support to accelerate your revenue.
        </p>

        {/* Engagement Models */}
        <div
          style={{
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            textAlign: 'left',
          }}
        >
          <div className="card" style={{ background: '#ffffff' }}>
            <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: '#f0f9ff', color: 'var(--accent-primary)', marginBottom: '16px' }}>
              <Layers size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Dedicated Engineering Pods</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Full cross-functional teams (Product Architect, Tech Lead, Senior Developers, QA Engineer) dedicated exclusively to your roadmap.
            </p>
          </div>

          <div className="card" style={{ background: '#ffffff' }}>
            <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: '#ecfdf5', color: '#059669', marginBottom: '16px' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Fixed-Scope Turnkey MVPs</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Defined budget, rigorous deliverables, and guaranteed launch dates designed for rapid market testing and seed fundraising.
            </p>
          </div>

          <div className="card" style={{ background: '#ffffff' }}>
            <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '12px', background: '#eef2ff', color: '#4f46e5', marginBottom: '16px' }}>
              <Zap size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Staff Augmentation</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Inject top-tier senior React, Next.js, Cloud, or mobile engineers directly into your current sprint cycles within 48 hours.
            </p>
          </div>
        </div>
      </div>

      <Services />
      <CTA />
    </div>
  );
}
