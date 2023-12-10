"use client";

import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

const content = `Thật tiện lợi khi sử dụng hệ tủ đồ bằng nhôm kính, chẳng hạn như tủ thuốc,
    tủ kệ chứa điện thoại, hay các tủ kệ cho các cửa hàng thời trang. Với sản
    phẩm này khách hàng có thể yên tâm sử dụng mà không lo bị ẩm mốc, cong vênh
    hay mối mọt như các sản phẩm gỗ thông thường, Một ưu điểm nữa khi sử dụng tủ
    nhôm kính là giá thành rẻ hơn rất nhiều so với sản phẩm làm từ các chất liệu
    khác và độ bền thậm chí còn hơn hẳn. Còn rất nhiều sản phẩm từ nhôm kính
    khác mà chúng tôi chưa thể giới thiệu trong bài viết này ngay được, quý
    khách nào có những ý tưởng và giải pháp muốn sử dụng hệ nhôm kính cho không
    gian gia đình mình có thể liên hệ với chúng tôi, chúng tôi sẽ đến tận nơi để
    tư vấn và đưa gia ý tưởng kết hợp cùng với tính năng hợp lý.
    Thật tiện lợi khi sử dụng hệ tủ đồ bằng nhôm kính, chẳng hạn như tủ thuốc,
    tủ kệ chứa điện thoại, hay các tủ kệ cho các cửa hàng thời trang. Với sản
    phẩm này khách hàng có thể yên tâm sử dụng mà không lo bị ẩm mốc, cong vênh
    hay mối mọt như các sản phẩm gỗ thông thường, Một ưu điểm nữa khi sử dụng tủ
    nhôm kính là giá thành rẻ hơn rất nhiều so với sản phẩm làm từ các chất liệu
    khác và độ bền thậm chí còn hơn hẳn. Còn rất nhiều sản phẩm từ nhôm kính
    khác mà chúng tôi chưa thể giới thiệu trong bài viết này ngay được, quý
    khách nào có những ý tưởng và giải pháp muốn sử dụng hệ nhôm kính cho không
    gian gia đình mình có thể liên hệ với chúng tôi, chúng tôi sẽ đến tận nơi để
    tư vấn và đưa gia ý tưởng kết hợp cùng với tính năng hợp lý.
    Thật tiện lợi khi sử dụng hệ tủ đồ bằng nhôm kính, chẳng hạn như tủ thuốc,
    tủ kệ chứa điện thoại, hay các tủ kệ cho các cửa hàng thời trang. Với sản
    phẩm này khách hàng có thể yên tâm sử dụng mà không lo bị ẩm mốc, cong vênh
    hay mối mọt như các sản phẩm gỗ thông thường, Một ưu điểm nữa khi sử dụng tủ
    nhôm kính là giá thành rẻ hơn rất nhiều so với sản phẩm làm từ các chất liệu
    khác và độ bền thậm chí còn hơn hẳn. Còn rất nhiều sản phẩm từ nhôm kính
    khác mà chúng tôi chưa thể giới thiệu trong bài viết này ngay được, quý
    khách nào có những ý tưởng và giải pháp muốn sử dụng hệ nhôm kính cho không
    gian gia đình mình có thể liên hệ với chúng tôi, chúng tôi sẽ đến tận nơi để
    tư vấn và đưa gia ý tưởng kết hợp cùng với tính năng hợp lý.
    Thật tiện lợi khi sử dụng hệ tủ đồ bằng nhôm kính, chẳng hạn như tủ thuốc,
    tủ kệ chứa điện thoại, hay các tủ kệ cho các cửa hàng thời trang. Với sản
    phẩm này khách hàng có thể yên tâm sử dụng mà không lo bị ẩm mốc, cong vênh
    hay mối mọt như các sản phẩm gỗ thông thường, Một ưu điểm nữa khi sử dụng tủ
    nhôm kính là giá thành rẻ hơn rất nhiều so với sản phẩm làm từ các chất liệu
    khác và độ bền thậm chí còn hơn hẳn. Còn rất nhiều sản phẩm từ nhôm kính
    khác mà chúng tôi chưa thể giới thiệu trong bài viết này ngay được, quý
    khách nào có những ý tưởng và giải pháp muốn sử dụng hệ nhôm kính cho không
    gian gia đình mình có thể liên hệ với chúng tôi, chúng tôi sẽ đến tận nơi để
    tư vấn và đưa gia ý tưởng kết hợp cùng với tính năng hợp lý.`;

const ReadMore = ({ content }: { content: string }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <div className={`${isReadMore ? "" : "h-[300px]"} overflow-hidden`}>
        {content}
      </div>

      <div
        onClick={toggleReadMore}
        className="cursor-pointer text-blue-1 text-center relative h-[40px] leading-[40px]"
      >
        <span className="flex items-center justify-center">
          {!isReadMore ? (
            <>
              Xem thêm <MdArrowDropDown size={30} />
            </>
          ) : (
            <>
              Thu gọn <MdArrowDropUp size={30} />
            </>
          )}
        </span>

        {!isReadMore && (
          <div
            className="h-[40px] absolute -top-[35px] w-full"
            style={{
              background: `linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))`,
            }}
          />
        )}
      </div>
    </>
  );
};

const DescriptionProduct = () => <ReadMore content={content} />;
export default DescriptionProduct;
