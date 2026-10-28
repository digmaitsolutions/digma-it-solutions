'use client';

import { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { validateLeadForm } from '@/lib/validation';

export default function LeadForm({ defaultService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService || '',
    timeline: '',
    budget: 'not-specified',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [submittedLeadId, setSubmittedLeadId] = useState('');

  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    setFeedbackMessage('');

    const validation = validateLeadForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFeedbackMessage(result.message);
        setSubmittedLeadId(result.leadId);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: defaultService || '',
          timeline: '',
          budget: 'not-specified',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setFeedbackMessage(result.message || 'Submission failed. Please check form inputs.');
        if (result.errors) {
          setErrors(result.errors);
        }
      }
    } catch (err) {
      console.error('Lead submission request failed:', err);
      setSubmitStatus('error');
      setFeedbackMessage('A network error occurred. Please try again or reach us at digmaitsolutions@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="lead-form-container"
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '20px',
        padding: '40px',
        boxShadow: '0 10px 30px -5px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(15, 23, 42, 0.03)',
        position: 'relative',
      }}
    >
      <div style={{ marginBottom: '28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-primary)', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          <Sparkles size={15} />
          <span>Start A Conversation</span>
        </div>
        <h3 style={{ fontSize: '1.75rem', marginTop: '6px', marginBottom: '8px', color: 'var(--text-primary)' }}>
          Schedule a Free Technical Consultation
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>
          Tell us about your project requirements. Our solutions architect will respond within 24 hours with an initial evaluation.
        </p>
      </div>

      {submitStatus === 'success' ? (
        <div
          style={{
            padding: '32px',
            borderRadius: '16px',
            background: '#ecfdf5',
            border: '1px solid #a7f3d0',
            textAlign: 'center',
          }}
        >
          <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', background: '#d1fae5', marginBottom: '16px' }}>
            <CheckCircle2 size={32} color="#059669" />
          </div>
          <h4 style={{ fontSize: '1.3rem', color: '#065f46', marginBottom: '8px' }}>Inquiry Received!</h4>
          <p style={{ color: '#047857', fontSize: '0.9375rem', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 16px auto' }}>
            {feedbackMessage}
          </p>
          <div style={{ fontSize: '0.8125rem', color: '#065f46', marginBottom: '20px' }}>
            Reference Lead ID: <strong style={{ color: '#0284c7' }}>{submittedLeadId}</strong>
          </div>
          <button
            onClick={() => setSubmitStatus(null)}
            className="btn btn-secondary"
            style={{ fontSize: '0.875rem', padding: '8px 20px' }}
          >
            Submit Another Project Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {submitStatus === 'error' && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 16px',
                borderRadius: '10px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                color: '#b91c1c',
                fontSize: '0.875rem',
                marginBottom: '20px',
              }}
            >
              <AlertCircle size={18} style={{ flexShrink: 0 }} />
              <span>{feedbackMessage}</span>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="lead-name" className="form-label">
                Full Name <span style={{ color: 'var(--accent-primary)' }}>*</span>
              </label>
              <input
                id="lead-name"
                name="name"
                type="text"
                placeholder="Alex Morgan"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="lead-email" className="form-label">
                Work Email <span style={{ color: 'var(--accent-primary)' }}>*</span>
              </label>
              <input
                id="lead-email"
                name="email"
                type="email"
                placeholder="alex@company.com"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {/* Phone */}
            <div className="form-group">
              <label htmlFor="lead-phone" className="form-label">
                Phone Number (Optional)
              </label>
              <input
                id="lead-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
              {errors.phone && <span className="form-error">{errors.phone}</span>}
            </div>

            {/* Company */}
            <div className="form-group">
              <label htmlFor="lead-company" className="form-label">
                Company Name (Optional)
              </label>
              <input
                id="lead-company"
                name="company"
                type="text"
                placeholder="Enterprise Corp"
                value={formData.company}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {/* Service */}
            <div className="form-group">
              <label htmlFor="lead-service" className="form-label">
                Service Required <span style={{ color: 'var(--accent-primary)' }}>*</span>
              </label>
              <select
                id="lead-service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select a service category...</option>
                <option value="web-development">Web Development</option>
                <option value="app-development">App Development</option>
                <option value="digital-marketing">Digital Marketing Support</option>
              </select>
              {errors.service && <span className="form-error">{errors.service}</span>}
            </div>

            {/* Target Timeline */}
            <div className="form-group">
              <label htmlFor="lead-timeline" className="form-label">
                Target Timeline (Optional)
              </label>
              <select
                id="lead-timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">Select target timeline...</option>
                <option value="immediate">Immediate (&lt; 2 weeks)</option>
                <option value="1-month">Within 1 Month</option>
                <option value="1-3-months">1 – 3 Months</option>
                <option value="flexible">Flexible / Planning Phase</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="form-group">
            <label htmlFor="lead-message" className="form-label">
              Project Brief &amp; Objectives <span style={{ color: 'var(--accent-primary)' }}>*</span>
            </label>
            <textarea
              id="lead-message"
              name="message"
              placeholder="Describe your project vision, target timeline, key technical challenges, or current tech stack..."
              value={formData.message}
              onChange={handleChange}
              className="form-textarea"
              rows={4}
              required
            />
            {errors.message && <span className="form-error">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '8px' }}
            id="lead-form-submit-btn"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Validating &amp; Sending...</span>
              </>
            ) : (
              <>
                <Send size={17} />
                <span>Submit Project Request</span>
              </>
            )}
          </button>

          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '14px' }}>
            🔒 All project specifications are protected under strict mutual NDA standards.
          </p>
        </form>
      )}
    </div>
  );
}
