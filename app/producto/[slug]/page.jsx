import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import AddToCartBtn from "@/components/AddToCartBtn";

import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";

const getData = async (slug) => {
  const query = `*[_type == 'producto' && slug.current == '${slug}'][0] {
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
  const data = await client.fetch(query);
  return data;
};

const ProductDetails = async ({ params }) => {
  const bici = await getData(params.slug);
  return (
    <section className="pt-24 pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          {/* img */}
          <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
            <Image
              src={urlFor(bici.images[0]).url()}
              width={473}
              height={290}
              priority
              alt=""
            />
          </div>
          {/* texto */}
          <div className="flex-1 flex flex-col justify-center items-start gap-10">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <ChevronLeft size={20} />
              Volver al home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3>{bici.nombre}</h3>
                <p className="text-lg font-semibold">${bici.precio}</p>
              </div>
                <p>{bici.descripcion}</p>
                <AddToCartBtn text='Añadir al carro' btnStyles='btn btn-accent'/>
            </div>
            {/* info */}
            <div className="flex flex-col gap-3">
              <div className="flex gap-2">
                <PackageCheck size={20} className="text-accent"/>
                <p>Envio gratuito en ordenes de mas de $130</p>
              </div>

              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent"/>
                <p>Garantia por 30 dias</p>
              </div>

              <div className="flex gap-2">
                <Bike size={20} className="text-accent"/>
                <p>Las mejores bicicletas del pais</p>
              </div>

              <div className="flex gap-2">
                <Clock size={20} className="text-accent"/>
                <p>Entrega inmediata</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

