import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { UploadIcon, BuildingIcon, SparklesIcon } from "lucide-react";
import { PitchData } from "../PitchWizard";

interface CompanyInfoStepProps {
  data: Partial<PitchData>;
  updateData: (data: Partial<PitchData>) => void;
  onNext: () => void;
}

export const CompanyInfoStep = ({
  data,
  updateData,
  onNext,
}: CompanyInfoStepProps) => {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);

  const handleInputChange = (field: keyof PitchData, value: string) => {
    updateData({ [field]: value });
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      updateData({ logo: file });
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const isComplete = data.companyName && data.tagline;

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
          <BuildingIcon className="h-8 w-8 text-primary" />
          Company Information
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Tell us about your company. This information will appear on your title slide and throughout your presentation.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Company Details */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name *</Label>
                <Input
                  id="companyName"
                  placeholder="e.g., Acme Corp"
                  value={data.companyName || ""}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  className="text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline / One-liner *</Label>
                <Textarea
                  id="tagline"
                  placeholder="e.g., We make work better for everyone"
                  value={data.tagline || ""}
                  onChange={(e) => handleInputChange("tagline", e.target.value)}
                  rows={3}
                  className="resize-none"
                />
                <p className="text-xs text-muted-foreground">
                  A short, memorable description of what your company does
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Logo Upload */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">Company Logo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {logoPreview ? (
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-white rounded-lg border-2 border-dashed border-border p-4 flex items-center justify-center">
                      <img
                        src={logoPreview}
                        alt="Logo preview"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Logo uploaded successfully</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-muted/50 rounded-lg border-2 border-dashed border-border flex items-center justify-center">
                      <UploadIcon className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">No logo uploaded</p>
                  </div>
                )}

                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                    id="logo-upload"
                  />
                  <Label htmlFor="logo-upload" asChild>
                    <Button variant="outline" className="w-full cursor-pointer">
                      <UploadIcon className="mr-2 h-4 w-4" />
                      {logoPreview ? "Change Logo" : "Upload Logo"}
                    </Button>
                  </Label>
                </div>
                
                <p className="text-xs text-muted-foreground text-center">
                  Recommended: PNG or SVG, square format, max 5MB
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Suggestions Card */}
      <Card className="shadow-card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-primary" />
            Smart Suggestions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              <strong>Tagline Tips:</strong> Keep it under 10 words and focus on the benefit you provide to customers.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Examples:</strong> "Airbnb for X", "Making Y accessible to everyone", "The future of Z"
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Continue Button */}
      {isComplete && (
        <div className="flex justify-center pt-6">
          <Button onClick={onNext} size="lg" className="min-w-[200px]">
            Continue to Problem & Solution
          </Button>
        </div>
      )}

      {!isComplete && (
        <div className="flex justify-center pt-6">
          <p className="text-sm text-muted-foreground">
            Please fill in the required fields to continue
          </p>
        </div>
      )}
    </div>
  );
};