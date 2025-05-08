'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-800 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © {currentYear} KAI SUSHI™. Todos los derechos reservados.
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Desarrollado con ❤️ por{' '}
              <a 
                href="https://alejandrotoledo.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#ff5757] hover:text-[#d84c3f] transition-colors"
              >
                Alejandro Toledo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 