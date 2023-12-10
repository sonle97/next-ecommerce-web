import Link from "next/link";

interface ICategoryProps {
  name: string;
  url: string;
}

interface TitleCategoryProps {
  category: ICategoryProps;
}

const TitleCategory = (props: TitleCategoryProps) => {
  const { category } = props;
  return (
    <div className="flex items-center justify-between border-b-[2px] border-gray-4 mb-8">
      <h2 className="border-b-[2px] border-blue-1 pb-[7.5px] -mb-[1px]">
        {category.name}
      </h2>
      <Link
        href={category.url}
        className="text-white bg-blue-1 hover:bg-blue-2 rounded-[5px] py-[5px] px-[10px] text-[15px]"
      >
        + Xem tất cả
      </Link>
    </div>
  );
};

export default TitleCategory;
