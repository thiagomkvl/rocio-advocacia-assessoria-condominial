import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { MethodSection } from "@/components/MethodSection";
import { ClosingSection } from "@/components/ClosingSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <MethodSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
