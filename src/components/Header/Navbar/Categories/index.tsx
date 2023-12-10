"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { usePathname } from "next/navigation";

import { NavBarProps, navBars, Tab } from "../data";
import styles from "./styles.module.scss";
import { useWindowScrollPositions } from "@/hooks/useWindowScrollPositions";

function Categories() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useWindowScrollPositions();
  const isShowButtonScrollToTop = scrollY > 200;

  const isHomePage = pathname === "/";

  useEffect(() => {
    setIsCategoriesOpen(isHomePage);
  }, [isHomePage]);

  useEffect(() => {
    if (isHomePage) {
      if (isShowButtonScrollToTop) {
        setIsCategoriesOpen(false);
      } else {
        setIsCategoriesOpen(true);
      }
    }
  }, [isShowButtonScrollToTop, isHomePage]);

  return (
    <div className="relative w-1/4">
      <div
        className="flex items-center bg-blue-1 text-white pl-4 py-4 cursor-pointer"
        onClick={() => {
          isHomePage && !isShowButtonScrollToTop
            ? null
            : setIsCategoriesOpen(!isCategoriesOpen);
        }}
      >
        <FaBars className="mr-2" />
        <span className="uppercase font-bold">Danh mục sản phẩm</span>
      </div>
      {isCategoriesOpen && (
        <ul className={styles.nav_categories}>
          {navBars.map((nav: NavBarProps, idx: number) => {
            return (
              <li key={idx}>
                <Link
                  href={nav.url}
                  className={`flex items-center justify-between ${
                    nav.isHot ? "text-red-2" : ""
                  }`}
                >
                  <div className="flex items-center">
                    {nav.title}{" "}
                    {nav.isHot && (
                      <span className="bg-red-2 p-0.5 px-1 text-white text-[10px] font-bold rounded ml-2">
                        Hot
                      </span>
                    )}
                  </div>

                  {nav.subTab && nav.subTab.length && (
                    <BiChevronRight size={20} />
                  )}
                </Link>
                {nav.subTab && nav.subTab.length && (
                  <ul className={styles.subMenu}>
                    {nav.subTab.map((subNav: Tab, idx: number) => (
                      <li key={idx}>
                        <Link href={subNav.url}>{subNav.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Categories;
