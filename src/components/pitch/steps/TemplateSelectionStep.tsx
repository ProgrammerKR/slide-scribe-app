import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckIcon, PresentationIcon, TrendingUpIcon, RocketIcon, HeartIcon } from "lucide-react";
import { PitchData } from "../PitchWizard";

interface TemplateOption {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  recommended?: boolean;
}

const TEMPLATES: TemplateOption[] = [
  {
    id: "investor",
    name: "Investor Pitch",
    description: "Perfect for seed funding and Series A presentations",
    icon: TrendingUpIcon,
    color: "bg-blue-500",
    recommended: true,
  },
  {
    id: "product-launch",
    name: "Product Launch",
    description: "Showcase your new product or feature to customers",
    icon: RocketIcon,
    color: "bg-purple-500",
  },
  {
    id: "startup-pitch",
    name: "Startup Pitch",
    description: "Early-stage startup pitch for competitions and accelerators",
    icon: PresentationIcon,
    color: "bg-green-500",
  },
  {
    id: "nonprofit",
    name: "Nonprofit Proposal",
    description: "Grant applications and donor presentations",
    icon: HeartIcon,
    color: "bg-pink-500",
  },
];

interface TemplateSelectionStepProps {
  data: Partial<PitchData>;
  updateData: (data: Partial<PitchData>) => void;
  onNext: () => void;
}

export const TemplateSelectionStep = ({
  data,
  updateData,
  onNext,
}: TemplateSelectionStepProps) => {
  const handleTemplateSelect = (templateId: string) => {
    updateData({ selectedTemplate: templateId });
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Choose Your Template</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Select a template that best fits your presentation needs. You can customize colors and fonts later.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {TEMPLATES.map((template) => {
          const IconComponent = template.icon;
          const isSelected = data.selectedTemplate === template.id;
          
          return (
            <Card
              key={template.id}
              className={`cursor-pointer transition-smooth hover:shadow-elegant ${
                isSelected ? "ring-2 ring-primary shadow-glow" : "shadow-card"
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 ${template.color} rounded-lg flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {template.name}
                        {template.recommended && (
                          <Badge variant="secondary" className="text-xs">
                            Recommended
                          </Badge>
                        )}
                      </CardTitle>
                    </div>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-primary-foreground" />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{template.description}</p>
                
                {isSelected && (
                  <div className="mt-4 p-4 bg-primary/5 rounded-md border border-primary/20">
                    <p className="text-sm text-primary font-medium">
                      ✓ Template selected! This template includes:
                    </p>
                    <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                      <li>• Professional slide layouts</li>
                      <li>• Pre-built sections for your content</li>
                      <li>• Optimized for your use case</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {data.selectedTemplate && (
        <div className="flex justify-center pt-6">
          <Button onClick={onNext} size="lg" className="min-w-[200px]">
            Continue with {TEMPLATES.find(t => t.id === data.selectedTemplate)?.name}
          </Button>
        </div>
      )}
    </div>
  );
};