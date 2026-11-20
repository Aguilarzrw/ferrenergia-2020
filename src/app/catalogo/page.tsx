import type { Metadata } from "next";
import { Catalogo } from "@/components/Catalogo";

export const metadata: Metadata = { title: "Catálogo | Ferrenergía 2020" };

export default function CatalogoPage() {
  return <Catalogo />;
}
