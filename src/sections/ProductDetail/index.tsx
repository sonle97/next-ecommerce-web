import { FaSquareCheck } from 'react-icons/fa6';
import { FaHandPointRight } from 'react-icons/fa';

import Images from './Images';
import DescriptionTabs from './DescriptionTabs';
import RelatedProducts from './RelatedProducts';
import { IProductProps } from '@/components/Product';

import './styles.scss';

const ProductDetail = ({ product }: { product: IProductProps }) => {
  return (
    <>
      <div className="mt-[35px] mb-4">
        <div className="flex items-start xl:flex-row flex-col">
          <div className="xl:w-1/2 w-full">
            <Images />
          </div>
          <div className="xl:w-1/2 xl:pl-10 w-full pl-0 xl:mt-0 mt-8">
            <p className="mb-2 flex items-center gap-2">
              <FaSquareCheck className="text-[#ea9214]" />
              Danh mục: <span className="font-medium">{product.brand}</span>
            </p>

            <div className="mb-2 text-main text-[20px] font-bold">
              {product.name}
            </div>

            <p className="mb-2">
              Mã sản phẩm: <span className="font-semibold">{product.slug}</span>
            </p>

            <div className="bg-[#eaeaea] rounded-[4px] px-4 py-2 flex items-center justify-between">
              <span>
                Giá:{' '}
                <span className="text-red-1 font-bold text-[16px]">
                  {' '}
                  Liên hệ
                </span>
              </span>
              <div className="flex items-center gap-2 cursor-pointer">
                <FaHandPointRight className="text-main" size={20} />
                <span className="font-bold hover:text-red-1 hover:underline">
                  Thêm vào giỏ
                </span>
              </div>
            </div>

            <div className="text-[#ea9214] font-bold text-[20px] my-2">
              Gọi ngay: 0363409382
            </div>

            <div className="mt-4 content-detail-product">
              <p>
                <strong>Thông số sản phẩm:</strong>
              </p>

              <p>
                <i>&nbsp;</i>Dung tích:&nbsp;200ml, 350ml, 450ml, 600ml, 750ml,
                1000ml
              </p>

              <p>
                <strong>Chất liệu:&nbsp;</strong>
              </p>

              <p>100% Giấy thực phẩm+Lớp màng PLA</p>
              <p>
                <strong>Phối kèm nắp</strong>:&nbsp;Nắp bằng trong suốt
              </p>
              <p>
                <strong>Phạm vi sử dụng:</strong>
              </p>

              <p>
                Tô giấy PLA tự phân hủy sinh học, thích hợp với thức ăn nhanh,
                có thể đựng thức ăn chín, thức ăn mang đi
              </p>
              <p>
                <strong>Đặc điểm sản phẩm:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    <i>&nbsp;</i>Sử dụng giấy thực phẩm nguyên chất sinh thái,
                    tiếp cận với thực vật, an toàn
                  </p>
                </li>
                <li>
                  <p>
                    <i>&nbsp;</i>Tráng lớp màng PLA tự phân hủy sinh học, bảo vệ
                    môi trường, an toàn vệ sinh
                  </p>
                </li>
                <li>
                  <p>
                    <i>&nbsp;</i>Kết hợp bộ nắp, đóng gói mang đi chống rò rỉ
                  </p>
                </li>
                <li>
                  <p>
                    <i>&nbsp;</i>Quy cách đa dạng, nhiều lựa chọn, có thể thỏa
                    mãn nhiều nhu cầu của khách hàng
                  </p>
                </li>
              </ul>
              <p>
                <strong>Hoàn cảnh sử dụng:</strong>Cửa hàng thức ăn nhanh, quán
                trà sữa, quán café, cửa hàng đồ uống, cửa hàng bánh ngọt, đồ
                dùng gia đình cao cấp, chuỗi cửa hàng thức ăn,vv
              </p>
              <p>
                <strong>Trường hợp đặc biệt:</strong>Có thể đặt in nhẵn hiệu,
                đối với sản phẩm có quy cách đặt biệt có thể dựa theo yêu cầu
                của khách hàng mở khuôn.
              </p>
            </div>
          </div>
        </div>

        <DescriptionTabs />
        <RelatedProducts />
      </div>
    </>
  );
};

export default ProductDetail;
