import AllProducts from "@/sections/AllProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Tất cả các sản phẩm của Ly xanh",
  icons: "ly-icon.png",
};

export default function Products() {
  return (
    <main className="container">
      <AllProducts />
    </main>
  );
}
