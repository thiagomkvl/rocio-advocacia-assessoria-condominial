import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Building2, FileCheck, Gift } from "lucide-react";
import { toast } from "sonner";

import heroBg from "@/assets/hero-bg.jpg";

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycby8cT4P-Yz8i1nAy1KlDDWtG2Fbm7swaZTlZFPw-JgM1Dq5kncsn8Gfxbl11DcEvToA/exec";

const FormContent = ({ formData, setFormData, handleSubmit, isMobile }: any) => {
  const inputClasses = isMobile ? "h-12 text-base" : "h-14 text-lg";
  const radioTextClasses = isMobile ? "text-base" : "text-lg";
  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${isMobile ? "space-y-6" : "lg:space-y-5"}`}>
      <div>
        <Input
          type="text"
          placeholder="Seu Nome Completo"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className={`${inputClasses} bg-muted border-border focus:border-accent focus:ring-accent/20 rounded-lg`}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className={`${inputClasses} bg-muted border-border focus:border-accent focus:ring-accent/20 rounded-lg`}
        />
      </div>
      <div>
        <Input
          type="tel"
          placeholder="Telefone / WhatsApp"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
          className={`${inputClasses} bg-muted border-border focus:border-accent focus:ring-accent/20 rounded-lg`}
        />
      </div>
      <div className={`space-y-2 ${isMobile ? "space-y-4" : "lg:space-y-3"}`}>
        <Label className={`font-medium text-foreground/90 ${radioTextClasses}`}>
          Qual área seu condomínio precisa de orientação jurídica?
        </Label>
        <RadioGroup value={formData.profile} onValueChange={(value) => setFormData({ ...formData, profile: value })} required>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Assembleias e Decisões" id="p1" className={isMobile ? "w-5 h-5" : "w-5 h-5"} />
            <Label htmlFor="p1" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Assembleias e Decisões</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Inadimplência e cobrança" id="p2" className={isMobile ? "w-5 h-5" : "w-5 h-5"} />
            <Label htmlFor="p2" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Inadimplência e cobrança</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Conflitos entre moradores" id="p3" className={isMobile ? "w-5 h-5" : "w-5 h-5"} />
            <Label htmlFor="p3" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Conflitos entre moradores</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Multas e notificações" id="p4" className={isMobile ? "w-5 h-5" : "w-5 h-5"} />
            <Label htmlFor="p4" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Multas e notificações</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="Outro" id="p5" className={isMobile ? "w-5 h-5" : "w-5 h-5"} />
            <Label htmlFor="p5" className={`font-normal cursor-pointer text-foreground/80 ${radioTextClasses}`}>Outro</Label>
          </div>
        </RadioGroup>
      </div>
      <Button
        type="submit"
        className={`w-full ${isMobile ? "h-14 text-base" : "h-14 text-base"} font-semibold bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 rounded-lg`}
      >
        QUERO MEU DIAGNÓSTICO
      </Button>
    </form>
  );
};

const FormCard = ({ formData, setFormData, handleSubmit, isMobile }: any) => {
  const iconSize = isMobile ? "w-5 h-5" : "w-5 h-5";
  const textSize = isMobile ? "text-base" : "text-base";
  return (
    <Card className={`shadow-lg border border-border/50 w-full h-full ${isMobile ? "rounded-2xl" : "rounded-lg"}`}>
      <CardContent className="pt-6 bg-card text-card-foreground h-full flex flex-col">
        <ul className="space-y-4 mb-6">
          <li className="flex items-start gap-3">
            <CheckCircle2 className={`${iconSize} text-accent flex-shrink-0 mt-0.5`} />
            <span className={`${textSize} text-foreground/90`}>
              <strong className="text-foreground">Mapeamento de Riscos:</strong> Identificação imediata de fragilidades em convenções, inadimplência, multas e responsabilidades do síndico.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className={`${iconSize} text-accent flex-shrink-0 mt-0.5`} />
            <span className={`${textSize} text-foreground/90`}>
              <strong className="text-foreground">Análise de Conformidade:</strong> Parecer técnico sobre regras internas e legislação aplicável.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <Gift className={`${iconSize} text-accent flex-shrink-0 mt-0.5`} />
            <span className={`${textSize} text-foreground/90`}>
              <strong className="text-foreground">BÔNUS Exclusivo:</strong> Relatório Personalizado com Plano de Ação Prioritário para o seu condomínio.
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
    profile: "",
    challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.profile || !formData.challenge) {
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
          profile: formData.profile,
          challenge: formData.challenge,
        }).toString(),
      });
      toast.success("Diagnóstico solicitado com sucesso.", {
        description: "Entraremos em contato em até 24 horas úteis.",
        duration: 8000,
      });
      setFormData({ name: "", email: "", phone: "", profile: "", challenge: "" });
    } catch (error) {
      toast.error("Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.");
      console.error("Erro:", error);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80 sm:bg-gradient-to-r sm:from-background/80 sm:via-background/60 sm:to-background/80" />

      <div className="relative z-10">
        <div className="sm:hidden pt-32 pb-16 px-4">
          <div className="animate-fade-in text-center">
            <h1 className="text-3xl font-semibold leading-tight mb-6 text-foreground">
              Descubra Como Aumentar a Tranquilidade e Segurança Jurídica do Seu Condomínio
            </h1>
            <p className="text-base text-foreground/80 mb-10 leading-relaxed">
              A Rocio Advocacia transforma conflitos e incertezas em Harmonia e Previsibilidade com o Método Assessoria Condominial Blindada.
            </p>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5598992252729", "_blank")}
              className="w-full mb-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-7 text-base"
            >
              <Phone className="mr-2 w-6 h-6" />
              FALAR COM ESPECIALISTA
            </Button>
            <div className="bg-primary-light/80 backdrop-blur-sm p-5 rounded-t-2xl border-b border-accent/30 w-full text-center">
              <h2 className="text-xl font-semibold mb-2 text-foreground font-sans tracking-wide uppercase">Diagnóstico Estratégico</h2>
            </div>
            <div className="w-full">
              <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={true} />
            </div>
          </div>
        </div>

        <div className="hidden sm:block py-16 md:py-20 lg:py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
              <div className="lg:w-1/2 animate-fade-in">
                <div className="bg-primary-light/60 backdrop-blur-sm p-6 lg:p-7 rounded-md border border-border/30 h-full flex flex-col">
                  <div className="mb-5 lg:mb-6">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight mb-3 lg:mb-4 text-foreground">
                      Descubra Como Aumentar a Tranquilidade e Segurança Jurídica do Seu Condomínio
                    </h1>
                    <p className="text-base lg:text-lg text-foreground/80 leading-relaxed">
                      A Rocio Advocacia transforma conflitos e incertezas em Harmonia e Previsibilidade com o Método Assessoria Condominial Blindada.
                    </p>
                  </div>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-lg font-semibold mb-3 lg:mb-4 text-foreground flex items-center">
                      <Building2 className="w-5 h-5 mr-2 text-accent" />
                      Três Pilares Para a Tranquilidade do Seu Condomínio:
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-primary/30 p-3 rounded-lg">
                        <p className="text-sm text-foreground/90">Assessoria Preventiva: Orientação diária ao síndico, revisão de convenções e regimentos internos para evitar litígios.</p>
                      </div>
                      <div className="bg-primary/30 p-3 rounded-lg">
                        <p className="text-sm text-foreground/90">Cobrança Eficiente: Estratégias extrajudiciais e judiciais para recuperação de inadimplência, com respeito aos condôminos.</p>
                      </div>
                      <div className="bg-primary/30 p-3 rounded-lg">
                        <p className="text-sm text-foreground/90">Mediação e Resolução Ágil: Solução de conflitos de vizinhança, participação em assembleias e defesa em ações judiciais.</p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-5 lg:mb-6">
                    <h3 className="text-lg font-semibold mb-3 lg:mb-4 text-foreground flex items-center">
                      <FileCheck className="w-5 h-5 mr-2 text-accent" />
                      Resultado para Seu Condomínio:
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="bg-primary/30 p-3 rounded-lg">
                        <p className="text-sm text-foreground/90">✓ Redução de até 80% em ações judiciais desnecessárias</p>
                      </div>
                      <div className="bg-primary/30 p-3 rounded-lg">
                        <p className="text-sm text-foreground/90">✓ Recuperação rápida de cotas atrasadas</p>
                      </div>
                      <div className="bg-primary/30 p-3 rounded-lg">
                        <p className="text-sm text-foreground/90">✓ Proteção jurídica ao síndico contra responsabilidades pessoais</p>
                      </div>
                    </div>
                  </div>
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
      </div>
    </section>
  );
};
