"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import PopularBikeCarousel from "./PopularBikeCarousel";
import { motion } from "framer-motion";
import { client } from "@/app/lib/sanity";

const PopularBikes = () => {
  const [bicis, setBicis] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = `*[_type == 'producto' && references(*[_type == 'categoria' && nombre == 'popular']._id, categoria)] {
        _id,
        nombre,
        descripcion,
        images,
        precio,
        precio_id,
        "slug": slug.current,
        "categorias": categorias[]-> {
          nombre
        }
      }`;

      try {
        const data = await client.fetch(query);
        console.log("Fetched data:", data); // Verifica los datos aquí
        setBicis(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <section className="py-24">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          Bicicletas más populares
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-[30px]"
        >
          Las mejores marcas del mundo en un solo lugar.
        </motion.p>
        <PopularBikeCarousel bicis={bicis} />
        <div className="flex justify-center items-center">
          <Link href="/our-bikes">
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="btn btn-primary"
            >
              Ver todo
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBikes;
