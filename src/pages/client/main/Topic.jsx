import React from "react";
import { bgColors } from "../../../utils/StyleContants";
import { FaChevronRight } from "react-icons/fa";

function Topic() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-white text-[28px] font-semibold ">
        Bạn đang quan tâm gì?
      </h1>
      <div className="pt-6">
        <div className="grid grid-cols-5 gap-4 max-xl:grid-cols-4 max-sm:grid-cols-2">
          {bgColors.map((e, index) => (
            <div
              key={index}
              className={`
          group relative overflow-hidden
           aspect-video rounded-3xl
          ${e}
          p-6
          cursor-pointer
          transition-all duration-300
          hover:-translate-y-2 hover:scale-[1.02]
          hover:shadow-2xl hover:shadow-black/40
        `}
            >
              <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-black/30" />
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl max-sm:text-xl font-bold text-white">
                    Chữa lành
                  </h3>
                </div>

                <div className="flex items-center gap-3 max-md:gap-2 max-md:hidden mt-0 max-xl:mt-1">
                  <span className="text-white/90 font-medium text-nowrap">
                    Xem chủ đề
                  </span>
                  <FaChevronRight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topic;
