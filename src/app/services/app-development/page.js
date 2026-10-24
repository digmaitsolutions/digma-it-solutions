import LeadForm from '@/components/LeadForm';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Mobile App Development Services | DigMa IT Solutions',
  description: 'iOS, Android, React Native, and Flutter mobile applications engineered for peak performance and user engagement by DigMa IT Solutions.',
};

export default function AppDevelopmentPage() {
  const features = [
    {
      title: 'Cross-Platform React Native & Flutter',
      desc: 'Ship 60FPS fluid mobile experiences across iOS and Android from a single battle-tested codebase, cutting time-to-market in half.'
    },
    {
      title: 'Native Swift & Kotlin Specialization',
      desc: 'Hardware-accelerated native development for high-compute applications requiring Bluetooth LE, ARKit, or intensive graphics rendering.'
    },
    {
      title: 'Offline-First Sync Engine',
      desc: 'Local database caching and automated background synchronization so your mobile app remains 100% usable in low-connectivity environments.'
    },
    {
      title: 'Biometric Security & Mobile Payments',
      desc: 'Integrated FaceID / Fingerprint authentication, Apple Pay, Google Pay, and end-to-end encrypted local storage.'
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
              <span>Mobile Engineering</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', lineHeight: 1.2, marginBottom: '20px', color: 'var(--text-primary)' }}>
              Flawless Mobile Apps Engineered for <span className="gradient-text-blue">iOS &amp; Android</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              We build delightful, high-retention mobile experiences that scale from your first 1,000 beta testers to millions of daily active users worldwide.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#quote" className="btn btn-primary">
                <span>Start Mobile Project</span>
                <ArrowRight size={18} />
              </a>
              <Link href="/portfolio" className="btn btn-secondary">
                <span>Explore Mobile Portfolio</span>
              </Link>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="/images/app-dev.svg"
                alt="Mobile App Development Showcase"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div style={{ marginBottom: '90px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Mobile Development Capabilities
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Engineered with modern reactive patterns and comprehensive automated testing.
            </p>
          </div>

          <div className="grid-2">
            {features.map((feat) => (
              <div key={feat.title} className="card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <CheckCircle2 size={22} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{feat.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, paddingLeft: '34px' }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form */}
        <div id="quote" style={{ maxWidth: '820px', margin: '0 auto 90px auto' }}>
          <LeadForm defaultService="app-development" />
        </div>

      </div>

      <CTA />
    </div>
  );
}
