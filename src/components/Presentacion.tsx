import { img } from "@/lib/data";
import { Reveal } from "./Reveal";

export function Presentacion() {
  return (
    <section id="nosotros" aria-labelledby="pres-title" className="relative bg-k py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-7 md:pt-10">
          <Reveal>
            <h2 id="pres-title" className="font-display text-[clamp(2.8rem,7.2vw,6.4rem)] text-paper">
              Cuando la luz se va,
              <br />
              <span className="text-y">tu operación sigue.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 max-w-[52ch] space-y-5 text-lg text-paper/80 md:ml-[8%]">
            <p>
              Ferrenergía 2020 C.A. es una empresa venezolana que comercializa generadores eléctricos, plantas
              eléctricas y maquinaria agrícola.
            </p>
            <p>
              Con sedes en San Jacinto, Aragua, y Camaguán, Guárico, acompañamos cada equipo con instalación,
              entrega y servicio técnico, para que tu negocio no se detenga.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative md:col-span-5 md:col-start-8">
          <div className="relative ml-auto w-[78%] md:w-[88%] md:translate-y-10">
            <div className="slant overflow-hidden bg-g">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("despacho.webp")}
                alt="Dos técnicos cargan una planta eléctrica amarilla en una camioneta para su entrega"
                width={361}
                height={640}
                loading="lazy"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 -top-4 -z-10 h-full w-full bg-y md:-left-6 md:-top-6" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
