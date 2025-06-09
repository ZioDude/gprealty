import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Users, MapPin, CheckCircle, Award, Globe } from 'lucide-react';
import { cn } from '../lib/utils';

const universities = [
  {
    name: "University of Cyprus",
    location: "Nicosia",
    students: "11,000+",
    logo: "/images/logos/ucy-logo.png",
    established: "1989",
    type: "Public University",
    properties: "150+",
    description: "Cyprus's leading public university with diverse international programs"
  },
  {
    name: "Cyprus University of Technology",
    location: "Limassol", 
    students: "6,500+",
    logo: "/images/logos/cut-logo.png",
    established: "2004",
    type: "Public University",
    properties: "120+",
    description: "Modern technology-focused university in the heart of Limassol"
  },
  {
    name: "European University Cyprus",
    location: "Nicosia",
    students: "12,000+",
    logo: "/images/logos/euc-logo.png",
    established: "1961",
    type: "Private University",
    properties: "200+",
    description: "Prestigious private institution with strong international connections"
  },
  {
    name: "Cyprus International University",
    location: "Nicosia",
    students: "20,000+",
    logo: "/images/logos/ciu-logo.png",
    established: "1997",
    type: "Private University",
    properties: "180+",
    description: "Large international university attracting students worldwide"
  },
  {
    name: "Frederick University",
    location: "Nicosia & Limassol",
    students: "8,000+",
    logo: "/images/logos/frederick-logo.png",
    established: "2007",
    type: "Private University",
    properties: "95+",
    description: "Multi-campus university with strong research focus"
  },
  {
    name: "University of Central Lancashire Cyprus",
    location: "Larnaca",
    students: "2,500+",
    logo: "/images/logos/uclan-logo.png",
    established: "2012",
    type: "International Branch",
    properties: "60+",
    description: "UK university branch campus with British education standards"
  }
];

const partnershipBenefits = [
  {
    icon: CheckCircle,
    title: "Verified Properties",
    description: "All accommodations are pre-approved by university standards",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Student Community",
    description: "Connect with fellow students from your university",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Properties meet strict safety and quality requirements",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Globe,
    title: "International Support",
    description: "Specialized assistance for international students",
    gradient: "from-orange-500 to-red-500"
  }
];

const UniversityPartners: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredUniversity, setHoveredUniversity] = useState<number | null>(null);
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

  return (
    <section 
      ref={sectionRef}
      id="university-partners" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/30 rounded-full text-blue-600 text-sm font-medium mb-4">
              🎓 Official Partners
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              University 
              <span className="block text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
                Partners
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work directly with Cyprus's leading universities to provide verified, safe, and student-friendly accommodation options
            </p>
          </div>
        </div>

        {/* University Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {universities.map((university, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 0.1 + 0.2}s` }}
              onMouseEnter={() => setHoveredUniversity(index)}
              onMouseLeave={() => setHoveredUniversity(null)}
            >
              <div className={cn(
                "relative p-8 h-full bg-white/70 border border-white/40 rounded-2xl shadow-lg transition-all duration-300",
                hoveredUniversity === index ? "shadow-xl scale-105" : "hover:shadow-xl"
              )}>
                {/* University Logo */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-lg flex items-center justify-center p-3">
                    <img
                      src={university.logo}
                      alt={`${university.name} Logo`}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(university.name.split(' ').map(word => word[0]).join(''))}&size=80&background=6366f1&color=fff&rounded=true`;
                      }}
                    />
                  </div>
                </div>

                {/* University Info */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {university.name}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{university.location}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{university.students} Students</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span>{university.type}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                  {university.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-3">
                    <div className="text-lg font-bold text-gray-900">
                      {university.properties}
                    </div>
                    <div className="text-xs text-gray-600">Properties</div>
                  </div>
                  <div className="text-center bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-3">
                    <div className="text-lg font-bold text-gray-900">
                      {university.established}
                    </div>
                    <div className="text-xs text-gray-600">Established</div>
                  </div>
                </div>

                {/* Partnership Badge */}
                <div className="absolute -top-3 -right-3">
                  <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full p-2 shadow-lg">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className={cn(
          "transition-all duration-1000 ease-out mb-16",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.8s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Partnership Benefits
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our official university partnerships ensure you get the best possible accommodation experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className={cn(
                    "w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-br",
                    benefit.gradient
                  )}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className={cn(
          "text-center transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "1s" }}>
          <div className="bg-white/60 border border-white/40 rounded-3xl p-8 lg:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Find Housing Near Your University
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Browse accommodation options specifically available for students from your university
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                  6+
                </div>
                <div className="text-gray-600">Partner Universities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text">
                  805+
                </div>
                <div className="text-gray-600">Verified Properties</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                  60,000+
                </div>
                <div className="text-gray-600">Students Served</div>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0">
              <span className="flex items-center justify-center gap-3">
                Browse Properties
                <GraduationCap className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartners; 