import Link from "next/link";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiZalo } from "react-icons/si";
import { HiPhone } from "react-icons/hi";
import { information } from "@/config/data/information";

function TopBar() {
  return (
    <div className="bg-gradient-to-b from-blue-7 to-blue-8 py-2 text-white">
      <div className="container flex items-center justify-between text-base">
        <div className="w-1/2">
          <div className="w-full text-white py-2 overflow-hidden relative">
            <div className="marquee flex w-max">
              <p className="mx-5">
                🔥 Chào mừng bạn đến với website của chúng tôi!
              </p>
              <p className="mx-5">🚀 Giảm giá sốc 50% hôm nay!</p>
              <p className="mx-5">💥 Mua 1 tặng 1 cho đơn hàng trên 500K!</p>
              <p className="mx-5">🎁 Nhập mã SALE50 để nhận ưu đãi ngay!</p>

              <p className="mx-5">
                🔥 Chào mừng bạn đến với website của chúng tôi!
              </p>
              <p className="mx-5">🚀 Giảm giá sốc 50% hôm nay!</p>
              <p className="mx-5">💥 Mua 1 tặng 1 cho đơn hàng trên 500K!</p>
              <p className="mx-5">🎁 Nhập mã SALE50 để nhận ưu đãi ngay!</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href={`tel:${information.phones[0]}`}>
            <HiPhone
              className="text-white opacity-100 hover:opacity-80"
              size={22}
            />
          </Link>
          <Link href={`mailto:${information.emails[0]}`}>
            <BiLogoGmail
              className="text-white opacity-100 hover:opacity-80"
              size={20}
            />
          </Link>
          <Link href={information.facebook} target="_blank">
            <FaFacebookF
              className="text-white opacity-100 hover:opacity-80"
              size={20}
            />
          </Link>
          <Link href={information.tiktok} target="_blank">
            <FaTiktok
              className="text-white opacity-100 hover:opacity-80"
              size={20}
            />
          </Link>
          <Link href={information.zalo} target="_blank">
            <SiZalo
              className="text-white opacity-100 hover:opacity-80"
              size={33}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
