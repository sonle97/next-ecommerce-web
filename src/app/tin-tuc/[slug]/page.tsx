import { Metadata } from "next";
import "./styles.scss";
import { newsCategories } from "@/sections/NewsPage/data";
import SimilarArticlesPage from "../[components]/SimilarArticlesPage";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Sản phẩm của Ly xanh",
  icons: "ly-icon.png",
};

const NewsDetail = () => {
  return (
    <div className="container">
      <section className="new-detail-container">
        <div className="text-[26px] font-bold mb-2">Chi tiết tin tức</div>

        <div className="text-[14px] mb-4">
          Đã đăng trên 19 Tháng mười, 2023 bởi sonpack.com
        </div>

        <div className="flex items-start lg:gap-[30px] gap-4 lg:flex-row flex-col">
          <div className="lg:w-3/4 w-full">
            <div id="toc-container">
              <p className="toc-title">Nội dung chính</p>
              <div className="toc-content">
                <ul className="ez-toc-list ez-toc-list-level-1 ">
                  <li className="ez-toc-page-1 ez-toc-heading-level-2">
                    <a
                      className="ez-toc-link ez-toc-heading-1"
                      href="#Ba_bau_uong_nuoc_ep_rau_ma_duoc_khong"
                      title="Bà bầu uống nước ép rau má được không?"
                    >
                      Bà bầu uống nước ép rau má được không?
                    </a>
                  </li>
                  <li className="ez-toc-page-1 ez-toc-heading-level-2">
                    <a
                      className="ez-toc-link ez-toc-heading-2"
                      href="#Tac_dung_cua_rau_ma_toi_thai_ky"
                      title="Tác dụng của rau má tới thai kỳ"
                    >
                      Tác dụng của rau má tới thai kỳ
                    </a>
                    <ul className="ez-toc-list-level-3">
                      <li className="ez-toc-heading-level-3">
                        <a
                          className="ez-toc-link ez-toc-heading-3"
                          href="#Giam_cang_thang_met_moi_lo_au"
                          title="Giảm căng thẳng, mệt mỏi, lo âu"
                        >
                          Giảm căng thẳng, mệt mỏi, lo âu
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-3">
                        <a
                          className="ez-toc-link ez-toc-heading-4"
                          href="#Loi_tieu"
                          title="Lợi tiểu"
                        >
                          Lợi tiểu
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-3">
                        <a
                          className="ez-toc-link ez-toc-heading-5"
                          href="#Ha_sot"
                          title="Hạ sốt"
                        >
                          Hạ sốt
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-3">
                        <a
                          className="ez-toc-link ez-toc-heading-6"
                          href="#Ho_tro_duong_tieu_hoa"
                          title="Hỗ trợ đường tiêu hóa"
                        >
                          Hỗ trợ đường tiêu hóa
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-3">
                        <a
                          className="ez-toc-link ez-toc-heading-7"
                          href="#Cai_thien_suc_khoe_lan_da"
                          title="Cải thiện sức khỏe làn da"
                        >
                          Cải thiện sức khỏe làn da
                        </a>
                      </li>
                      <li className="ez-toc-page-1 ez-toc-heading-level-3">
                        <a
                          className="ez-toc-link ez-toc-heading-8"
                          href="#Giup_giam_thoi_gian_hoi_phuc_vet_thuong"
                          title="Giúp giảm thời gian hồi phục vết thương"
                        >
                          Giúp giảm thời gian hồi phục vết thương
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="ez-toc-page-1 ez-toc-heading-level-2">
                    <a
                      className="ez-toc-link ez-toc-heading-9"
                      href="#Nhung_luu_y_cho_ba_bau_khi_su_dung_nuoc_ep_rau_ma"
                      title="Những lưu ý cho bà bầu khi sử dụng nước ép rau má"
                    >
                      Những lưu ý cho bà bầu khi sử dụng nước ép rau má
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-[16px] mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              commodi similique perspiciatis architecto neque omnis odit est
              facilis adipisci nobis laborum dignissimos possimus dolorum, quo
              cum harum voluptatum quibusdam amet.
            </div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>

          <div className="lg:w-1/4 lg:mt-0 mt-2 w-full">
            <div className="border border-main rounded-[8px]">
              <p className="bg-main px-3 py-3 rounded-tl-[8px] rounded-tr-[8px] text-white text-[17px] font-medium">
                Danh mục tin tức
              </p>
              <div className="px-3 py-3">
                <ul className="font-medium">
                  {newsCategories.map((category) => (
                    <li
                      key={category.id}
                      className="py-1 hover:underline cursor-pointer hover:text-[#5dac46]"
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimilarArticlesPage />
    </div>
  );
};

export default NewsDetail;
