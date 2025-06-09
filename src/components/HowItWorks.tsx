import React, { useState, useEffect, useRef } from 'react';
import { Search, MessageCircle, Key, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Search & Discover",
    description: "Browse our curated selection of student-friendly accommodations near your university",
    details: "Use our smart filters to find exactly what you need - from budget to amenities to location preferences",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    delay: 0
  },
  {
    icon: MessageCircle,
    number: "02", 
    title: "Connect & Chat",
    description: "Instantly message property owners and ask questions about your potential new home",
    details: "Get verified responses from trusted landlords and property managers in real-time",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10", 
    delay: 0.2
  },
  {
    icon: Key,
    number: "03",
    title: "Secure & Move",
    description: "Complete the booking process securely and get ready to move into your new student home",
    details: "We handle the paperwork and ensure everything is ready for your arrival",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    delay: 0.4
  },
  {
    icon: Heart,
    number: "04",
    title: "Enjoy & Thrive",
    description: "Settle into your new home and focus on your studies while we provide ongoing support",
    details: "24/7 student support and a community of fellow students to help you succeed",
    gradient: "from-orange-500 to-red-500", 
    bgGradient: "from-orange-500/10 to-red-500/10",
    delay: 0.6
  }
];

const HowItWorks: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="how-it-works" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 rounded-full text-blue-600 text-sm font-medium mb-4">
              🚀 Simple Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              How 
              <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                It Works
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From search to move-in, we've made finding student housing in Cyprus as simple as 1-2-3-4
            </p>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isActive = activeStep === index;
            
            return (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${step.delay + 0.2}s` }}
              >
                <div className={cn(
                  "relative p-8 h-full bg-white/70 border-2 rounded-2xl shadow-lg transition-all duration-500",
                  isActive 
                    ? "border-blue-200 shadow-xl scale-105 bg-white/90" 
                    : "border-white/40 hover:shadow-xl hover:scale-102"
                )}>
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br shadow-lg",
                      step.gradient
                    )}>
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-6">
                    {/* Icon */}
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br transition-all duration-300",
                      step.gradient,
                      isActive ? "scale-110" : ""
                    )}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.details}
                    </p>

                    {/* Active Indicator */}
                    {isActive && (
                      <div className="mt-4 flex items-center text-blue-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="text-sm font-medium">Current Step</span>
                      </div>
                    )}
                  </div>

                  {/* Arrow Connector (not on last item and only on larger screens) */}
                  {index < steps.length - 1 && (
                    <div className="hidden xl:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={cn(
          "text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.8s" }}>
          <div className="bg-white/60 border border-white/40 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of students who have found their perfect home through our simple 4-step process
            </p>
            
            {/* Progress Indicator */}
            <div className="flex justify-center items-center gap-3 mb-8">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeStep === index ? "bg-blue-500 scale-125" : "bg-gray-300"
                  )}
                />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0">
                <span className="flex items-center justify-center gap-3">
                  Start Your Search
                  <Search className="w-5 h-5" />
                </span>
              </button>
              
              <button className="bg-white/80 text-gray-700 border-2 border-gray-200 hover:bg-white hover:border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 