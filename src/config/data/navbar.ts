import { categories } from './categories';

interface INavbarList {
  title: string;
  url: string;
}

export const NavbarList: INavbarList[] = [
  { title: 'Trang chủ', url: '/' },
  { title: 'Giới thiệu', url: '/gioi-thieu' },
  {
    title: 'Cửa hàng',
    url: '/cua-hang',
  },
  { title: 'Dịch vụ in ấn', url: '/dich-vu-in-an' },
  { title: 'Tin tức', url: '/tin-tuc' },
  { title: 'Liên hệ', url: '/lien-he' },
];
