import { Building2, Quote } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const MethodSection = () => {
  // Dados consistentes para desktop e mobile
  const pilares = [
    { 
      num: "1", 
      title: "Assessoria Preventiva", 
      foco: "Orientação diária ao síndico, revisão de convenções e regimentos internos para evitar litígios", 
      resultado: "Redução de até 80% em ações judiciais desnecessárias" 
    },
    { 
      num: "2", 
      title: "Cobrança Eficiente", 
      foco: "Estratégias extrajudiciais e judiciais para recuperação de inadimplência, com respeito aos condôminos", 
      resultado: "Recuperação rápida de cotas atrasadas" 
    },
    { 
      num: "3", 
      title: "Mediação e Resolução Ágil", 
      foco: "Solução de conflitos de vizinhança, participação em assembleias e defesa em ações judiciais", 
      resultado: "Proteção jurídica ao síndico contra responsabilidades pessoais" 
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Imagem de fundo - mesma do hero */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay bem suave - igual ao hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/15 to-background/20" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        {/* TÍTULO PRINCIPAL - Estilo igual ao hero */}
        <div className="text-center mb-12">
          <div className="bg-primary-light/60 backdrop-blur-sm p-6 lg:p-7 rounded-md border border-border/30 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 lg:mb-4 text-foreground">
              O Método Assessoria Condominial Blindada
            </h2>
            <p className="text-base lg:text-lg text-foreground/90 leading-relaxed">
              É o sistema proprietário da <span className="text-accent font-medium">Rocio Advocacia</span> que transforma a rotina caótica em gestão previsível e harmoniosa.
            </p>
          </div>
        </div>

        {/* BLOCO 1: NOSSA VISÃO - Estilo igual ao hero */}
        <div className="mb-12">
          <div className="bg-primary-light/60 backdrop-blur-sm p-6 lg:p-7 rounded-md border border-border/30 h-full max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-accent font-medium leading-relaxed text-center">
              Nosso Método é como um guardião jurídico acompanhando o dia a dia do condomínio — cada etapa com base legal sólida, evitando conflitos e protegendo todos os envolvidos.
            </p>
          </div>
        </div>

        {/* BLOCO 2: TABELA DESKTOP - Estilo igual ao hero */}
        <div className="mb-12 hidden md:block">
          <div className="bg-primary-light/60 backdrop-blur-sm rounded-md border border-border/30 max-w-4xl mx-auto overflow-hidden">
            <div className="bg-accent/90 text-accent-foreground p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-base font-semibold px-4">Pilares do Método</div>
                <div className="text-base font-semibold px-4 border-x border-accent-foreground/20">Foco Estratégico</div>
                <div className="text-base font-semibold px-4">Resultado para Seu Condomínio</div>
              </div>
            </div>
            
            <div className="divide-y divide-border/30">
              {pilares.map((pilar) => (
                <div key={pilar.num} className="p-6 transition-colors duration-200 hover:bg-primary/30">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center font-semibold text-base text-accent-foreground">{pilar.num}</div>
                        <span className="text-base font-medium text-foreground">{pilar.title}</span>
                      </div>
                    </div>
                    <div className="px-4 border-x border-border/30 text-foreground/90">
                      {pilar.foco}
                    </div>
                    <div className="px-4 text-accent font-medium">
                      {pilar.resultado}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CARDS MOBILE - Estilo igual ao hero */}
        <div className="md:hidden space-y-5 mb-12">
          {pilares.map((pilar) => (
            <div key={pilar.num} className="bg-primary-light/60 backdrop-blur-sm rounded-md border border-border/30 p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-semibold text-lg text-accent-foreground">
                  {pilar.num}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{pilar.title}</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="text-accent font-medium text-sm mb-1">Foco Estratégico:</p>
                  <p className="text-foreground/90 text-sm">{pilar.foco}</p>
                </div>
                <div>
                  <p className="text-accent font-medium text-sm mb-1">Resultado para Seu Condomínio:</p>
                  <p className="text-foreground/90 text-sm">{pilar.resultado}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BLOCO 3: CONFIANÇA E DEPOIMENTO - Estilo igual ao hero */}
        <div className="mt-16">
          <div className="bg-primary-light/60 backdrop-blur-sm rounded-md border border-border/30 h-full max-w-4xl mx-auto p-6 lg:p-8">
            <div className="flex items-center gap-4 justify-center mb-5">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Building2 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-accent leading-tight">
                Mais de 10 Anos Construindo Harmonia em Condomínios
              </h3>
            </div>

            <p className="text-base md:text-lg text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto mb-6">
              A Rocio Advocacia possui uma década de excelência comprovada em Direito Condominial, com equipe especializada pronta para transformar desafios cotidianos em gestão serena e eficiente.
            </p>

            {/* Depoimento em destaque */}
            <div className="pt-5 border-t border-border/30">
              <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                <Quote className="w-8 h-8 text-accent mb-3" />
                <p className="text-base md:text-lg italic text-foreground leading-relaxed">
                  "Com uma assessoria jurídica especializada, cada decisão é tomada com segurança. Não há surpresas quando se trabalha com previsibilidade condominial."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
