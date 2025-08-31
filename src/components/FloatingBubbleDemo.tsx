import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Smartphone, Monitor, CheckCircle } from "lucide-react";
import floatingBubble from "@/assets/floating-bubble.png";

const FloatingBubbleDemo = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <CheckCircle className="w-3 h-3 mr-1" />
              Coming Soon
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Floating Bubble Mode
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch videos on any platform while Truth Bubble floats on your screen, 
              ready to fact-check claims in real-time with just a tap.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Play className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Watch Anywhere
                    </h3>
                    <p className="text-muted-foreground">
                      The bubble floats over YouTube, Instagram, TikTok, or any video platform
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      One-Tap Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Tap the bubble to instantly capture and analyze the current video segment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      Real-Time Results
                    </h3>
                    <p className="text-muted-foreground">
                      Get instant fact-check results in a small overlay while the video continues
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero">
                  <Smartphone className="w-4 h-4 mr-2" />
                  Download Mobile App
                </Button>
                <Button variant="outline">
                  <Monitor className="w-4 h-4 mr-2" />
                  Get Browser Extension
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-elevated">
                <CardContent className="p-8">
                  <div className="relative">
                    {/* Mock Video Player */}
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg mb-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-sm font-medium">Playing: Climate Change Facts</div>
                        <div className="text-xs opacity-75">YouTube • 2:34 / 5:12</div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-red-500 text-white">
                          LIVE
                        </Badge>
                      </div>
                    </div>

                    {/* Floating Bubble */}
                    <div className="absolute -bottom-2 -right-2 animate-float">
                      <div className="relative">
                        <img 
                          src={floatingBubble} 
                          alt="Truth Bubble Floating Interface" 
                          className="w-20 h-20 drop-shadow-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-pulse-glow"></div>
                      </div>
                    </div>

                    {/* Results Popup */}
                    <Card className="absolute top-0 right-24 w-64 shadow-glow animate-float" style={{ animationDelay: "1s" }}>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-success" />
                            <span className="text-sm font-medium">Claim Verified</span>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            "CO2 levels reached 420ppm in 2023"
                          </p>
                          <Badge variant="success" className="text-xs">
                            TRUE • 94% confidence
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingBubbleDemo;