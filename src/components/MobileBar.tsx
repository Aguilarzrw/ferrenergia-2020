import Link from "next/link";
import { wa } from "@/lib/data";
import { WhatsApp } from "./icons";

// Composición propia del móvil: barra de acción fija al pulgar.
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t-2 border-[#ffc800] bg-k pb-[env(safe-area-inset-bottom)] md:hidden">
      <Link href="/catalogo/" className="btn grid min-h-14 place-items-center text-base font-extrabold text-paper active:bg-g2">
        Catálogo
      </Link>
      <a
        href={wa("Hola Ferrenergía, quiero información.")}
        target="_blank"
        rel="noopener"
        className="btn flex min-h-14 items-center justify-center gap-2 bg-y text-base font-extrabold text-k"
      >
        <WhatsApp className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  );
}

