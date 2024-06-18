import Link from "next/link";
import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Input } from "./ui/input";
const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Contactese con nosotros
            </h2>
            <p className="text-white/60">
              Se el primero en contactarte con nosotros y recibe las ultimas
              noticias y ofertas.
            </p>
          </div>
          {/* form */}
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Direccion de correo electronico" />
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent">
              Unite
            </button>
          </form>
          {/* redes */}
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-20">
            <Link href="">
              <RiYoutubeFill />
            </Link>
            <Link href="">
              <RiFacebookFill />
            </Link>
            <Link href="">
              <RiInstagramFill />
            </Link>
            <Link href="">
              <RiTwitterFill />
            </Link>
            <Link href="">
              <RiPinterestFill />
            </Link>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 Bicis. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
