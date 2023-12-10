import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ButtonScrollOnTop from "@/components/ButtonScrollOnTop";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ly xanh",
  description: "Trang chủ ly xanh 73",
  icons: "ly-icon.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />

        <ButtonScrollOnTop />
      </body>
    </html>
  );
}
