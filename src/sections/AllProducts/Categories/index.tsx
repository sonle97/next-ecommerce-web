import Image from 'next/image';
import { LiaAngleRightSolid } from 'react-icons/lia';
import Link from 'next/link';
import { ICategory } from '@/config/entities';

interface ICategoryComponent {
  categorySelected?: ICategory;
  categories: ICategory[];
}

const CategoriesComponent = (props: ICategoryComponent) => {
  const { categories, categorySelected } = props;

  return (
    <>
      <div className="px-2 py-3 bg-main lg:text-base text-[15px] text-center text-white font-bold rounded-tl-[6px] rounded-tr-[6px]">
        DANH MỤC SẢN PHẨM
      </div>
      <ul className="border border-gray-1 m-0 rounded-bl-[6px] rounded-br-[6px] shadow-navbar lg:h-auto sm:h-[340px] h-[300px] overflow-y-auto">
        {categories.map((category) => (
          <Link
            href={`/${category.slug}`}
            key={category.id}
            className={`flex items-center justify-between font-medium gap-2 
              lg:text-base text-sm px-4 py-3 border-b border-b-gray-1 last:border-none cursor-pointer hover:bg-gray-1 ${
                categorySelected?.slug === category.slug ? 'text-green-4' : ''
              }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={category.logoURL}
                alt={category.name}
                width={25}
                height={25}
              />
              {category.name}
            </div>
            <LiaAngleRightSolid size={20} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default CategoriesComponent;
