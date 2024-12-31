import Image from 'next/image';
import { LiaAngleRightSolid } from 'react-icons/lia';
import Link from 'next/link';
import { categories, ICategories } from '@/config/data/categories';

interface ICategoriesComponent {
  categorySelected?: ICategories;
}

const CategoriesComponent = (props: ICategoriesComponent) => {
  const { categorySelected } = props;
  return (
    <>
      <div className="px-2 py-3 bg-main text-center text-white font-bold rounded-tl-[6px] rounded-tr-[6px]">
        DANH MỤC SẢN PHẨM
      </div>
      <ul className="border border-gray-1 m-0 rounded-bl-[6px] rounded-br-[6px] shadow-navbar lg:h-auto sm:h-[340px] h-[300px] overflow-y-auto">
        {categories.map((category) => (
          <Link
            href={`/${category.slug}`}
            key={category.id}
            className={`flex items-center justify-between font-medium gap-2 
              text-base px-4 py-3 border-b border-b-gray-1 last:border-none cursor-pointer hover:bg-gray-1 ${
                categorySelected?.slug === category.slug ? 'text-green-4' : ''
              }`}
          >
            <div className="flex items-center gap-3">
              <Image
                src={category.icon}
                alt={category.title}
                width={25}
                height={25}
              />
              {category.title}
            </div>
            <LiaAngleRightSolid size={20} />
          </Link>
        ))}
      </ul>
    </>
  );
};

export default CategoriesComponent;
