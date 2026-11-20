import { img } from "@/lib/data";
import { Plug, Truck, Wrench } from "./icons";
import { Reveal } from "./Reveal";

const servicios = [
  { t: "Instalación", d: "Conectamos tu planta al sistema eléctrico y la dejamos funcionando.", Icon: Plug },
  { t: "Entregas", d: "Despachamos tu equipo desde San Jacinto y Camaguán, hacia Aragua y los llanos.", Icon: Truck },
  { t: "Servicio técnico", d: "Mantenimiento y reparación a cargo de nuestro equipo técnico.", Icon: Wrench },
];

export function Servicios() {
  return (
    <section id="servicios" aria-labelledby="serv-title" className="bg-paper py-20 text-k md:py-32 on-paper">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-12 md:gap-10 md:px-8">
        <Reveal className="md:sticky md:top-28 md:col-span-5 md:self-start">
          <h2 id="serv-title" className="font-display text-[clamp(2.4rem,3.3vw,3.5rem)] leading-[1.08]">
            <span className="block md:whitespace-nowrap">Te lo vendemos.</span>
            <span className="block md:whitespace-nowrap">Te lo instalamos.</span>
            <span className="mt-2 block w-fit bg-k px-3 pb-1 text-y">Te respaldamos.</span>
          </h2>
          <div className="mt-8 hidden max-w-[300px] md:block">
            <div className="overflow-hidden bg-g [clip-path:polygon(8%_0,100%_0,100%_100%,0_100%)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img("camaguan.webp")}
                alt="Inauguración de la nueva sede de Camaguán, con globos amarillos y negros"
                width={361}
                height={640}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-[50%_30%]"
              />
            </div>
          </div>
        </Reveal>

        <ul className="md:col-span-7 md:col-start-6">
          {servicios.map(({ t, d, Icon }, i) => (
            <Reveal as="li" key={t} delay={i * 0.08}>
              <div className="group relative flex items-start gap-5 border-t-4 border-k py-9 md:gap-8 md:py-12">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-full origin-left scale-x-0 bg-y transition-transform duration-500 ease-out [transition-timing-function:var(--ease-io)] group-hover:scale-x-100"
                />
                <Icon className="relative h-14 w-14 shrink-0 md:h-20 md:w-20" />
                <div className="relative">
                  <h3 className="font-display text-[clamp(2.4rem,5vw,4.4rem)]">{t}</h3>
                  <p className="mt-3 max-w-[44ch] text-lg font-medium text-k/80">{d}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <li aria-hidden="true" className="border-t-4 border-k" />
        </ul>
      </div>
    </section>
  );
}
