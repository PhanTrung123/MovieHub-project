import { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./SliderCountries.css";

import { FaChevronRight, FaChevronLeft, FaStar } from "react-icons/fa";
import { ContextMovies } from "../../../contexts/MovieProvider";
import { getOjectById } from "../../../services/reponsitory";
import { ContextPlans } from "../../../contexts/PlanProvider";
import { ContextCategories } from "../../../contexts/CategoryProvider";

export default function SliderCountries() {
  const movies = useContext(ContextMovies);
  const plans = useContext(ContextPlans);
  const categories = useContext(ContextCategories);
  const swiperRef = useRef(null);
  return (
    <section className=" banner-slider-countries p-8 bg-[#282b3a] rounded-2xl z-10">
      <div className="w-full flex justify-between max-xl:flex-col max-xl:items-start items-center py-4 max-xl:py-0 gap-8 max-xl:gap-4">
        <div className="flex flex-col justify-start max-w-70">
          <h4 className="text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300 leading-tight wrap-break-word whitespace-normal">
            Phim Hàn Quốc mới
          </h4>

          <div className="flex items-center gap-1.5 cursor-pointer pt-3 text-sm font-medium text-gray-400 hover:text-red-500 transition-colors duration-300 group">
            <span>Xem toàn bộ</span>
            <FaChevronRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>

        <div className="relative w-full min-w-0 flex-1 max-xl:flex-0">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[]}
            className="mySwiper"
            spaceBetween={16}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {movies.map((e) => (
              <SwiperSlide key={e.id}>
                <div className=""></div>
                <img
                  src={e.imgUrl}
                  alt={e.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-2 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 text-black text-xs font-bold">
                  <FaStar />
                  {getOjectById(plans, e.planID)?.title}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent -z-10" />

                  <h3 className="text-lg font-bold text-white line-clamp-1">
                    {e.name}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {e.listCate.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded-full text-xs text-white bg-white/10"
                      >
                        {getOjectById(categories, p)?.name}
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-11 md:h-11 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition active:scale-95 cursor-pointer"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-xs md:text-base" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-11 md:h-11 rounded-full bg-white/80 md:bg-white text-black flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition active:scale-95 cursor-pointer"
            aria-label="Next"
          >
            <FaChevronRight className="text-xs md:text-base" />
          </button>
        </div>
      </div>
    </section>
  );
}
