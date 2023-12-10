import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sản phẩm",
  description: "Tất cả các sản phẩm của Ly xanh",
  icons: "ly-icon.png",
};

export default function ProductLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
