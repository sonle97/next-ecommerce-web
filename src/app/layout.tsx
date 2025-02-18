import type { Metadata } from 'next';
import ButtonScrollOnTop from '@/components/ButtonScrollOnTop';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import './globals.css';
import './app.scss';

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
      <body className={cn('min-h-screen bg-background font-sans antialiased')}>
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
