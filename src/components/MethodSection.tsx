import { Card, CardContent } from "@/components/ui/card";
import { Building2, Quote } from "lucide-react";

export const MethodSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Overlay escuro elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        {/* TÍTULO PRINCIPAL */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            O Método Assessoria Condominial Blindada
          </h2>
          <p className="mt-4 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            É o sistema proprietário da <span className="text-accent font-medium">Rocio Advocacia</span> que transforma a rotina caótica em gestão previsível e harmoniosa.
          </p>
        </div>

        {/* BLOCO 1: NOSSA VISÃO */}
        <div className="mb-12">
          <Card className="bg-card/80 backdrop-blur-sm border border-accent/20 h-full max-w-4xl mx-auto">
            <CardContent className="p-6 md:p-8 h-full flex items-center justify-center">
              <p className="text-lg md:text-xl text-accent font-medium leading-relaxed text-center">
                Nosso Método é como um guardião jurídico acompanhando o dia a dia do condomínio — cada etapa com base legal sólida, evitando conflitos e protegendo todos os envolvidos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* BLOCO 2: TABELA DESKTOP */}
        <div className="mb-12 hidden md:block">
          <div className="overflow-hidden rounded-md border border-accent/20 backdrop-blur-sm max-w-4xl mx-auto h-full">
            <table className="w-full h-full">
              <thead>
                <tr className="bg-accent text-accent-foreground">
                  <th className="px-6 py-5 text-left text-base font-semibold">Pilares do Método</th>
                  <th className="px-6 py-5 text-left text-base font-semibold border-x border-accent-foreground/20">Foco Estratégico</th>
                  <th className="px-6 py-5 text-left text-base font-semibold">Resultado para Seu Condomínio</th>
                </tr>
              </thead>
              <tbody className="bg-card/80">
                <tr className="border-b border-border transition-colors duration-200 hover:bg-muted/30">
                  <td className="px-6 py-8 border-r border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center font-semibold text-base text-accent-foreground">1</div>
                      <span className="text-base font-medium text-foreground">Assessoria Preventiva</span>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-foreground/80 border-r border-border">Orientação diária ao síndico, revisão de convenções e regimentos internos para evitar litígios</td>
                  <td className="px-6 py-8 text-accent font-medium">Redução de até 80% em ações judiciais desnecessárias</td>
                </tr>
                <tr className="border-b border-border transition-colors duration-200 hover:bg-muted/30">
                  <td className="px-6 py-8 border-r border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center font-semibold text-base text-accent-foreground">2</div>
                      <span className="text-base font-medium text-foreground">Cobrança Eficiente</span>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-foreground/80 border-r border-border">Estratégias extrajudiciais e judiciais para recuperação de inadimplência, com respeito aos condôminos</td>
                  <td className="px-6 py-8 text-accent font-medium">Recuperação rápida de cotas atrasadas</td>
                </tr>
                <tr className="transition-colors duration-200 hover:bg-muted/30">
                  <td className="px-6 py-8 border-r border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-accent rounded-full flex items-center justify-center font-semibold text-base text-accent-foreground">3</div>
                      <span className="text-base font-medium text-foreground">Mediação e Resolução Ágil</span>
                    </div>
                  </td>
                  <td className="px-6 py-8 text-foreground/80 border-r border-border">Solução de conflitos de vizinhança, participação em assembleias e defesa em ações judiciais</td>
                  <td className="px-6 py-8 text-accent font-medium">Proteção jurídica ao síndico contra responsabilidades pessoais</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CARDS MOBILE */}
        <div className="md:hidden space-y-5 mb-12">
          {[
            { num: "1", title: "Assessoria Preventiva", foco: "Orientação diária ao síndico, revisão de convenções e regimentos internos", resultado: "Redução de até 80% em ações judiciais" },
            { num: "2", title: "Cobrança Eficiente", foco: "Estratégias extrajudiciais e judiciais para recuperação de inadimplência", resultado: "Recuperação rápida de cotas atrasadas" },
            { num: "3", title: "Mediação e Resolução Ágil", foco: "Solução de conflitos de vizinhança e defesa em ações judiciais", resultado: "Proteção jurídica ao síndico" },
          ].map((pilar) => (
            <Card key={pilar.num} className="bg-card/80 backdrop-blur-sm border border-accent/20">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-semibold text-lg text-accent-foreground">
                    {pilar.num}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{pilar.title}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm"><span className="text-accent font-medium">Foco:</span> {pilar.foco}</p>
                  <p className="text-accent font-medium text-sm"><span className="font-medium">Resultado:</span> {pilar.resultado}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* BLOCO 3: CONFIANÇA E DEPOIMENTO */}
        <div className="mt-16">
          <Card className="bg-card/80 backdrop-blur-sm border border-accent/30 rounded-md h-full max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-10 h-full flex flex-col justify-center">
              <div className="flex items-center gap-4 justify-center mb-5">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-accent leading-tight">
                  Mais de 10 Anos Construindo Harmonia em Condomínios
                </h3>
              </div>

              <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
                A Rocio Advocacia possui uma década de excelência comprovada em Direito Condominial, com equipe especializada pronta para transformar desafios cotidianos em gestão serena e eficiente.
              </p>

              {/* Depoimento em destaque */}
              <div className="mt-6 pt-5 border-t border-border">
                <div className="bg-accent/10 border border-accent/30 rounded-lg p-6">
                  <Quote className="w-8 h-8 text-accent mb-3" />
                  <p className="text-base md:text-lg italic text-foreground leading-relaxed">
                    "Com uma assessoria jurídica especializada, cada decisão é tomada com segurança. Não há surpresas quando se trabalha com previsibilidade condominial."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};
