import React, { useContext, useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { IoClose, IoSearch } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";
import { LISTCOUNTRIES } from "../../utils/Contants";
import { ContextCategories } from "../../contexts/CategoryProvider";
import SignUp from "./SignUp";
import Login from "./Login";
import { ContextAuth } from "../../contexts/AuthProvider";
import { Button } from "@mui/material";

function Header() {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [openListCountries, setOpenListCountries] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { isLogin , handleLogoutacc } = React.useContext(ContextAuth);
  const categories = useContext(ContextCategories);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleClickOpen = () => {
    setOpenLogin(false);
    setOpenSignUp(true);
  };

  const handleClickOpenLogin = () => {
    setOpenLogin(true);
    handleClose();
  };

  const handleClose = () => {
    setOpenSignUp(false);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-16 md:h-18 px-4 md:px-8 flex gap-5  items-center justify-between bg-neutral-950/70 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 text-gray-300">
      <div className="flex items-center gap-4 max-lg:flex-1">
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gray-300 hover:text-white transition-colors"
        >
          {open ? (
            <IoClose className="w-8 h-8 text-red-500" />
          ) : (
            <RiMenu2Fill className="w-8 h-8" />
          )}
        </button>
        <div className="cursor-pointer">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 md:h-12 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex max-lg:flex-1 items-center gap-2 px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full w-[250px] xl:w-[300px] focus-within:border-gray-500 focus-within:ring-1 focus-within:ring-gray-500 transition-all">
          <IoSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Tìm kiếm phim, diễn viên..."
            className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-gray-500"
          />
        </div>
      </div>
      <div
        className={`max-lg:absolute lg:flex max-lg:flex-col gap-4 max-lg:p-4 max-lg:rounded-xl items-center bottom-0 max-lg:translate-y-full max-lg:bg-black max-lg:grid max-lg:grid-cols-2 ${open ? "" : "max-lg:hidden"}`}
      >
        <li className="hover:text-white cursor-pointer transition-colors">
          Chủ đề
        </li>

        <li
          onClick={() => setOpenList(!openList)}
          className="relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors group"
        >
          Thể loại
          <FaCaretDown
            className={`transition-transform ${openList ? "rotate-180" : ""}`}
          />
          {openList && (
            <div className="absolute top-full left-0 mt-6 bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-2xl w-[320px] z-50 cursor-default">
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-gray-400">
                {categories.map((item) => (
                  <li
                    key={item.code}
                    className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>

        <li className="hover:text-white cursor-pointer transition-colors">
          Phim lẻ
        </li>
        <li className="hover:text-white cursor-pointer transition-colors">
          Phim bộ
        </li>
        <li
          onClick={() => setOpenListCountries(!openListCountries)}
          className="relative flex items-center gap-1 hover:text-white cursor-pointer transition-colors"
        >
          Quốc gia
          <FaCaretDown
            className={`transition-transform ${
              openListCountries ? "rotate-180" : ""
            }`}
          />
          {openListCountries && (
            <div className="absolute top-full left-0 mt-6 bg-neutral-900 border border-neutral-800 p-4 rounded-xl shadow-2xl w-[320px] z-50 cursor-default">
              <ul className="grid grid-cols-2 gap-3 text-gray-400">
                {LISTCOUNTRIES.map((l) => (
                  <li
                    key={l.id}
                    className="hover:text-white hover:translate-x-1 transition-all cursor-pointer"
                  >
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
        <li className="hover:text-white cursor-pointer transition-colors">
          Lịch chiếu
        </li>
        {isLogin ? (
          <><Button onClick={handleLogoutacc}>Logout</Button></>
        ) : (
          <button
            onClick={handleClickOpenLogin}
            className="flex items-center max-lg:-order-1 col-span-2 justify-center gap-2 px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors"
          >
            <FaUser />
            Thành viên
          </button>
        )}
      </div>

      <SignUp
        openSignUp={openSignUp}
        handleClickOpenLogin={handleClickOpenLogin}
        handleClose={handleClose}
      />
      <Login
        openLogin={openLogin}
        handleCloseLogin={handleCloseLogin}
        handleClickOpen={handleClickOpen}
      />
    </div>
  );
}

export default Header;
