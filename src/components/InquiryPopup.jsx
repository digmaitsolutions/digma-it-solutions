'use client';

import { useState, useEffect } from 'react';
import { X, Globe, Smartphone, TrendingUp, HelpCircle, ArrowRight, CheckCircle2, Loader2, Sparkles, MessageSquare } from 'lucide-react';

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1); // 1: Choose category, 2: Contact info, 3: Success
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // Email or Phone
    message: '',
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    const dismissed = sessionStorage.getItem('digma_popup_dismissed');
    if (!dismissed) {
      // Show popup after 1.8 seconds of visit
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      setIsDismissed(true);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setIsDismissed(true);
    sessionStorage.setItem('digma_popup_dismissed', 'true');
  };

  const handleReopen = () => {
    setIsOpen(true);
    if (step === 3) {
      setStep(1);
      setSelectedService('');
      setFormData({ name: '', contact: '', message: '' });
    }
  };

  const handleServiceSelect = (serviceId) => {
    setSelectedService(serviceId);
    setError('');
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setError('Please provide your name.');
      return;
    }

    if (!formData.contact.trim() || formData.contact.trim().length < 5) {
      setError('Please provide a valid work email or phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Determine if contact is email or phone
      const isEmail = formData.contact.includes('@');
      const payload = {
        name: formData.name.trim(),
        email: isEmail ? formData.contact.trim() : `phone_${formData.contact.trim()}@client.digma`,
        phone: !isEmail ? formData.contact.trim() : '',
        service: selectedService || 'web-development',
        budget: 'not-specified',
        message: `[Inquiry via Home Popup] Selected: ${selectedService.toUpperCase()}${formData.message ? ` — Client Note: ${formData.message.trim()}` : ''}`,
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStep(3);
        sessionStorage.setItem('digma_popup_dismissed', 'true');
      } else {
        setError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again or email digmaitsolutions@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    {
      id: 'web-development',
      title: 'Web Development',
      badge: 'High Performance',
      desc: 'Custom Websites, Next.js Web Apps, E-Commerce & Client Portals',
      icon: Globe,
      color: '#0284c7',
      bgColor: '#f0f9ff',
      borderColor: '#bae6fd',
    },
    {
      id: 'app-development',
      title: 'App Development',
      badge: 'iOS & Android',
      desc: 'Cross-Platform Mobile Apps, React Native, Flutter & Fluid UI',
      icon: Smartphone,
      color: '#0369a1',
      bgColor: '#f0f9ff',
      borderColor: '#bae6fd',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Support',
      badge: 'Growth & ROI',
      desc: 'Technical SEO, High-ROI Paid Ads (Google & Meta), CRO & Scaling',
      icon: TrendingUp,
      color: '#059669',
      bgColor: '#ecfdf5',
      borderColor: '#a7f3d0',
    },
    {
      id: 'consultation',
      title: 'Something Else / Need Advice',
      badge: 'Strategic Advice',
      desc: 'Speak directly with our senior technical architect about your project idea',
      icon: HelpCircle,
      color: '#7c3aed',
      bgColor: '#f5f3ff',
      borderColor: '#ddd6fe',
    },
  ];

  const currentServiceObj = serviceOptions.find(s => s.id === selectedService);

  return (
    <>
      {/* Floating Re-open Button (Visible if popup closed) */}
      {!isOpen && isDismissed && (
        <button
          onClick={handleReopen}
          id="reopen-inquiry-popup-btn"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 99,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: '#ffffff',
            color: 'var(--text-primary)',
            padding: '12px 20px',
            borderRadius: '9999px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 25px -3px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.05)',
            fontSize: '0.875rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 14px 28px -4px rgba(2, 132, 199, 0.2)';
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(15, 23, 42, 0.12)';
            e.currentTarget.style.borderColor = '#e2e8f0';
          }}
          aria-label="What are you looking for?"
        >
          <span style={{ display: 'flex', width: '22px', height: '22px', borderRadius: '50%', background: '#e0f2fe', color: 'var(--accent-primary)', alignItems: 'center', justifyContent: 'center' }}>
            <Sparkles size={13} />
          </span>
          <span>What are you looking for?</span>
        </button>
      )}

      {/* Main Modal Overlay */}
      {isOpen && (
        <div
          id="inquiry-popup-backdrop"
          onClick={handleClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1000,
            background: 'rgba(15, 23, 42, 0.55)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.25s ease',
          }}
        >
          {/* Modal Container */}
          <div
            id="inquiry-popup-card"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '560px',
              background: '#ffffff',
              borderRadius: '24px',
              padding: '36px',
              boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(15, 23, 42, 0.06)',
              border: '1px solid #e2e8f0',
              maxHeight: '90vh',
              overflowY: 'auto',
              animation: 'scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              id="close-inquiry-popup-btn"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#f1f5f9',
                color: '#64748b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.18s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e2e8f0';
                e.currentTarget.style.color = '#0f172a';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f1f5f9';
                e.currentTarget.style.color = '#64748b';
              }}
              aria-label="Close popup"
            >
              <X size={18} />
            </button>

            {/* STEP 1: Select What Exactly You Are Looking For */}
            {step === 1 && (
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 12px', borderRadius: '9999px', background: '#e0f2fe', color: 'var(--accent-primary)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
                  <Sparkles size={13} />
                  <span>Welcome to DigMa IT Solutions</span>
                </div>

                <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px', lineHeight: 1.25 }}>
                  What exactly are you looking for?
                </h2>
                
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginBottom: '24px' }}>
                  Select your primary focus area so we can provide the right technical solution and estimate:
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {serviceOptions.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleServiceSelect(opt.id)}
                        className="popup-service-option"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '16px',
                          padding: '16px 18px',
                          borderRadius: '14px',
                          background: '#ffffff',
                          border: '1.5px solid #e2e8f0',
                          cursor: 'pointer',
                          transition: 'all 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = opt.color;
                          e.currentTarget.style.boxShadow = '0 6px 18px -2px rgba(15, 23, 42, 0.08)';
                          e.currentTarget.style.transform = 'translateY(-1px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        <div
                          style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '12px',
                            background: opt.bgColor,
                            color: opt.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={22} />
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                              {opt.title}
                            </div>
                            <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '4px', background: opt.bgColor, color: opt.color, fontWeight: 600 }}>
                              {opt.badge}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                            {opt.desc}
                          </div>
                        </div>

                        <ArrowRight size={17} color="#94a3b8" />
                      </div>
                    );
                  })}
                </div>

                <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  🔒 No spam guaranteed. We respond with a tailored proposal in 24 hours.
                </div>
              </div>
            )}

            {/* STEP 2: Quick Contact Details */}
            {step === 2 && (
              <div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--accent-primary)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginBottom: '16px',
                    padding: 0,
                  }}
                >
                  &larr; Change Selection
                </button>

                {currentServiceObj && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: currentServiceObj.bgColor,
                      border: `1px solid ${currentServiceObj.borderColor}`,
                      marginBottom: '20px',
                    }}
                  >
                    <currentServiceObj.icon size={22} color={currentServiceObj.color} />
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: currentServiceObj.color }}>
                        Selected Focus
                      </div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {currentServiceObj.title}
                      </div>
                    </div>
                  </div>
                )}

                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Where should we send your proposal?
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '20px' }}>
                  Leave your contact details and our solutions lead will connect with a scope estimate.
                </p>

                {error && (
                  <div style={{ padding: '10px 14px', borderRadius: '8px', background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', fontSize: '0.8125rem', marginBottom: '16px' }}>
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Your Name <span style={{ color: 'var(--accent-primary)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="form-input"
                      style={{ width: '100%' }}
                    />
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Work Email or Phone Number <span style={{ color: 'var(--accent-primary)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="alex@company.com or +91 99001 00000"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      required
                      className="form-input"
                      style={{ width: '100%' }}
                    />
                  </div>

                  <div style={{ marginBottom: '22px' }}>
                    <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '6px' }}>
                      Brief Project Detail or Target Launch (Optional)
                    </label>
                    <textarea
                      placeholder="e.g. Need a high-performance web platform similar to BeeVibe with slot booking..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={3}
                      className="form-textarea"
                      style={{ width: '100%', fontSize: '0.875rem' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '0.9375rem', justifyContent: 'center' }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Get Free Technical Consultation</span>
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}

            {/* STEP 3: Success Confirmation */}
            {step === 3 && (
              <div style={{ textAlign: 'center', padding: '20px 10px' }}>
                <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', background: '#d1fae5', color: '#059669', marginBottom: '20px' }}>
                  <CheckCircle2 size={40} />
                </div>
                
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#065f46', marginBottom: '10px' }}>
                  Inquiry Received!
                </h3>
                
                <p style={{ color: '#047857', fontSize: '0.95rem', lineHeight: 1.6, maxWidth: '420px', margin: '0 auto 24px auto' }}>
                  Thank you, <strong>{formData.name}</strong>. Our senior solutions architect has received your interest in <strong>{currentServiceObj?.title || 'our services'}</strong> and will follow up within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={handleClose}
                  className="btn btn-primary"
                  style={{ padding: '12px 28px', fontSize: '0.9375rem' }}
                >
                  Continue Browsing DigMa
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
