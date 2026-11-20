import Link from "next/link";
import { INSTAGRAM, PHONES, img } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-g px-5 pb-28 pt-16 md:px-8 md:pb-12">
      <div className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img("logo-provisional.svg")} alt="" width={56} height={56} className="h-14 w-14" />
            <p className="font-display text-4xl text-paper">
              Ferrenergía <span className="text-y">2020</span> C.A.
            </p>
          </div>
          <p className="mt-5 max-w-[34ch] text-paper/70">Que tu negocio nunca se apague.</p>
        </div>
        <nav aria-label="Pie de página" className="md:col-span-2 md:col-start-7">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-y">Explorar</h2>
          <ul className="space-y-1 text-paper/80">
            {[
              ["/catalogo/", "Catálogo"],
              ["/#servicios", "Servicios"],
              ["/#marcas", "Marcas"],
              ["/#contacto", "Contacto"],
            ].map(([h, t]) => (
              <li key={h}>
                <Link href={h} className="inline-block py-1.5 hover:text-y">{t}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-y">Sedes</h2>
          <p className="text-paper/80">San Jacinto, Aragua<br />Camaguán, Guárico</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-y">Contacto</h2>
          <ul className="space-y-1 text-paper/80">
            {PHONES.map((p) => (<li key={p}>{p}</li>))}
            <li>
              <a href={INSTAGRAM} target="_blank" rel="noopener" className="inline-block py-1.5 hover:text-y">@ferrenergia2020</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-paper/55 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} Ferrenergía 2020 C.A. Propuesta visual.</p>
        <p>Logo e imágenes provisionales hasta recibir los originales.</p>
      </div>
    </footer>
  );
}
