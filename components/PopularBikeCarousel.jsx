"use client";
import Bici from "./Bici";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//swiper estilos
import "swiper/css";
import "swiper/css/pagination";

//modulos requeridos
import { Pagination } from "swiper/modules";

const PopularBikeCarousel = ({ bicis }) => {

  return (
    <Swiper slidesPerView={1} spaceBetween={30} breakpoints={{
      640: {slidesPerView: 1},
      768: {slidesPerView: 2},
      960: {slidesPerView: 3},
      1440: {slidesPerView: 4},
      }}
      pagination= {{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-bici-slider mb-8"
      >
      {bicis.map((bici) => {
        return (
          <SwiperSlide key={bici._id}>
            <Bici bici={bici} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularBikeCarousel;
