import { categories } from '@/config/data/categories';
import AllProducts from '@/sections/AllProducts';

export function generateMetadata({ params }: { params: { slug: string } }) {
  const category = categories.find((category) => category.slug === params.slug);

  return {
    title: category!.title || 'Sản phẩm',
    description: `Sản phẩm thuộc ${category!.title} của Ly xanh`,
    icons: 'ly-icon.png',
  };
}

export const revalidate = 60;
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug.toString(),
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const category = categories.find((category) => category.slug === params.slug);

  return (
    <main className="container">
      <AllProducts categorySelected={category} />
    </main>
  );
}
