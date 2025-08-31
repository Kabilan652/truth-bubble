import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Play, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <CheckCircle className="w-3 h-3 mr-1" />
                AI-Powered Verification
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Verify Video Claims
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Instantly</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Upload videos from YouTube, TikTok, or Instagram and get real-time fact-checking 
                with AI-powered analysis. Know what's true, false, or misleading in seconds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Fact-Checking
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.2%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Videos Checked</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.3s</div>
                <div className="text-sm text-muted-foreground">Avg. Analysis</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20 animate-pulse-glow"></div>
            <img 
              src={heroImage} 
              alt="Truth Bubble Fact-Checking Interface" 
              className="relative z-10 w-full rounded-2xl shadow-elevated"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;