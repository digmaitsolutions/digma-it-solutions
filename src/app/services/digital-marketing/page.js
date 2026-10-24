import LeadForm from '@/components/LeadForm';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing Support & Growth Services | DigMa IT Solutions',
  description: 'Technical SEO, high-ROI paid media advertising, and continuous digital marketing support engineered by DigMa IT Solutions.',
};

export default function DigitalMarketingPage() {
  const pillars = [
    {
      title: 'Technical & Programmatic SEO',
      desc: 'Deep code-level crawlability audits, Core Web Vitals optimization, and programmatic landing page generation for high-intent search terms.'
    },
    {
      title: 'High-ROI Paid Media (PPC)',
      desc: 'Precision targeted Google Search, Meta Ads, and LinkedIn B2B campaigns managed with algorithmic bidding to drive qualified pipeline.'
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      desc: 'Scientific A/B split testing on checkout flows, pricing tiers, and landing pages to extract maximum revenue from existing visitor volume.'
    },
    {
      title: 'Lifecycle & Retention Automation',
      desc: 'Behavioral email marketing sequences, onboarding telemetry triggers, and churn mitigation sequences built on modern CRM platforms.'
    }
  ];

  return (
    <div style={{ paddingTop: '130px' }}>
      <div className="container">
        
        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center', marginBottom: '80px' }}>
          <div>
            <div className="badge" style={{ marginBottom: '16px' }}>
              <span className="badge-dot"></span>
              <span>Digital Marketing Support</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', lineHeight: 1.2, marginBottom: '20px', color: 'var(--text-primary)' }}>
              Data-Driven Growth Engines That Multiply <span className="gradient-text-blue">Customer Acquisition</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              We merge deep technical architecture with conversion science to turn your digital presence into a predictable revenue generation flywheel.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#quote" className="btn btn-primary">
                <span>Request Growth Audit</span>
                <ArrowRight size={18} />
              </a>
              <Link href="/portfolio" className="btn btn-secondary">
                <span>View Growth Results</span>
              </Link>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="/images/digital-marketing.svg"
                alt="Digital Marketing Analytics Dashboard"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div style={{ marginBottom: '90px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Our Growth Methodology
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Measurable, compounding performance tailored specifically for SaaS, tech, and e-commerce leaders.
            </p>
          </div>

          <div className="grid-2">
            {pillars.map((p) => (
              <div key={p.title} className="card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <CheckCircle2 size={22} color="#059669" />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{p.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, paddingLeft: '34px' }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <div id="quote" style={{ maxWidth: '820px', margin: '0 auto 90px auto' }}>
          <LeadForm defaultService="digital-marketing" />
        </div>

      </div>

      <CTA />
    </div>
  );
}
