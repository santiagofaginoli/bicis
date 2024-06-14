import { client } from "@/app/lib/sanity";
import Link from "next/link";
import PopularBikeCarousel from "./PopularBikeCarousel";

//recibir los datos
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
}
`;
  const data = await client.fetch(query);
  return data;
};

const PopularBikes = async () => {
  const bicis = await getData();
  return (
    <section className="py-24 ">
      <div className="container mx-auto">
        <h2 className="text-center">Bicicletas mas populares </h2>
        <p className="text-center mb-[30px]">
          Las mejores marcas del mundo en un solo lugar.
        </p>
        <PopularBikeCarousel bicis={bicis} />
        <div className="flex justify-center items-center">
          <Link href="our-bikes">
            <button className="btn btn-accent mx-auto">Ver todo</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularBikes;
