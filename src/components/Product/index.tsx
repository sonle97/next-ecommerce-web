import Link from 'next/link';
import Image from 'next/image';

import './styles.scss';
import { IProduct } from '@/config/data/products';
import { categories } from '@/config/data/categories';
import AddToCartButton from '../AddToCartButton';

interface ProductProps {
  product: IProduct;
  className?: string;
}

const Product = (props: ProductProps) => {
  const { product, className } = props;
  const categorySlug = categories.find(
    (category) => category.id === product.categoryId
  )?.slug;

  return (
    <div
      className={`${
        className && className
      } relative flex flex-col items-center border rounded-[8px] border-[#BAC9D9]
        hover:shadow-product-item product cursor-pointer overflow-hidden`}
    >
      <Link
        href={`/${categorySlug}/${product.slug}`}
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
          href={`/${categorySlug}/${product.slug}`}
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

      <div className="absolute lg:bottom-[18px] lg:right-[18px] bottom-[12px] right-[12px] add-cart-button">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default Product;
