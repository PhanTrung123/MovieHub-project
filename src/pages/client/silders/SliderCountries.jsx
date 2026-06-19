import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SliderCountries.css";

// import required modules
import { Navigation } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa";

export default function SliderCountries() {
   return (
    <section className="banner-slider-countries w-full flex justify-between items-center">
      <div className=" flex flex-col items-center">
        <h4>Phim Hàn Quốc mới</h4>

        <div className="flex items-center gap-2 cursor-pointer">
          <span>Xem toàn bộ</span>
          <FaChevronRight />
        </div>
      </div>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={16}
        breakpoints={{
          // Mobile
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },

          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {[1,2,3,4,5,6,7,8,9].map((item) => (
          <SwiperSlide key={item}>
            <div className="slide-item">
              Slide {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
