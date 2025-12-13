import { Phone, Mail, MapPin } from "lucide-react";
import logoRocio from '@/assets/logo-rocio.png';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* COLUNA 1: LOGO E TAGLINE */}
          <div className="flex flex-col">
            {/* Logo visível apenas em desktop */}
            <img 
              src={logoRocio} 
              alt="Rocio Advocacia" 
              className="h-14 object-contain mb-4 hidden md:block"
            />
            <p className="text-sm text-foreground/70 text-left">
              Direito Condominial Estratégico
            </p>
            <p className="text-sm text-foreground/60 mt-2 text-left">
              Mais de 10 anos construindo harmonia em condomínios.
            </p>
          </div>

          {/* COLUNA 2: CONTATO */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-foreground text-left">Contato</h4>
            <div className="space-y-3 text-sm text-foreground/70">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-left">(98) 99225-2729</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-left">contato@rocioadvocacia.com.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-left">Edifício Office Tower - R. dos Azulões, 01 - Salas 130 a 132 - Jardim Renascença, São Luís - MA</span>
              </div>
            </div>
          </div>

          {/* COLUNA 3: ÁREAS DE ATUAÇÃO */}
          <div>
            <h4 className="text-base font-semibold mb-4 text-foreground text-left">Áreas de Atuação</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li className="text-left">Direito Condominial</li>
              <li className="text-left">Direito Imobiliário</li>
              <li className="text-left">Direito Empresarial</li>
              <li className="text-left">Direito Trabalhista</li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/50">
          <p>© 2025 Rocio Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
