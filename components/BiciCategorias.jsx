"use client";

import { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import Bici from "./Bici";

const BiciCategorias = ({ bicis }) => {
  const [categoria, setCategoria] = useState("all");
  const [filteredBicis, setFilteredBicis] = useState([]);
  const [precio, setPrecio] = useState(900);

  useEffect(() => {
    const filtered = bicis.filter((bici) => {
      const categoriaMatch = 
        categoria === "all" || 
        bici.categorias.some((categ) => categ.nombre === categoria);
      
      const priceMatch = bici.precio <= precio;
      return categoriaMatch && priceMatch;
    });
    setFilteredBicis(filtered);
  }, [categoria, precio, bicis]);

  console.log(filteredBicis);

  return (
    <section className="min-h-[1200px] py-10">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row">
          {/* sidebar */}
          <aside className="w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed">
            <RadioGroup
              defaultValue="all"
              className="flex flex-col gap-6 mb-12"
              onValueChange={setCategoria}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="all"
                  id="all"
                  onClick={() => setCategoria("all")}
                />
                <Label htmlFor="all">All</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="carretera"
                  id="carretera"
                  onClick={() => setCategoria("carretera")}
                />
                <Label htmlFor="carretera">Carretera</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="profesional"
                  id="profesional"
                  onClick={() => setCategoria("profesional")}
                />
                <Label htmlFor="profesional">Profesional</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="extrema"
                  id="extrema"
                  onClick={() => setCategoria("extrema")}
                />
                <Label htmlFor="extrema">Extrema</Label>
              </div>
            </RadioGroup>
            {/* slider de precios */}
            <div className="max-w-56">
              <div className="text-lg mb-4 font-medium">
                Precio Máximo:{" "}
                <span className="text-accent font-semibold ml-2">${precio}</span>
                <span className="ml-2">
                  {filteredBicis.length} {filteredBicis.length === 1 ? "bici" : "bicis"}
                </span>
              </div>
              <Slider
                defaultValue={[900]}
                max={1000}
                step={1}
                onValueChange={(val) => setPrecio(val[0])}
              />
            </div>
          </aside>
          {/* bici list */}
          <div className="w-full ml-auto xl:w-[1050px]">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]">
              {filteredBicis.map((bici) => (
                <Bici bici={bici} key={bici.precio_id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiciCategorias;
