import { IoCloseOutline } from 'react-icons/io5';
import { TfiAngleRight } from 'react-icons/tfi';

import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface ISearchResults {
  searchResults: any[];
  handleOpenSearchResultPanel: Function;
}

const SearchResults = (props: ISearchResults) => {
  const { searchResults, handleOpenSearchResultPanel } = props;

  return (
    <div className={styles.search_result_wrapper}>
      <div className="flex items-center justify-between my-2 pl-[10px]">
        <p>
          {searchResults.length > 0
            ? `${searchResults.length} sản phẩm được tìm thấy`
            : ''}
        </p>
        <IoCloseOutline
          size={30}
          className="ml-auto cursor-pointer"
          onClick={() => handleOpenSearchResultPanel(false)}
        />
      </div>
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
                <TfiAngleRight
                  className="text-main ml-auto hover:text-red-1"
                  size={22}
                />
              </div>
            </Link>
          ))
        ) : (
          <>
            <p className="text-center italic">Không tìm thấy sản phẩm nào.</p>
            <Image
              src="/images/no-result-search-icon.jpg"
              alt="no-result"
              width={200}
              height={200}
              className="mx-auto mt-2"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
