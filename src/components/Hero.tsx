"use client";

import { useState } from "react";
import Link from "next/link";
import BackgroundImage from "./BackgroundImage";
import Button from "./ui/Button";
import Image from "next/image";

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section id="inicio" className="h-screen relative">
      <BackgroundImage opacity={0.1} className="h-full bg-opacity-70">
        {/* Overlay decorativo */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Header */}
        <nav className="relative z-10 mx-auto max-w-7xl py-6 flex justify-between items-center px-4">
          <div className="flex items-center text-white font-semibold tracking-widest">
            <Image
              src="/images/hero/logo-kai.png"
              alt="Kai Logo"
              width={160}
              height={160}
            />
          </div>

          <div className="hidden md:flex space-x-8">
            {["nosotros", "galería", "contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-white transition-all capitalize border-b-2 border-transparent hover:border-[#ff5757]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="https://wa.me/5491169549498" variant="terciary">
              Pedir Online
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex flex-col justify-center items-center space-y-6 px-6">
            {/* Botón cerrar */}
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              &times;
            </button>

            {/* Ítems del menú */}
            {["nosotros", "galería", "contacto"].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg border-b-2 border-transparent hover:border-[#ff5757] transition-all capitalize"
              >
                {item}
              </Link>
            ))}

            {/* Botón PDF */}
            <Button href="/menu.pdf" variant="terciary">
              Ver menú
            </Button>
          </div>
        )}

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 text-center h-[calc(100vh-6rem)] flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wider mb-6">
            Sushi con alma japonesa y corazón argentino
          </h1>
          <p className="text-xl text-white font-light mb-8 max-w-2xl">
            Experiencia culinaria japonesa en su máxima expresión
          </p>

          {/* Botón descarga PDF en desktop */}
          <Button href="/menu.pdf" variant="primary">
              Ver menú
            </Button>
        </div>
      </BackgroundImage>
    </section>
  );
}
