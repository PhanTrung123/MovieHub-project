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
        path: "/admin/movie_type",
      },
      {
        name: "Countries",
        path: "/admin/countries",
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
  }
];
