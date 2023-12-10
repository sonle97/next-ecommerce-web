import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Sản phẩm của Ly xanh",
  icons: "ly-icon.png",
};

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
