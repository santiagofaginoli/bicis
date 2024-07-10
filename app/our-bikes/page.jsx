import BiciCategorias from "@/components/BiciCategorias";
import { client } from "../lib/sanity";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const getData = async () => {
  const query = `*[_type == 'producto'] {
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

const OurBikes = async () => {
  const bicis = await getData();
  return (
    <div>
      <BiciCategorias bicis={bicis} />
    </div>
  );
};
export default OurBikes;
