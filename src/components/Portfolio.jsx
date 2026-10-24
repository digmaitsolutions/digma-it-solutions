'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const portfolioItems = [
  {
    id: 'beevibe',
    title: 'BeeVibe: Luxury Private Celebration Theatre & Live Booking Engine',
    category: 'Web Development & Digital Marketing',
    filterTag: 'web',
    filterTags: ['web', 'growth'],
    client: 'BeeVibe Bengaluru',
    description: 'High-converting Next.js platform and automated reservation system for Bengaluru\'s premier private cinema and celebration venue, featuring real-time slot selection, WhatsApp bot integration, and hyper-local SEO optimization.',
    metrics: ['100% Automated Live Booking', '4.9★ Customer Rating (128+ Reviews)', 'Top-Ranked Local SEO'],
    image: '/images/beevibe-showcase.jpg',
    tech: ['Next.js 14', 'React', 'Live Booking Engine', 'WhatsApp Automation', 'Local SEO & PPC'],
    link: 'https://www.beevibe.org/',
    isExternal: true
  },
  {
    id: 'gexcel',
    title: 'GExcel Technologies: EdTech Training Portal & Lead Generation Engine',
    category: 'Web Development & Digital Marketing Support',
    filterTag: 'growth',
    filterTags: ['web', 'growth'],
    client: 'GExcel Technologies Bengaluru',
    description: 'Industry-focused technical education portal and high-conversion student enrollment engine for Bengaluru\'s premier IT institute, integrating Google Ads conversion tracking, Meta Pixel telemetry, and dynamic course curriculums.',
    metrics: ['2,000+ Students Enrolled & Placed', '50+ Hiring Partner Integrations', 'High-Converting Ad Funnel'],
    image: '/images/gexcel-showcase.png',
    tech: ['Web Platform', 'Google Ads Conversion API', 'Meta Pixel', 'EmailJS Automation', 'Technical SEO'],
    link: 'https://gexcel.in/',
    isExternal: true
  }
];

export default function Portfolio({ isFullPage = false }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.filterTag === activeFilter || item.filterTags?.includes(activeFilter));

  return (
    <section className="section" id="portfolio" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot"></span>
            <span>Featured Case Studies</span>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Proven Impact Across <span className="gradient-text-blue">Global Industries</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            Explore how we help category leaders build resilient digital architectures and unlock exponential market share.
          </p>

          {/* Category Filter Pills */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px', marginTop: '32px' }}>
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Web Applications', value: 'web' },
              { label: 'Growth & ROI', value: 'growth' },
            ].map(f => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  transition: 'all 0.18s ease',
                  background: activeFilter === f.value ? 'var(--accent-primary)' : '#f1f5f9',
                  color: activeFilter === f.value ? '#ffffff' : 'var(--text-secondary)',
                  border: activeFilter === f.value ? '1px solid var(--accent-primary)' : '1px solid #e2e8f0',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                padding: '24px',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
              }}
            >
              {/* Visual Showcase Graphic */}
              <div
                style={{
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  marginBottom: '24px',
                  position: 'relative',
                  height: '240px',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                {item.isExternal && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(15, 23, 42, 0.85)',
                      color: '#ffffff',
                      backdropFilter: 'blur(8px)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
                    <span>Live Client Platform</span>
                  </div>
                )}
              </div>

              {/* Text & Metrics Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {item.client}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {item.description}
                </p>

                {/* Key Metrics Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  {item.metrics.map(m => (
                    <span
                      key={m}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.8125rem',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: '#ecfdf5',
                        color: '#059669',
                        border: '1px solid #a7f3d0',
                      }}
                    >
                      <CheckCircle2 size={13} />
                      {m}
                    </span>
                  ))}
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                  {item.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.75rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: '#f1f5f9',
                        color: '#475569',
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {item.isExternal ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.875rem',
                      padding: '8px 18px',
                    }}
                  >
                    <span>Visit Live Website (beevibe.org)</span>
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <Link
                    href={item.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--accent-primary)',
                    }}
                  >
                    <span>Explore Case Study</span>
                    <ArrowUpRight size={15} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {!isFullPage && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/portfolio" className="btn btn-secondary" style={{ padding: '12px 28px' }}>
              <span>View All Enterprise Case Studies</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
