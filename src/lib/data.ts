export const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const img = (f: string) => `${base}/img/${f}`;

export const WA_PRINCIPAL = "584243546663";
export const PHONES = ["0424-354-6663", "0424-306-9546"];
export const INSTAGRAM = "https://www.instagram.com/ferrenergia2020/";

export const wa = (msg: string) =>
  `https://wa.me/${WA_PRINCIPAL}?text=${encodeURIComponent(msg)}`;

export type CatId = "portatiles" | "industriales" | "agricola" | "otros";

export type Category = {
  id: CatId;
  name: string;
  short: string;
  line: string;
  photo?: string;
  position?: string;
};

export const categories: Category[] = [
  {
    id: "portatiles",
    name: "Generadores portátiles",
    short: "Portátiles",
    line: "Respaldo móvil, listo para llevar.",
    photo: "showroom-3500.webp",
    position: "50% 62%",
  },
  {
    id: "industriales",
    name: "Plantas eléctricas industriales",
    short: "Industriales",
    line: "Continuidad para operaciones exigentes.",
    photo: "hero.webp",
    position: "72% 50%",
  },
  {
    id: "agricola",
    name: "Maquinaria agrícola",
    short: "Agrícola",
    line: "Equipos para trabajar el campo.",
  },
  {
    id: "otros",
    name: "Otros equipos",
    short: "Otros",
    line: "Complementos para tu proyecto.",
  },
];

export type Product = {
  slug: string;
  name: string;
  brand: string;
  cat: CatId;
  photo: string;
  ratio: string; // aspect-ratio CSS
  blurb: string;
  featured?: boolean;
};

// Solo datos visibles en las fotos reales del cliente. Sin precios, sin disponibilidad, sin fichas técnicas.
export const products: Product[] = [
  {
    slug: "europower-dg15000se",
    name: "Europower DG15000SE",
    brand: "Europower",
    cat: "industriales",
    photo: "dg15000se.webp",
    ratio: "4 / 5",
    blurb: "Planta eléctrica de 15 KVA, diésel, con cabina insonorizada y ATS.",
    featured: true,
  },
  {
    slug: "agg-power-solutions",
    name: "AGG Power Solutions",
    brand: "AGG Power Solutions",
    cat: "industriales",
    photo: "agg-plantas.webp",
    ratio: "1 / 1",
    blurb: "Línea de plantas industriales de 66 a 150 KVA.",
    featured: true,
  },
  {
    slug: "europower-em3800",
    name: "Europower EM3800",
    brand: "Europower",
    cat: "portatiles",
    photo: "em3800.webp",
    ratio: "1 / 1",
    blurb: "Planta eléctrica portátil a gasolina, de arranque manual.",
    featured: true,
  },
  {
    slug: "generador-dual-12000w",
    name: "Generador dual 12.000 W",
    brand: "Sundi Power",
    cat: "portatiles",
    photo: "showroom-12000.webp",
    ratio: "1 / 1",
    blurb: "Generador dual de gasolina y gas, con ATS incluido y encendido eléctrico.",
    featured: true,
  },
  {
    slug: "generador-3500w",
    name: "Generador 3.500 W",
    brand: "Ferrenergía",
    cat: "portatiles",
    photo: "showroom-3500.webp",
    ratio: "1 / 1",
    blurb: "Generador portátil a gasolina con encendido manual, 110/220 V.",
    featured: true,
  },
  {
    slug: "generador-klox-3500w",
    name: "Generador KLOX 3.500 W",
    brand: "KLOX",
    cat: "portatiles",
    photo: "showroom-klox.webp",
    ratio: "1 / 1",
    blurb: "Generador a gasolina de 4 tiempos y 6,5 HP.",
  },
];

export const brands = ["Europower", "AGG Power Solutions", "Sundi Power", "KLOX"];

export const catById = (id: CatId) => categories.find((c) => c.id === id)!;
