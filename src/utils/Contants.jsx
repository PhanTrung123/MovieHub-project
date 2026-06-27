import { AiOutlinePicture} from "react-icons/ai";
import { FaChromecast} from "react-icons/fa";
import { IoHandLeftSharp } from "react-icons/io5";
import { RiVipCrownFill } from "react-icons/ri";

export const LISTMENU = [
  {
    icon: <AiOutlinePicture />,
    title: "Media Management",
    subMenu: [
      {
        name: "Movies",
        path: "/admin/movies",
      },
      {
        name: "Episodes",
        path: "/admin/episodes",
      },
      {
        name: "Sections",
        path: "/admin/sections",
      },
    ],
  },
  {
    icon: <RiVipCrownFill />,
    title: "Vip",
    subMenu: [
      {
        name: "Packages",
        path: "/admin/packages",
      },
      {
        name: "Features",
        path: "/admin/features",
      },
      {
        name: "Plans",
        path: "/admin/plans",
      },
    ],
  },
  {
    icon: <IoHandLeftSharp />,
    title: "Meta Data",
    subMenu: [
      {
        name: "Categoies",
        path: "/admin/categories",
      },
      {
        name: "Movie Type",
        path: "/admin/movie_types",
      },
      
    ],
  },
  {
    icon: <FaChromecast />,
    title: "Cast & Crew",
    subMenu: [
      {
        name: "Authors",
        path: "/admin/authors",
      },
      {
        name: "Characters",
        path: "/admin/characters",
      },
      {
        name: "Actors",
        path: "/admin/actors",
      },
    ],
  },
];

export const LISTCOUNTRIES = [
  { code: "US", name: "Mỹ" },
  { code: "GB", name: "Anh" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Úc" },

  { code: "VN", name: "Việt Nam" },
  { code: "JP", name: "Nhật Bản" },
  { code: "KR", name: "Hàn Quốc" },
  { code: "CN", name: "Trung Quốc" },
  { code: "IN", name: "Ấn Độ" },

  { code: "FR", name: "Pháp" },
  { code: "DE", name: "Đức" },
  { code: "ES", name: "Tây Ban Nha" },
  { code: "IT", name: "Ý" },

  { code: "TH", name: "Thái Lan" },
  { code: "ID", name: "Indonesia" },
  { code: "MY", name: "Malaysia" },
  { code: "PH", name: "Philippines" },

  { code: "RU", name: "Nga" },
  { code: "BR", name: "Brazil" },
  { code: "MX", name: "Mexico" },
];

export const CLOUNDNAME = "dimz62amt";
export const UPLOADRESET = "moviehub";

// ---------------------------------- //

export const RATINGMOVIE = [
  {
    id: 1,
    point: 8.9,
    year: 2026,
    quality: "4K",
  },
  {
    id: 2,
    point: 9.2,
    year: 2025,
    quality: "HD",
  },
  {
    id: 3,
    point: 7.8,
    year: 2024,
    quality: "Full HD",
  },
  {
    id: 4,
    point: 7.8,
    year: 2024,
    quality: "Full HD",
  },
  {
    id: 5,
    point: 7.8,
    year: 2024,
    quality: "Full HD",
  },
  {
    id: 6,
    point: 7.8,
    year: 2024,
    quality: "Full HD",
  },
  {
    id: 7,
    point: 7.8,
    year: 2024,
    quality: "Full HD",
  },
];

export const ROLES = {
  USER : "user",
  ADMIN : 'admin',
  EMPLOYEE: "employee"
}