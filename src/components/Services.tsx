import React, { useState, useEffect, useRef } from 'react';
import { Home, Search, Shield, HeadphonesIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

interface ServicesProps {
  setIsStudentFormOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const services = [
  {
    icon: Home,
    title: "Student Housing Search",
    description: "Find the perfect accommodation near your university with our extensive database of student-friendly properties.",
    gradient: "from-blue-500 to-purple-600",
    bgGradient: "from-blue-500/10 to-purple-600/10",
    delay: 0
  },
  {
    icon: Search,
    title: "Roommate Matching",
    description: "Connect with other students looking for shared accommodation and find your ideal roommate match.",
    gradient: "from-purple-500 to-pink-600",
    bgGradient: "from-purple-500/10 to-pink-600/10",
    delay: 0.1
  },
  {
    icon: Shield,
    title: "Property Management",
    description: "We work with trusted property owners to ensure safe, well-maintained, and student-friendly accommodations.",
    gradient: "from-green-500 to-blue-600",
    bgGradient: "from-green-500/10 to-blue-600/10",
    delay: 0.2
  },
  {
    icon: HeadphonesIcon,
    title: "Student Support",
    description: "Get assistance with contracts, utilities setup, and any housing-related issues throughout your stay.",
    gradient: "from-pink-500 to-red-600",
    bgGradient: "from-pink-500/10 to-red-600/10",
    delay: 0.3
  }
];

const stats = [
  {
    icon: Search,
    number: "1000+",
    label: "Happy Students",
    description: "Students found their perfect home",
    gradient: "from-blue-400 to-cyan-400",
    delay: 0
  },
  {
    icon: Shield,
    number: "500+",
    label: "Properties Listed",
    description: "Premium accommodations available",
    gradient: "from-green-400 to-emerald-400",
    delay: 0.1
  },
  {
    icon: HeadphonesIcon,
    number: "98%",
    label: "Satisfaction Rate",
    description: "Students recommend our services",
    gradient: "from-purple-400 to-pink-400",
    delay: 0.2
  }
];

const Services: React.FC<ServicesProps> = ({ setIsStudentFormOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
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

  const handleGetStarted = () => {
    if (setIsStudentFormOpen) {
      setIsStudentFormOpen(true);
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 rounded-full text-blue-600 text-sm font-medium mb-4">
              ✨ Premium Services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Our 
              <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive housing solutions tailored specifically for students in Cyprus, 
              ensuring your university journey is comfortable and stress-free
            </p>
          </div>
        </div>

        {/* Simplified Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-32">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={cn(
                  "transition-all duration-700 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${service.delay + 0.2}s` }}
              >
                {/* Simplified Card */}
                <div className="relative p-8 h-full bg-white/70 border border-white/40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Simplified Icon */}
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br",
                      service.gradient
                    )}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={cn(
          "text-center mb-20 lg:mb-32 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.6s" }}>
          <div className="bg-white/60 border border-white/40 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect Student Home?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Join thousands of students who have found their ideal accommodation through our platform
            </p>
            <Button 
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg border-0"
            >
              <span className="flex items-center gap-3">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </div>

        {/* Simplified Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className={cn(
                  "text-center transition-all duration-700 ease-out",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${stat.delay + 0.8}s` }}
              >
                <div className="bg-white/70 border border-white/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br",
                    stat.gradient
                  )}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Number */}
                  <div className={cn(
                    "text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent",
                    stat.gradient
                  )}>
                    {stat.number}
                  </div>
                  
                  {/* Label */}
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                  
                  {/* Check mark indicator */}
                  <div className="mt-4 flex justify-center">
                    <CheckCircle className={cn("w-6 h-6", stat.gradient.includes('blue') ? 'text-blue-500' : stat.gradient.includes('green') ? 'text-green-500' : 'text-purple-500')} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
