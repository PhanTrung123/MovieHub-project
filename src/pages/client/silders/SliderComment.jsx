import React, { useContext, useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SliderComment.css";
import { COMMENTSLIST } from "../../../utils/CommentsContants";
import { ContextMovies } from "../../../contexts/MovieProvider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function SliderComment() {
  const movies = useContext(ContextMovies);
  const swiperRef = useRef(null);

  return (
    <section className="relative movie-comments-section">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[]}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 12 },
          768: { slidesPerView: 4, spaceBetween: 26 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
        className="comment-swiper relative"
      >
        {COMMENTSLIST.map((item, index) => (
          <SwiperSlide key={index}>
            {(() => {
              const randomMovie =
                movies && movies.length > 0
                  ? movies[index % movies.length]
                  : null;

              return (
                <div className="bg-zinc-900/90 border border-zinc-800/80 rounded-2xl hover:border-zinc-700 transition-all duration-300 text-left select-none group gap-4 p-5">
                  <div className="flex justify-between items-start gap-4 ">
                    <div className="flex flex-col justify-between  gap-2">
                      <div className="">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-14 h-14 rounded-full object-cover shrink-0"
                        />
                      </div>
                      <h5 className="text-sm font-bold text-zinc-100 line-clamp-1">
                        {item.name}
                      </h5>

                      <span className="text-[11px] text-zinc-400 font-medium">
                        {item.time || "Vừa xong"}
                      </span>
                    </div>

                    {randomMovie && (
                      <div className="w-[20%] max-w-25 min-w-16 aspect-2/3 shrink-0 relative rounded-lg overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300 border border-zinc-700/50">
                        <img
                          src={randomMovie.imgUrl}
                          alt="Movie Poster"
                          className="w-full h-full object-contain bg-zinc-950"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 my-2 italic">
                    "{item.description}"
                  </p>
                </div>
              );
            })()}
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
    </section>
  );
}
