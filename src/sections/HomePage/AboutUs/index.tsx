'use client';

import { useEffect } from 'react';
import Aos from 'aos';
import Image from 'next/image';
import './styles.scss';
import Link from 'next/link';
import TitleSection from '@/components/TitleSection';

const AboutUs = () => {
  useEffect(function () {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section>
      <TitleSection title="Về chúng tôi" />

      <div className="flex items-start md:gap-8 gap-4 md:flex-row flex-col">
        <div className="md:w-1/2 w-full lg:pr-12 pr-0" data-aos="zoom-in-down">
          <p className="text-base">
            Là một công ty chuyên sản xuất và kinh doanh bao bì từ giấy và nhựa.
            Bao bì sản phẩm là cốt lõi và mục đích hoạt động của công ty quốc tế
            Nice, chúng tôi sản xuất và kinh doanh bao bì thực phẩm từ chất liệu
            là giấy và nhựa.
            <br />
            <br />
            Cùng với đó chúng tôi tổ hợp giữa nghiên cứu sản xuất trang thiết bị
            tự động hóa và quản lý nghiên cứu sản xuất thành một thể thống nhất.
            Chúng tôi sẽ cố gắng để trở thành một trong những công ty hàng đầu
            về sản xuất và cung cấp bao bì thực phẩm.
          </p>

          <Link className="link-more md:mt-10 mt-6" href="/gioi-thieu">
            Xem thêm
          </Link>
        </div>
        <div
          className="flex items-start justify-between md:w-1/2 w-full md:pb-[400px] pb-[350px] pl-4 relative"
          data-aos="zoom-in"
        >
          <Image
            src="/images/img.jpg"
            alt="about us"
            width={230}
            height={270}
            className="object-cover rounded-[15px] about-us-img lg:w-[230px] lg:h-[270px] w-[200px] h-[250px]"
          />

          <Image
            src="/images/img.jpg"
            alt="about us"
            width={230}
            height={270}
            className="object-cover rounded-[15px] about-us-img lg:w-[230px] lg:h-[270px] w-[200px] h-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
