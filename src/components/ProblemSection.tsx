import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Scale, TrendingDown, Clock, ShieldAlert } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background text-foreground">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* TÍTULO PRINCIPAL */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground leading-tight">
            Por que construtoras perdem dinheiro por falta de Planejamento Jurídico Estratégico?
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            A ausência de Estratégia Jurídica expõe construtoras a passivos e riscos que, se não corrigidos, podem gerar <strong className="text-foreground">prejuízos irreparáveis</strong> em multas, custos operacionais não previstos e disputas judiciais caras.
          </p>
        </div>

        {/* DOIS CARDS GRANDES: ALERTA vs SOLUÇÃO */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">

          {/* O ERRO COMUM */}
          <Card className="bg-card border border-destructive/20 transition-all duration-300 hover:border-destructive/40">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-destructive">
                  O Erro Comum
                </h3>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Delegar a responsabilidade da análise jurídica em cartórios para corretores, sem processo estruturado.
              </p>
            </CardContent>
          </Card>

          {/* NOSSA SOLUÇÃO */}
          <Card className="bg-card border border-accent/30 transition-all duration-300 hover:border-accent/50">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-accent">
                  Nossa Solução
                </h3>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Estruturamos processos que evitam erros evitáveis e aceleram a conclusão de vendas, eliminando riscos de atraso na entrega e possíveis ações que geram passivos em litígios.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CICLO DA INSEGURANÇA IMOBILIÁRIA */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-semibold text-foreground">
            O Ciclo da Insegurança Imobiliária resulta em:
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">

          {/* PERDA DE CREDIBILIDADE */}
          <Card className="bg-card border border-border transition-all duration-300 hover:border-destructive/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldAlert className="w-8 h-8 text-destructive" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Perda de Credibilidade
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Litígios e atrasos geram desconfiança de clientes e investidores.
              </p>
            </CardContent>
          </Card>

          {/* PREJUÍZOS OCULTOS */}
          <Card className="bg-card border border-border transition-all duration-300 hover:border-accent/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-accent" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Prejuízos Ocultos
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Erros em registros e documentos corroem lucros com custos não previstos.
              </p>
            </CardContent>
          </Card>

          {/* PRAZOS IMPROVÁVEIS */}
          <Card className="bg-card border border-border transition-all duration-300 hover:border-muted-foreground/30">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-muted-foreground" />
              </div>
              <h4 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                Prazos Improváveis
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                Sem blindagem jurídica, prazos de vendas e entregas são adiados indefinidamente.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};