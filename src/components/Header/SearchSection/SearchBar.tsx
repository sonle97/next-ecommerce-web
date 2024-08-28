import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";

function SearchBar() {
  return (
    <div className={`flex items-center ${styles.search_bar}`}>
      <input className="" placeholder="Tìm kiếm danh mục, sản phẩm..." />
      <button>
        <FiSearch className="text-white mx-auto" />
      </button>
    </div>
  );
}
export default SearchBar;
