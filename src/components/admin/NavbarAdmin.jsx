import { RiMenuUnfold3Line } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { FaCaretDown, FaCaretRight, FaUser } from "react-icons/fa";
import { LISTMENU } from "../../utils/Contants";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  const [show, setShow] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className={`px-4 md:h-screen md:pb-4 transition-all duration-500 bg-[#0A0E17] card ${showMenu ? "md:w-64" : "md:w-24"}`}
    >
      <div className="flex gap-1 items-center text-white justify-center py-5 relative max-md:justify-between">
        <img src="/logo.png" className="h-12" />
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="absolute h-10 w-10 bg-white/10 hover:bg-white/20 rounded-full flex justify-center items-center translate-x-1/2 -right-4 top-1/2 -translate-y-1/2 max-md:translate-x-0 max-md:right-0 backdrop-blur-md border border-white/10 transition-all duration-300 z-100 cursor-pointer"
        >
          <RiMenuUnfold3Line size={24} />
        </div>
      </div>
      <div className={showMenu ? "" : "max-md:hidden"}>
        <Link
          to={"/admin"}
          className="px-3 py-2 rounded-2xl flex items-center gap-2 bg-linear-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 text-white shadow-[0_0_20px_rgba(236,72,153,0.2)]"
        >
          <MdDashboard />
          {showMenu && <span>Dashboard</span>}
        </Link>
        <div className=" flex flex-col gap-2 mt-2">
          {LISTMENU.map((e, index) => (
            <div key={index} className="mt-2 relative">
              <div
                onClick={() => setShow(show == index ? null : index)}
                className="group px-3 py-2 bg-white/4 hover:bg-white/8 border border-white/5 rounded-2xl flex items-center gap-2 text-slate-300 hover:text-white cursor-pointer transition-all duration-300"
              >
                {e.icon}
               {showMenu && (
                  <span className="flex items-center gap-1.5 text-nowrap ">
                    {e.title}
                  </span>
                )} 
                {show == index ? (
                  <FaCaretDown className="ml-auto" />
                ) : (
                  <FaCaretRight className="ml-auto" />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${show === index ? `${showMenu ? "mt-2" : " mt-2 md:absolute -right-2 top-0 md:translate-x-full"}` : "hidden"}`}
              >
                {e.subMenu.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    className="flex items-center gap-2 px-4 py-2 mb-2  bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl text-slate-300 hover:text-white shadow-lg shadow-black/10 transition-all duration-300"
                  >
                    <span className="text-nowrap">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {showMenu && <span className=" capitalize text-white ">pages</span>}
          <div
            className="px-3 py-2 gap-2 rounded-2xl flex items-center gap-2bg-linear-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 text-white shadow-[0_0_20px_rgba(236,72,153,0.2)]"
          >
            <FaUser />
            {showMenu && (
              <span className="flex items-center gap-1.5">User Pages</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdmin;
