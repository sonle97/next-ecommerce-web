import { StaticImageData } from "next/image";
import productImage from "@/images/product1.jpg";

export interface ICategoriesData {
  image: string | StaticImageData;
  urlImage: string;
  name: string;
}
export const CategoriesData: ICategoriesData[] = [
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
  {
    image: productImage,
    urlImage: "images/products/product-image.jpg",
    name: "Mồi Cá Giả TD70 Lure Star",
  },
];
