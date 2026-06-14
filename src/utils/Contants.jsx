import { AiOutlinePicture, AiOutlineProfile } from "react-icons/ai";
import { FaChromecast, FaUser, FaUsers } from "react-icons/fa";
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
