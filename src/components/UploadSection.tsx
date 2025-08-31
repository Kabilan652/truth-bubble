import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Link2, Play, FileVideo } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadSection = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleUrlAnalysis = async () => {
    if (!videoUrl.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Started",
        description: "Your video is being processed. Results will appear in the history section.",
      });
      setVideoUrl("");
    }, 2000);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsAnalyzing(true);
      setTimeout(() => {
        setIsAnalyzing(false);
        toast({
          title: "Upload Successful",
          description: `${file.name} has been uploaded and is being analyzed.`,
        });
      }, 2000);
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Upload Your Video
            </h2>
            <p className="text-lg text-muted-foreground">
              Paste a URL or upload a file to start fact-checking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* URL Upload */}
            <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Link2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">From URL</h3>
                  <p className="text-muted-foreground">
                    YouTube, TikTok, Instagram, or any video link
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="video-url">Video URL</Label>
                    <Input
                      id="video-url"
                      type="url"
                      placeholder="https://youtube.com/watch?v=..."
                      value={videoUrl}
                      onChange={(e) => setVideoUrl(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    onClick={handleUrlAnalysis}
                    disabled={!videoUrl.trim() || isAnalyzing}
                    className="w-full"
                    variant="default"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Analyze Video
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* File Upload */}
            <Card className="shadow-soft hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                    <FileVideo className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Upload File</h3>
                  <p className="text-muted-foreground">
                    MP4, MOV, AVI up to 100MB
                  </p>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="video-file" className="cursor-pointer">
                    <div className="border-2 border-dashed border-input rounded-lg p-8 text-center hover:border-primary transition-colors">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                      <div className="text-sm text-muted-foreground">
                        Click to browse or drag and drop
                      </div>
                    </div>
                    <Input
                      id="video-file"
                      type="file"
                      accept="video/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadSection;