import Image from 'next/image';
import MobileSection from './MobileSection';

export const supportSectionData = [
  {
    icon: '/sp_home_icon.png',
    title: 'Cập nhật sản phẩm mới',
    description:
      'Chúng tôi luôn cập nhật sản phẩm mới và đa dạng để đáp ứng nhu cầu của bạn.',
  },
  {
    icon: '/sp_car_icon.jpg',
    title: 'Ship hàng siêu tốc',
    description:
      'Chúng tôi cam kết giao hàng nhanh chóng và hiệu quả trong nội và ngoại thành.',
  },
  {
    icon: '/sp_exchange_icon.png',
    title: 'Đổi trả miễn phí',
    description:
      'Chúng tôi hỗ trợ đổi trả miễn phí với hàng lỗi, hàng kém chất lượng.',
  },
];

function SupportSection() {
  return (
    <section>
      <div className="items-center gap-4 sm:justify-between justify-center sm:flex-nowrap flex-wrap md:flex hidden">
        {supportSectionData.map((item, idx) => (
          <div
            className="border lg:px-4 px-2 lg:py-5 py-2 xl:h-[120px] h-auto rounded-[10px] border-[#BAC9D9] sm:w-1/3 w-full"
            key={idx}
          >
            <div className="flex items-center sm:justify-start justify-center">
              <Image
                src={item.icon}
                alt="icon"
                width={60}
                height={60}
                className="xl:w-[60px] xl:h-[60px] lg:w-[45px] lg:h-[45px] w-[40px] h-[40px]"
              />
              <div className="ml-4">
                <p className="text-main mb-[2px] font-semibold lg:text-lg text-[14px]">
                  {item.title}
                </p>
                <p className="xl:block hidden">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden block">
        <MobileSection />
      </div>
    </section>
  );
}
export default SupportSection;
