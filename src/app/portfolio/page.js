import Portfolio from '@/components/Portfolio';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Client Portfolio & Case Studies | DigMa IT Solutions',
  description: 'Explore verified client case studies across Web Development, Mobile Apps, and Digital Marketing Support engineered by DigMa IT Solutions, including BeeVibe and GExcel Technologies.',
};

export default function PortfolioPage() {
  return (
    <div style={{ paddingTop: '100px' }}>
      <Portfolio isFullPage={true} />
      <CTA />
    </div>
  );
}
