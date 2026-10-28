import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#f8fafc',
        borderTop: '1px solid #e2e8f0',
        paddingTop: '72px',
        paddingBottom: '36px',
        position: 'relative',
      }}
    >
      <div className="container">
        
        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '48px',
            marginBottom: '56px',
          }}
        >
          {/* Brand & Mission Column */}
          <div style={{ maxWidth: '320px' }}>
            <Link href="/" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <img
                src="/logo.png"
                alt="DigMa IT Solutions"
                style={{ height: '48px', width: 'auto', display: 'block', objectFit: 'contain' }}
              />
            </Link>
            
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Engineering high-performance software architectures, native mobile ecosystems, and high-velocity digital marketing systems for modern enterprises.
            </p>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
                aria-label="Twitter"
              >
                <Twitter size={17} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
                }}
                aria-label="GitHub"
              >
                <Github size={17} />
              </a>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/services/web-development" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Digital Marketing Support
                </Link>
              </li>
              <li>
                <Link href="/services" style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 600 }}>
                  View All Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  About DigMa
                </Link>
              </li>
              <li>
                <Link href="/portfolio" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                  Privacy &amp; Security Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '18px' }}>
              Direct Inquiries
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--accent-primary)" />
                <a href="mailto:digmaitsolutions@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  digmaitsolutions@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="var(--accent-primary)" />
                <a href="tel:+919972082231" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  +91 9972082231
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} color="var(--accent-primary)" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ lineHeight: 1.5 }}>
                  1340, 2nd Floor, 41st Cross Road, 4th Gate,<br />
                  Opposite to Jain University, Jayanagara 9th Block,<br />
                  Jayanagar, Bengaluru, Karnataka 560041
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div
          style={{
            paddingTop: '28px',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.8125rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {currentYear} DigMa IT Solutions Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link>
            <Link href="/privacy-policy" style={{ color: 'var(--text-secondary)' }}>Terms of Service</Link>
            <Link href="/contact" style={{ color: 'var(--text-secondary)' }}>Security Standards</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
