import Image from "next/image";
import React from "react";

const InfoPayments = () => (
  <div className="flex items-start gap-16 mt-2">
    <div className="border-r border-gray-2 pr-16">
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
        width={150}
        height={150}
        alt="qr_bank"
        className="mt-2 rounded-lg mx-auto border border-black-2 p-4"
      />
    </div>
    <div>
      <p className="font-medium my-2">MoMo:</p>
      <p>
        - Tên: <b>Lê Quang Sơn</b>
      </p>
      <p>
        - Số điện thoại: <b>0347366345</b>
      </p>
      <br />
      <Image
        src="/qr_momo.jpg"
        width={150}
        height={150}
        alt="qr_bank"
        className="mt-1.5 rounded-lg mx-auto border border-black-2 p-4"
      />
    </div>
  </div>
);

export default InfoPayments;
