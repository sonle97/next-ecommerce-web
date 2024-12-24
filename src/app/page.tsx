import HeroSection from "@/sections/HomePage/HeroSection";
import SupportSection from "@/sections/HomePage/SupportSection";
import Categories from "@/sections/HomePage/Categories";
import Products from "@/sections/HomePage/Products";
import RegisterPromotions from "@/sections/HomePage/RegisterPromotions";
import NewsSection from "@/sections/HomePage/News";
import PartnerSection from "@/sections/HomePage/Partner";
import AboutUs from "@/sections/HomePage/AboutUs";
import WhyChooseUs from "@/sections/HomePage/WhyChooseUs";

import "aos/dist/aos.css";

export default function Home() {
  return (
    <main className="container">
      <HeroSection />
      <SupportSection />
      <Categories />
      <AboutUs />
      <Products />
      <WhyChooseUs />
      <RegisterPromotions />
      <NewsSection />
      <PartnerSection />
    </main>
  );
}
