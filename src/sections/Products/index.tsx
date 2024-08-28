import Product from "@/components/Product";
import TitleCategory from "@/components/TitleCategory";
import productImage from "@/images/product1.jpg";
import { products } from "../AllProducts";

const data = [
  {
    category: {
      name: "Máy câu cá",
      url: "",
    },
    products,
  },
  {
    category: {
      name: "Máy câu cá",
      url: "",
    },
    products,
  },
  {
    category: {
      name: "Máy câu cá",
      url: "",
    },
    products,
  },
  {
    category: {
      name: "Máy câu cá",
      url: "",
    },
    products,
  },
];

const ProductList = () => {
  return (
    <>
      {data.map((item, idx: number) => {
        return (
          <section key={idx}>
            {item.category && <TitleCategory category={item.category} />}
            <div className="flex items-start gap-x-6 gap-y-8 flex-wrap">
              {item.products &&
                item.products.map((product, idx) => (
                  <Product product={product} key={idx} />
                ))}
            </div>
          </section>
        );
      })}
    </>
  );
};

export default ProductList;
