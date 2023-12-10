"use client";

import Image from "next/image";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./styles.scss";

import productImage from "@/images/product1.jpg";
import Product from "@/components/Product";

const products = [
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
];

const RelatedProducts = () => {
  return (
    <section>
      <h2 className="relative flex items-center w-full justify-between">
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
        <span className="mx-4">Sản phẩm tương tự</span>
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
      </h2>

      <Swiper
        className="related-swiper-container"
        modules={[Navigation, A11y, Autoplay]}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={20}
      >
        {products.map((product, idx: number) => (
          <SwiperSlide key={idx}>
            <Product product={product} className="w-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedProducts;
