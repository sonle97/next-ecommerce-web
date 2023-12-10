"use client";

import React from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

import { useWindowScrollPositions } from "@/hooks/useWindowScrollPositions";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const ButtonScrollOnTop = (props: any) => {
  const { className } = props;
  const { scrollY } = useWindowScrollPositions();

  const isShowButtonScrollToTop = scrollY > 40;

  return (
    <div
      className={`${isShowButtonScrollToTop ? "opacity-50" : "opacity-0"} ${
        className && className
      } bg-blue-1 w-[40px] h-[35px] fixed bottom-[10px] right-[20px] rounded-[5px]
      border-0 flex justify-center items-center cursor-pointer hover:${
        isShowButtonScrollToTop ? "opacity-100" : "opacity-0"
      } transition-opacity`}
      onClick={scrollToTop}
    >
      <FaAngleDoubleUp className="icon-double-up text-[17px] text-white" />
    </div>
  );
};

export default ButtonScrollOnTop;
