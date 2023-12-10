import Link from "next/link";
import { FaFacebookF, FaHome, FaTiktok } from "react-icons/fa";
import { MdOutlineChevronRight } from "react-icons/md";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import Image from "next/image";
import { BsInstagram, BsYoutube } from "react-icons/bs";

interface ItemLinkProps {
  label: string;
  url: string;
}

const ItemLink = (props: ItemLinkProps) => {
  const { label, url } = props;
  return (
    <Link
      href={url}
      className="text-[15px] flex items-center hover:text-green-2 mb-3 last:mb-0"
    >
      <MdOutlineChevronRight size={20} className="mr-2 text-green-2" />
      <span>{label}</span>
    </Link>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-blue-4 text-white rounded-t-[60px] mt-8">
        <div className="container py-[40px] flex items-start justify-between">
          <div>
            <h3>Giới thiệu</h3>
            <ItemLink label="Giới thiệu" url="" />
            <ItemLink label="Đối tác" url="" />
            <ItemLink label="Sản phẩm" url="" />
            <ItemLink label="Tuyển dụng" url="" />
            <ItemLink label="Liên hệ" url="" />

            <Image
              className="mt-8 rounded-lg"
              src="/zalo_qrcode.jpg"
              alt="qrcode"
              width={120}
              height={120}
            />
          </div>
          <div>
            <h3>HỖ TRỢ KHÁCH HÀNG</h3>
            <ItemLink label="Câu hỏi thường gặp" url="" />
            <ItemLink label="Hướng dẫn đặt hàng" url="" />
            <ItemLink label="Hướng dẫn thanh toán" url="" />
            <ItemLink label="Chính sách bảo hành" url="" />
            <ItemLink label="Chính sách đổi trả hàng hóa" url="" />
            <p className="font-bold mt-8">Kết nối với chúng tôi</p>
            <div className="flex items-center gap-4 mt-3">
              <FaFacebookF size={25} className="cursor-pointer" />
              <BsInstagram size={25} className="cursor-pointer" />
              <FaTiktok size={25} className="cursor-pointer" />
              <BsYoutube size={25} className="cursor-pointer" />
            </div>
          </div>
          <div>
            <h3>LIÊN HỆ</h3>
            <ul>
              <li className="flex items-start mb-3">
                <FaHome className="mr-2 text-green-2" size={20} />
                Địa chỉ: ... .... .... .... ...
                <br />
                ... ... ...
              </li>
              <li className="flex items-center mb-3">
                <AiFillPhone className="mr-2 text-green-2" size={20} />
                Điện thoại: 034736634
              </li>
              <li className="flex items-center mb-3">
                <AiOutlineMail className="mr-2 text-green-2" size={20} />
                Email1: son.lequang97@gmail.com
              </li>
              <li className="flex items-center">
                <AiOutlineMail className="mr-2 text-green-2" size={20} />
                Email2: sale.xxx@gmail.com
              </li>
              <li className="flex items-center mt-8">
                <Image
                  src="/noti_logo.png"
                  alt="logo"
                  width={200}
                  height={75}
                />
              </li>
            </ul>
          </div>
          <div>
            <h3>Fanpage</h3>
            <iframe
              src="https://www.facebook.com/son.lequang.97"
              width="100%"
              height="300px"
            ></iframe>
          </div>
        </div>

        <div className="container border-t w-full text-center text-white text-sm py-4">
          Copyright 2023 © Thiết kế website <b>LyXanh</b> bởi Mr. SonLe
          (0347366345)
        </div>
      </footer>
    </>
  );
};

export default Footer;
