import { StaticImageData } from "next/image";
import productImage from "@/images/product1.jpg";

export interface SellingDataProps {
  image: string | StaticImageData;
  name: string;
  oldPrice: string;
  newPrice: string;
  brand: string;
}
export const SellingData: SellingDataProps[] = [
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
    oldPrice: "",
    newPrice: "1.650.000",
    brand: "Kuchen",
  },
];
