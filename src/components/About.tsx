"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative text-white py-16 px-6 bg-[url('/images/bg-textura.jpg')] bg-cover bg-center"
    >
      {/* Overlay oscuro encima de la textura */}
      <div className="absolute inset-0   bg-opacity-70 z-0" />

      {/* Peces decorativos opcionales */}
      <Image
        src="/images/koi-left.png"
        alt="Koi izquierdo"
        width={200}
        height={200}
        className="absolute bottom-0 left-0 pointer-events-none z-0 opacity-30 md:opacity-100"
        />

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Título */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[#d84c3f] text-2xl md:text-3xl uppercase tracking-[.3em] mb-4">
            La Cocina Japonesa
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Una experiencia sensorial única
          </h3>
        </div>

        {/* Imagen + Texto */}
        <div className="container mx-auto flex flex-col md:flex-row gap-12 items-start max-w-6xl">
          {/* Imagen */}
          <div className="w-full md:w-1/2 relative aspect-[16/10]">
            <Image
              src="/images/contact/sushi-presentation.jpeg"
              alt="Sushi Kai"
              fill
              className="object-cover"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 text-left">
            <div className="text-base text-gray-300 space-y-6 leading-relaxed">
              <p>
                Desde Colegiales, Kai Sushi rinde homenaje a la cocina japonesa
                con una propuesta que combina frescura, técnica y respeto por los
                sabores tradicionales.
              </p>
              <p>
                Cada pieza está pensada como una obra: cuidamos el corte, la
                temperatura, el equilibrio de texturas y la presentación.
              </p>
              <p>
                Nuestra misión es ofrecer una experiencia de alta calidad,
                accesible y cálida, tanto para quienes eligen llevar como para
                quienes nos visitan.
              </p>
            </div>
            <p className="mt-8 text-sm tracking-widest text-[#d84c3f] uppercase">
              Viví la experiencia Kai
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
