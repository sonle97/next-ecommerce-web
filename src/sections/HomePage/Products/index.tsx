"use client";

import { useEffect } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Aos from "aos";

import Product from "@/components/Product";
import TitleCategory from "@/components/TitleCategory";
import { products } from "../../AllProducts";

const data = [
  {
    category: {
      name: "Sản phẩm bán chạy",
      url: "",
    },
    products,
  },
  {
    category: {
      name: "Sản phẩm mới",
      url: "",
    },
    products,
  },
];

const ProductList = () => {
  useEffect(function () {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section>
      {data.map((item, idx: number) => {
        return (
          <section key={idx}>
            {item.category && <TitleCategory category={item.category} />}
            <Swiper
              navigation={true}
              autoplay={{
                delay: 3000,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                320: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
              }}
              modules={[Autoplay, Navigation]}
              className="swiper-section-container"
              data-aos="fade-up"
            >
              {item.products.map((product, idx) => (
                <SwiperSlide key={idx}>
                  <Product product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        );
      })}
    </section>
  );
};

export default ProductList;
