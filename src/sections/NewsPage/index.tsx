import Image from "next/image";
import moment from "moment";

import "./styles.scss";
import { newsCategories, newsList } from "./data";
import TitleSection from "@/components/TitleSection";
import Pagination from "@/components/Pagination";
import Link from "next/link";

const ArticleCard = ({ news }: any) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sm:w-[calc(33.33%_-_11px)] w-[calc(50%_-_9px)] cursor-pointer relative">
      <Link href={`/tin-tuc/1`}>
        <Image
          src={news.image}
          alt={news.title}
          width={300}
          height={200}
          className="object-cover w-full"
        />
        <div className="sm:p-4 p-3">
          <p className="md:text-[17px] text-base font-bold text-black-1 truncate hover:text-main">
            {news.title}
          </p>
          <p className="md:text-[15px] text-sm text-gray-500 mt-2 line-clamp-3	">
            {news.description}
          </p>
        </div>
        <div className="absolute p-4 py-2 top-1.5 left-1.5 min-w-[50px] text-white md:text-[15px] text-sm bg-[#1b74e7] text-center rounded-[8px] font-medium flex items-center justify-center">
          {moment(news.createAt).format("ddd-MM")}
        </div>
      </Link>
    </div>
  );
};

export default function NewsPage() {
  return (
    <div className="container">
      <section>
        <TitleSection title="Tin tức" isLine={false} />
        <div className="flex items-start justify-between gap-8 lg:flex-row flex-col-reverse">
          <div className="lg:w-3/4 w-full">
            <div className="flex items-start gap-4 flex-wrap">
              {newsList.slice(0, 6).map((news) => (
                <ArticleCard key={news.id} news={news} />
              ))}
            </div>

            <Pagination />
          </div>
          <div className="lg:w-1/4 w-full">
            <div className="border border-main rounded-[8px]">
              <p className="bg-main px-3 py-3 rounded-tl-[8px] rounded-tr-[8px] text-white text-[17px] font-bold">
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
    </div>
  );
}
