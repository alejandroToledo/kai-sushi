'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section id="nosotros" className="bg-black text-white h-screen flex flex-col md:flex-row">
      
      {/* Texto */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 ">
        <div className="max-w-xl bg-grey-900">
          <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
            Tradición japonesa,<br />sabor contemporáneo
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Desde el corazón de Colegiales, Kai Sushi nace con la misión de acercar la esencia de la cocina japonesa a través de piezas elaboradas con dedicación, frescura y respeto por los sabores originales.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Nuestro espacio combina servicio take away, delivery y atención en salón, pensado para quienes valoran la calidad sin concesiones.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            Cada roll refleja nuestra búsqueda por el equilibrio perfecto entre técnica, ingredientes frescos y presentación.
          </p>
          <p className="text-sm uppercase tracking-widest text-[#E14735]">
            Viví la experiencia Kai
          </p>
        </div>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-1/2 h-96 md:h-auto relative">
        <Image
          src="/images/about/about-sushi.jpg"
          alt="Cocina Kai Sushi"
          fill
          className="object-cover object-bottom"
        />
      </div>
      
    </section>
  );
}
