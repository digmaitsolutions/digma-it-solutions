import Link from 'next/link';
import { Shield, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy & Security Policy | DigMa IT Solutions',
  description: 'DigMa IT Solutions privacy policy, data protection standards, GDPR/CCPA compliance, and confidentiality safeguards.',
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: '130px', paddingBottom: '90px', background: '#f8fafc' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.875rem',
            color: 'var(--accent-primary)',
            fontWeight: 600,
            marginBottom: '32px',
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <div style={{ marginBottom: '40px' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <Shield size={14} />
            <span>Compliance &amp; Security</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Privacy &amp; Data Protection Policy
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>
            Last Updated: October 2026 • DigMa IT Solutions Inc.
          </p>
        </div>

        <div className="card" style={{ padding: '40px', lineHeight: 1.8, color: 'var(--text-secondary)', background: '#ffffff' }}>
          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '14px' }}>1. Commitment to Data Privacy</h2>
            <p style={{ marginBottom: '12px' }}>
              DigMa IT Solutions Inc. ("DigMa", "we", "us", or "our") respects the privacy and confidentiality of our clients, prospective partners, and website visitors. This Privacy Policy outlines our standards regarding the collection, handling, processing, and protection of information gathered through our platform and inquiry forms.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '14px' }}>2. Information We Collect</h2>
            <p style={{ marginBottom: '12px' }}>
              When you submit a consultation request, discovery inquiry, or contact form, we collect the following information:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '12px' }}>
              <li><strong>Contact Identifiers:</strong> Name, work email address, telephone number, and company affiliation.</li>
              <li><strong>Project Specifications:</strong> Scope descriptions, desired technologies, estimated budget parameters, and business goals.</li>
              <li><strong>Technical Metadata:</strong> Anonymized browser type, IP address, and access timestamps to ensure cybersecurity integrity.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '14px' }}>3. How We Utilize Your Information</h2>
            <p style={{ marginBottom: '12px' }}>
              Collected details are strictly utilized to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '12px' }}>
              <li>Formulate technical architecture proposals and sprint feasibility estimates.</li>
              <li>Communicate directly with your authorized points of contact regarding project milestones.</li>
              <li>Maintain internal system integrity and prevent fraudulent form abuse.</li>
            </ul>
            <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>
              We NEVER sell, rent, monetize, or broker your personal or project data to third-party data aggregators.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '14px' }}>4. Mutual NDA &amp; Intellectual Property Protection</h2>
            <p style={{ marginBottom: '12px' }}>
              All software architectures, proprietary business models, and trade secrets submitted via our consultation channels are treated with the highest degree of corporate confidentiality. We routinely execute bilateral non-disclosure agreements prior to evaluating source code or technical blueprints.
            </p>
          </section>

          <section style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '14px' }}>5. GDPR &amp; CCPA Compliance</h2>
            <p style={{ marginBottom: '12px' }}>
              Under applicable data protection laws (including the European Union General Data Protection Regulation and the California Consumer Privacy Act), you retain full rights to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '12px' }}>
              <li>Request an audit copy of all personal records stored in our systems.</li>
              <li>Demand immediate correction or permanent deletion ("Right to be Forgotten") of your records.</li>
              <li>Revoke consent for future project communications at any time.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '14px' }}>6. Data Protection Officer (DPO) Contact</h2>
            <p style={{ marginBottom: '8px' }}>
              For inquiries regarding compliance, data removal requests, or security verifications, please contact our Data Governance desk:
            </p>
            <p style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              Email: <a href="mailto:digmaitsolutions@gmail.com" style={{ color: 'var(--accent-primary)' }}>digmaitsolutions@gmail.com</a><br />
              Postal: DigMa IT Solutions Inc., Attn: Privacy Office, 100 Tech Innovation Plaza, Suite 400, San Francisco, CA 94105
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
