import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giỏ hàng',
  description: 'Giới thiệu ly xanh 73',
  icons: 'ly-icon.png',
};

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
