import { FaBell, FaSearch, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const HeaderAdmin = () => {
  return (
    <div className="px-7 py-3 max-md:px-0">
      <div className="flex flex-1 justify-between items-center">
        <div className="text-white flex flex-col gap-1">
          <h1 className="text-xl font-bold">Good morning, Admin</h1>
          <p className="text-md">Your performance summany this week</p>
        </div>
        <div className="flex text-white gap-3 max-md:hidden">
          <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
            <FaSearch size={18} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
            <IoMdMail size={18} />
          </div>
          <div className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
            <FaBell size={18} />
          </div>
          <div className=" bg-orange-500 flex w-9 h-9 items-center justify-center rounded-full">
            <FaUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
