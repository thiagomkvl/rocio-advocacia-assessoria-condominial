import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Building2, FileCheck, Gift } from "lucide-react";
import { toast } from "sonner";

import heroBg from "@/assets/hero-bg.jpg"; // coloca sua foto aqui

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycby8cT4P-Yz8i1nAy1KlDDWtG2Fbm7swaZTlZFPw-JgM1Dq5kncsn8Gfxbl11DcEvToA/exec";

// ─── FormContent e FormCard (exatamente como você já tinha) ──────────────────
const FormContent = ({ formData, setFormData, handleSubmit, isMobile }: any) => {
  const inputClasses = isMobile ? "h-10 text-sm" : "h-12 text-base";
  const radioTextClasses = isMobile ? "text-sm" : "text-base";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${!isMobile && "lg:space-y-5"}`}>
      <div><Input type="text" placeholder="Seu Nome Completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className={`${inputClasses} bg-white/90`} /></div>
      <div><Input type="email" placeholder="E-mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className={`${inputClasses} bg-white/90`} /></div>
      <div><Input type="tel" placeholder="Telefone / WhatsApp" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required className={`${inputClasses} bg-white/90`} /></div>

      <div className={`space-y-2 ${!isMobile && "lg:space-y-3"}`}>
        <Label className={`font-medium ${radioTextClasses}`}>Qual o perfil principal do seu condomínio?</Label>
        <RadioGroup value={formData.profile} onValueChange={(v) => setFormData({ ...formData, profile: v })} required>
          {["Assembleias e Decisões", "Inadimplência e cobrança", "Conflitos entre moradores", "Multas e notificações", "Outro"].map((opt) => (
            <div key={opt} className="flex items-center space-x-2">
              <RadioGroupItem value={opt} id={opt} />
              <Label htmlFor={opt} className="font-normal cursor-pointer">{opt}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Button type="submit" className="w-full h-12 font-bold text-lg bg-green-600 hover:bg-green-700">
        QUERO MEU DIAGNÓSTICO ESTRATÉGICO
      </Button>
    </form>
  );
};

const FormCard = ({ formData, setFormData, handleSubmit, isMobile }: any) => (
  <Card className="border-0 shadow-2xl bg-white/95">
    <CardContent className="pt-8">
      <ul className="space-y-5 mb-8">
        <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" /><span><strong>Mapeamento de Riscos</strong> + Parecer técnico</span></li>
        <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" /><span><strong>Análise de Conformidade</strong> da convenção</span></li>
        <li className="flex gap-3"><Gift className="w-6 h-6 text-green-600 flex-shrink-0" /><span><strong>BÔNUS:</strong> Relatório + Plano de Ação personalizado</span></li>
      </ul>
      <FormContent formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={isMobile} />
    </CardContent>
  </Card>
);

// ─── HeroSection com background de foto ─────────────────────────────────────
export const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", profile: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // seu código de envio (igual ao anterior)
    toast.success("Diagnóstico solicitado com sucesso! Entraremos em contato em até 24h.");
    setFormData({ name: "", email: "", phone: "", profile: "" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08332A]">
      {/* IMAGEM DE FUNDO */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-white">
          {/* ESQUERDA */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Tranquilidade e Segurança Jurídica para Seu Condomínio
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Método Assessoria Condominial Blindada® — prevenção de conflitos e proteção total ao síndico.
            </p>

            <div className="space-y-6">
              {["Redução de até 80% em ações judiciais", "Cobrança extrajudicial eficaz", "Proteção jurídica ao síndico"].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" onClick={() => window.open("https://wa.me/5598992252729", "_blank")} className="bg-green-600 hover:bg-green-700 text-white text-xl px-10 py-7">
              <Phone className="mr-3 h-7 w-7" />
              FALAR COM ESPECIALISTA AGORA
            </Button>
          </div>

          {/* DIREITA – FORMULÁRIO */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <Gift className="w-14 h-14 text-green-400 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold">Diagnóstico Estratégico GRATUITO</h2>
              <p className="text-gray-300 mt-2 text-lg">em até 24h úteis</p>
            </div>
            <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={false} />
          </div>
        </div>
      </div>
    </section>
  );
};
