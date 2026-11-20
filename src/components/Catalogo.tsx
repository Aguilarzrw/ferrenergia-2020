"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { categories, products, wa, type CatId } from "@/lib/data";
import { ProductCard } from "./ProductCard";
import { WhatsApp } from "./icons";

type Filter = "todos" | CatId;
const tabs: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  ...categories.map((c) => ({ id: c.id as Filter, label: c.short })),
];

export function Catalogo() {
  const [cat, setCat] = useState<Filter>("todos");
  const reduce = useReducedMotion();

  useEffect(() => {
    // La categoría puede venir en el hash (/catalogo/#portatiles) desde la home.
    const t = setTimeout(() => {
      const h = window.location.hash.slice(1) as Filter;
      if (tabs.some((x) => x.id === h)) setCat(h);
    }, 0);
    return () => clearTimeout(t);
  }, []);

  const list = cat === "todos" ? products : products.filter((p) => p.cat === cat);
  const current = categories.find((c) => c.id === cat);

  return (
    <div className="on-paper bg-paper pb-28 pt-32 text-k md:pb-32 md:pt-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <h1 className="font-display text-[clamp(3.4rem,10vw,9rem)]">
          Catálogo<span className="text-red">.</span>
        </h1>
        <p className="mt-4 max-w-[48ch] text-lg text-k/75">
          Generadores, plantas y maquinaria. Consulta por el equipo que necesitas: te asesoramos por WhatsApp.
        </p>

        <LayoutGroup>
          <div role="tablist" aria-label="Categorías" className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {tabs.map((t) => {
              const on = cat === t.id;
              return (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => setCat(t.id)}
                  className={`btn relative min-h-12 shrink-0 px-6 text-base font-extrabold ${on ? "text-y" : "text-k hover:bg-k/8"}`}
                >
                  {on && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 bg-k"
                      transition={reduce ? { duration: 0 } : { type: "spring", duration: 0.4, bounce: 0.12 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        <div role="tabpanel" className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: reduce ? 0 : 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            >
              {list.length ? (
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((p) => (
                    <li key={p.slug}>
                      <ProductCard p={p} tone="light" />
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="grid gap-6 bg-k p-8 text-paper md:grid-cols-[1fr_auto] md:items-center md:p-12">
                  <div>
                    <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] text-y">{current?.name}</h2>
                    <p className="mt-3 max-w-[46ch] text-lg text-paper/80">
                      Estamos preparando esta sección. Mientras tanto, cuéntanos qué necesitas y te respondemos por WhatsApp.
                    </p>
                  </div>
                  <a
                    href={wa(`Hola Ferrenergía, quiero consultar por ${current?.name.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener"
                    className="btn inline-flex min-h-14 items-center justify-center gap-2 bg-y px-7 text-base font-extrabold text-k hover:bg-y2"
                  >
                    <WhatsApp className="h-5 w-5" /> Consultar
                  </a>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
