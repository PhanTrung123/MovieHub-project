import React, { useState } from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";
import { IoClose, IoSearch } from "react-icons/io5";
import { RiMenu2Fill } from "react-icons/ri";

function Header() {
  const [open, setOpen] = useState(false);
  const [openList, setOpenList] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="px-4 w-full fixed py-2 flex z-10 items-center justify-between bg-black/60 text-white ">
      <div className="flex items-center gap-2">
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <IoClose className="w-12 h-12 max-md:w-8 max-lg:h-8 lg:hidden relative text-red-400" />
          ) : (
            <RiMenu2Fill className="w-12 h-12 max-md:w-8 max-lg:h-8 lg:hidden relative" />
          )}
        </div>
        <div>
          <img src="/logo.png" className="h-10" />
        </div>

        {/*table,  Mobile */}
        <div
          className={`lg:hidden bg-purple-600  p-4 absolute left-2  -bottom-2 translate-y-full rounded-xl ${open ? "" : "max-md:hidden"}`}
        >
          <div className="px-4 py-2  bg-white w-full text-black rounded-2xl">
            <button className="flex items-center justify-center gap-2">
              <FaUser />
              Thành viên
            </button>
          </div>
          <div className="mt-4">
            <ul className="grid grid-cols-2 gap-6 items-center capitalize">
              <li>Chủ đề</li>
              <li
                onClick={() => setOpenList(!openList)}
                className="relative flex items-center gap-1 cursor-pointer"
              >
                Thể loại
                <FaCaretDown />
                {openList && (
                  <div className="absolute left-0 bottom-0 translate-y-full z-100 bg-amber-300 p-3  w-72 mt-4">
                    <ul className="text-white gap-2 grid grid-cols-2">
                      <li>the loai 1</li>
                      <li>the loai 1</li>
                      <li>the loai 1</li>
                      <li>the loai 1</li>
                    </ul>
                  </div>
                )}
              </li>
              <li>Phim lẻ</li>
              <li>Phim bộ</li>
              <li className="flex items-center gap-1">
                <span className="uppercase px-1 py-0.5 bg-yellow-300 rounded-lg">
                  new
                </span>
                Xem chung
              </li>
              <li className="flex items-center gap-1">
                Quốc gia
                <FaCaretDown />
              </li>
              <li>Diễn viên</li>
              <li>Lịch chiếu</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center px-4 py-2 bg-gray-300 rounded-lg text-white w-75 max-lg:hidden">
        <IoSearch />
        <input type="text" placeholder="Tìm kiếm phim, diễn viên" />
      </div>
      <div className="max-lg:hidden">
        <ul className="flex gap-6 items-center capitalize">
          <li>Chủ đề</li>
          <li
            onClick={() => setOpenList(!openList)}
            className="relative flex items-center gap-1 cursor-pointer"
          >
            Thể loại
            <FaCaretDown />
            {openList && (
              <div className="absolute left-0 bottom-0 translate-y-full z-100 bg-amber-300 p-3  w-72 mt-4">
                <ul className="text-white gap-2 grid grid-cols-2">
                  <li>the loai 1</li>
                  <li>the loai 1</li>
                  <li>the loai 1</li>
                  <li>the loai 1</li>
                </ul>
              </div>
            )}
          </li>
          <li>Phim lẻ</li>
          <li>Phim bộ</li>
          <li className="flex items-center gap-1">
            <span className="uppercase px-1 py-0.5 bg-yellow-300 rounded-lg">
              new
            </span>
            Xem chung
          </li>
          <li className="flex items-center gap-1">
            Quốc gia
            <FaCaretDown />
          </li>
          <li>Diễn viên</li>
          <li>Lịch chiếu</li>
        </ul>
      </div>
      <div className="px-4 py-2 bg-white text-black rounded-2xl max-lg:hidden">
        <button className="flex items-center justify-center gap-2">
          <FaUser />
          Thành viên
        </button>
      </div>
      <div className="" onClick={() => setShowSearch(!showSearch)}>
        <IoSearch className="w-8 h-8 lg:hidden" />
      </div>
      <div
        className={`lg:hidden items-center flex w-full absolute bg-black left-0  p-2 ${showSearch ? "" : "hidden"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-400 p-2 flex-1 rounded-xl"
        />
        <IoClose
          onClick={() => setShowSearch(!showSearch)}
          className="w-12 h-12 max-md:w-8 max-lg:h-8 relative text-red-400"
        />
      </div>
    </div>
  );
}

export default Header;
