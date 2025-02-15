
import { Sparkles, Shield, Zap, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "Intuitive Design",
    description:
      "Clean and modern interface that makes navigation a breeze for your users.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    description:
      "Enterprise-grade security ensuring your data is protected at all times.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized performance delivering lightning-fast load times and responses.",
  },
  {
    icon: BarChart,
    title: "Advanced Analytics",
    description:
      "Comprehensive insights to help you make data-driven decisions.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to succeed in the digital world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-none bg-secondary/50"
            >
              <CardContent className="p-6">
                <div className="mb-4 text-primary">
                  <feature.icon
                    size={32}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
