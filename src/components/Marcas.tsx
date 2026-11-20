import { brands } from "@/lib/data";
import { Bolt } from "./icons";

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {brands.map((b, i) => (
        <li key={b} className="flex items-center">
          <span
            className={`font-display whitespace-nowrap px-8 text-[clamp(3.4rem,9vw,7.5rem)] ${
              i % 2 ? "outline-text" : "text-paper"
            }`}
          >
            {b}
          </span>
          <Bolt className="h-12 shrink-0 text-red md:h-16" />
        </li>
      ))}
    </ul>
  );
}

export function Marcas() {
  return (
    <section id="marcas" aria-labelledby="marcas-title" className="overflow-hidden border-y-4 border-[#ffc800] bg-g py-14 md:py-20">
      <h2 id="marcas-title" className="mx-auto mb-8 max-w-[1400px] px-5 text-sm font-bold uppercase tracking-[0.2em] text-y md:px-8">
        Marcas que comercializamos
      </h2>
      <div className="marquee">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}

