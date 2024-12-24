"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Categories from "./Categories";
import Mobile from "./NavbarMobile/Mobile";
import ContentMobileMenu from "./NavbarMobile/ContentMobileMenu";
import { useState } from "react";

const NavbarList = [
  { title: "Trang chủ", url: "/" },
  { title: "Giới thiệu", url: "/gioi-thieu" },
  { title: "Cửa hàng", url: "/san-pham" },
  { title: "Dịch vụ in ấn", url: "/dich-vu-in-an" },
  { title: "Tin tức", url: "/tin-tuc" },
  { title: "Liên hệ", url: "/lien-he" },
];

const Navbar = () => {
  const pathName = usePathname();
  const [isShowMenuMobile, setIsShowMenuMobile] = useState(false);

  return (
    <>
      <nav className="shadow-navbar sticky top-0 bg-main z-10 h-[60px]">
        <div className="container items-center h-full lg:flex hidden">
          <Categories />
          <div className="flex items-center xl:gap-6 gap-4 text-white ml-6 font-medium text-base">
            {NavbarList.map((item, idx) => (
              <Link
                key={idx}
                href={item.url}
                className={`rounded-[6px] transition hover:bg-white hover:text-[#5dac46] px-2 py-2 leading-none
                  ${pathName == item.url ? "bg-white text-[#5dac46]" : ""}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <Mobile setIsShowMenuMobile={setIsShowMenuMobile} />
      </nav>

      <ContentMobileMenu
        isShowMenuMobile={isShowMenuMobile}
        setIsShowMenuMobile={setIsShowMenuMobile}
      />
    </>
  );
};

export default Navbar;
