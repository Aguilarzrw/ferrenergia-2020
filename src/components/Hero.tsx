import Link from "next/link";
import { img } from "@/lib/data";
import { Arrow, Bolt, WhatsApp } from "./icons";
import { wa } from "@/lib/data";

const d = (n: number) => ({ "--d": n }) as React.CSSProperties;

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="on-y relative isolate flex min-h-svh flex-col overflow-hidden bg-y text-k md:block"
    >
      {/* Texto */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1400px] flex-col px-5 pb-8 pt-24 md:min-h-svh md:justify-center md:px-8 md:pb-16 md:pt-24">
        <h1
          id="hero-title"
          className="font-display !leading-[0.94] text-[clamp(3.4rem,16vw,6.6rem)] md:text-[clamp(4rem,min(8.4vw,16svh),10.5rem)]"
        >
          <span className="rise block" style={d(0)}>Que tu</span>
          <span className="rise block" style={d(90)}>negocio</span>
          <span className="rise block" style={d(180)}>nunca se</span>
          <span className="rise mt-1.5 block w-fit bg-k px-3 pb-1 pt-1.5 text-y md:px-5" style={d(270)}>
            apague.
          </span>
        </h1>

        <p className="rise mt-5 max-w-[34ch] text-base font-medium leading-snug sm:text-lg md:mt-8 md:text-xl" style={d(420)}>
          Generadores eléctricos, plantas industriales y maquinaria para impulsar tus proyectos.
        </p>

        <div className="rise mt-5 grid grid-cols-2 gap-2.5 sm:flex sm:gap-3 md:mt-9 md:max-w-[34vw] md:flex-col lg:max-w-none lg:flex-row" style={d(520)}>
          <Link
            href="/catalogo/"
            className="btn group inline-flex min-h-14 items-center justify-center gap-2 bg-k px-3 text-[0.95rem] font-extrabold text-y hover:bg-g2 sm:gap-3 sm:px-7 sm:text-base"
          >
            Explorar catálogo
            <Arrow className="hidden h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1 sm:block" />
          </Link>
          <a
            href={wa("Hola Ferrenergía, quiero información.")}
            target="_blank"
            rel="noopener"
            className="btn inline-flex min-h-14 items-center justify-center gap-2 border-2 border-k px-3 text-[0.95rem] font-extrabold text-k hover:bg-k hover:text-y sm:px-7 sm:text-base"
          >
            <WhatsApp className="h-5 w-5" /> Contactar
          </a>
        </div>
      </div>

      {/* Foto protagonista, cortada con el quiebre del rayo */}
      <div
        className="wipe relative -mt-2 h-[58svh] min-h-[360px] md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-[60%]"
        style={d(150)}
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img("hero.webp")}
          alt=""
          width={1672}
          height={941}
          fetchPriority="high"
          className="h-full w-full object-cover object-[70%_50%]"
        />
        <span className="absolute bottom-3 right-4 bg-k/80 px-2 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-paper">
          Imagen referencial
        </span>
      </div>

      {/* Rayo rojo en el quiebre */}
      <Bolt className="pointer-events-none absolute right-5 top-[61svh] z-30 h-20 sm:top-[64svh] text-red drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)] md:right-auto md:top-[34%] md:left-[40.5%] md:h-[30svh]" />
    </section>
  );
}
