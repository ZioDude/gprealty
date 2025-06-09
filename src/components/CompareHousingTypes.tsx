import React, { useState, useEffect, useRef } from 'react';
import { Home, Users, Building, Heart, Check, X, Euro, Clock, Wifi, Car } from 'lucide-react';
import { cn } from '../lib/utils';

const housingTypes = [
  {
    id: 'dorms',
    icon: Building,
    title: "University Dorms",
    subtitle: "Traditional campus living",
    priceRange: "€250-400/month",
    description: "Official university accommodation with meal plans and structured environment",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    pros: [
      "All-inclusive pricing",
      "Meal plans available", 
      "Campus proximity",
      "Social activities",
      "Academic support nearby"
    ],
    cons: [
      "Limited privacy",
      "Strict rules",
      "Shared facilities",
      "Less cooking freedom"
    ],
    bestFor: "First-year students and those wanting campus immersion",
    amenities: ["Wifi", "Meal Plan", "Study Rooms", "Security"],
    popularity: 85
  },
  {
    id: 'shared',
    icon: Users,
    title: "Shared Apartments",
    subtitle: "Live with roommates",
    priceRange: "€300-500/month",
    description: "Split costs and responsibilities with other students in private apartments",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10", 
    pros: [
      "Cost effective",
      "Social experience",
      "Shared responsibilities",
      "More space than dorms",
      "Kitchen access"
    ],
    cons: [
      "Roommate compatibility",
      "Shared bills",
      "Cleaning coordination",
      "Potential conflicts"
    ],
    bestFor: "Social students wanting to balance cost and independence",
    amenities: ["Full Kitchen", "Living Room", "Wifi", "Parking"],
    popularity: 92
  },
  {
    id: 'studio',
    icon: Home,
    title: "Studio Apartments",
    subtitle: "Complete independence",
    priceRange: "€450-700/month", 
    description: "Private one-room apartments with your own kitchen and bathroom",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    pros: [
      "Complete privacy",
      "Own kitchen & bathroom",
      "No roommate issues",
      "Flexible lifestyle",
      "Study in peace"
    ],
    cons: [
      "Higher cost",
      "Can be lonely",
      "All bills on you",
      "Limited social interaction"
    ],
    bestFor: "Graduate students and those prioritizing privacy",
    amenities: ["Private Kitchen", "Private Bath", "Wifi", "Quiet"],
    popularity: 78
  },
  {
    id: 'family',
    icon: Heart,
    title: "Family Housing",
    subtitle: "For students with families",
    priceRange: "€600-900/month",
    description: "Larger accommodations suitable for students with spouses or children",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    pros: [
      "Multiple bedrooms",
      "Family-friendly area",
      "Playground access",
      "Larger living space",
      "Pet-friendly options"
    ],
    cons: [
      "Highest cost",
      "Limited availability",
      "Further from campus",
      "Longer commute"
    ],
    bestFor: "Students with partners, children, or those needing extra space",
    amenities: ["Multiple Rooms", "Family Area", "Parking", "Garden"],
    popularity: 45
  }
];

const CompareHousingTypes: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('shared');
  const [comparisonMode, setComparisonMode] = useState(false);
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

  const selectedHousing = housingTypes.find(type => type.id === selectedType) || housingTypes[1];

  return (
    <section 
      ref={sectionRef}
      id="compare-housing" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200/30 rounded-full text-green-600 text-sm font-medium mb-4">
              🏠 Housing Guide
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Compare 
              <span className="block text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text">
                Housing Types
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Understanding your options helps you make the best decision for your university experience and budget
            </p>
          </div>
        </div>

        {/* Housing Type Selector */}
        <div className={cn(
          "transition-all duration-1000 ease-out mb-12",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.2s" }}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {housingTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                    selectedType === type.id
                      ? "bg-white shadow-lg border-2 border-blue-200 text-blue-600 scale-105"
                      : "bg-white/50 border border-gray-200 text-gray-600 hover:bg-white hover:shadow-md"
                  )}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{type.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Housing Type Detail */}
        <div className={cn(
          "transition-all duration-1000 ease-out mb-16",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.4s" }}>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Main Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br",
                      selectedHousing.gradient
                    )}>
                      <selectedHousing.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {selectedHousing.title}
                      </h3>
                      <p className="text-gray-600">{selectedHousing.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl px-4 py-2">
                      <Euro className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-gray-900">{selectedHousing.priceRange}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl px-4 py-2">
                      <Heart className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-gray-900">{selectedHousing.popularity}% Popular</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {selectedHousing.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Best For:</h4>
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4">
                      <p className="text-gray-700">{selectedHousing.bestFor}</p>
                    </div>
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Typical Amenities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedHousing.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-sm text-gray-700"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Pros and Cons */}
                <div>
                  <div className="grid grid-cols-1 gap-8">
                    {/* Pros */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        Advantages
                      </h4>
                      <div className="space-y-3">
                        {selectedHousing.pros.map((pro, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{pro}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cons */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <X className="w-5 h-5 text-red-500" />
                        Considerations
                      </h4>
                      <div className="space-y-3">
                        {selectedHousing.cons.map((con, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{con}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Comparison Table */}
        <div className={cn(
          "transition-all duration-1000 ease-out mb-16",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.6s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Quick Comparison
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Compare key factors across all housing types at a glance
            </p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-6 lg:p-8 shadow-xl overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Housing Type</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Price Range</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Privacy</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Social</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Independence</th>
                </tr>
              </thead>
              <tbody>
                {housingTypes.map((type, index) => (
                  <tr key={type.id} className="border-b border-gray-100 hover:bg-gray-50/50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br",
                          type.gradient
                        )}>
                          <type.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium text-gray-900">{type.title}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center text-gray-600">{type.priceRange}</td>
                    <td className="py-4 px-4 text-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={cn("h-2 rounded-full bg-gradient-to-r", type.gradient)}
                          style={{ 
                            width: type.id === 'dorms' ? '25%' : 
                                   type.id === 'shared' ? '60%' : 
                                   type.id === 'studio' ? '100%' : '80%' 
                          }}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={cn("h-2 rounded-full bg-gradient-to-r", type.gradient)}
                          style={{ 
                            width: type.id === 'dorms' ? '100%' : 
                                   type.id === 'shared' ? '85%' : 
                                   type.id === 'studio' ? '30%' : '70%' 
                          }}
                        />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={cn("h-2 rounded-full bg-gradient-to-r", type.gradient)}
                          style={{ 
                            width: type.id === 'dorms' ? '40%' : 
                                   type.id === 'shared' ? '70%' : 
                                   type.id === 'studio' ? '100%' : '90%' 
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className={cn(
          "text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.8s" }}>
          <div className="bg-white/60 border border-white/40 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Found Your Perfect Housing Type?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Browse available {selectedHousing.title.toLowerCase()} in your preferred location and start your application today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0">
                <span className="flex items-center justify-center gap-3">
                  Browse {selectedHousing.title}
                  <selectedHousing.icon className="w-5 h-5" />
                </span>
              </button>
              
              <button className="bg-white/80 text-gray-700 border-2 border-gray-200 hover:bg-white hover:border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Personalized Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompareHousingTypes; 