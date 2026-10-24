import LeadForm from '@/components/LeadForm';
import CTA from '@/components/CTA';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Enterprise Web Development Services | DigMa IT Solutions',
  description: 'Scalable full-stack web applications, Next.js architecture, React SaaS platforms, and high-performance cloud backends engineered by DigMa IT Solutions.',
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      title: 'Next.js & React Enterprise Platforms',
      desc: 'Server-side rendering (SSR), dynamic edge caching, and incremental static regeneration (ISR) for sub-second global response times.'
    },
    {
      title: 'Multi-Tenant SaaS Systems',
      desc: 'Modular multi-tenant architectures with role-based access control (RBAC), billing integrations (Stripe, Chargebee), and audit logging.'
    },
    {
      title: 'Headless E-Commerce & CMS',
      desc: 'Blazingly fast storefronts integrated with Shopify Plus, Saleor, Sanity, and Contentful for unconstrained brand storytelling.'
    },
    {
      title: 'High-Performance APIs & Microservices',
      desc: 'Scalable REST and GraphQL APIs built with Node.js, Go, or Python backed by distributed PostgreSQL and Redis caching.'
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
              <span>Enterprise Web Development</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)', lineHeight: 1.2, marginBottom: '20px', color: 'var(--text-primary)' }}>
              High-Velocity Web Applications Built on <span className="gradient-text-blue">Next.js &amp; Cloud Stacks</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '32px' }}>
              We design and engineer enterprise-grade web applications with pixel-perfect responsive interfaces, 
              ironclad security, and sub-second load times that maximize conversion.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#quote" className="btn btn-primary">
                <span>Start Web Development Project</span>
                <ArrowRight size={18} />
              </a>
              <Link href="/portfolio" className="btn btn-secondary">
                <span>View Web Projects</span>
              </Link>
            </div>
          </div>

          <div>
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="/images/web-dev.svg"
                alt="Web Development Architecture"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div style={{ marginBottom: '90px' }}>
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 48px auto' }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Architectural Capabilities
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Every line of code is structured for modularity, automated test coverage, and global CDN delivery.
            </p>
          </div>

          <div className="grid-2">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card" style={{ padding: '32px', background: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <CheckCircle2 size={22} color="var(--accent-primary)" />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>{cap.title}</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, paddingLeft: '34px' }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Capture Form Section */}
        <div id="quote" style={{ maxWidth: '820px', margin: '0 auto 90px auto' }}>
          <LeadForm defaultService="web-development" />
        </div>

      </div>

      <CTA />
    </div>
  );
}
