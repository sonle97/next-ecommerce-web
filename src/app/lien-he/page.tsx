import { TextArea } from "@/components/ui/Input";
import Maps from "@/components/Maps";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

import "./styles.scss";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="container">
      <section>
        <div className="flex items-start justify-between gap-5 xl:flex-row flex-col">
          <div className="xl:w-1/2 w-full">
            <div className="border border-main rounded-[8px]">
              <p className="bg-main px-3 py-3 rounded-tl-[8px] text-center rounded-tr-[8px] text-white text-[17px] font-bold">
                Ly xanh
              </p>
              <div className="px-3 py-3">
                <div className="flex items-center mb-4 mb-0 sm:flex-row flex-col gap-4">
                  <div className="flex items-center gap-3 sm:w-[calc(50%_-_6px)] w-full">
                    <MdLocationOn
                      size={40}
                      className="text-main border border-main rounded-full p-[7px] min-w-[40px]"
                    />
                    <div>
                      <p className="font-bold">Địa chỉ</p>
                      <p>
                        Khu phố Chiêu Liêu, Phường Tân Đông Hiệp, Dĩ An, Bình
                        Dương
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:w-[calc(50%_-_6px)] w-full">
                    <FaClock
                      size={40}
                      className="text-main border border-main rounded-full p-[7px] min-w-[40px]"
                    />
                    <div>
                      <p className="font-bold">Thời gian làm việc</p>
                      <p>8h - 22h</p>
                      <p>Từ thứ 2 đến chủ nhật</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center sm:flex-row flex-col gap-4">
                  <div className="flex items-center gap-3 sm:w-[calc(50%_-_6px)] w-full">
                    <FaPhoneAlt
                      size={40}
                      className="text-main border border-main rounded-full p-[7px] min-w-[40px]"
                    />
                    <div>
                      <p className="font-bold">Hotline/Zalo</p>
                      <span>0347.366.345</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:w-[calc(50%_-_6px)] w-full">
                    <IoMail
                      size={40}
                      className="text-main border border-main rounded-full p-[7px] min-w-[40px]"
                    />
                    <div>
                      <p className="font-bold">Email</p>
                      <span>son.lequang97@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-main rounded-[8px] mt-6">
              <p className="bg-main px-3 py-3 rounded-tl-[8px] text-center rounded-tr-[8px] text-white text-[17px] font-bold">
                Liên hệ với chúng tôi
              </p>
              <form className="form rounded-xl p-4 text-white text-center">
                <Input
                  placeholder="Họ và Tên"
                  name="name"
                  type="text"
                  required
                />
                <Input
                  placeholder="Số điện thoại"
                  name="phone"
                  type="tel"
                  required
                />
                <Input placeholder="Email" name="email" type="email" required />

                <TextArea
                  rows="4"
                  cols="50"
                  name="message"
                  placeholder="Nội dung cần tư vấn..."
                />

                <Button
                  className="mt-4 px-[14px] py-[8px] bg-main text-white flex ml-auto
                  font-bold rounded-[6px]"
                >
                  Gửi thông tin
                </Button>
              </form>
            </div>
          </div>
          <div className="xl:w-1/2 w-full">
            <Maps />
          </div>
        </div>
      </section>
    </div>
  );
}
