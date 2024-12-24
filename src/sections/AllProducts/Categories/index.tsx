import { FaCaretRight } from "react-icons/fa";

const categories = [
  {
    title: "Ly giấy",
    url: "/san-pham/ly-giay",
  },
  {
    title: "Tô giấy đựng đồ ăn",
    url: "/san-pham/to-giay-dung-do-an",
  },
  {
    title: "Ly giấy tráng nhôm, đồng",
    url: "/san-pham/ly-giay-trang-nhom-dong",
  },
  {
    title: "Tô giấy đựng kem",
    url: "/san-pham/to-giay-dung-kem",
  },
  {
    title: "Hộp đựng đồ ăn",
    url: "/san-pham/hop-dung-do-an",
  },
  {
    title: "Ly giấy vân sóng",
    url: "/san-pham/ly-giay-van-song",
  },
  {
    title: "Sản phẩm bã mía",
    url: "/san-pham/san-pham-ba-mia",
  },
  {
    title: "Túi giấy",
    url: "/san-pham/tui-giay",
  },
  {
    title: "Hộp đựng pizza",
    url: "/san-pham/hop-dung-pizza",
  },
  {
    title: "Sản phẩm khác",
    url: "/san-pham/san-pham-khac",
  },
];

const Categories = () => {
  return (
    <>
      <div className="px-2 py-3 bg-main text-center text-white font-bold rounded-tl-[6px] rounded-tr-[6px]">
        DANH MỤC SẢN PHẨM
      </div>
      <ul className="border border-gray-1 m-0 rounded-bl-[6px] rounded-br-[6px] shadow-navbar lg:h-auto h-[340px] overflow-auto">
        {categories.map((category, idx) => (
          <li
            key={idx}
            className="flex items-center font-medium gap-2 text-base px-2 py-3 border-b border-b-gray-1 last:border-none cursor-pointer hover:bg-gray-1"
          >
            <FaCaretRight size={20} />
            {category.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
