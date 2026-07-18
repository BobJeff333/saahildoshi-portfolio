import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://saahildoshi-portfolio.vercel.app'),
  title: {
    default: 'Saahil Doshi - Aerospace Engineering Portfolio',
    template: '%s - Saahil Doshi',
  },
  description:
    'Aerospace engineering portfolio documenting flight-tested launch vehicles, aerodynamic research, experimental propulsion, and technical leadership.',
  openGraph: {
    title: 'Saahil Doshi - Aerospace Engineering Portfolio',
    description: 'Analysis, flight, research, and technical leadership documented from requirement to result.',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1731, height: 909, alt: 'Saahil Doshi Aerospace Engineering Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saahil Doshi - Aerospace Engineering Portfolio',
    description: 'Analysis, flight, research, and technical leadership documented from requirement to result.',
    images: ['/og.jpg'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} bg-primary text-primary-foreground`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6D1P22S7QM" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6D1P22S7QM');`}
        </Script>
        <div className="min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
