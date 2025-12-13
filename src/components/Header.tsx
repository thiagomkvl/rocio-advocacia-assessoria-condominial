import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo-rocio.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      if (sectionId === "inicio") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      
      // Encontra o elemento pelo ID
      const element = document.getElementById(sectionId);
      
      if (element) {
        const offset = 80; // Altura do header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      } else {
        console.warn(`Elemento com ID "${sectionId}" não encontrado`);
      }
    }, 100);
  };

  const navLinks = [
    { name: "Início", target: "inicio" },
    { name: "Sobre Nós", target: "sobre-nos" }, // ID do MethodSection
    { name: "Serviços", target: "servicos" }, // ID do HeroSection
    { name: "Contato", target: "contato" }, // ID do HeroSection/ClosingSection
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08332A]/95 backdrop-blur-sm border-b border-gold/10">
      <div className="container-custom mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Bloco esquerdo: Logo + Menu desktop (alinhado à esquerda) */}
          <div className="flex items-center">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection("inicio")}
              className="flex-shrink-0 mr-16"
            >
              <img
                src={logo}
                alt="Rocio Advocacia"
                className="h-14 w-auto"
              />
            </button>

            {/* Menu desktop */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.target)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm uppercase tracking-wider"
                >
                  {link.name}
                </button>
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
            <button
              onClick={() => scrollToSection("contato")}
              className="bg-gold hover:bg-gold-dark text-dark px-6 py-2.5 rounded text-sm font-semibold transition-all hover:scale-105"
            >
              Consulta Online
            </button>
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
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.target)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors text-sm uppercase tracking-wider py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contato")}
                className="bg-gold hover:bg-gold-dark text-dark px-6 py-3 rounded text-sm font-semibold transition-colors mt-4 text-center"
              >
                Consulta Online
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
