import Image from "next/image";

function SupportSection() {
  return (
    <section>
      <div className="flex items-center gap-4 justify-between">
        <div className="border p-3 rounded-[10px] border-gray-1 w-1/3">
          <div className="flex items-center">
            <Image src="/sp_home_icon.png" alt="icon" width={60} height={60} />
            <div className="ml-4">
              <h3 className="text-blue-1 mb-2 font-semibold text-lg capitalize">
                Sản phẩm cập nhật liên tục
              </h3>
              <p>
                Sản phẩm đa dạng, nhiều mẫu mã và được cập nhật thường xuyên.
              </p>
            </div>
          </div>
        </div>
        <div className="border p-3 rounded-[10px] border-gray-1 w-1/3">
          <div className="flex items-center">
            <Image src="/sp_car_icon.jpg" alt="icon" width={60} height={60} />
            <div className="ml-4">
              <h3 className="text-blue-1 mb-2 font-semibold text-lg capitalize">
                Ship hàng siêu tốc
              </h3>
              <p>Giao hàng siêu nhanh nội thành HCM chỉ trong 2H.</p>
            </div>
          </div>
        </div>
        <div className="border p-3 rounded-[10px] border-gray-1 w-1/3">
          <div className="flex items-center">
            <Image
              src="/sp_exchange_icon.png"
              alt="icon"
              width={60}
              height={60}
            />
            <div className="ml-4">
              <h3 className="text-blue-1 mb-2 font-semibold text-lg capitalize">
                Đổi trả miễn phí
              </h3>
              <p>
                Chúng tôi hỗ trợ đổi trả miễn phí với hàng lỗi, hàng kém chất
                lượng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SupportSection;
