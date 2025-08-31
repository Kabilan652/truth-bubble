import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, AlertTriangle, MessageCircle, ExternalLink, Clock } from "lucide-react";

const mockResults = [
  {
    id: 1,
    title: "Climate Change Statistics Video",
    platform: "YouTube",
    status: "completed",
    claims: [
      {
        text: "Global temperatures have risen by 1.2°C since 1880",
        verdict: "true",
        confidence: 95,
        sources: ["NASA", "NOAA"]
      },
      {
        text: "Arctic ice has completely melted",
        verdict: "false",
        confidence: 88,
        sources: ["NSIDC", "Climate.gov"]
      },
      {
        text: "Carbon emissions reached record highs in 2023",
        verdict: "misleading",
        confidence: 76,
        sources: ["IEA", "Global Carbon Atlas"]
      }
    ],
    analyzedAt: "2 hours ago"
  },
  {
    id: 2,
    title: "Health Benefits of Vitamin D",
    platform: "TikTok",
    status: "completed",
    claims: [
      {
        text: "Vitamin D deficiency affects 1 billion people worldwide",
        verdict: "true",
        confidence: 92,
        sources: ["WHO", "Harvard Health"]
      },
      {
        text: "Taking 10,000 IU daily is safe for everyone",
        verdict: "opinion",
        confidence: 65,
        sources: ["Mayo Clinic"]
      }
    ],
    analyzedAt: "1 day ago"
  }
];

const pendingResults = [
  {
    id: 3,
    title: "Breaking: Economic Policy Changes",
    platform: "Instagram",
    status: "pending",
    reason: "Recent news - sources updating",
    submittedAt: "30 minutes ago"
  }
];

const getVerdictIcon = (verdict: string) => {
  switch (verdict) {
    case "true":
      return <CheckCircle className="w-4 h-4" />;
    case "false":
      return <XCircle className="w-4 h-4" />;
    case "misleading":
      return <AlertTriangle className="w-4 h-4" />;
    case "opinion":
      return <MessageCircle className="w-4 h-4" />;
    default:
      return <Clock className="w-4 h-4" />;
  }
};

const getVerdictVariant = (verdict: string) => {
  switch (verdict) {
    case "true":
      return "success";
    case "false":
      return "error";
    case "misleading":
      return "warning";
    case "opinion":
      return "opinion";
    default:
      return "secondary";
  }
};

const ResultsDemo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Analysis Results
            </h2>
            <p className="text-lg text-muted-foreground">
              See how Truth Bubble categorizes and verifies claims
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Completed Results */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Recent Analysis</h3>
              
              {mockResults.map((result) => (
                <Card key={result.id} className="shadow-soft hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{result.title}</CardTitle>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">{result.platform}</Badge>
                          <span className="text-sm text-muted-foreground">{result.analyzedAt}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.claims.map((claim, index) => (
                        <div key={index} className="border rounded-lg p-4 space-y-3">
                          <p className="text-sm text-foreground">{claim.text}</p>
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <div className="flex items-center gap-2">
                              <Badge variant={getVerdictVariant(claim.verdict)} className="flex items-center gap-1">
                                {getVerdictIcon(claim.verdict)}
                                {claim.verdict.toUpperCase()}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                {claim.confidence}% confidence
                              </span>
                            </div>
                            <div className="flex items-center gap-1">
                              {claim.sources.map((source, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {source}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Full Report
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pending Analysis */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Pending Analysis</h3>
              
              {pendingResults.map((result) => (
                <Card key={result.id} className="shadow-soft">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">{result.title}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{result.platform}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Pending
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{result.reason}</p>
                      <span className="text-xs text-muted-foreground">{result.submittedAt}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="shadow-soft bg-muted/50">
                <CardContent className="p-6 text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-medium text-foreground">Smart Queue</h4>
                    <p className="text-sm text-muted-foreground">
                      Videos are automatically re-analyzed when new information becomes available
                    </p>
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

export default ResultsDemo;