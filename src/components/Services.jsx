import Link from 'next/link';
import { Globe, Smartphone, TrendingUp, ArrowUpRight } from 'lucide-react';

export const servicesData = [
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Modern Web Platforms',
    description: 'Custom high-performance web applications built on Next.js and React, engineered for lightning speed, clean aesthetics, and seamless conversion.',
    icon: Globe,
    color: '#0284c7',
    bgColor: '#f0f9ff',
    href: '/services/web-development',
    tags: ['Next.js 14', 'React', 'Node.js', 'TypeScript', 'APIs']
  },
  {
    id: 'app-development',
    title: 'App Development',
    category: 'iOS & Android Mobile',
    description: 'Cross-platform and native mobile apps engineered for fluid 60FPS user interactions, intuitive UX, and reliable offline-first architecture.',
    icon: Smartphone,
    color: '#0369a1',
    bgColor: '#f0f9ff',
    href: '/services/app-development',
    tags: ['React Native', 'Flutter', 'iOS & Android', 'Firebase', 'State Sync']
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Support',
    category: 'Performance & Growth',
    description: 'Data-driven digital marketing support including technical SEO, high-ROI paid advertising, conversion rate optimization, and brand scaling.',
    icon: TrendingUp,
    color: '#059669',
    bgColor: '#ecfdf5',
    href: '/services/digital-marketing',
    tags: ['Technical SEO', 'Performance PPC', 'Conversion CRO', 'Growth Analytics']
  }
];

export default function Services() {
  return (
    <section className="section" id="services" style={{ background: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot"></span>
            <span>Core Service Focus</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Engineered For Speed, Scale &amp; <span className="gradient-text-blue">Business Growth</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem' }}>
            We specialize in engineering modern web applications, fluid mobile apps, and delivering continuous digital marketing support to scale your brand.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid-3">
          {servicesData.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: '18px',
                  background: '#ffffff',
                }}
              >
                <div>
                  {/* Clean Icon Badge */}
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      background: svc.bgColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}
                  >
                    <Icon size={24} color={svc.color} />
                  </div>

                  <span style={{ fontSize: '0.75rem', color: svc.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    {svc.category}
                  </span>
                  
                  <h3 style={{ fontSize: '1.25rem', marginTop: '6px', marginBottom: '12px', color: 'var(--text-primary)' }}>
                    {svc.title}
                  </h3>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {svc.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {svc.tags.map(t => (
                      <span
                        key={t}
                        style={{
                          fontSize: '0.75rem',
                          padding: '4px 9px',
                          borderRadius: '6px',
                          background: '#f1f5f9',
                          color: '#334155',
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Service Link */}
                  <Link
                    href={svc.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                      transition: 'gap 0.2s',
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
