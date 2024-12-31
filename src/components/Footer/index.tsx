import Link from 'next/link';
import { FaFacebookF, FaHome, FaTiktok } from 'react-icons/fa';
import { MdOutlineChevronRight } from 'react-icons/md';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import Image from 'next/image';
import { BsInstagram, BsYoutube } from 'react-icons/bs';

interface ItemLinkProps {
  label: string;
  url: string;
}

const ItemLink = (props: ItemLinkProps) => {
  const { label, url } = props;
  return (
    <Link
      href={url}
      className="md:text-[15px] text-sm flex items-center hover:text-green-2 mb-3 last:mb-0"
    >
      <MdOutlineChevronRight size={20} className="mr-2 text-green-2" />
      <span>{label}</span>
    </Link>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-[#292a2d] text-white sm:rounded-t-[60px] rounded-t-[30px] sm:mt-[30px] mt-[20px] text">
        <section className="container py-[40px] px-3 lg:flex hidden items-start justify-between gap-6">
          <div>
            <h3 className="mb-2 capitalize">Giới thiệu</h3>
            <ItemLink label="Giới thiệu" url="/gioi-thieu" />
            <ItemLink label="Sản phẩm" url="/cua-hang" />
            <ItemLink label="Dịch vụ in ấn" url="/dich-vu-in-an" />
            <ItemLink label="Tin tức" url="/tin-tuc" />
            <ItemLink label="Liên hệ" url="/lien-he" />

            <Image
              className="mt-8 rounded-lg"
              src="/zalo_qrcode.jpg"
              alt="qrcode"
              width={120}
              height={120}
            />
          </div>
          <div>
            <h3 className="mb-2 capitalize">Hỗ trợ khách hàng</h3>
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
            <h3 className="mb-2 capitalize">Liên hệ</h3>
            <ul>
              <li className="flex items-start mb-3">
                <FaHome className="mr-2 text-green-2" size={20} />
                Địa chỉ: Khu phố Chiêu Liêu, Phường Tân Đông Hiệp,
                <br /> Dĩ An, Bình Dương
              </li>
              <li className="flex items-center mb-3">
                <AiFillPhone className="mr-2 text-green-2" size={20} />
                <span>Điện thoại: 0347.366.345</span>
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
            <h3 className="mb-2 capitalize">Fanpage</h3>
            <iframe
              src="https://www.facebook.com/son.lequang.97"
              width="250"
              height="250"
            ></iframe>
          </div>
        </section>

        {/* mobile */}
        <section className="container sm:py-[40px] py-[25px] flex flex-col lg:hidden items-start justify-between gap-4 text-sm">
          <div className="flex items-start sm:gap-14 gap-6">
            <div>
              <h3 className="mb-2 capitalize">Giới thiệu</h3>
              <ItemLink label="Giới thiệu" url="" />
              <ItemLink label="Đối tác" url="" />
              <ItemLink label="Sản phẩm" url="" />
              <ItemLink label="Tuyển dụng" url="" />
              <ItemLink label="Liên hệ" url="" />
            </div>
            <div>
              <h3 className="mb-2 capitalize">Hỗ trợ khách hàng</h3>
              <ItemLink label="Câu hỏi thường gặp" url="" />
              <ItemLink label="Hướng dẫn đặt hàng" url="" />
              <ItemLink label="Hướng dẫn thanh toán" url="" />
              <ItemLink label="Chính sách bảo hành" url="" />
              <ItemLink label="Chính sách đổi trả hàng hóa" url="" />
            </div>
            <div className="sm:block hidden">
              <h3 className="mb-2 capitalize">Fanpage</h3>
              <iframe
                src="https://www.facebook.com/son.lequang.97?enablejsapi=1"
                width="150"
                height="150"
                className="sm:w-[150px] sm:h-[150px] w-[100px] h-[100px]"
              />
            </div>
          </div>
          <div className="flex items-end w-full relative my-4">
            <div>
              <h3 className="mb-2 capitalize">Liên hệ</h3>
              <ul>
                <li className="flex items-start mb-3">
                  <FaHome
                    className="mr-2 text-green-2 min-w-[20px]"
                    size={20}
                  />
                  Khu phố Chiêu Liêu, Phường Tân Đông Hiệp, Dĩ An, Bình Dương
                </li>
                <li className="flex items-center mb-3">
                  <AiFillPhone className="mr-2 text-green-2" size={20} />
                  0347.366.345
                </li>
                <li className="flex items-center mb-3">
                  <AiOutlineMail className="mr-2 text-green-2" size={20} />
                  son.lequang97@gmail.com
                </li>
                <li className="flex items-center">
                  <AiOutlineMail className="mr-2 text-green-2" size={20} />
                  sale.xxx@gmail.com
                </li>
              </ul>
            </div>
            <Image
              className="rounded-lg absolute right-0 min-[500px]:right-[25%] bottom-0 min-[350px]:w-[80px] min-[350px]:h-[80px]"
              src="/zalo_qrcode.jpg"
              alt="qrcode"
              width={110}
              height={110}
            />
          </div>
          <div className="flex items-center min-[500px]:justify-start justify-between min-[500px]:gap-10 gap-0 w-full min-[350px]:flex-row flex-col">
            <div>
              <p className="font-bold">Kết nối với chúng tôi</p>
              <div className="flex items-center gap-4 mt-3">
                <FaFacebookF size={25} className="cursor-pointer" />
                <BsInstagram size={25} className="cursor-pointer" />
                <FaTiktok size={25} className="cursor-pointer" />
                <BsYoutube size={25} className="cursor-pointer" />
              </div>
            </div>

            <Image
              src="/noti_logo.png"
              alt="logo"
              width={150}
              height={75}
              className="min-[350px]:mt-0 mt-4"
            />
          </div>
        </section>

        <div className="container border-t w-full text-center text-white text-sm py-4">
          Copyright 2023 © Thiết kế website <b>LyXanh</b> bởi Mr. SonLe
          (0347.366.345)
        </div>
      </footer>
    </>
  );
};

export default Footer;
