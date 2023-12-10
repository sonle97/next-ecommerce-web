"use client";

import Image from "next/image";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import HeroBanner from "@/images/hero_banner.png";
import "./styles.scss";

function Hero() {
  return (
    <section className="w-3/4 ml-auto pt-0">
      <Swiper
        className="swiper_container"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image src={HeroBanner} alt="hero banner" className="h-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HeroBanner} alt="hero banner" className="h-[360px]" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={HeroBanner} alt="hero banner" className="h-[360px]" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
