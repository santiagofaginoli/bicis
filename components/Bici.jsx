"use client";

import AddToCartBtn from "./AddToCartBtn";

import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";

const Bici = ({ bici }) => {
  const popularBiciCat = bici.categorias.find(
    (bici) => bici.nombre === "popular"
  );
  return (
    <div className="group">
      <div className="border h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-primary/5 w-full h-full group-hover:bg-primary/10 transition-all duration-300 flex justify-center items-center">
          {/* badge */}
          {popularBiciCat && (
            <div className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </div>
          )}
          <Image
            src={urlFor(bici.images[0]).url()}
            width={240}
            height={147}
            alt=""
          />
        </div>
        {/* boton */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center gap-[10px] opacity-0 group-hover:opacity-100 transition-all duration-300">
          <AddToCartBtn
            id={bici._id}
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
      <h5 className="text-gray-400 font-semibold mb-2">
        {bici.categorias[0].nombre}
      </h5>
      <h4 className="mb-1">{bici.nombre}</h4>
      <div className="text-lg font-bold text-accent">${bici.precio}</div>
    </div>
  );
};

export default Bici;
