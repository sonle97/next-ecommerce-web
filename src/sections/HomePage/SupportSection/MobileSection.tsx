"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { supportSectionData } from ".";

function MobileSection() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
      }}
      slidesPerView={1}
      spaceBetween={10}
      modules={[Autoplay]}
    >
      {supportSectionData.map((item, idx) => (
        <SwiperSlide key={idx}>
          <div
            className="border px-4 py-3 min-h-[80px] rounded-[10px] border-[#BAC9D9] w-full flex items-center justify-center"
            key={idx}
          >
            <div className="flex items-center">
              <Image
                src={item.icon}
                alt="icon"
                width={60}
                height={60}
                className="xl:w-[60px] xl:h-[60px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]"
              />
              <div className="ml-6">
                <p className="text-main mb-[2px] font-semibold text-[15px]">
                  {item.title}
                </p>
                <p className="text-[14px]">{item.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default MobileSection;
