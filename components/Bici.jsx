"use client";

import { motion } from "framer-motion";
import AddToCartBtn from "./AddToCartBtn";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import { fadeIn } from "@/variants";
const Bici = ({ bici }) => {
  const popularBiciCat = bici.categorias.find(
    (bici) => bici.nombre === "popular"
  );
  return (
    <motion.div className="group border-2 hover:cursor-pointer border-outline rounded-xl hover:bg-accent-hover transition-all duration-700">
      <div className=" h-[328px] mb-5 p-0 overflow-hidden relative mx-auto xl:mx-0">
        <div className="bg-white rounded-xl group-hover:bg-accent-hover w-full h-full transition-all duration-700 flex justify-center items-center">
          {/* badge */}
          {popularBiciCat && (
            <motion.div
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0 }}
              className="absolute top-8 left-8 bg-accent text-white px-3 text-sm rounded-sm uppercase font-medium"
            >
              Popular
            </motion.div>
          )}
          <Image
            src={urlFor(bici.images[0]).url()}
            width={240}
            height={147}
            alt=""
          />
        </div>
        {/* boton */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-700">
          <AddToCartBtn
            price_id={bici.precio_id}
            name={bici.nombre}
            currency="ARS"
            description={bici.descripcion}
            images={bici.images}
            price={bici.precio}
            btnStyles="btn-icon btn-accent"
            icon={<CgShoppingBag />}
          />
          <Link href={`/producto/${bici.slug}`}>
            <button className="btn-icon btn-primary">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
      <div className="pl-5 pb-5">
        <h5 className="text-gray-400 font-semibold mb-2  group-hover:text-white transition-all duration-700">
          {bici.categorias[0].nombre}
        </h5>
        <h4 className="mb-1  group-hover:text-white transition-all duration-700">
          {bici.nombre}
        </h4>
        <div className="text-lg font-bold text-accent group-hover:text-white transition-all duration-700">
          ${bici.precio}
        </div>
      </div>
    </motion.div>
  );
};

export default Bici;
