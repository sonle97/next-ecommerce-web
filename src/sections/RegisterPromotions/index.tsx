import { Input, TextArea } from "@/components/ui/Input";

const RegisterPromotions = () => {
  return (
    <section className="mt-4">
      <form className="form rounded-xl bg-blue-6 py-8 px-10 text-white">
        <h2 className="text-white text-center mb-0">Đăng ký nhận báo giá</h2>
        <p className="mt-1 mb-8 text-base text-center">
          <b>Ly Xanh</b> luôn sẵn sàng cho mọi đơn hàng và giải đáp các thắc mắc
          một cách nhanh chóng và hài lòng nhất.
        </p>
        <div className="flex justify-between">
          <div className="mr-10">
            <Input placeholder="Họ và Tên" name="name" type="text" required />
            <Input
              placeholder="Số điện thoại"
              name="phone"
              type="tel"
              required
            />
            <Input placeholder="Email" name="email" type="email" required />
          </div>
          <TextArea
            rows="4"
            cols="50"
            name="message"
            placeholder="Nội dung cần tư vấn..."
          />
        </div>
        <button
          className="mt-4 px-[14px] py-[8px] bg-white text-black-1 flex ml-auto
          font-bold rounded-[6px]"
        >
          Đăng ký
        </button>
      </form>
    </section>
  );
};
export default RegisterPromotions;
