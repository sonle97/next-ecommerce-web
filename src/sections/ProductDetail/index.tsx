"use client";

import Breadcrumb from "@/components/Breadcrumb";
import Images from "./Images";
import { Button } from "@/components/ui/Button";
import DescriptionTabs from "./DescriptionTabs";
import RelatedProducts from "./RelatedProducts";
import { useState } from "react";
import BuyProductModal from "../Modal/BuyProductModal";

interface ProductDetail {
  slug: string;
}

const ProductDetail = ({ slug }: ProductDetail) => {
  const [isBuyNowModalOpen, setIsBuyNowModalOpen] = useState<boolean>(false);

  return (
    <>
      <div>
        <Breadcrumb breadcrumb="da" />
        <div className="flex items-start">
          <div className="w-1/2">
            <Images />
          </div>
          <div className="w-1/2 pl-10">
            <h2 className="text-2xl font-medium mb-3 text-blue-3">
              Cửa Cổng Đẹp Sắt Kẽm SP-48535
            </h2>

            <p className="mb-2">
              Thương hiệu: <span className="font-semibold">APC</span>
            </p>
            <p className="mb-2">
              Mã sản phẩm: <span className="font-semibold">APC</span>
            </p>
            <p className="mb-3">
              Tình trạng:{" "}
              <span className="text-green-5 font-semibold">Còn hàng</span>
            </p>
            <div className="flex items-center my-3">
              <div className="flex items-center border-2 border-gray-5 rounded-[4px] h-[40px]">
                <button className="w-[40px] bg-gray-5 h-full text-xl">-</button>
                <input
                  type="number"
                  min={1}
                  max={999999}
                  defaultValue={1}
                  className="w-[60px] text-center focus:outline-none h-full appearance-none hover:appearance-none"
                />

                <button className="w-[40px] bg-gray-5 h-full text-xl">+</button>
              </div>
              <p className="text-2xl font-bold text-red-3 ml-6">1,461,240₫</p>
            </div>
            <div className="flex items-center mb-3 mt-6">
              <Button className="bg-blue-3 mr-4 h-[40px]">Thêm vào giỏ</Button>
              <Button
                className="bg-red-1 h-[40px]"
                onClick={() => setIsBuyNowModalOpen(true)}
              >
                Mua ngay
              </Button>
            </div>
            <Button className="mb-3 bg-green-5 w-full h-[50px]">
              Báo giá sỉ: 0347366345
            </Button>

            <Button className="mb-3 bg-green-5 w-full h-[50px] text-2xl">
              Tư vấn thiết kế theo yêu cầu
            </Button>
            <div>Danh mục: ABC, CDF</div>
          </div>
        </div>

        <DescriptionTabs />
        <RelatedProducts />
      </div>
      {isBuyNowModalOpen && (
        <BuyProductModal
          isOpen={isBuyNowModalOpen}
          onClose={() => setIsBuyNowModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductDetail;
