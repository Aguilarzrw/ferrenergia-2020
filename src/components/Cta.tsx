import { INSTAGRAM, PHONES, wa } from "@/lib/data";
import { Bolt, Instagram, WhatsApp } from "./icons";
import { Reveal } from "./Reveal";

export function Cta() {
  return (
    <section id="contacto" aria-labelledby="cta-title" className="relative overflow-hidden bg-k pb-28 pt-28 md:py-40">
      <Bolt className="pointer-events-none absolute -right-6 top-6 h-[70%] rotate-6 text-red/90 md:right-[6%] md:top-[12%] md:h-[76%]" />
      <div className="relative mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal>
          <h2 id="cta-title" className="font-display max-w-[9ch] !leading-[1.04] text-[clamp(3.4rem,8.6vw,8.2rem)] text-paper">
            ¿Qué <span className="text-y">equipo</span> necesitas?
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex max-w-[620px] flex-col gap-5">
          <p className="text-xl text-paper/85">Cuéntanos tu proyecto y te asesoramos por WhatsApp.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={wa("Hola Ferrenergía, quiero cotizar un equipo.")}
              target="_blank"
              rel="noopener"
              className="btn inline-flex min-h-16 items-center justify-center gap-3 bg-y px-8 text-lg font-extrabold text-k hover:bg-y2"
            >
              <WhatsApp className="h-6 w-6" /> Escribir por WhatsApp
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener"
              className="btn inline-flex min-h-16 items-center justify-center gap-3 border-2 border-paper/40 px-8 text-lg font-bold text-paper hover:border-y hover:text-y"
            >
              <Instagram className="h-6 w-6" /> @ferrenergia2020
            </a>
          </div>
          <p className="text-sm text-paper/60">{PHONES.join("  ·  ")}</p>
        </Reveal>
      </div>
    </section>
  );
}
