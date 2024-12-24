"use client";

import React, { useEffect } from "react";
import { GoChevronRight } from "react-icons/go";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CategoriesData } from "@/sections/HomePage/Categories/data";
import Logo from "../../SearchSection/Logo";
import image from "next/image";

interface IContentMobileMenu {
  isShowMenuMobile: boolean;
  setIsShowMenuMobile: (value: boolean) => void;
}

const menus = [
  { title: "Trang chủ", url: "/" },
  { title: "Giới thiệu", url: "/gioi-thieu" },
  { title: "Cửa hàng", url: "/san-pham" },
  { title: "Dịch vụ in ấn", url: "/dich-vu-in-an" },
  { title: "Tin tức", url: "/tin-tuc" },
  { title: "Liên hệ", url: "/lien-he" },
];

const ContentMobileMenu = (props: IContentMobileMenu) => {
  const { isShowMenuMobile, setIsShowMenuMobile } = props;
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (isShowMenuMobile) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isShowMenuMobile]);

  return (
    <div
      className={`w-full h-full bg-gray-1 fixed top-0 z-50 transition-all duration-300 overflow-y-auto ${
        isShowMenuMobile ? "left-0" : "-left-[100%]"
      }`}
    >
      <div className="flex items-center justify-between px-[20px] h-[60px] bg-main text-white">
        <div />
        <Logo />
        <GoChevronRight
          size={30}
          className="cursor-pointer"
          onClick={() => setIsShowMenuMobile(false)}
        />
      </div>

      <div className="flex flex-col bg-white items-start justify-start overflow-y-auto">
        {menus.map((menu, index) => (
          <div
            className={`flex items-center justify-between w-full py-2 px-6 border-b border-gray-1 cursor-pointer hover:text-[#5dac46]
                  ${pathName == menu.url ? " text-[#5dac46]" : ""}`}
            key={index}
            onClick={() => {
              router.push(menu.url);
              setIsShowMenuMobile(false);
            }}
          >
            <span className="text-base font-medium">{menu.title}</span>
            <GoChevronRight size={20} />
          </div>
        ))}
      </div>

      <div className="bg-white mt-1 h-full">
        <div className="flex items-start gap-3 flex-wrap p-5">
          {CategoriesData.map((category, index) => (
            <Link
              key={index}
              href="/"
              className="relative flex items-center px-3 justify-center md:w-[calc(33%_-_6px)] w-[calc(50%_-_6px)]
                h-[100px] rounded-[8px] cursor-pointer bg-cover bg-center bg-no-repeat text-base font-bold text-white"
              style={{
                backgroundImage: `url(${category.urlImage})`,
              }}
            >
              <i>{category.name}</i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentMobileMenu;
