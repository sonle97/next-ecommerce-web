"use client";

import Image from "next/image";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import img from "@/images/news/item.jpg";
import img2 from "@/images/news/item2.jpg";

import "./styles.scss";

function NewsSection() {
  return (
    <section className="mt-4">
      <h2 className="relative flex items-center w-full justify-between">
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
        <span className="mx-4">Tin tức - sự kiện</span>
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
      </h2>

      <Swiper
        className="news_slide"
        modules={[Navigation, A11y, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={4}
        spaceBetween={20}
      >
        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden z-10">
            <Image src={img} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white text-[18px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img2} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white text-[18px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white text-[18px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img2} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white text-[18px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white text-[18px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default NewsSection;
