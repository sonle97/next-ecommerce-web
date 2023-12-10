export interface Tab {
  title: string;
  url: string;
}

export interface NavBarProps {
  title: string;
  url: string;
  isHot?: boolean;
  subTab?: Tab[];
}

export const navBars: NavBarProps[] = [
  {
    title: "Sản phẩm bán chạy",
    url: "/",
    isHot: true,
  },
  {
    title: "Cần câu cá các loại",
    url: "/",
    subTab: [
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
    ],
  },
  {
    title: "Cần câu cá các loại",
    url: "/",
    subTab: [
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
    ],
  },
  {
    title: "Cần câu cá các loại",
    url: "/",
    subTab: [
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
    ],
  },
  {
    title: "Cần câu cá các loại",
    url: "/",
    subTab: [
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
    ],
  },
  {
    title: "Cần câu cá các loại",
    url: "/",
    subTab: [
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
    ],
  },
  {
    title: "Cần câu cá các loại",
    url: "/",
    subTab: [
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
      {
        title: "Cần câu cá lóc",
        url: "/",
      },
    ],
  },
  {
    title: "Phụ kiện khác",
    url: "/",
  },
];
