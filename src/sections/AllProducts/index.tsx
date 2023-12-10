import React from "react";

import productImage from "@/images/product1.jpg";

import Product from "@/components/Product";
import Breadcrumb from "@/components/Breadcrumb";

const products = [
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
  {
    image: productImage,
    name: "Mồi Cá Giả TD70 Lure Star",
    oldPrice: "2.000.000",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
];

function AllProducts() {
  // const totalPages = Math.ceil(products.length / 10);

  // function onClickPage(paginateData: any): void {
  //   // ReactPaginate store page index of array
  //   onPageChange(paginateData.selected + 1);
  // }

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
          {/* <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={onClickPage}
          pageRangeDisplayed={5}
          marginPagesDisplayed={1}
          pageCount={products.length}
          previousLabel="<"
          renderOnZeroPageCount={null}
        /> */}
        </div>
      </div>
    </>
  );
}
export default AllProducts;
