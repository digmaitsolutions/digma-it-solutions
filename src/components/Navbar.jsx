'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      hasDropdown: true,
      subItems: [
        { label: 'All Services Overview', href: '/services', desc: 'Web, mobile & growth solutions' },
        { label: 'Web Development', href: '/services/web-development', desc: 'Next.js, React & modern web platforms' },
        { label: 'App Development', href: '/services/app-development', desc: 'iOS, Android & cross-platform apps' },
        { label: 'Digital Marketing Support', href: '/services/digital-marketing', desc: 'SEO, performance marketing & ROI growth' },
      ]
    },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.25s ease',
        background: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid transparent',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.04)' : 'none',
        padding: isScrolled ? '14px 0' : '20px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo.png"
            alt="DigMa IT Solutions"
            className="navbar-brand-logo"
            style={{
              height: '48px',
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
            }}
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((item) => {
            const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith('/services'));

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                  >
                    {item.label}
                    <ChevronDown size={15} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
                  </Link>

                  {/* Dropdown Menu */}
                  {servicesDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '-20px',
                        width: '290px',
                        padding: '10px',
                        marginTop: '10px',
                        background: '#ffffff',
                        borderRadius: '16px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.12)',
                      }}
                    >
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          style={{
                            display: 'block',
                            padding: '10px 14px',
                            borderRadius: '10px',
                            transition: 'background 0.15s',
                            color: pathname === sub.href ? 'var(--accent-primary)' : 'var(--text-primary)',
                          }}
                          className="nav-dropdown-item"
                        >
                          <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{sub.label}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{sub.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  transition: 'color 0.2s',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ display: 'none', padding: '10px 22px', fontSize: '0.875rem' }}
            id="nav-cta-btn"
          >
            <span>Get a Proposal</span>
            <ArrowRight size={15} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#f1f5f9',
              color: 'var(--text-primary)',
              border: '1px solid #e2e8f0',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 20px 30px rgba(15, 23, 42, 0.08)',
          }}
        >
          {navLinks.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: pathname === item.href ? 'var(--accent-primary)' : 'var(--text-primary)',
                  padding: '8px 0',
                }}
              >
                {item.label}
                <ArrowRight size={16} color="#94a3b8" />
              </Link>
              {item.hasDropdown && (
                <div style={{ paddingLeft: '14px', borderLeft: '2px solid #e2e8f0', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.subItems.slice(1).map(sub => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      style={{ fontSize: '0.875rem', color: 'var(--text-muted)', padding: '4px 0' }}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link
            href="/contact"
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '10px', justifyContent: 'center' }}
          >
            <span>Request Free Discovery Call</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
