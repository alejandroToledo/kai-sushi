import Image from "next/image";

const galleryImages = [
  { src: "/images/hero/sushi-background.jpg", alt: "Sushi Background" },
  { src: "/images/about/about-sushi.jpg", alt: "About Sushi" },
  { src: "/images/contact/sushi-preparation.jpeg", alt: "Sushi Preparation" },
  { src: "/images/contact/sushi-presentation.jpeg", alt: "Sushi Presentation" },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 bg-[url('/images/bg-textura.jpg')] bg-cover bg-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl text-white tracking-wider uppercase font-semibold mb-12">
          Galería
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden aspect-[3/4] group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
