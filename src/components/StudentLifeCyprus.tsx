import React, { useState, useEffect, useRef } from 'react';
import { Sun, Waves, Utensils, Music, Camera, MapPin, Calendar, Coffee, Users, Palmtree } from 'lucide-react';
import { cn } from '../lib/utils';

const lifestyleCategories = [
  {
    id: 'beaches',
    icon: Waves,
    title: "Beaches & Coast",
    description: "World-class beaches just minutes from universities",
    gradient: "from-blue-500 to-cyan-500",
    highlights: ["30+ Blue Flag beaches", "Year-round swimming", "Water sports", "Beach volleyball"],
    image: "/images/cyprus-beach.jpg"
  },
  {
    id: 'food',
    icon: Utensils, 
    title: "Food & Dining",
    description: "Mediterranean cuisine and vibrant student food scene",
    gradient: "from-orange-500 to-red-500",
    highlights: ["Authentic Greek cuisine", "Affordable student meals", "Beach tavernas", "Nightlife dining"],
    image: "/images/cyprus-food.jpg"
  },
  {
    id: 'culture',
    icon: Camera,
    title: "Culture & History",
    description: "Rich heritage sites and cultural experiences", 
    gradient: "from-purple-500 to-pink-500",
    highlights: ["Ancient ruins", "Museums & galleries", "Traditional festivals", "UNESCO sites"],
    image: "/images/cyprus-culture.jpg"
  },
  {
    id: 'nightlife',
    icon: Music,
    title: "Nightlife & Social",
    description: "Vibrant student nightlife and social scenes",
    gradient: "from-pink-500 to-purple-500",
    highlights: ["Student parties", "Beach clubs", "Live music venues", "International crowd"],
    image: "/images/cyprus-nightlife.jpg"
  }
];

const studentActivities = [
  {
    icon: Sun,
    title: "Perfect Weather",
    description: "340+ days of sunshine per year",
    stat: "340 Days",
    color: "text-yellow-500"
  },
  {
    icon: Coffee,
    title: "Student Cafes", 
    description: "Hundreds of student-friendly cafes",
    stat: "500+ Cafes",
    color: "text-brown-500"
  },
  {
    icon: Users,
    title: "International Community",
    description: "Students from 100+ countries",
    stat: "100+ Nations",
    color: "text-blue-500"
  },
  {
    icon: Palmtree,
    title: "Island Adventures",
    description: "Easy weekend trips across the island",
    stat: "3 Hours",
    color: "text-green-500"
  }
];

const popularSpots = [
  {
    name: "Nissi Beach",
    type: "Beach Paradise",
    location: "Ayia Napa",
    description: "Famous beach with crystal clear waters and beach parties",
    image: "/images/nissi-beach.jpg",
    tags: ["Swimming", "Parties", "Water Sports"]
  },
  {
    name: "Paphos Harbor",
    type: "Historic Harbor",
    location: "Paphos", 
    description: "Scenic harbor with restaurants and archaeological sites",
    image: "/images/paphos-harbor.jpg",
    tags: ["History", "Dining", "Sunsets"]
  },
  {
    name: "Troodos Mountains",
    type: "Nature Escape",
    location: "Central Cyprus",
    description: "Mountain villages, hiking trails, and cooler weather",
    image: "/images/troodos.jpg", 
    tags: ["Hiking", "Villages", "Nature"]
  },
  {
    name: "Limassol Marina",
    type: "Modern Hub",
    location: "Limassol",
    description: "Luxury marina with shopping, dining and entertainment",
    image: "/images/limassol-marina.jpg",
    tags: ["Shopping", "Dining", "Marina"]
  }
];

const StudentLifeCyprus: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('beaches');
  const [currentSpot, setCurrentSpot] = useState(0);
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
      setCurrentSpot((prev) => (prev + 1) % popularSpots.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const activeLifestyle = lifestyleCategories.find(cat => cat.id === activeCategory) || lifestyleCategories[0];

  return (
    <section 
      ref={sectionRef}
      id="student-life" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50/30 to-purple-50/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-orange-400/5 to-yellow-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-200/30 rounded-full text-cyan-600 text-sm font-medium mb-4">
              🌴 Island Life
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Student Life in 
              <span className="block text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text">
                Cyprus
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond world-class education, Cyprus offers an incredible lifestyle with Mediterranean charm, 
              vibrant culture, and endless opportunities for adventure
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.2s" }}>
          {studentActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="text-center bg-white/70 border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <IconComponent className={cn("w-12 h-12 mx-auto mb-4", activity.color)} />
                <div className="text-2xl font-bold text-gray-900 mb-2">{activity.stat}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h4>
                <p className="text-gray-600 text-sm">{activity.description}</p>
              </div>
            );
          })}
        </div>

        {/* Lifestyle Categories */}
        <div className={cn(
          "transition-all duration-1000 ease-out mb-16",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.4s" }}>
          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {lifestyleCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                    activeCategory === category.id
                      ? "bg-white shadow-lg border-2 border-cyan-200 text-cyan-600 scale-105"
                      : "bg-white/50 border border-gray-200 text-gray-600 hover:bg-white hover:shadow-md"
                  )}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Category Detail */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn(
                      "w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br",
                      activeLifestyle.gradient
                    )}>
                      <activeLifestyle.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {activeLifestyle.title}
                      </h3>
                      <p className="text-gray-600">{activeLifestyle.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {activeLifestyle.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 bg-gradient-to-r from-white/50 to-white/30 rounded-xl p-4">
                        <div className={cn(
                          "w-2 h-2 rounded-full bg-gradient-to-r",
                          activeLifestyle.gradient
                        )}></div>
                        <span className="text-gray-700 font-medium">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={activeLifestyle.image}
                      alt={activeLifestyle.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop&crop=center`;
                      }}
                    />
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl">
                    <div className={cn(
                      "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                      activeLifestyle.gradient
                    )}>
                      #{activeCategory}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Spots Carousel */}
        <div className={cn(
          "transition-all duration-1000 ease-out mb-16",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.6s" }}>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Must-Visit Spots
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the most popular destinations among students in Cyprus
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl p-6 lg:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Spot Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {popularSpots[currentSpot].type}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {popularSpots[currentSpot].name}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {popularSpots[currentSpot].location}
                  </p>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {popularSpots[currentSpot].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {popularSpots[currentSpot].tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Spot Image */}
                <div className="relative">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={popularSpots[currentSpot].image}
                      alt={popularSpots[currentSpot].name}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://images.unsplash.com/photo-1537944434965-cf4679d1a598?w=600&h=400&fit=crop&crop=center`;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Spot Indicators */}
            <div className="flex justify-center items-center gap-3 mt-6">
              {popularSpots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSpot(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentSpot === index 
                      ? "bg-cyan-500 scale-125" 
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>
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
              Ready to Experience Cyprus?
            </h3>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Your perfect student housing is just the beginning. Cyprus offers an incredible lifestyle 
              that will make your university years unforgettable.
            </p>
            
            {/* Featured Highlight */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text">
                  Year-Round
                </div>
                <div className="text-gray-600">Outdoor Activities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                  Safe & Friendly
                </div>
                <div className="text-gray-600">International Environment</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
                  Affordable
                </div>
                <div className="text-gray-600">Student Lifestyle</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border-0">
                <span className="flex items-center justify-center gap-3">
                  Start Your Cyprus Journey
                  <Sun className="w-5 h-5" />
                </span>
              </button>
              
              <button className="bg-white/80 text-gray-700 border-2 border-gray-200 hover:bg-white hover:border-gray-300 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <span className="flex items-center justify-center gap-3">
                  <Calendar className="w-5 h-5" />
                  Plan Your Visit
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeCyprus; 