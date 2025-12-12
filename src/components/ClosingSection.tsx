import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, Shield } from "lucide-react";

export const ClosingSection = () => {
  const handleCTAClick = () => {
    window.open("https://wa.me/5598992252729", "_blank");
  };

  return (
    <section className="relative py-20 md:py-28 bg-background text-foreground overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/98 to-background" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">

        {/* TÍTULO */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Chegou a Hora de Blindar Seu Investimento
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Não espere um problema acontecer para buscar uma solução. A prevenção é o melhor investimento em seu patrimônio.
          </p>
        </div>

        {/* CARD CENTRAL */}
        <Card className="bg-card border border-accent/20 max-w-5xl mx-auto">
          <CardHeader className="pb-6 pt-8 text-center">
            <h3 className="text-xl md:text-3xl font-semibold text-accent">
              O que esperar após solicitar o diagnóstico:
            </h3>
          </CardHeader>

          <CardContent className="space-y-8 p-6 md:p-10">
            {[
              { num: "1", title: "Primeira Consulta sem Custo", desc: "Nossa equipe especializada entrará em contato para entender seu empreendimento e suas necessidades." },
              { num: "2", title: "Análise Preliminar", desc: "Revisão completa do seu empreendimento, identificando riscos e oportunidades de blindagem jurídica." },
              { num: "3", title: "Entrega do Diagnóstico Estratégico", desc: "Relatório técnico detalhado com mapeamento de riscos e recomendações prioritárias." },
              { num: "4", title: "Plano de Implementação", desc: "Estratégia completa, cronograma e início da parceria com a Rocio Advocacia, com acompanhamento personalizado." },
            ].map((etapa) => (
              <div key={etapa.num} className="flex items-start gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-xl md:text-2xl text-accent-foreground">
                  {etapa.num}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-semibold mb-1 text-foreground">
                    {etapa.title}
                  </h4>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {etapa.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* BOTÃO CTA */}
            <div className="pt-8 text-center border-t border-border">
              <Button
                onClick={handleCTAClick}
                className="w-full max-w-md mx-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-md transition-all duration-300 px-10 py-7 text-lg md:text-xl"
              >
                <Phone className="mr-2 w-6 h-6" />
                FALAR COM ESPECIALISTA
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                Atendimento imediato via WhatsApp
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};