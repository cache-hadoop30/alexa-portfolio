import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-portrait.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display font-bold text-hero lg:text-6xl text-gradient">
                Alexandria Lucas
              </h1>
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Web Developer | QA Tester | Tech Support Specialist
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-foreground/80 max-w-lg leading-relaxed">
              Blending coding, troubleshooting, and documentation to deliver{" "}
              <span className="text-accent font-semibold">reliable digital solutions</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 
           hover:scale-105 hover:shadow-lg transition-all duration-300 
           text-white font-semibold px-8"


                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 hover-scale font-semibold px-8"
                onClick={() => window.open('#', '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl glow-accent"></div>
              <img
                src={heroImage}
                alt="Alexandria Lucas - Professional Portrait"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown className="w-6 h-6 text-accent/70 hover:text-accent transition-colors" />
      </div>
    </section>
  );
};

export default Hero;