import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import "./styles.scss";

export interface IProductProps {
  image: string | StaticImageData;
  name: string;
  oldPrice: string;
  newPrice: string;
  brand: string;
  slug: string;
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
      } relative flex flex-col items-center border rounded-[8px] border-[#BAC9D9]
        hover:shadow-product-item product cursor-pointer overflow-hidden`}
    >
      <Link
        href={`/san-pham/${product.slug}`}
        className="rounded-tl-lg rounded-tr-lg"
      >
        <Image
          src={product.image}
          alt="product"
          width="300"
          height="300"
          className="rounded-tl-[5px] rounded-tr-[5px] w-full h-auto"
        />
      </Link>
      <div className="px-2 sm:py-4 py-2 z-1 bg-white w-full text-center rounded-bl-lg rounded-br-lg">
        <Link
          href={`/san-pham/${product.slug}`}
          className="text-blue-3 hover:text-blue-2 lg:font-bold font-medium lg:text-base text-[15px]"
        >
          <p>{product.name}</p>
        </Link>

        <div className="flex items-center justify-evenly mt-2">
          <p className="lg:text-[14px] text-[13px] text-red-1 text-center font-medium">
            Liên hệ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
