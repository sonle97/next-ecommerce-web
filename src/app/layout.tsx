import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import ButtonScrollOnTop from '@/components/ButtonScrollOnTop';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import './globals.css';
import './app.scss';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = {
  title: 'Ly xanh',
  description: 'Trang chủ ly xanh 73',
  icons: 'ly-icon.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
        <ButtonScrollOnTop />
      </body>
    </html>
  );
}
