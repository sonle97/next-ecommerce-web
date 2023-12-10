import { ReactNode } from "react";

const ButtonBuyNow = () => {
  return (
    <button className="text-white bg-blue-3 hover:bg-blue-5 text-[15px] rounded-[8px] px-[12px] py-[10px] leading-none">
      Mua ngay
    </button>
  );
};

const Button = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`focus:outline-nones text-white rounded-[4px] text-base py-[7px] px-[15px] ${className}`}
    >
      {children}
    </button>
  );
};

export { ButtonBuyNow, Button };
