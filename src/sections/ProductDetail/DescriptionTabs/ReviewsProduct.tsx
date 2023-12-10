import React from "react";
import { AiFillStar } from "react-icons/ai";

import { Input, TextArea } from "@/components/ui/Input";

const ReviewsProduct = () => (
  <div className="review-product-wrapper">
    <p className="font-medium text-xl	mb-2">Đánh giá</p>
    <p>Chưa có đánh giá nào.</p>
    <div className="form-wrapper">
      <p className="font-medium text-xl	mb-2">
        Hãy là người đầu tiên nhận xét “Cửa lùa nhôm kính cao cấp”
      </p>
      <p>Đánh giá của bạn</p>
      <div className="flex items-center pb-2 star-wrapper">
        <div className="star star-1 flex items-center">
          <AiFillStar />
        </div>
        <div className="star star-2 flex items-center">
          <AiFillStar /> <AiFillStar />
        </div>
        <div className="star star-3 flex items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="star star-4 flex items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="star star-5 flex items-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      <div>
        <div>
          <p>Nhận xét của bạn *</p>
          <TextArea rows="5" />
        </div>
        <div className="mt-4 mb-2 flex items-center">
          <div className="w-full md:mr-4 mb-4">
            <p>Tên *</p>
            <Input />
          </div>
          <div className="w-full mb-4">
            <p>Email *</p>
            <Input />
          </div>
        </div>
        <button
          className="mt-4 px-[14px] py-[8px] bg-blue-3 text-white flex ml-auto
          font-bold rounded-[6px]"
        >
          Gửi đi
        </button>
      </div>
    </div>
  </div>
);

export default ReviewsProduct;
