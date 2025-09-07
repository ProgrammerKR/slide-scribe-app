import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PresentationIcon, DownloadIcon, PaletteIcon, FileTextIcon, ZapIcon, ShieldCheckIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 py-24 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              🚀 Offline • No API Keys • Fully Private
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Professional{" "}
              <span className="text-gradient">Pitch Decks</span>
              <br />
              Made Simple
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Create stunning investor presentations, product launches, and business proposals with our AI-powered templates. 
              Generate PPTX and PDF files instantly - all offline and secure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/create">
                <Button size="lg" variant="hero" className="text-lg px-8 py-6">
                  <PresentationIcon className="mr-2 h-5 w-5" />
                  Create Your Pitch Deck
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                <FileTextIcon className="mr-2 h-5 w-5" />
                View Templates
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheckIcon className="h-4 w-4 text-primary" />
                100% Offline
              </div>
              <div className="flex items-center gap-2">
                <ZapIcon className="h-4 w-4 text-primary" />
                Instant Export
              </div>
              <div className="flex items-center gap-2">
                <PaletteIcon className="h-4 w-4 text-primary" />
                8+ Templates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Pitch</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startup funding to product launches, create professional presentations that get results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <PresentationIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Templates</CardTitle>
                <CardDescription>
                  8+ professionally designed templates for every pitch scenario - investor decks, product launches, and more.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <DownloadIcon className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Instant Export</CardTitle>
                <CardDescription>
                  Export to PowerPoint (PPTX) and PDF formats with one click. Perfect for presentations and sharing.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="shadow-card hover:shadow-elegant transition-smooth">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <PaletteIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Custom Branding</CardTitle>
                <CardDescription>
                  Upload your logo, choose colors, and customize fonts to match your brand perfectly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-4">Ready to Create Your Pitch?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of entrepreneurs, startups, and businesses creating professional pitch decks.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Link to="/create">
              Start Building Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/20 border-t">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gradient mb-2">PitchForge</h3>
          <p className="text-muted-foreground mb-4">Professional pitch decks made simple</p>
          <p className="text-sm text-muted-foreground">
            © 2024 PitchForge. Built with privacy in mind - all processing happens locally.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;