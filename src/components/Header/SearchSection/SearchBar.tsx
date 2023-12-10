import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";

function SearchBar() {
  return (
    <div className={`flex items-center ${styles.search_bar}`}>
      <select className="w-[100px] cursor-pointer">
        <option>Tất cả</option>
        <option>Ly giấy</option>
        <option>Ly nhựa</option>
      </select>
      <input className="" placeholder="Tìm kiếm danh mục, sản phẩm..." />
      <button>
        <FiSearch className="text-white mx-auto" />
      </button>
    </div>
  );
}
export default SearchBar;
