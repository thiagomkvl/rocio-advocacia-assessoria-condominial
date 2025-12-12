import Header from "@/components/Header";                    // default export
import { HeroSection } from "@/components/HeroSection";      // named export
import { ProblemSection } from "@/components/ProblemSection";  // named export
import { MethodSection } from "@/components/MethodSection";    // named export
import { ClosingSection } from "@/components/ClosingSection";  // named export
import { Footer } from "@/components/Footer";                 // named export (agora com chaves)

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
