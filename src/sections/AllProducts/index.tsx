import Product from '@/components/Product';

import './styles.scss';
import Pagination from '@/components/Pagination';
import TitleSection from '@/components/TitleSection';
import Categories from './Categories';
import { products } from '@/config/data/products';
import { ICategories } from '@/config/data/categories';

interface IAllProducts {
  categorySelected?: ICategories;
}

function AllProducts(props: IAllProducts) {
  const { categorySelected } = props;
  return (
    <section>
      <TitleSection
        title={
          categorySelected && categorySelected.title
            ? categorySelected.title
            : 'Tất cả sản phẩm'
        }
        isLine={false}
      />

      <div className="flex items-start lg:flex-row flex-col">
        <div className="lg:w-1/4 lg:mr-4 lg:mb-0 relative w-full mb-8">
          <Categories categorySelected={categorySelected} />
        </div>
        <div className="lg:w-3/4 w-full">
          <div className="flex items-start items-center min-[550px]:justify-start justify-center sm:gap-[20px] gap-[10px] flex-wrap all-products">
            {products &&
              products.map((product, idx) => (
                <Product key={idx} product={product} />
              ))}
          </div>
          <Pagination />
        </div>
      </div>
    </section>
  );
}
export default AllProducts;
