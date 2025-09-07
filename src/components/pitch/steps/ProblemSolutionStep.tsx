import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangleIcon, LightbulbIcon, SparklesIcon, CheckCircleIcon } from "lucide-react";
import { PitchData } from "../PitchWizard";

interface ProblemSolutionStepProps {
  data: Partial<PitchData>;
  updateData: (data: Partial<PitchData>) => void;
  onNext: () => void;
}

export const ProblemSolutionStep = ({
  data,
  updateData,
  onNext,
}: ProblemSolutionStepProps) => {
  const handleInputChange = (field: keyof PitchData, value: string) => {
    updateData({ [field]: value });
  };

  const isComplete = data.problem && data.solution;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Problem & Solution</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Clearly define the problem you're solving and how your solution addresses it. 
          This is the foundation of your pitch.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Problem Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <AlertTriangleIcon className="h-5 w-5 text-orange-500" />
              The Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="problem">What problem are you solving? *</Label>
              <Textarea
                id="problem"
                placeholder="Describe the pain point your target customers face..."
                value={data.problem || ""}
                onChange={(e) => handleInputChange("problem", e.target.value)}
                rows={6}
                className="resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs">
                💡 Pro Tips
              </Badge>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Make it relatable and emotional</li>
                <li>• Use specific examples or statistics</li>
                <li>• Focus on customer pain, not technical details</li>
                <li>• Show the cost of the problem</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Solution Section */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <LightbulbIcon className="h-5 w-5 text-green-500" />
              Your Solution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="solution">How do you solve this problem? *</Label>
              <Textarea
                id="solution"
                placeholder="Explain your unique approach to solving the problem..."
                value={data.solution || ""}
                onChange={(e) => handleInputChange("solution", e.target.value)}
                rows={6}
                className="resize-none"
              />
            </div>
            
            <div className="space-y-2">
              <Badge variant="outline" className="text-xs">
                🎯 Best Practices
              </Badge>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Explain the "how" not just the "what"</li>
                <li>• Highlight what makes it unique</li>
                <li>• Keep it simple and clear</li>
                <li>• Connect directly to the problem</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Suggestions */}
      <Card className="shadow-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-primary" />
            Smart Writing Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Problem Statement Framework:</h4>
              <p className="text-sm text-muted-foreground mb-2">
                "Every day, [target audience] struggles with [specific problem] because [root cause]. 
                This costs them [time/money/opportunity] and leads to [negative outcome]."
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Solution Framework:</h4>
              <p className="text-sm text-muted-foreground mb-2">
                "Our [product/service] helps [target audience] [achieve desired outcome] by [unique approach]. 
                Unlike [alternatives], we [key differentiator]."
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Progress Indicator */}
      {isComplete && (
        <Card className="shadow-card border-green-200 bg-green-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-center gap-2 text-green-700">
              <CheckCircleIcon className="h-5 w-5" />
              <span className="font-medium">Great! Your problem-solution fit is looking strong.</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Continue Button */}
      {isComplete && (
        <div className="flex justify-center pt-6">
          <Button onClick={onNext} size="lg" className="min-w-[200px]">
            Continue to Market Analysis
          </Button>
        </div>
      )}

      {!isComplete && (
        <div className="flex justify-center pt-6">
          <p className="text-sm text-muted-foreground">
            Please describe both the problem and your solution to continue
          </p>
        </div>
      )}
    </div>
  );
};