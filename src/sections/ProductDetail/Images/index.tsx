"use client";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "./styles.scss";

const images = [
  "https://swiperjs.com/demos/images/nature-1.jpg",
  "https://swiperjs.com/demos/images/nature-2.jpg",
  "https://swiperjs.com/demos/images/nature-3.jpg",
  "https://swiperjs.com/demos/images/nature-4.jpg",
  "https://swiperjs.com/demos/images/nature-5.jpg",
];

const Images = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <>
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-container"
      >
        {images.map((img: string, idx: number) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              className="h-[370px] w-full object-cover rounded-[8px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mt-3 slide-thumb"
      >
        {images.map((img: string, idx: number) => (
          <SwiperSlide
            key={idx}
            className="max-h-[70px] p-0 h-full rounded-[7px] cursor-pointer"
          >
            <img
              src={img}
              className="object-cover w-full h-[70px] rounded-[8px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Images;
