import { GetStaticProps, GetStaticPropsContext, Metadata } from "next";

import { products } from "@/sections/AllProducts";
import ProductDetail from "@/sections/ProductDetail";
import { IProductProps } from "@/components/Product";

interface ProductProps {
  product: IProductProps | null;
}

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Sản phẩm của Ly xanh",
  icons: "ly-icon.png",
};

export const revalidate = 60;
export const dynamicParams = false; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug.toString(),
  }));
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((product) => product.slug === params.slug)!;
  return (
    <main className="container">
      <ProductDetail product={product} />
    </main>
  );
}
