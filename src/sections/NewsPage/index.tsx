import Image from 'next/image';
import moment from 'moment';

import './styles.scss';
import { newsList } from './data';
import TitleSection from '@/components/TitleSection';
import Link from 'next/link';

const ArticleCard = ({ news }: any) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden 
      lg:w-[calc(25%_-_18px)] sm:w-[calc(33.3%_-_16px)] w-[70%] 
      cursor-pointer relative"
    >
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
          {moment(news.createAt).format('ddd-MM')}
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
        <div className="flex items-center justify-center md:gap-6 gap-4 my-4 md:mb-10 mb-7 flex-wrap">
          <Link
            href="/tin-tuc"
            className="border border-slate-300 bg-[#f7f7f7] font-medium hover:text-main rounded-[50px] md:px-6 px-4 py-2"
          >
            Tin sản phẩm
          </Link>
          <Link
            href="/tin-tuc"
            className="border border-slate-300 bg-[#f7f7f7] font-medium hover:text-main rounded-[50px] md:px-6 px-4 py-2"
          >
            Tin môi trường
          </Link>
          <Link
            href="/tin-tuc"
            className="border border-slate-300 bg-[#f7f7f7] font-medium hover:text-main rounded-[50px] md:px-6 px-4 py-2"
          >
            Tin khuyến mãi
          </Link>
          <Link
            href="/tin-tuc"
            className="border border-slate-300 bg-[#f7f7f7] font-medium hover:text-main rounded-[50px] md:px-6 px-4 py-2"
          >
            Chưa phân loại
          </Link>
        </div>
        <div className="flex items-start gap-6 flex-wrap sm:justify-start justify-center">
          {newsList.slice(0, 6).map((news) => (
            <ArticleCard key={news.id} news={news} />
          ))}
        </div>
      </section>
    </div>
  );
}
