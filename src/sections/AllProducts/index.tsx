import React from "react";

import productImage from "@/images/product1.jpg";

import Product from "@/components/Product";
import Breadcrumb from "@/components/Breadcrumb";

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
    slug: "7",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "8",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "9",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "10",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "11",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "12",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "13",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
    slug: "14",
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
    <>
      <div className="flex items-start">
        <div className="w-1/4 mr-4"></div>
        <div className="w-3/4">
          <Breadcrumb breadcrumb="" />
          <div className="flex items-start gap-x-6 gap-y-8 flex-wrap">
            {products &&
              products.map((product, idx) => (
                <Product key={idx} product={product} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default AllProducts;
