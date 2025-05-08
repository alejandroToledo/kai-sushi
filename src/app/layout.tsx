import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Kai Sushi - Auténtico Sushi Artesanal",
  description: "Experiencia culinaria japonesa en su máxima expresión. Sushi artesanal preparado con los ingredientes más frescos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body >
        {children}
        <Footer />
      </body>
    </html>
  );
}
