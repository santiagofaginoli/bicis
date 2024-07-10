"use client";
import Bici from "./Bici";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";

//swiper estilos
import "swiper/css";
import "swiper/css/pagination";

//modulos requeridos
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
const PopularBikeCarousel = ({ bicis }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0 }}
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Cambia la diapositiva cada 3 segundos
          disableOnInteraction: false, // Mantiene el autoplay incluso después de la interacción
          pauseOnMouseEnter: true, // Pausa el autoplay al pasar el ratón
          pauseOnMouseLeave: true, // Reanuda el autoplay al quitar el ratón
        }}
        modules={[Autoplay, Pagination]}
        className="popular-bici-slider mb-8"
      >
        {bicis.map((bici) => {
          return (
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
            >
              <SwiperSlide key={bici._id}>
                <Bici bici={bici} />
              </SwiperSlide>
            </motion.div>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default PopularBikeCarousel;
