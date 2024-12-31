import Image from "next/image";

const InfoPayments = () => (
  <div className="flex items-start sm:gap-16 gap-4 mt-2 sm:flex-row flex-col">
    <div className="sm:border-r sm:border-gray-2 sm:w-1/2 w-full">
      <p className="font-medium my-2">Ngân Hàng Vietcombank:</p>
      <p>
        - Chủ tài khoản: <b>LE QUANG SON</b>
      </p>
      <p>
        - Số tài khoản: <b>0381000597930</b>
      </p>
      <p>
        - Chi nhánh: <b>Vietcombank Thủ Đức</b>{" "}
      </p>
      <Image
        src="/qr_bank.jpg"
        width={100}
        height={100}
        alt="qr_bank"
        className="mt-4 h-[250px] rounded-lg mx-auto object-none border border-black-2 p-4 sm:w-1/2 sm:w-auto w-full"
      />
    </div>
    <div className="sm:w-1/2 w-full">
      <p className="font-medium my-2">MoMo:</p>
      <p>
        - Tên: <b>Lê Quang Sơn</b>
      </p>
      <p>
        - Số điện thoại: <b>0347.366.345</b>
      </p>
      <br />
      <Image
        src="/qr_momo.jpg"
        width={200}
        height={200}
        alt="qr_bank"
        className="sm:mt-4 mt-1 rounded-lg mx-auto border border-black-2 p-4 sm:w-auto w-full"
      />
    </div>
  </div>
);

export default InfoPayments;
