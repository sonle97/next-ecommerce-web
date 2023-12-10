"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Categories from "./Categories";
import { PhoneNumber } from "@/constants";

const NavbarList = [
  { title: "Trang chủ", url: "/" },
  { title: "Giới thiệu", url: "/gioi-thieu" },
  { title: "Cửa hàng", url: "/san-pham" },
  { title: "Dịch vụ in ấn", url: "/in-an" },
  { title: "Tin tức", url: "/tin-tuc" },
  { title: "Liên hệ", url: "/lien-he" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="border border-gray-3 shadow-navbar sticky top-0 bg-white z-10">
      <div className="container flex items-center">
        <Categories />
        <div className="flex items-center gap-5 text-blue-1 ml-6">
          {NavbarList.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className={`hover:text-red-1 capitalize ${
                pathName == item.url ? "active" : ""
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <a
          className="rounded-button px-6 text-base py-2 bg-blue-1 text-white ml-auto transition hover:bg-blue-5"
          href={`tel:${PhoneNumber}`}
        >
          {PhoneNumber}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
