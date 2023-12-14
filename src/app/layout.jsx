import { Lato, Open_Sans } from 'next/font/google';
import '@/styles/styles.scss';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
});
const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opne-sans',
});

export const metadata = {
  title: 'Strapi Nextjs Blog',
};

function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${openSans.className} ${openSans.variable} ${lato.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
