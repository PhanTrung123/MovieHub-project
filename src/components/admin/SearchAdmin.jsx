import { FaPlus, FaSearch } from "react-icons/fa";

function SearchAdmin({ handleClickOpen, title, handleSearch }) {
  return (
    <div className="text-white flex justify-between mt-8 max-md:mt-0 items-center px-5 max-md:px-0  max-md:flex-col max-md:gap-3 ">
      <p className="text-xl max-md:hidden">List {title}</p>
      <div className="relative flex items-center bg-linear-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 text-white shadow-[0_0_20px_rgba(236,72,153,0.2)]  hover:border-pink-400/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)] rounded-[20px] max-md:w-full">
        <FaSearch
          className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-300/70"
          size={16}
        />
        <div className="px-10 py-3">
          <input
            type="text"
            placeholder={`Search ${title}...`}
            className="  text-white  w-72 outline-none max-md:w-full "
            onChange={handleSearch}
          />
        </div>
      </div>
      <button
        onClick={handleClickOpen}
        className="px-4 py-2 rounded-2xl cursor-pointer  bg-linear-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 text-white shadow-[0_0_20px_rgba(236,72,153,0.2)]  hover:border-pink-400/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)]
         max-md:flex flex items-center gap-2
        "
      >
        Add <FaPlus />
      </button>
    </div>
  );
}

export default SearchAdmin;
