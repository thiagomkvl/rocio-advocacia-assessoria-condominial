import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Phone, Building2, FileCheck, Gift } from "lucide-react";
import { toast } from "sonner";

import heroBg from "@/assets/hero-bg.jpg";   // sua foto aqui

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycby8cT4P-Yz8i1nAy1KlDDWtG2Fbm7swaZTlZFPw-JgM1Dq5kncsn8Gfxbl11DcEvToA/exec";

// ... (FormContent e FormCard ficam exatamente iguais — não precisa mexer)

export const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", profile: "", challenge: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // ... (mesmo código de envio que você já tem)
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BACKGROUND COM FOTO + OVERLAY ESCURO GRADIENTE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full">
        {/* MOBILE */}
        <div className="sm:hidden py-12 px-5">
          <div className="animate-fade-in text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              Descubra Como Aumentar a Tranquilidade e Segurança Jurídica do Seu Condomínio
            </h1>
            <p className="text-lg mb-8">
              A Rocio Advocacia transforma conflitos e incertezas em Harmonia e Previsibilidade.
            </p>
            <Button
              size="lg"
              onClick={() => window.open("https://wa.me/5598992252729", "_blank")}
              className="w-full mb-8 bg-green-600 hover:bg-green-700 text-white font-bold py-6 text-lg"
            >
              <Phone className="mr-3 h-6 w-6" />
              FALAR COM ESPECIALISTA AGORA
            </Button>
            <div className="bg-white/10 backdrop-blur-md rounded-t-xl p-6">
              <h2 className="text-2xl font-bold mb-6 text-white">Diagnóstico Estratégico Gratuito</h2>
              <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={true} />
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden sm:block py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* ESQUERDA – TEXTOS */}
              <div className="text-white space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Tranquilidade e Segurança Jurídica para o Seu Condomínio
                </h1>
                <p className="text-xl md:text-2xl text-gray-200">
                  Método Assessoria Condominial Blindada — prevenção de conflitos, redução de inadimplência e proteção total ao síndico.
                </p>

                <div className="space-y-6 pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0" />
                    <p className="text-lg">Redução de até 80% em ações judiciais</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0" />
                    <p className="text-lg">Cobrança extrajudicial eficaz e humanizada</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0" />
                    <p className="text-lg">Proteção jurídica completa ao síndico</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => window.open("https://wa.me/5598992252729", "_blank")}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold text-xl px-10 py-8 mt-8"
                >
                  <Phone className="mr-3 h-7 w-7" />
                  FALAR COM ESPECIALISTA AGORA
                </Button>
              </div>

              {/* DIREITA – FORMULÁRIO */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 lg:p-10 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <Gift className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white">Diagnóstico Estratégico GRATUITO</h2>
                  <p className="text-gray-300 mt-2">em até 24h úteis</p>
                </div>
                <FormCard formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} isMobile={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
