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
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <Input type="text" placeholder="Seu Nome Completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className={`${inputClasses} bg-white/90`} />
      <Input type="email" placeholder="E-mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className={`${inputClasses} bg-white/90`} />
      <Input type="tel" placeholder="Telefone / WhatsApp" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className={`${inputClasses} bg-white/90`} />
      <Input type="text" placeholder="Maior desafio atual do condomínio" value={formData.challenge} onChange={(e) => setFormData({ ...formData, challenge: e.target.value })} required className={`${inputClasses} bg-white/90`} />

      <div className="space-y-3">
        <Label className="text-base font-medium">Qual o perfil principal do seu condomínio?</Label>
        <RadioGroup value={formData.profile} onValueChange={(v) => setFormData({ ...formData, profile: v })} required>
          {["Assembleias e Decisões", "Inadimplência e cobrança", "Conflitos entre moradores", "Multas e notificações", "Outro"].map((opt) => (
            <div key={opt} className="flex items-center space-x-3 py-1">
              <RadioGroupItem value={opt} id={opt} />
              <Label htmlFor={opt} className="cursor-pointer text-base">{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Button type="submit" className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90">
        QUERO MEU DIAGNÓSTICO ESTRATÉGICO
      </Button>
    </form>
  );
};

const FormCard = ({ formData, setFormData, handleSubmit, isMobile }: any) => (
  <Card className="shadow-2xl border-0 bg-white/95 backdrop-blur-lg">
    <CardContent className="pt-8">
      <ul className="space-y-5 mb-8 text-base">
        <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-accent" /><span><strong>Mapeamento de Riscos</strong> + Parecer técnico</span></li>
        <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-accent" /><span><strong>Análise de Conformidade</strong> da convenção</span></li>
        <li className="flex gap-4"><Gift className="w-6 h-6 text-accent" /><span><strong>BÔNUS: Relatório + Plano de Ação personalizado</span></li>
      </ul>
      <FormContent formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={isMobile} />
    </CardContent>
  </Card>
);

export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    profile: "",
    challenge: "", // ← campo obrigatório voltou!
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
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      toast.success("Diagnóstico solicitado com sucesso!", { description: "Entraremos em contato em até 24h.", duration: 8000 });
      setFormData({ name: "", email: "", phone: "", profile: "", challenge: "" });
    } catch (error) {
      toast.error("Erro ao enviar. Tente pelo WhatsApp.");
    }
  };

  return (
    <section className="relative overflow-hidden">
    {/* Foto de fundo pura */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />

    {/* Conteúdo */}
    <div className="relative z-10">
      {/* MOBILE */}
      <div className="sm:hidden py-16 px-6 text-center text-white">
        <h1 className="text-3xl font-bold mb-6">Tranquilidade e Segurança Jurídica para Seu Condomínio</h1>
        <p className="text-lg mb-10">Método Assessoria Condominial Blindada®</p>
        <Button size="lg" onClick={() => window.open("https://wa.me/5598992252729", "_blank")} className="w-full max-w-sm mx-auto mb-12 bg-accent text-lg py-7">
          <Phone className="mr-3 h-6 w-6" /> FALAR COM ESPECIALISTA
        </Button>
        <div className="mx-4">
          <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={true} />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden sm:block py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start text-white">
          {/* LADO ESQUERDO */}
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Tranquilidade e Segurança Jurídica para Seu Condomínio
              </h1>
              <p className="text-xl">Método Assessoria Condominial Blindada®</p>
            </div>

            {/* TRÊS PILARES – mesmo estilo do Resultado */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-accent" />
                Três Pilares Para a Tranquilidade do Seu Condomínio
              </h3>
              <div className="space-y-4">
                <div className="bg-primary/30 backdrop-blur p-5 rounded-xl">
                  <p className="font-medium">Assessoria Preventiva</p>
                  <p className="text-white/90 mt-1">Orientação diária e revisão de documentos</p>
                </div>
                <div className="bg-primary/30 backdrop-blur p-5 rounded-xl">
                  <p className="font-medium">Cobrança Eficiente</p>
                  <p className="text-white/90 mt-1">Estratégias com respeito aos condôminos</p>
                </div>
                <div className="bg-primary/30 backdrop-blur p-5 rounded-xl">
                  <p className="font-medium">Mediação e Resolução Ágil</p>
                  <p className="text-white/90 mt-1">Solução rápida de conflitos</p>
                </div>
              </div>
            </div>

            {/* RESULTADOS – mesmo estilo */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <FileCheck className="w-8 h-8 text-accent" />
                Resultado para Seu Condomínio
              </h3>
              <div className="space-y-4">
                <div className="bg-primary/30 backdrop-blur p-5 rounded-xl">Redução de até 80% em ações judiciais</div>
                <div className="bg-primary/30 backdrop-blur p-5 rounded-xl">Recuperação rápida de cotas atrasadas</div>
                <div className="bg-primary/30 backdrop-blur p-5 rounded-xl">Proteção jurídica ao síndico</div>
              </div>
            </div>

            <Button size="lg" onClick={() => window.open("https://wa.me/5598992252729", "_blank")} className="bg-accent hover:bg-accent/90 text-xl px-10 py-7">
              <Phone className="mr-3 h-7 w-7" /> FALAR COM ESPECIALISTA AGORA
            </Button>
          </div>

          {/* LADO DIREITO – FORMULÁRIO */}
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-10 shadow-2xl">
            <div className="text-center mb-10">
              <Gift className="w-16 h-16 text-accent mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary">Diagnóstico Estratégico GRATUITO</h2>
              <p className="text-lg text-gray-600 mt-3">em até 24h úteis</p>
            </div>
            <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={false} />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};
