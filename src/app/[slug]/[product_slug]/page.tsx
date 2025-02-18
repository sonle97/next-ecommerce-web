import ProductDetail from '@/sections/ProductDetail';
import { products } from '@/config/data/products';
import { notFound } from 'next/navigation';

export function generateMetadata({
  params,
}: {
  params: { product_slug: string };
}) {
  const product = products.find(
    (product) => product.slug === params.product_slug
  );

  return {
    title: (product && product.name) || 'Sản phẩm',
    description: (product && product.name) || 'Sản phẩm của Ly xanh',
    icons: 'ly-icon.png',
  };
}

export const revalidate = 60;
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug.toString(),
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { product_slug: string };
}) {
  const product = products.find(
    (product) => product.slug === params.product_slug
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="container">
      <ProductDetail product={product} />
    </main>
  );
}
