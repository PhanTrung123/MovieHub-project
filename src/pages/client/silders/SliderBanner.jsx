import { useContext, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./SliderBanner.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ContextMovies } from "../../../contexts/MovieProvider";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function SliderBanner() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const movies = useContext(ContextMovies);
  const swiperRef = useRef(null);

  return (
    <div className="banner relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        modules={[]}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {movies.map((e) => (
          <SwiperSlide>
            <div className="relative  w-full h-full overflow-hidden ">
              <div className="w-full h-full flex items-center justify-center overflow-hidden bg-black/20 rounded-xl p-2">
                <img
                  src={e.imgUrl}
                  alt={e.name}
                  loading="eager"
                  fetchPriority="high"
                  draggable="false"
                  className="max-w-full max-h-full object-contain object-center select-none"
                />
              </div>

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/25 to-transparent" />

              <div className="absolute left-6 md:left-18 lg:left-28  top-1/2 -translate-y-1/2 max-w-[90%] md:max-w-xl text-left">
                <div className="mb-4 inline-flex items-center rounded-full bg-red-600/90 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                  Phim mới
                </div>

                <h2 className="text-3xl font-black leading-tight text-white drop-shadow-2xl md:text-5xl lg:text-6xl line-clamp-2">
                  {e.name}
                </h2>

                <div className="mt-4 flex items-center gap-3 text-sm text-white/80">
                  <span> 8.9</span>
                  <span className="h-1 w-1 rounded-full bg-white/50"></span>
                  <span>2026</span>
                  <span className="h-1 w-1 rounded-full bg-white/50"></span>
                  <span>HD</span>
                </div>

                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80 md:text-base line-clamp-3">
                  {e.description}
                </p>

                <div className="mt-6 flex gap-3">
                  <button className="flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow-xl transition hover:bg-red-700">
                    <FaCirclePlay /> Xem ngay
                  </button>

                  <button className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                    <FaPlus /> Chi tiết
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute max-sm:hidden left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-11 md:h-11 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition active:scale-95 cursor-pointer"
        aria-label="Previous"
      >
        <FaChevronLeft className="text-xs md:text-base" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute max-sm:hidden right-4  top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-11 md:h-11 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition active:scale-95 cursor-pointer"
        aria-label="Next"
      >
        <FaChevronRight className="text-xs md:text-base" />
      </button>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper thumbs-slider"
      >
        {movies.map((e) => (
          <SwiperSlide>
            <img
              src={e.imgUrl}
              className="w-full h-full transition-all duration-300  hover:opacity-100 hover:scale-105 rounded-xl object-center bg-cover cursor-pointer hover:border-2 hover:border-white"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
