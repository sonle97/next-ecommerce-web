import config from '@/config';
import { ICategory } from '@/config/entities';
import AllProducts from '@/sections/AllProducts';

export const revalidate = 60;

async function getCategories() {
  try {
    const res = await fetch(
      `${config.apiServerUrl}/api/categories?client=true`,
      {
        next: { revalidate: 60 },
      }
    );

    return res.json();
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const categories: ICategory[] = await getCategories();
  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    return {
      title: 'Danh mục không tồn tại',
      description: 'Không tìm thấy danh mục',
    };
  }

  return {
    title: category.name || 'Danh mục',
    description: `Sản phẩm thuộc ${category.name} của Ly Xanh`,
    icons: 'ly-icon.png',
  };
}

export async function generateStaticParams() {
  const categories: ICategory[] = await getCategories();

  return categories.map((category) => ({
    slug: category.slug.toString(),
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const categories: ICategory[] = await getCategories();
  const category = categories.find((category) => category.slug === params.slug);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <main className="container">
      <AllProducts categories={categories} categorySelected={category} />
    </main>
  );
}
