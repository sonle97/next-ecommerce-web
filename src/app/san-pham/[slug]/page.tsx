import ProductDetail from "@/sections/ProductDetail";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="container">
      <ProductDetail slug={params.slug} />
    </main>
  );
}
