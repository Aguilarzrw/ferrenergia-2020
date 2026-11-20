import { Hero } from "@/components/Hero";
import { Presentacion } from "@/components/Presentacion";
import { Categorias } from "@/components/Categorias";
import { Destacados } from "@/components/Destacados";
import { Marcas } from "@/components/Marcas";
import { Servicios } from "@/components/Servicios";
import { Confianza } from "@/components/Confianza";
import { Cta } from "@/components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentacion />
      <Categorias />
      <Destacados />
      <Marcas />
      <Servicios />
      <Confianza />
      <Cta />
    </>
  );
}
