import Image from 'next/image';

const menuImages = [
  { src: '/menu/menu1.jpg', alt: 'Menú 1' },
  { src: '/menu/menu2.jpg', alt: 'Menú 2' },
  { src: '/menu/menu3.jpg', alt: 'Menú 3' },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen   text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">Menú</h1>
        <div className="max-w-screen-md mx-auto space-y-8">
          {menuImages.map((image, index) => (
            <div key={index} className="relative w-full aspect-[3/4]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 