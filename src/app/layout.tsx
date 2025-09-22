import '@styles/globals.scss';

import { Montserrat } from 'next/font/google';
import { Providers } from './Provider';
import { Header } from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

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
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
