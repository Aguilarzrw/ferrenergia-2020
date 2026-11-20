import Link from "next/link";
import { catById, img, wa, type Product } from "@/lib/data";
import { Arrow, WhatsApp } from "./icons";

// Tarjeta de producto: foto con esquina cortada por el rayo, sin precios ni fichas inventadas.
export function ProductCard({ p, tone = "dark" }: { p: Product; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <article className={`lift group relative flex h-full flex-col ${light ? "bg-white text-k" : "bg-g2 text-paper"}`}>
      <div className="relative overflow-hidden bg-k" style={{ aspectRatio: p.ratio }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img(p.photo)}
          alt={`${p.name}, foto del producto`}
          width={640}
          height={640}
          loading="lazy"
          className="lift-img h-full w-full object-cover transition-transform duration-700 ease-out"
        />
        <span className="absolute left-0 top-0 bg-y px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-k [clip-path:polygon(0_0,100%_0,calc(100%-10px)_100%,0_100%)] pr-5">
          {catById(p.cat).short}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-[1.9rem] leading-[0.95]">
          <Link
            href={`/producto/${p.slug}/`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:after:outline-3 focus-visible:after:outline-y"
          >
            {p.name}
          </Link>
        </h3>
        <p className={`text-sm ${light ? "text-k/70" : "text-paper/70"}`}>{p.blurb}</p>
        <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-3">
          <a
            href={wa(`Hola Ferrenergía, quiero consultar por el ${p.name}.`)}
            target="_blank"
            rel="noopener"
            className="btn inline-flex min-h-11 items-center gap-2 bg-y px-4 text-sm font-extrabold text-k hover:bg-y2"
          >
            <WhatsApp className="h-5 w-5" /> Consultar
          </a>
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1 text-sm font-bold opacity-70 transition-[opacity,transform] duration-200 group-hover:translate-x-1 group-hover:opacity-100"
          >
            Ver <Arrow className="h-4 w-4" />
          </span>
        </div>
      </div>
    </article>
  );
}
