import Link from "next/link";
import { BsCart4 } from "react-icons/bs";

function Cart() {
  return (
    <div className="uppercase text-sm font-bold flex items-center text-blue-1 cursor-pointer transition hover:text-red-1">
      Giỏ hàng
      <div className="relative ml-2">
        <BsCart4 size={25} />
        <div
          className="absolute -top-4 right-0.5 border rounded-full text-white bg-red-1 
          w-5 h-5 flex items-center justify-center text-xs"
        >
          1
        </div>
      </div>
    </div>
  );
}
export default Cart;
