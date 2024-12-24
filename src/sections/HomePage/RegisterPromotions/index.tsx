"use client";
import { useEffect } from "react";

import Aos from "aos";

import { Input, TextArea } from "@/components/ui/Input";

const RegisterPromotions = () => {
  useEffect(function () {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
    <section
      className="mt-4"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <form className="form rounded-xl bg-main sm:py-8 sm:px-10 py-6 px-6 text-white text-center">
        <h2 className="text-white text-center mb-0">Đăng ký nhận báo giá</h2>
        <p className="mt-1 mb-8 text-base text-center">
          <b>Ly Xanh</b> luôn sẵn sàng cho mọi đơn hàng và giải đáp các thắc mắc
          một cách nhanh chóng và hài lòng nhất.
        </p>
        <div className="flex justify-between gap-[20px] lg:flex-row flex-col">
          <div>
            <Input placeholder="Họ và Tên" name="name" type="text" required />
            <Input
              placeholder="Số điện thoại"
              name="phone"
              type="tel"
              required
            />
            <Input placeholder="Email" name="email" type="email" required />
          </div>
          <TextArea
            cols="50"
            name="message"
            placeholder="Nội dung cần tư vấn..."
          />
        </div>
        <button
          className="mt-4 px-[14px] py-[8px] bg-white text-black-1 flex lg:ml-auto lg:mx-0 mx-auto
          font-bold rounded-[6px]"
        >
          Đăng ký
        </button>
      </form>
    </section>
  );
};
export default RegisterPromotions;
