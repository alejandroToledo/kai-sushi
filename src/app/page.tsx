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
      <section className="relative">
        {/* Sección Galería */}
        <Gallery />

        {/* Imagen del koi decorativo */}
        <Image
          src="/images/koi-right.png"
          alt="Koi decorativo derecho"
          width={300}
          height={300}
          className="absolute md:block absolute right-0 bottom-[40%] opacity-10 pointer-events-none z-10"
        />

        {/* Sección Contacto */}
        <Contact />
      </section>
    </main>
  );
}
