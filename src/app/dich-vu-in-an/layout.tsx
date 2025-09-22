import { information } from "@/config/data/information";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dịch vụ in ấn",
  description: `Dịch vụ in ấn của ${information.shopName}`,
  icons: "ly-icon.png",
};

export default function IntroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
