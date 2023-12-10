import Link from "next/link";
import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { SiZalo } from "react-icons/si";
import { HiPhone } from "react-icons/hi";
import { PhoneNumber } from "@/constants";

function TopBar() {
  return (
    <div className="bg-blue-1 py-1 text-white">
      <div className="container flex items-center justify-between text-sm">
        <span className="uppercase flex items-center font-medium">
          Ly xanh |&nbsp;
          <HiPhone size={18} />
          &nbsp;
          <a
            href={`tel:${PhoneNumber}`}
            className="text-green-1 flex items-center opacity-80 hover:opacity-100"
          >
            {PhoneNumber}
          </a>{" "}
        </span>
        <div className="flex items-center gap-4">
          <Link href="thanh-toan" className="opacity-80 hover:opacity-100">
            Thanh toán
          </Link>
          <Link href="lien-he" className="opacity-80 hover:opacity-100">
            Địa chỉ
          </Link>
          <Link href="lien-he">
            <BiLogoGmail
              className="text-green-1 opacity-100 hover:opacity-80"
              size={18}
            />
          </Link>
          <Link href="lien-he">
            <FaFacebookF
              className="text-green-1 opacity-100 hover:opacity-80"
              size={17}
            />
          </Link>
          <Link href="lien-he">
            <FaTiktok
              className="text-green-1 opacity-100 hover:opacity-80"
              size={16}
            />
          </Link>
          <Link href="lien-he">
            <SiZalo
              className="text-green-1 opacity-100 hover:opacity-80"
              size={28}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default TopBar;
