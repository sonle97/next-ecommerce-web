import { information } from "@/config/data/information";
import Image from "next/image";

export default function Intro() {
  return (
    <main>
      <Image
        src="/images/bao-ve-moi-truong.png"
        alt="ly-xanh-73"
        width={1920}
        height={500}
        className="max-w-full max-h-[500px] object-cover object-center"
      />

      <div
        className="bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: "url(/images/background-gioithieu.png)",
        }}
      >
        <section className="container px-4">
          <p className="text-[24px] text-center font-bold text-green-4 mb-8 sm:text-[40px] text-[35px] font-[cursive]">
            {information.shopName}
          </p>

          <h2 className="text-main sm:text-left text-center sm-[text-25px] text-[20px] sm:[mb-8] mb-4">
            LỊCH SỬ PHÁT TRIỂN
          </h2>
          <p className="mb-4">
            {information.shopName} chuyên thiết kế và cung cấp các sản phẩm bao
            bì thực phẩm cho ngành thức ăn nhanh. {information.shopName} có
            nhiều năm kinh nghiệm sản xuất và cung cấp một số mặt hàng bao bì ra
            thị trường quốc tế. Hiện nay, chúng tôi mở rộng kinh doanh tất cả
            các sản phẩm bao bì và phục vụ nhu cầu trong nước.
          </p>
          <p className="lg:mb-[70px] mb-[40px]">
            Sau 5 năm hoạt động, {information.shopName} dần khẳng định vị thế
            của mình trên thị trường với hơn 300 mã sản phẩm cho 10,000 khách
            hàng ở khắp cả nước.
          </p>
          <div className="flex items-center justify-between lg:flex-row flex-col-reverse">
            <div className="lg:mr-10 lg:pr-4">
              <p className="mb-4">
                <strong>Đối với khách hàng:</strong> Cung cấp cho các nhà hàng,
                quán ăn khắp cả nước tiếp cận với dòng sản phẩm đẹp, hiện đại,
                thân thiện môi trường với giá thành tiết kiệm và hợp lý nhất.
                Với sản lượng tăng qua các năm, chúng tôi mong muốn giảm giá
                thành cho khách hàng. Chúng tôi cũng mong muốn cùng đồng hành
                với các nhà hàng, quán ăn, các chuỗi như những người bạn thân
                thiết – cùng thực hiện các dự án xã hội, mang những điều tốt đẹp
                hơn cho cuộc sống.
              </p>

              <p className="mb-4">
                <strong>Đối với ngành nghề:</strong> Cung cấp cho các nhà hàng,
                quán ăn khắp cả nước tiếp cận với dòng sản phẩm đẹp, hiện đại,
                thân thiện môi trường với giá thành tiết kiệm và hợp lý nhất.
                Với sản lượng tăng qua các năm, chúng tôi mong muốn giảm giá
                thành cho khách hàng. Chúng tôi cũng mong muốn cùng đồng hành
                với các nhà hàng, quán ăn, các chuỗi như những người bạn thân
                thiết – cùng thực hiện các dự án xã hội, mang những điều tốt đẹp
                hơn cho cuộc sống.
              </p>
            </div>
            <div
              className="lg:w-[300px] lg:min-w-[300px] lg:h-[300px] sm:w-[200px] sm:min-w-[200px] sm:h-[200px] 
                w-[200px] min-w-[200px] h-[70px] p-4
                font-bold font-[cursive] rounded-full lg:text-[50px] sm:text-[35px] text-[30px] bg-white text-green-4 
                flex items-center justify-center shadow-product-item text-center lg:mb-0 mb-6"
            >
              Tầm nhìn
            </div>
          </div>

          <div className="flex items-center justify-between lg:flex-row flex-col lg:mt-10 mt-6">
            <div
              className="lg:w-[300px] lg:min-w-[300px] lg:h-[300px] sm:w-[200px] sm:min-w-[200px] sm:h-[200px] 
                w-[200px] min-w-[200px] h-[70px] p-4
                font-bold font-[cursive] rounded-full lg:text-[50px] sm:text-[35px] text-[30px] bg-white text-green-4 
                flex items-center justify-center shadow-product-item text-center lg:mb-0 mb-6"
            >
              Sứ mệnh
            </div>
            <div className="lg:ml-10 lg:pl-4">
              <p className="mb-4">
                <strong>Sản phẩm: </strong>Cung cấp các mẫu bao bì thực phẩm
                dùng 1 lần thân thiện môi trường đến với khách hàng.
              </p>

              <p className="mb-4">
                <strong>Khách hàng: </strong>Mang những giá trị tốt đẹp tới công
                nhân viên, khách hàng, người sử dụng.
              </p>
            </div>
          </div>

          <h1 className="lg:mt-10 mt-6 font-[cursive] text-center text-green-4 lg:text-[55px] sm:text-[35px] text-[30px]">
            GIÁ TRỊ CỐT LÕI
          </h1>

          <div className="flex items-center justify-between lg:gap-8 gap-4 mt-8 mb-6 sm:flex-row flex-col">
            <div className="text-center">
              <Image
                src="/images/infomations/icon-1.png"
                alt="icon"
                width={85}
                height={85}
                className="mx-auto"
              />
              <p className="font-bold mt-3">
                Nguyên vật liệu thân thiện môi trường
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/infomations/icon-2.png"
                alt="icon"
                width={85}
                height={85}
                className="mx-auto"
              />
              <p className="font-bold mt-3">
                Sản xuất theo quy trình chất lượng
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/infomations/icon-3.webp"
                alt="icon"
                width={85}
                height={85}
                className="mx-auto"
              />
              <p className="font-bold mt-3">
                Phục vụ khách hàng nhanh, nhiệt tình
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/infomations/icon-4.png"
                alt="icon"
                width={85}
                height={85}
                className="mx-auto"
              />
              <p className="font-bold mt-3">
                Cam kết mức giá cả tốt nhất cho khách hàng
              </p>
            </div>
            <div className="text-center">
              <Image
                src="/images/infomations/icon-5.png"
                alt="icon"
                width={85}
                height={85}
                className="mx-auto"
              />
              <p className="font-bold mt-3">
                Đồng hành cùng sự phát triển của khách hàng
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
