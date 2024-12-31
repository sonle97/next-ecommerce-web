"use client";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { FiSearch } from "react-icons/fi";
import styles from "./styles.module.scss";
import SearchResults from "./SearchResults";

export const dataSearch = [
  {
    id: 1,
    title: "test",
    category: "category a",
  },
  {
    id: 2,
    title: "test",
    category: "category a",
  },
  {
    id: 3,
    title: "test",
    category: "category a",
  },
  {
    id: 4,
    title: "test",
    category: "category a",
  },
  {
    id: 5,
    title: "test",
    category: "category a",
  },
  {
    id: 6,
    title: "test",
    category: "category a",
  },
];

function SearchBar() {
  const [searchValue, setSearchValueInput] = useState("");
  const [isSearchResultPanelOpen, setIsSearchResultPanelOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);

  const handleChangeSearchValue = (value: string) => {
    setSearchValueInput(value);
    if (!value) {
      setIsSearchResultPanelOpen(false);
    }
  };

  const handleSearch = () => {
    if (!searchValue.trim()) {
      return;
    }

    setSearching(true);
    setTimeout(() => {
      setSearchResults(dataSearch);
      setIsSearchResultPanelOpen(true);
      setSearching(false);
    }, 2000);
  };

  const handleOpenSearchResultPanel = (isOpen: boolean) => {
    setIsSearchResultPanelOpen(isOpen);
  };

  return (
    <div className="relative">
      <div className={`flex items-center ${styles.search_bar}`}>
        <input
          className=""
          placeholder="Tìm kiếm danh mục, sản phẩm..."
          onChange={(e) => handleChangeSearchValue(e.target.value)}
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

      {isSearchResultPanelOpen && (
        <SearchResults
          searchResults={searchResults}
          handleOpenSearchResultPanel={handleOpenSearchResultPanel}
        />
      )}
    </div>
  );
}
export default SearchBar;
