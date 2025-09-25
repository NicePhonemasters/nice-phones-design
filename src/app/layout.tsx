import '@styles/globals.scss';

import { Montserrat } from 'next/font/google';
// import { ThemeProvider } from '@components/ThemeProvider/ThemeProvider';
import type { Metadata } from 'next';
import { Providers } from './Provider';
import { Header } from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { ThemeProvider } from '@components/ThemeProvider/ThemeProvider';
import { getBaseUrl } from '@/utils/getBaseUrl';

export const metadata: Metadata = {
  title: {
    default: 'Nice Gadgets - Main',
    template: '%s | Nice Gadgets',
  },
  description:
    'Gives you user friendly experience in browsing, selecting and shopping latest gadgets.',
  metadataBase: new URL(`https://${getBaseUrl()}`),
  openGraph: {
    type: 'website',
    siteName: 'NiceGadgets',
    url: `https://${getBaseUrl()}`,
    title: 'Nice Gadgets - Main',
    description:
      'Gives you user friendly experience in browsing, selecting and shopping latest gadgets.',
    images: [
      {
        url: '/assets/logo.png',
        width: 356,
        height: 128,
        alt: 'Nice Gadgets - open graph preview',
      },
    ],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
  alternates: {
    canonical: '/',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={montserrat.className}>
        <Providers>
          <ThemeProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
