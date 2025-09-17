import '@styles/globals.scss';

import { Montserrat } from 'next/font/google';
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
