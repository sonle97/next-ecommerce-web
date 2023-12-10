"use client";

import Image from "next/image";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import logo1 from "@/images/partners/logo.png";
import logo2 from "@/images/partners/logo2.png";

function PartnerSection() {
  return (
    <section className="mt-4">
      <h2 className="relative flex items-center w-full justify-between">
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
        <span className="mx-4">Đối tác của Ly Xanh</span>
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
      </h2>

      <Swiper
        className="partners_slide"
        modules={[A11y, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src={logo1}
            alt="img"
            className="w-auto h-[100px] mx-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={logo2}
            alt="img"
            className="w-auto h-[100px] mx-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={logo1}
            alt="img"
            className="w-auto h-[100px] mx-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={logo2}
            alt="img"
            className="w-auto h-[100px] mx-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={logo2}
            alt="img"
            className="w-auto h-[100px] mx-auto object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={logo2}
            alt="img"
            className="w-auto h-[100px] mx-auto object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default PartnerSection;
