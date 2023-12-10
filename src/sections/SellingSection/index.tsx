import Image from "next/image";
import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

import { SellingData, SellingDataProps } from "./data";
import "./styles.scss";
import { ButtonBuyNow } from "@/components/ui/Button";

function SellingSection() {
  return (
    <section>
      <h2 className="relative flex items-center w-full justify-between">
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
        <span className="mx-4">Sản phẩm bán chạy</span>
        <b className="flex-1 h-[2px] bg-black-1 opacity-10" />
      </h2>

      <div className="flex flex-wrap justify-between gap-y-4">
        {SellingData.map((product: SellingDataProps, idx: number) => (
          <div
            className={`relative flex items-center border rounded-md border-gray-4
               hover:shadow-product-item w-[calc(100%/3-10px)] product-selling`}
            key={idx}
          >
            <div className="flex items-start">
              <Link
                href=""
                className="relative w-[134px] h-[134px] overflow-hidden rounded-tl-md rounded-bl-md"
              >
                <Image
                  src={product.image}
                  alt="product"
                  height={134}
                  width={134}
                  className="rounded-tl-[5px] rounded-bl-[5px]"
                />
              </Link>

              <div className="p-[10px] pt-5">
                <Link
                  href=""
                  className="text-blue-3 hover:text-blue-2 text-[17px] font-bold"
                >
                  <p>{product.name}</p>
                </Link>
                <div className="flex items-center mt-1">
                  {product.oldPrice && (
                    <del className="text-gray-default mr-3">
                      <span className="text-sm">{product.oldPrice}</span>
                    </del>
                  )}

                  <span className="text-red-3 ">{product.newPrice}</span>
                </div>
                <div className="flex items-center justify-between mt-4 gap-3">
                  <div className="bg-blue-3 ml-4 hover:bg-blue-5 rounded-[50%] p-2 cursor-pointer">
                    <BsCart4
                      size={20}
                      className="text-white"
                      title="Thêm vào giỏ"
                    />
                  </div>
                  <ButtonBuyNow />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="flex items-center gap-x-4 pb-0">
        <div className="bg-[url('/selling-banner-1.jpg')] h-[130px] w-1/2 rounded-[6px] bg-no-repeat bg-cover	bg-top" />
        <div className="bg-[url('/selling-banner-2.jpg')] h-[130px] w-1/2 rounded-[6px] bg-no-repeat bg-cover	bg-top" />
      </section>
    </section>
  );
}
export default SellingSection;
