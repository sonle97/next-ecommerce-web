import Product from "@/components/Product";

import "./styles.scss";
import Pagination from "@/components/Pagination";
import TitleSection from "@/components/TitleSection";
import Categories from "./Categories";

const productImage = "/images/products/product-image.jpg";

export const products = [
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "1",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "2",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "3",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "4",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "5",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "6",
  },

  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "15",
  },

  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "15",
  },
];

function AllProducts() {
  return (
    <section>
      <TitleSection title="Sản phẩm" isLine={false} />

      <div className="flex items-start lg:flex-row flex-col">
        <div className="lg:w-1/4 lg:mr-4 lg:mb-0 relative w-full mb-8">
          <Categories />
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
