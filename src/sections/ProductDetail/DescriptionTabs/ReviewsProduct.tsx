import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import { Input, TextArea } from '@/components/ui/Input';
import { Button } from '@/components/ui/button';

const ReviewsProduct = () => (
  <div className="review-product-wrapper">
    <p className="font-medium md:text-xl text-base mb-2">Đánh giá</p>
    <p>Chưa có đánh giá nào.</p>
    <div className="form-wrapper">
      <p className="font-medium md:text-xl text-[17px] mb-2">
        Hãy là người đầu tiên nhận xét “Cửa lùa nhôm kính cao cấp”
      </p>

      <div>
        <div className="mt-4 mb-2 flex items-center sm:flex-row flex-col">
          <div className="w-full md:mr-4 mb-4">
            <p>Tên *</p>
            <Input />
          </div>
          <div className="w-full mb-4">
            <p>Email *</p>
            <Input />
          </div>
        </div>
        <div>
          <p>Nhận xét của bạn *</p>
          <TextArea rows="5" />
        </div>

        <Button
          className="mt-4 px-[14px] py-[8px] bg-blue-3 text-white flex ml-auto
          font-bold rounded-[6px]"
        >
          Gửi đi
        </Button>
      </div>
    </div>
  </div>
);

export default ReviewsProduct;
