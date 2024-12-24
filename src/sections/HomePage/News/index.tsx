"use client";

import { useEffect } from "react";
import Aos from "aos";

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
import TitleSection from "@/components/TitleSection";

function NewsSection() {
  useEffect(function () {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section className="mt-4">
      <TitleSection title="Tin tức - sự kiện" />

      <Swiper
        className="news_slide swiper-section-container"
        modules={[Navigation, A11y, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
        data-aos="fade-up"
      >
        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden z-10">
            <Image src={img} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white md:text-[16px] text-[15px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img2} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white md:text-[16px] text-[15px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white md:text-[16px] text-[15px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img2} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white md:text-[16px] text-[15px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="blog-item-wrapper">
          <div className="relative blog-item overflow-hidden">
            <Image src={img} alt="blog-img" />
          </div>
          <div className="z-20 absolute bottom-8 px-6 w-full text text-white md:text-[16px] text-[15px] font-bold">
            <Link href="">Quy trình sản xuất...</Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
export default NewsSection;
