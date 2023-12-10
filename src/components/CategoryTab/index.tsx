"use client";

import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import "./styles.module.scss";

import Link from "next/link";

const SubTab = () => {
  return (
    <div className="sub-tab-wrapper">
      <Link href="/" className="text-sm">
        Hộp xốp 1
      </Link>
    </div>
  );
};

const TabItem = () => {
  const [isSubTabOpen, setIsSubTabOpen] = useState(false);
  return (
    <>
      <div
        className="tab-item flex items-center justify-between py-2 
        cursor-pointer"
      >
        <Link href="/" className="text-sm">
          Hộp xốp
        </Link>
        <div onClick={() => setIsSubTabOpen(!isSubTabOpen)}>
          {isSubTabOpen ? (
            <BiChevronUp size={20} className="hover:text-black-0" />
          ) : (
            <BiChevronDown size={20} className="hover:text-black-0" />
          )}
        </div>
      </div>
      {isSubTabOpen && (
        <div className="pl-3">
          <SubTab />
          <SubTab />
          <SubTab />
        </div>
      )}
    </>
  );
};

const CategoryTab = (props: any) => {
  const { className } = props;
  return (
    <div className={`${className && className} categories-wrapper`}>
      <div className="title mb-2 border-b border-gray-1 pb-2">
        DANH MỤC SẢN PHẨM
      </div>
      <div className="tab-wrapper">
        <TabItem />
        <TabItem />
        <TabItem />
        <TabItem />
        <TabItem />
      </div>
    </div>
  );
};

export default CategoryTab;
