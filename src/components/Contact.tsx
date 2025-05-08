"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from './ui/Button';
import ContactForm from './ContactForm';

export default function Contact() {
  const [activeSection, setActiveSection] = useState<"left" | "right" | null>(null);

  return (
    <section id="contacto" className="py-16 bg-[url('/images/bg-textura.jpg')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contacto</h2>
        
        {/* Split Screen Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Sección Izquierda - Formulario */}
          <div className=" bg-[#121212] p-8 rounded-lg">
            <ContactForm />
          </div>

          {/* Sección Derecha - Información de Contacto */}
          <div className="space-y-8">
            <div className=" bg-[#121212] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-[#ff5757]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-lg">Amenábar 706, C1426 CABA</span>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-[#ff5757]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a 
                    href="tel:01169549498" 
                    className="text-lg hover:text-[#ff5757] transition-colors"
                  >
                    01169549498
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <svg
                    className="w-6 h-6 text-[#ff5757]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <a 
                    href="https://wa.me/5491169549498" 
                    className="text-lg hover:text-[#ff5757] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className=" bg-[#121212] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Ubicación</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889546!2d-58.44378492346572!3d-34.60373887295567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca62d4cf1563%3A0x686de82d09fb7b99!2sAmen%C3%A1bar%20706%2C%20C1426%20CABA!5e0!3m2!1ses!2sar!4v1620000000000!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
