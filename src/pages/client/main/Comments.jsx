import React, { useRef } from "react";
import { FaMedal } from "react-icons/fa";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";
import SliderComment from "../silders/SliderComment";

const Comments = () => {
  return (
    <div className="mt-8">
      <div className="border border-[#fff2] rounded-2xl p-8">
        <h1 className="text-white text-[20px] font-semibold flex items-center gap-3">
          <FaMedal />
          Top bình luận
        </h1>
        <SliderComment />
      </div>
    </div>
  );
};

export default Comments;
