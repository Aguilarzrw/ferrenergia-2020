import { Check } from "./icons";
import { Reveal } from "./Reveal";

// Solo hechos confirmados por el cliente. Nada de cifras inventadas.
const hechos = [
  "Distribuidores de Europower",
  "Instalación y soporte propios",
  "Stock y entrega rápida",
  "Cobertura en los llanos con la nueva sede de Camaguán",
];

export function Confianza() {
  return (
    <section
      aria-labelledby="conf-title"
      className="on-y relative bg-y py-24 text-k [clip-path:polygon(0_5vw,100%_0,100%_calc(100%-5vw),0_100%)] md:py-40"
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 md:grid-cols-12 md:items-center md:px-8">
        <Reveal className="md:col-span-5">
          <h2 id="conf-title" className="font-display text-[clamp(3rem,7.4vw,6.6rem)]">
            Respaldo de punta a punta.
          </h2>
        </Reveal>
        <ul className="md:col-span-6 md:col-start-7">
          {hechos.map((h, i) => (
            <Reveal as="li" key={h} delay={i * 0.07}>
              <div className="flex items-start gap-4 border-b-2 border-k/25 py-5 first:border-t-2 md:py-6">
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center bg-k text-y" aria-hidden="true">
                  <Check className="h-5 w-5" />
                </span>
                <span className="font-display text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[0.98]">{h}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
