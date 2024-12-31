"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

import styles from "../../SearchSection/styles.module.scss";
import { dataSearch } from "../../SearchSection/SearchBar";

interface ISearchResults {
  handleOpenSearchResultPanel: Function;
}

const SearchResults = (props: ISearchResults) => {
  const { handleOpenSearchResultPanel } = props;
  const [searchValue, setSearchValueInput] = useState("");

  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    if (!searchValue.trim()) {
      return;
    }

    setSearching(true);
    setTimeout(() => {
      setSearchResults(dataSearch);
      setSearching(false);
    }, 2000);
  };

  return (
    <div className={styles.search_result_wrapper}>
      <div className="flex items-center justify-between mb-2 pl-[10px]">
        <IoCloseOutline
          size={30}
          className="ml-auto cursor-pointer"
          onClick={() => handleOpenSearchResultPanel(false)}
        />
      </div>

      <div className={`flex items-center ${styles.search_bar} mb-4`}>
        <input
          className=""
          placeholder="Tìm kiếm danh mục, sản phẩm..."
          onChange={(e) => setSearchValueInput(e.target.value)}
          value={searchValue}
        />
        <button onClick={handleSearch}>
          {searching ? (
            <AiOutlineLoading3Quarters
              className="text-white text-sm mx-auto"
              size={20}
              style={{
                animation: "spin 1s linear infinite",
              }}
            />
          ) : (
            <FiSearch className="text-white mx-auto" />
          )}
        </button>
      </div>
      <p className="mb-2 pl-[10px]">
        {searchResults.length > 0
          ? `${searchResults.length} sản phẩm được tìm thấy`
          : ""}
      </p>
      <div className={styles.search_result}>
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <Link
              key={result.id}
              href={`/san-pham/${result.id}`}
              onClick={() => handleOpenSearchResultPanel(false)}
            >
              <div className={styles.search_result_item}>
                <img src="/images/products/product-image.jpg" alt="product" />
                <div>
                  <p className="font-medium">{result.title}</p>
                  <p className="text-sm">
                    <strong>Category:</strong> {result.category}
                  </p>
                </div>
                <BsCart4
                  className="text-main ml-auto hover:text-red-1"
                  size={22}
                />
              </div>
            </Link>
          ))
        ) : !searching ? (
          <>
            <p className="text-center italic">Không tìm thấy sản phẩm nào.</p>
            <Image
              src="/images/no-result-search-icon.jpg"
              alt="no-result"
              width={150}
              height={150}
              className="mx-auto mt-2"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
