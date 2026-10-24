import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import CTA from '@/components/CTA';
import InquiryPopup from '@/components/InquiryPopup';

export default function Home() {
  return (
    <>
      <InquiryPopup />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Portfolio />
      <Testimonials />

      {/* Embedded Lead Capture Section */}
      <section className="section" id="consultation" style={{ position: 'relative' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <LeadForm />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
