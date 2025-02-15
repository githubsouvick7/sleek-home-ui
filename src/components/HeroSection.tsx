
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(40deg,transparent_25%,rgba(155,135,245,0.2)_50%,transparent_75%)] animate-float"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 animate-fade-in">
          Transform Your Digital Experience
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 animate-fade-in">
          Elevate your online presence with our innovative platform. Built for the
          modern web.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
