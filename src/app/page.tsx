"use client";

import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen   text-white">
      <Hero />
      <About />
      <section className="relative z-10">
  {/* Galería */}
  <Gallery />

  {/* Koi decorativo */}
  <Image
    src="/images/koi-right.png"
    alt="Koi decorativo derecho"
    width={250}
    height={250}
    className="hidden md:block absolute right-0 bottom-[40%] pointer-events-none z-0"
  />

  {/* Contacto */}
  <div className="relative z-10">
    <Contact />
  </div>
</section>

    </main>
  );
}
