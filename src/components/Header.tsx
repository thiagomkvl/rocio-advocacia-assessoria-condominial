import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-rocio.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08332A]/95 backdrop-blur-sm border-b border-gold/10">
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Bloco esquerdo: Logo + Menu desktop (alinhado à esquerda) */}
          <div className="flex items-center">
            {/* Logo */}
            <a href="#inicio" className="flex-shrink-0 mr-16">
              <img
                src={logo}
                alt="Rocio Advocacia"
                className="h-14 w-auto"
              />
            </a>

            {/* Menu desktop */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Bloco direito: Redes sociais + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-4 text-primary-foreground/60">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <a
              href="#contato"
              className="bg-gold hover:bg-gold-dark text-dark px-6 py-2.5 rounded text-sm font-semibold transition-all hover:scale-105"
            >
              Consulta Online
            </a>
          </div>

          {/* Botão mobile */}
          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gold/10 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm uppercase tracking-wider py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsMenuOpen(false)}
                className="bg-gold hover:bg-gold-dark text-dark px-6 py-3 rounded text-sm font-semibold transition-colors mt-4 text-center"
              >
                Consulta Online
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
