import React from "react";
import Image from "next/image";

import { ICategoriesData } from "./data";
import Link from "next/link";

interface ICategoryItem {
  category: ICategoriesData;
  dataAos: string;
}

const CategoryItem = (props: ICategoryItem) => {
  const { category, dataAos } = props;
  const { image, name } = category;
  return (
    <div
      className="rounded-[15px] bg-main category-item cursor-pointer"
      data-aos={dataAos}
    >
      <Link href={`/san-pham`}>
        <div className="relative overflow-hidden rounded-tl-[15px] rounded-tr-[15px]">
          <Image
            src={image}
            alt={name}
            width={220}
            height={200}
            className="rounded-tl-[15px] rounded-tr-[15px] max-w-full w-full object-cover"
          />
        </div>
        <p className="lg:text-[18px] sm:text-base text-[15px] text-white text-center lg:py-[20px] py-3 px-2 lg:font-bold font-medium transition-colors name">
          {name}
        </p>
      </Link>
    </div>
  );
};

export default CategoryItem;
