import './styles.scss';
import Product from '@/components/Product';
import TitleSection from '@/components/TitleSection';
import Categories from './Categories';
import { ICategory, IProduct } from '@/config/entities';
import config from '@/config';

interface IAllProducts {
  categorySelected?: ICategory;
  categories: ICategory[];
}

const fetchProductsByCategoryId = async (categoryId?: number) => {
  try {
    let url = `${config.apiServerUrl}/api/products?client=true`;

    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Network response was not ok');
    }

    return res.json();
  } catch (error) {
    return [];
  }
};

async function AllProducts(props: IAllProducts) {
  const { categorySelected, categories } = props;

  const products: IProduct[] = await fetchProductsByCategoryId(
    categorySelected?.id
  );

  return (
    <section>
      <TitleSection
        title={
          categorySelected && categorySelected.name
            ? categorySelected.name
            : 'Tất cả sản phẩm'
        }
        isLine={false}
      />

      <div className="flex items-start lg:flex-row flex-col">
        <div className="lg:w-1/4 lg:mr-4 lg:mb-0 relative w-full mb-8">
          <Categories
            categorySelected={categorySelected}
            categories={categories}
          />
        </div>
        <div className="lg:w-3/4 w-full">
          <div className="flex items-start items-center min-[550px]:justify-start justify-center sm:gap-[20px] gap-[10px] flex-wrap all-products">
            {!!products.length ? (
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))
            ) : (
              <p className="w-full text-center text-base">
                Không có sản phẩm nào
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default AllProducts;
