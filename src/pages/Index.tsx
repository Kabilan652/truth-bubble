import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import UploadSection from "@/components/UploadSection";
import ResultsDemo from "@/components/ResultsDemo";
import FloatingBubbleDemo from "@/components/FloatingBubbleDemo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UploadSection />
        <ResultsDemo />
        <FloatingBubbleDemo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
