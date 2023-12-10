import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { BsCart4 } from "react-icons/bs";

import "./styles.scss";
import { ButtonBuyNow } from "../ui/Button";

export interface IProductProps {
  image: string | StaticImageData;
  name: string;
  oldPrice: string;
  newPrice: string;
  brand: string;
}

interface ProductProps {
  product: IProductProps;
  className?: string;
}

const Product = (props: ProductProps) => {
  const { product, className } = props;
  return (
    <div
      className={`${
        className && className
      } relative flex flex-col items-center border rounded-[8px] border-gray-4
        hover:shadow-product-item w-[calc(100%/4-18px)] product`}
    >
      <Link href="/san-pham/abc" className="rounded-tl-lg rounded-tr-lg">
        <Image
          src={product.image}
          alt="product"
          width="300"
          height="300"
          className="rounded-tl-[5px] rounded-tr-[5px]"
        />
      </Link>
      <div className="p-4">
        <Link
          href="/san-pham/abc"
          className="text-blue-3 hover:text-blue-2 text-[17px] font-bold"
        >
          <p>{product.name}</p>
        </Link>
        <div className="flex items-center mt-1 justify-center">
          {true && (
            <del className="text-gray-default mr-3">
              <span className="text-sm">{product.oldPrice}</span>
            </del>
          )}

          <span className="text-red-3">{product.newPrice}</span>
        </div>
        <div className="flex items-center justify-between mt-4 gap-3">
          <ButtonBuyNow />
          <div className="bg-blue-3 hover:bg-blue-5 rounded-[50%] p-2 cursor-pointer">
            <BsCart4 size={20} className="text-white" title="Thêm vào giỏ" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
