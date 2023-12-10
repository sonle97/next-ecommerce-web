import HeroSection from "@/sections/HeroSection";
import SupportSection from "@/sections/SupportSection";
import SellingSection from "@/sections/SellingSection";
import Products from "@/sections/Products";
import RegisterPromotions from "@/sections/RegisterPromotions";
import NewsSection from "@/sections/News";
import PartnerSection from "@/sections/Partner";

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <SupportSection />
      <SellingSection />
      <Products />
      <RegisterPromotions />
      <NewsSection />
      <PartnerSection />
    </main>
  );
}
