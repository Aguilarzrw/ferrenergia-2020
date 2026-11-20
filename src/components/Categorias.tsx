import Link from "next/link";
import { categories, img } from "@/lib/data";
import { Arrow, Bolt } from "./icons";
import { Reveal } from "./Reveal";

export function Categorias() {
  return (
    <section id="categorias" aria-labelledby="cat-title" className="bg-g py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Reveal className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <h2 id="cat-title" className="font-display text-[clamp(2.6rem,6vw,5.2rem)] text-paper">
            Todo lo que mueve <span className="text-y">tu proyecto</span>
          </h2>
          <Link href="/catalogo/" className="group inline-flex items-center gap-2 font-bold text-y underline-offset-8 hover:underline">
            Ver catálogo completo <Arrow className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <ul className="flex flex-col gap-3 md:h-[68svh] md:min-h-[520px] md:flex-row md:gap-0">
          {categories.map((c, i) => (
            <li key={c.id} className="md:-mx-[2.2%] md:flex-1 md:first:ml-0 md:last:mr-0" style={{ zIndex: 10 - i }}>
              <Reveal delay={i * 0.07} className="h-full">
                <Link
                  href={`/catalogo/#${c.id}`}
                  className="lift group relative block h-48 overflow-hidden bg-g2 md:h-full md:[clip-path:var(--slant)]"
                  aria-label={`${c.name}: ${c.line}`}
                >
                  {c.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={img(c.photo)}
                      alt=""
                      loading="lazy"
                      width={640}
                      height={640}
                      className="lift-img absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
                      style={{ objectPosition: c.position }}
                    />
                  ) : (
                    <>
                      <span
                        aria-hidden="true"
                        className="font-display absolute right-6 top-3 select-none text-[7rem] leading-none text-y md:right-[14%] md:top-6 md:text-[9rem]"
                      >
                        {c.id === "agricola" ? "AGRO" : "+"}
                      </span>
                      <Bolt className="absolute left-6 top-6 h-14 text-red" />
                    </>
                  )}
                  <span className="absolute inset-0 bg-gradient-to-t from-k/90 via-k/30 to-transparent" aria-hidden="true" />
                  <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5 pr-[22%] md:p-7 md:pr-[26%]">
                    <span className="font-display text-[1.9rem] text-paper md:text-[2.4rem]">{c.name}</span>
                    <span className="max-w-[26ch] text-sm text-paper/80 md:translate-y-2 md:opacity-0 md:transition-[opacity,transform] md:duration-300 md:ease-out md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                      {c.line}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1.5 origin-left scale-x-0 bg-y transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
