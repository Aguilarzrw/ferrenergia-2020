"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { products } from "@/lib/data";
import { ProductCard } from "./ProductCard";
import { Arrow, ArrowLeft } from "./icons";
import { Reveal } from "./Reveal";

const featured = products.filter((p) => p.featured);

export function Destacados() {
  const [ref, api] = useEmblaCarousel({ align: "start", dragFree: true, containScroll: "trimSnaps" });
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(true);
  const [progress, setProgress] = useState(0);

  const update = useCallback(() => {
    if (!api) return;
    setPrev(api.canScrollPrev());
    setNext(api.canScrollNext());
    setProgress(Math.max(0.08, api.scrollProgress()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const raf = requestAnimationFrame(update);
    api.on("scroll", update).on("reInit", update).on("select", update);
    return () => {
      cancelAnimationFrame(raf);
      api.off("scroll", update).off("reInit", update).off("select", update);
    };
  }, [api, update]);

  return (
    <section id="destacados" aria-labelledby="dest-title" className="bg-k py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <h2 id="dest-title" className="font-display text-[clamp(2.6rem,6vw,5.2rem)] text-paper">
            Equipos <span className="text-y">destacados</span>
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              disabled={!prev}
              aria-label="Anterior"
              className="btn grid h-14 w-14 place-items-center border-2 border-y text-y enabled:hover:bg-y enabled:hover:text-k disabled:opacity-30"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              disabled={!next}
              aria-label="Siguiente"
              className="btn grid h-14 w-14 place-items-center bg-y text-k enabled:hover:bg-y2 disabled:opacity-30"
            >
              <Arrow className="h-6 w-6" />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        className="overflow-hidden pl-5 md:pl-[max(2rem,calc((100vw-1400px)/2+2rem))]"
        ref={ref}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Equipos destacados"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") api?.scrollNext();
          if (e.key === "ArrowLeft") api?.scrollPrev();
        }}
      >
        <ul className="flex cursor-grab items-end gap-4 active:cursor-grabbing md:gap-6">
          {featured.map((p) => (
            <li key={p.slug} className="w-[76vw] max-w-[360px] shrink-0 sm:w-[340px]">
              <ProductCard p={p} />
            </li>
          ))}
          <li aria-hidden="true" className="w-4 shrink-0 md:w-8" />
        </ul>
      </div>

      <div className="mx-auto mt-10 max-w-[1400px] px-5 md:px-8">
        <div className="h-1 w-full bg-g2" aria-hidden="true">
          <div className="h-full origin-left bg-y" style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
}
