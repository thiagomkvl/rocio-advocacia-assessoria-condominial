import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Building2, FileCheck, Gift } from "lucide-react";
import { toast } from "sonner";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycby8cT4P-Yz8i1nAy1KlDDWtG2Fbm7swaZTlZFPw-JgM1Dq5kncsn8Gfxbl11DcEvToA/exec";

const FormContent = ({ formData, setFormData, handleSubmit, isMobile }: any) => {
  const inputClasses = isMobile ? "h-10 text-sm" : "h-12 text-base";
  const radioTextClasses = isMobile ? "text-sm" : "text-base";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${!isMobile && "lg:space-y-5"}`}>
      <div>
        <Input
          type="text"
          placeholder="Seu Nome Completo"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className={`${inputClasses} bg-muted border-border focus:border-accent focus:ring-accent/20`}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className={`${inputClasses} bg-muted border-border focus:border-accent focus:ring-accent/20`}
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Telefone / WhatsApp"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className={`${inputClasses} bg-muted border-border focus:border-accent focus:ring-accent/20`}
        />
      </div>

      <div className={`space-y-2 ${!isMobile && "lg:space-y-3"}`}>
        <Label className={`font-medium text-foreground/90 ${radioTextClasses}`}>
          Em qual fase está o seu empreendimento que mais precisa de segurança jurídica?
        </Label>
        <RadioGroup value={formData.phase} onValueChange={(value) => setFormData({ ...formData, phase: value })} required>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Prospecção/Aquisição de terreno" id="c1" className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
            <Label htmlFor="c1" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Prospecção/Aquisição de terreno</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Incorporação/Registro e aprovações" id="c2" className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
            <Label htmlFor="c2" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Incorporação/Registro e aprovações</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Lançamento e vendas na planta" id="c3" className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
            <Label htmlFor="c3" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Lançamento e vendas na planta</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Execução da obra" id="c4" className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
            <Label htmlFor="c4" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Execução da obra</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Entrega e instituição de condomínio" id="c5" className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
            <Label htmlFor="c5" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Entrega e instituição de condomínio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Pós-entrega (já entregue, mas com pendências)" id="c6" className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
            <Label htmlFor="c6" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Pós-entrega (já entregue, mas com pendências)</Label>
          </div>
        </RadioGroup>
      </div>

      <Button
        type="submit"
        className={`w-full ${isMobile ? "h-12 text-sm" : "h-14 text-base"} font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300`}
      >
        QUERO MEU DIAGNÓSTICO ESTRATÉGICO
      </Button>
    </form>
  );
};

const FormCard = ({ formData, setFormData, handleSubmit, isMobile }: any) => {
  const iconSize = isMobile ? "w-4 h-4" : "w-5 h-5";
  const textSize = isMobile ? "text-sm" : "text-base";

  return (
    <Card className={`shadow-lg border border-border/50 w-full h-full ${isMobile ? "rounded-t-none" : "rounded-lg"}`}>
      <CardContent className="pt-6 bg-card text-card-foreground h-full flex flex-col">
        <ul className={`space-y-4 ${isMobile ? "mb-5" : "mb-6"}`}>
          <li className="flex items-start gap-3">
            <CheckCircle2 className={`${iconSize} text-accent flex-shrink-0 mt-0.5`} />
            <span className={`${textSize} text-foreground/90`}>
              <strong className="text-foreground">Mapeamento de Riscos:</strong> Identificação imediata de fragilidades em contratos, registros e licenças.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className={`${iconSize} text-accent flex-shrink-0 mt-0.5`} />
            <span className={`${textSize} text-foreground/90`}>
              <strong className="text-foreground">Análise de Viabilidade:</strong> Parecer técnico sobre a conformidade legal dos seus projetos.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Gift className={`${iconSize} text-accent flex-shrink-0 mt-0.5`} />
            <span className={`${textSize} text-foreground/90`}>
              <strong className="text-foreground">BÔNUS Exclusivo:</strong> Relatório Personalizado com Plano de Ação Prioritário.
            </span>
          </li>
        </ul>
        <div className="mt-auto pt-4">
          <FormContent formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={isMobile} />
        </div>
      </CardContent>
    </Card>
  );
};

export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phase: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.phase) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          phase: formData.phase,
        }).toString(),
      });

      toast.success("Diagnóstico solicitado com sucesso.", {
        description: "Entraremos em contato em até 24 horas úteis.",
        duration: 8000,
      });

      setFormData({ name: "", email: "", phone: "", phase: "" });
    } catch (error) {
      toast.error("Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.");
      console.error("Erro:", error);
    }
  };

  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      {/* Overlay escuro elegante */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95" />

      {/* MOBILE */}
      <div className="sm:hidden py-12 px-5 relative z-10">
        <div className="animate-fade-in text-center">
          <h1 className="text-2xl font-semibold leading-snug mb-4 text-foreground">
            Descubra Como Aumentar a Segurança Jurídica do seu Empreendimento
          </h1>
          <p className="text-base text-foreground/80 mb-8 leading-relaxed">
            A Rocio Advocacia transforma incertezas em Previsibilidade e Agilidade com Segurança Jurídica Imobiliária.
          </p>

          <Button
            size="lg"
            onClick={() => window.open("https://wa.me/5598992252729", "_blank")}
            className="w-full mb-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6"
          >
            <Phone className="mr-2 w-5 h-5" />
            FALAR COM ESPECIALISTA
          </Button>

          <div className="bg-primary-light/80 backdrop-blur-sm p-4 rounded-t-md border-b border-accent/30 w-full text-center">
            <h2 className="text-lg font-semibold mb-1 text-foreground font-sans tracking-wide uppercase">Diagnóstico Estratégico</h2>
          </div>

          <div className="w-full">
            <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={true} />
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:block py-16 md:py-20 lg:py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Título e formulário lado a lado com mesma altura */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Título com especialização - MESMA ALTURA que o formulário */}
            <div className="lg:w-1/2 animate-fade-in">
              <div className="bg-primary-light/60 backdrop-blur-sm p-6 lg:p-7 rounded-md border border-border/30 h-full flex flex-col">
                {/* Título e descrição */}
                <div className="mb-5 lg:mb-6">
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 lg:mb-4 text-foreground">
                    Descubra Como Aumentar a Segurança Jurídica do seu Empreendimento
                  </h1>
                  <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                    A Rocio Advocacia transforma incertezas em Previsibilidade e Agilidade com Segurança Jurídica Imobiliária.
                  </p>
                </div>

                {/* Três Pilares */}
                <div className="mb-5 lg:mb-6">
                  <h3 className="text-lg font-semibold mb-3 lg:mb-4 text-foreground flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-accent" />
                    Três Pilares Para Sua Segurança:
                  </h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 lg:mr-3 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm lg:text-base font-medium text-foreground">Planejamento Jurídico:</span>
                        <span className="text-sm lg:text-base ml-1">Análise e validação da viabilidade registral e fundiária antes da construção.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 lg:mr-3 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm lg:text-base font-medium text-foreground">Foco Estratégico:</span>
                        <span className="text-sm lg:text-base ml-1">Estratégias de modelagem de contratos com proteção patrimonial.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-4 h-4 mr-2 lg:mr-3 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-sm lg:text-base font-medium text-foreground">Execução Ágil:</span>
                        <span className="text-sm lg:text-base ml-1">Atuação direta e especializada em cartórios.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Resultados */}
                <div className="mb-5 lg:mb-6">
                  <h3 className="text-lg font-semibold mb-3 lg:mb-4 text-foreground flex items-center">
                    <FileCheck className="w-5 h-5 mr-2 text-accent" />
                    Resultado para Sua Construtora:
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="bg-primary/30 p-3 rounded-lg">
                      <p className="text-sm text-foreground/90">✓ Previsão de riscos contratuais e registrais</p>
                    </div>
                    <div className="bg-primary/30 p-3 rounded-lg">
                      <p className="text-sm text-foreground/90">✓ Redução em atrasos na regularização</p>
                    </div>
                    <div className="bg-primary/30 p-3 rounded-lg">
                      <p className="text-sm text-foreground/90">✓ Blindagem patrimonial de até 95% nos riscos registrais</p>
                    </div>
                  </div>
                </div>

                {/* Botão Falar com Especialista */}
                <div className="mt-auto pt-4 lg:pt-5 border-t border-border/30">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => window.open("https://wa.me/5598992252729", "_blank")}
                    className="w-full border border-accent text-accent hover:bg-accent hover:text-accent-foreground text-base px-8 py-5 font-medium transition-all duration-300"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    FALAR COM ESPECIALISTA
                  </Button>
                  <p className="text-xs text-foreground/60 mt-2 text-center">
                    Atendimento imediato via WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="h-full flex flex-col">
                <div className="bg-primary-light/80 backdrop-blur-sm p-5 rounded-t-md border-b border-accent/30 w-full text-center">
                  <h2 className="text-xl font-semibold mb-1 text-foreground font-sans tracking-wide uppercase">Diagnóstico Estratégico</h2>
                </div>
                <div className="flex-grow">
                  <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};