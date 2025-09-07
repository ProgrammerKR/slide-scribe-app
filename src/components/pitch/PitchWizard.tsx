import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from "lucide-react";
import { CompanyInfoStep } from "./steps/CompanyInfoStep";
import { ProblemSolutionStep } from "./steps/ProblemSolutionStep";
import { TemplateSelectionStep } from "./steps/TemplateSelectionStep";

export interface PitchData {
  // Company Information
  companyName: string;
  tagline: string;
  logo?: File;
  
  // Problem & Solution
  problem: string;
  solution: string;
  
  // Market & Business Model
  marketSize: string;
  targetAudience: string;
  revenueModel: string;
  
  // Financials
  askAmount: string;
  useOfFunds: string;
  projectedRevenue: string;
  
  // Team
  teamMembers: Array<{
    name: string;
    role: string;
    bio: string;
  }>;
  
  // Design
  selectedTemplate: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

const STEPS = [
  { id: "template", title: "Choose Template", component: TemplateSelectionStep },
  { id: "company", title: "Company Info", component: CompanyInfoStep },
  { id: "problem", title: "Problem & Solution", component: ProblemSolutionStep },
  { id: "market", title: "Market & Model", component: CompanyInfoStep }, // Placeholder
  { id: "financials", title: "Financials", component: CompanyInfoStep }, // Placeholder
  { id: "team", title: "Team", component: CompanyInfoStep }, // Placeholder
  { id: "review", title: "Review & Export", component: CompanyInfoStep }, // Placeholder
];

export const PitchWizard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [pitchData, setPitchData] = useState<Partial<PitchData>>({
    selectedTemplate: "investor",
    primaryColor: "#3b82f6",
    secondaryColor: "#8b5cf6",
    fontFamily: "Inter",
  });

  const updatePitchData = (data: Partial<PitchData>) => {
    setPitchData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / STEPS.length) * 100;
  const CurrentStepComponent = STEPS[currentStep].component;

  return (
    <div className="min-h-screen bg-gradient-subtle py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Header */}
        <Card className="mb-8 shadow-card">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <CardTitle className="text-2xl">Create Your Pitch Deck</CardTitle>
                <p className="text-muted-foreground">
                  Step {currentStep + 1} of {STEPS.length}: {STEPS[currentStep].title}
                </p>
              </div>
              <Badge variant="outline" className="text-sm">
                {Math.round(progress)}% Complete
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>
        </Card>

        {/* Step Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2 overflow-x-auto pb-2">
            {STEPS.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-medium transition-smooth ${
                    index < currentStep
                      ? "bg-primary text-primary-foreground"
                      : index === currentStep
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {index < currentStep ? (
                    <CheckIcon className="h-5 w-5" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:inline">
                  {step.title}
                </span>
                {index < STEPS.length - 1 && (
                  <div className="w-8 h-px bg-border mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="shadow-elegant mb-8">
          <CardContent className="p-8">
            <CurrentStepComponent
              data={pitchData}
              updateData={updatePitchData}
              onNext={nextStep}
            />
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 0}
            className="min-w-[120px]"
          >
            <ChevronLeftIcon className="mr-2 h-4 w-4" />
            Previous
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={currentStep === STEPS.length - 1}
            className="min-w-[120px]"
          >
            {currentStep === STEPS.length - 1 ? "Generate Deck" : "Next"}
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};