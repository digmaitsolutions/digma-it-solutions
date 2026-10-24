import LeadForm from '@/components/LeadForm';
import { Mail, Phone, MapPin, Clock, ShieldCheck, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact DigMa IT Solutions | Book Discovery Consultation',
  description: 'Connect with our solutions architects to discuss your web application, mobile product, or growth engineering requirements.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'How fast can a dedicated team kick off our project?',
      a: 'Following our initial technical discovery call and scope signoff, dedicated pods can typically begin sprinting within 5 to 7 business days.'
    },
    {
      q: 'Do you execute mutual Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, absolutely. We execute strict bilateral NDAs before reviewing proprietary architectures, roadmaps, or codebase repositories.'
    },
    {
      q: 'Who retains intellectual property (IP) and codebase ownership?',
      a: 'You do—100%. All source code, design artifacts, databases, and deployment keys belong entirely to your company upon milestone completion.'
    },
    {
      q: 'What engagement models do you support?',
      a: 'We offer Dedicated Engineering Pods (monthly sprint capacity), Fixed-Scope Deliverables (turnkey MVPs), and Staff Augmentation.'
    }
  ];

  return (
    <div style={{ paddingTop: '130px', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 64px auto' }}>
          <div className="badge" style={{ marginBottom: '16px' }}>
            <span className="badge-dot"></span>
            <span>Let's Build Together</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', marginBottom: '16px', color: 'var(--text-primary)' }}>
            Initiate Your <span className="gradient-text-blue">Technical Discovery</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Speak directly with a solutions architect to evaluate technical feasibility, estimate sprint timelines, and plan your architecture.
          </p>
        </div>

        {/* Contact Layout: Info Sidebar + LeadForm */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'flex-start', marginBottom: '90px' }}>
          
          {/* Left: Contact Info & Hubs */}
          <div>
            <div className="card" style={{ padding: '36px', marginBottom: '32px', background: '#ffffff' }}>
              <h2 style={{ fontSize: '1.4rem', marginBottom: '24px', color: 'var(--text-primary)' }}>Direct Communication</h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} color="var(--accent-primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Email Our Engineering Desk</div>
                    <a href="mailto:digmaitsolutions@gmail.com" style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      digmaitsolutions@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#ecfdf5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} color="#059669" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Direct Phone Consultation</div>
                    <a href="tel:+18005553446" style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      +1 (800) 555-DIGMA
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#eef2ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} color="#4f46e5" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Headquarters</div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      100 Tech Innovation Plaza, Suite 400<br />
                      San Francisco, CA 94105
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={20} color="#d97706" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Turnaround Expectation</div>
                    <div style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      Under 24 hours (Monday – Friday)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div style={{ padding: '24px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <ShieldCheck size={28} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                <strong style={{ color: 'var(--text-primary)' }}>Strict Confidentiality:</strong> All shared concepts, architectural specs, and preliminary documentation remain strictly proprietary under mutual non-disclosure.
              </div>
            </div>
          </div>

          {/* Right: Embedded Interactive Form */}
          <div>
            <LeadForm />
          </div>

        </div>

        {/* FAQs Section */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-primary)', fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
              <HelpCircle size={15} />
              <span>Common Questions</span>
            </div>
            <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq) => (
              <div key={faq.q} className="card" style={{ padding: '24px', background: '#ffffff' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
