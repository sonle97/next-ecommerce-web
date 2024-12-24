'use client';

import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import './styles.scss';

import Product from '@/components/Product';
import { products } from '@/sections/AllProducts';
import TitleSection from '@/components/TitleSection';

const RelatedProducts = () => {
  return (
    <section>
      <TitleSection title="Sản phẩm tương tự" />

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
      >
        {products.map((product, idx: number) => (
          <SwiperSlide key={idx}>
            <Product product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedProducts;
