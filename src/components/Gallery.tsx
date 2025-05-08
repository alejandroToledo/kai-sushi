import Image from 'next/image';

const galleryImages = [
  { src: '/images/hero/sushi-background.jpg', alt: 'Sushi Background' },
  { src: '/images/about/about-sushi.jpg', alt: 'About Sushi' },
  { src: '/images/contact/sushi-preparation.jpeg', alt: 'Sushi Preparation' },
  { src: '/images/contact/sushi-presentation.jpeg', alt: 'Sushi Presentation' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-16 bg-[url('/images/bg-textura.jpg')] bg-cover bg-center ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Galería</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="relative h-48 overflow-hidden transition-transform hover:scale-105 hover:shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 