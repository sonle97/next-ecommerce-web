import React from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { BsCart4 } from "react-icons/bs";
import Logo from "../../SearchSection/Logo";

interface IMobile {
  setIsShowMenuMobile: (value: boolean) => void;
}

const Mobile = (props: IMobile) => {
  const { setIsShowMenuMobile } = props;
  return (
    <div className="container h-full lg:hidden flex items-center justify-between">
      <HiBars3
        size={30}
        className="cursor-pointer text-white"
        onClick={() => setIsShowMenuMobile(true)}
      />
      <Logo />
      <div className="flex items-center gap-4 sm:gap-5">
        <IoIosSearch className="text-white mx-auto cursor-pointer" size={28} />
        <div className="relative cursor-pointer">
          <BsCart4 size={28} className="text-white" />
          <div
            className="absolute -top-[5px] -right-[3px] border rounded-full text-white bg-red-1 
              w-5 h-5 flex items-center justify-center text-xs"
          >
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
