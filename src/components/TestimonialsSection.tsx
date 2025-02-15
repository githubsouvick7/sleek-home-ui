
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content:
      "This platform has transformed how we operate. The intuitive interface and powerful features have made a significant impact on our productivity.",
    author: "Sarah Johnson",
    role: "CEO at TechCorp",
  },
  {
    content:
      "Incredible performance and reliability. The support team is exceptional, and the platform consistently exceeds our expectations.",
    author: "Michael Chen",
    role: "CTO at InnovateLabs",
  },
  {
    content:
      "A game-changer for our business. The analytics capabilities have provided invaluable insights for our growth strategy.",
    author: "Emily Rodriguez",
    role: "Director at GrowthCo",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const prev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-24 bg-secondary" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-gray-400 hover:text-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-gray-400 hover:text-primary transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={40} />
          </button>
          <Card className="bg-white border-none shadow-lg">
            <CardContent className="p-12">
              <Quote
                size={48}
                className="text-primary/20 mb-6 mx-auto"
              />
              <div className="space-y-6">
                <p className="text-xl text-gray-700 text-center">
                  {testimonials[activeIndex].content}
                </p>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
