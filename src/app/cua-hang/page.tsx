import { Metadata } from 'next';

import AllProducts from '@/sections/AllProducts';

export const metadata: Metadata = {
  title: 'Cửa hàng',
  description: 'Tất cả các sản phẩm của Ly xanh',
  icons: 'ly-icon.png',
};

export default function Products() {
  return (
    <main className="container">
      <AllProducts />
    </main>
  );
}
