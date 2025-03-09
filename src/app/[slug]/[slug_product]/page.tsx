import ProductDetail from '@/sections/ProductDetail';
import { notFound } from 'next/navigation';
import config from '@/config';
import { IProduct } from '@/config/entities';

export const revalidate = 60;

async function getProducts() {
  try {
    const res = await fetch(`${config.apiServerUrl}/api/products?client=true`, {
      next: { revalidate: 60 },
    });

    return res.json();
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug_product: string };
}) {
  const products: IProduct[] = await getProducts();
  const product = products.find(
    (_product) => _product.slug === params.slug_product
  );

  if (!product) {
    return {
      title: 'Sản phẩm không tồn tại',
      description: 'Không tìm thấy sản phẩm',
    };
  }

  return {
    title: product.name || 'Sản phẩm',
    description: `Sản phẩm thuộc ${product.name} của Ly Xanh`,
    icons: 'ly-icon.png',
  };
}

export async function generateStaticParams() {
  const products: IProduct[] = await getProducts();

  return products.map((_product) => ({
    slug_product: _product.slug.toString(),
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug_product: string };
}) {
  const products: IProduct[] = await getProducts();
  const product = products.find(
    (_product) => _product.slug === params.slug_product
  );

  if (!product) {
    return notFound();
  }

  return (
    <main className="container">
      <ProductDetail product={product} />
    </main>
  );
}
