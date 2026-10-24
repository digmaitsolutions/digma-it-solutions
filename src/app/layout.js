import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'DigMa IT Solutions | Web Development, App Development & Digital Marketing Support',
  description: 'DigMa IT Solutions is a premier technology partner specializing in high-performance Web Development, iOS & Android App Development, and ROI-driven Digital Marketing Support.',
  keywords: 'DigMa, IT Solutions, Web Development, Next.js, React, Mobile App Development, iOS, Android, Digital Marketing Support, SEO, PPC, Growth',
  authors: [{ name: 'DigMa IT Solutions' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://digmaitsolutions.com'),
  openGraph: {
    title: 'DigMa IT Solutions | Scalable Digital Realities',
    description: 'Transforming visionary ideas into scalable enterprise architectures and high-growth digital products.',
    url: 'https://digmaitsolutions.com',
    siteName: 'DigMa IT Solutions',
    images: [
      {
        url: '/images/hero-illustration.svg',
        width: 1200,
        height: 630,
        alt: 'DigMa IT Solutions Technology Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        <main style={{ minHeight: '80vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
