import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { catById, img, products, wa } from "@/lib/data";
import { ArrowLeft, Bolt, WhatsApp } from "@/components/icons";
import { ProductCard } from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  return { title: p ? `${p.name} | Ferrenergía 2020` : "Producto" };
}

// Vista conceptual de detalle: sin fichas técnicas, precios ni disponibilidad inventados.
export default async function Producto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const cat = catById(p.cat);
  const related = products.filter((x) => x.slug !== p.slug && x.cat === p.cat).slice(0, 3);

  return (
    <div className="bg-k pb-28 pt-28 md:pb-32 md:pt-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-8">
        <Link href="/catalogo/" className="group inline-flex min-h-11 items-center gap-2 font-bold text-y">
          <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" /> Volver al catálogo
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-12 md:gap-12">
          <div className="relative md:col-span-7">
            <div className="overflow-hidden bg-g [clip-path:polygon(7%_0,100%_0,100%_100%,0_100%)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img(p.photo)}
                alt={`${p.name}, foto del producto`}
                width={640}
                height={800}
                fetchPriority="high"
                className="max-h-[78svh] w-full object-cover"
                style={{ aspectRatio: p.ratio }}
              />
            </div>
            <Bolt className="absolute -right-2 -top-4 h-20 text-red md:-right-5 md:h-28" />
          </div>

          <div className="md:col-span-5 md:pt-6">
            <p className="inline-block bg-y px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-k">{cat.name}</p>
            <h1 className="font-display mt-4 text-[clamp(3rem,6.6vw,5.8rem)] text-paper">{p.name}</h1>
            <p className="mt-2 font-bold text-y">{p.brand}</p>
            <p className="mt-6 max-w-[44ch] text-lg text-paper/85">{p.blurb}</p>

            <dl className="mt-8 grid grid-cols-2 gap-px bg-paper/15 text-sm">
              <div className="bg-k py-4 pr-4">
                <dt className="text-paper/60">Precio</dt>
                <dd className="mt-1 font-bold">Consultar</dd>
              </div>
              <div className="bg-k py-4 pl-4">
                <dt className="text-paper/60">Disponibilidad</dt>
                <dd className="mt-1 font-bold">Consultar</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={wa(`Hola Ferrenergía, quiero consultar por el ${p.name}.`)}
                target="_blank"
                rel="noopener"
                className="btn inline-flex min-h-16 items-center justify-center gap-3 bg-y px-8 text-lg font-extrabold text-k hover:bg-y2"
              >
                <WhatsApp className="h-6 w-6" /> Consultar por WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-paper/55">
              Vista conceptual: las especificaciones, precios y disponibilidad se confirman con el cliente.
            </p>
          </div>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="rel" className="mt-24">
            <h2 id="rel" className="font-display mb-8 text-[clamp(2.2rem,4.4vw,3.6rem)] text-paper">
              Otros en <span className="text-y">{cat.short.toLowerCase()}</span>
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <ProductCard p={r} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
