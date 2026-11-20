"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { img, wa } from "@/lib/data";
import { Menu, WhatsApp } from "./icons";

const links = [
  { href: "/catalogo/", label: "Catálogo" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#marcas", label: "Marcas" },
  { href: "/#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const reduce = useReducedMotion();
  const first = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) first.current?.focus();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      window.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-k transition-[padding] duration-300 ${
          solid ? "py-1.5 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.8)]" : "py-3"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 md:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="Ferrenergía 2020, inicio" onClick={() => setOpen(false)}>
            {/* Logo provisional hasta recibir el original del cliente */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("logo-provisional.svg")} alt="" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-[1.6rem] leading-none text-paper">
              Ferrenergía <span className="text-y">2020</span>
            </span>
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative py-2 text-sm font-semibold tracking-wide text-paper"
              >
                {l.label}
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-y transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
            <a
              href={wa("Hola Ferrenergía, quiero información.")}
              target="_blank"
              rel="noopener"
              className="btn inline-flex min-h-11 items-center gap-2 bg-y px-5 text-sm font-extrabold text-k hover:bg-y2"
            >
              <WhatsApp className="h-5 w-5" /> Contactar
            </a>
          </nav>

          <button
            type="button"
            className="btn grid h-11 w-11 place-items-center bg-y text-k md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <Menu open={open} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-y px-6 pb-8 pt-28 text-k md:hidden on-y"
            initial={{ clipPath: reduce ? "inset(0)" : "polygon(100% 0,100% 0,100% 100%,100% 100%)", opacity: reduce ? 0 : 1 }}
            animate={{ clipPath: reduce ? "inset(0)" : "polygon(-30% 0,100% 0,100% 100%,0% 100%)", opacity: 1 }}
            exit={{ clipPath: reduce ? "inset(0)" : "polygon(100% 0,100% 0,100% 100%,100% 100%)", opacity: reduce ? 0 : 1 }}
            transition={{ duration: reduce ? 0.15 : 0.45, ease: [0.77, 0, 0.175, 1] }}
          >
            <nav aria-label="Menú móvil" className="flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: reduce ? 0 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduce ? 0 : 0.18 + i * 0.06, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Link
                    ref={i === 0 ? first : undefined}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display block border-b-2 border-k/15 py-4 text-[3.2rem]"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <a
              href={wa("Hola Ferrenergía, quiero información.")}
              target="_blank"
              rel="noopener"
              className="btn flex min-h-14 items-center justify-center gap-2 bg-k text-lg font-extrabold text-y"
            >
              <WhatsApp className="h-6 w-6" /> Escríbenos por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
