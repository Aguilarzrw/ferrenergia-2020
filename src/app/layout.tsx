import type { Metadata, Viewport } from "next";
import { Archivo, Big_Shoulders } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { Bolt } from "@/components/icons";

const display = Big_Shoulders({
  variable: "--f-display",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});
const body = Archivo({
  variable: "--f-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ferrenergía 2020 | Que tu negocio nunca se apague",
  description:
    "Generadores eléctricos, plantas industriales y maquinaria agrícola. Instalación, entregas y servicio técnico.",
  robots: { index: false, follow: false }, // propuesta visual
};

export const viewport: Viewport = { themeColor: "#0a0a09" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-VE" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-svh overflow-x-clip">
        <div className="intro" aria-hidden="true">
          <Bolt className="text-red" />
        </div>
        <a
          href="#contenido"
          className="fixed left-3 top-3 z-[300] -translate-y-20 rounded bg-y px-4 py-2 font-bold text-k focus:translate-y-0"
        >
          Saltar al contenido
        </a>
        <Nav />
        <main id="contenido">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
