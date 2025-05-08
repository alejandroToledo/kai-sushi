import Image from "next/image";

interface BackgroundImageProps {
  children: React.ReactNode;
  opacity?: number;
  className?: string;
}

export default function BackgroundImage({ 
  children, 
  opacity = 0.7,
  className = ""
}: BackgroundImageProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/sushi-background.jpg"
          alt="Sushi background"
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0  /[${opacity}]`}></div>
      </div>
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 