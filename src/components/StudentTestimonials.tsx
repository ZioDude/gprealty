import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote, MapPin, GraduationCap, ThumbsUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const testimonials = [
  {
    id: 1,
    name: "Sofia Martinez",
    university: "University of Cyprus",
    location: "Nicosia",
    year: "3rd Year Psychology",
    rating: 5,
    image: "/images/student-sofia.jpg",
    quote: "Finding housing in Cyprus seemed impossible until I found this platform. Within a week, I had my perfect studio apartment near campus!",
    details: "The support team helped me through every step of the process, from viewing properties online to signing the lease. Couldn't be happier!",
    propertyType: "Studio Apartment",
    monthlyRent: "€450"
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    university: "Cyprus University of Technology",
    location: "Limassol",
    year: "2nd Year Engineering",
    rating: 5,
    image: "/images/student-ahmed.jpg",
    quote: "The shared flat I found here is amazing! Great roommates, modern facilities, and only 10 minutes walk to university.",
    details: "The roommate matching service was incredible. I was worried about living with strangers but they found perfect matches for my lifestyle.",
    propertyType: "Shared Apartment",
    monthlyRent: "€320"
  },
  {
    id: 3,
    name: "Emma Thompson",
    university: "European University Cyprus",
    location: "Nicosia",
    year: "1st Year Business",
    rating: 5,
    image: "/images/student-emma.jpg",
    quote: "As an international student, I was nervous about finding accommodation. This platform made everything so easy and stress-free!",
    details: "The virtual tours saved me so much time and money. I could see everything online before making my decision. Highly recommend!",
    propertyType: "Student Residence",
    monthlyRent: "€380"
  },
  {
    id: 4,
    name: "Dimitris Komninos",
    university: "Cyprus International University",
    location: "Nicosia",
    year: "Masters Student",
    rating: 5,
    image: "/images/student-dimitris.jpg",
    quote: "The customer service is outstanding! They helped me find a perfect place even with my specific budget requirements.",
    details: "I needed something affordable but still comfortable for my Masters studies. They found me exactly what I was looking for!",
    propertyType: "1-Bedroom Flat",
    monthlyRent: "€500"
  },
  {
    id: 5,
    name: "Maria Petrova",
    university: "University of Central Lancashire Cyprus",
    location: "Larnaca",
    year: "4th Year Medicine",
    rating: 5,
    image: "/images/student-maria.jpg",
    quote: "Living in Cyprus has been an amazing experience, and finding the right accommodation was the first step to success!",
    details: "The property I found through this platform has everything I need for my final year. Quiet for studying but close to everything!",
    propertyType: "Private Room",
    monthlyRent: "€280"
  }
];

const StudentTestimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50/30"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-200/30 rounded-full text-green-600 text-sm font-medium mb-4">
              ⭐ Student Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              What Students 
              <span className="block text-transparent bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text">
                Say About Us
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real stories from real students who found their perfect home in Cyprus through our platform
            </p>
          </div>
        </div>

        {/* Featured Testimonial */}
        <div className={cn(
          "transition-all duration-1000 ease-out mb-16",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.2s" }}>
          <div className="relative max-w-6xl mx-auto">
            <div className="bg-white/70 backdrop-blur-md border border-white/40 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                {/* Student Photo & Info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-xl ring-4 ring-white/50"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentTestimonial.name)}&size=160&background=6366f1&color=fff&rounded=true`;
                      }}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full p-2 shadow-lg">
                      <ThumbsUp className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    {currentTestimonial.name}
                  </h4>
                  
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <GraduationCap className="w-4 h-4" />
                      <span className="text-sm">{currentTestimonial.year}</span>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{currentTestimonial.university}</span>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-2 w-12 h-12 text-blue-200 rotate-180" />
                    
                    <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 mb-6 leading-relaxed relative z-10">
                      "{currentTestimonial.quote}"
                    </blockquote>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      {currentTestimonial.details}
                    </p>

                    {/* Property Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-600 mb-1">Property Type</div>
                        <div className="font-semibold text-gray-900">{currentTestimonial.propertyType}</div>
                      </div>
                      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-600 mb-1">Monthly Rent</div>
                        <div className="font-semibold text-gray-900">{currentTestimonial.monthlyRent}</div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 text-center">
                        <div className="text-sm text-gray-600 mb-1">Location</div>
                        <div className="font-semibold text-gray-900">{currentTestimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-md rounded-full shadow-lg border border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-md rounded-full shadow-lg border border-white/40 flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center items-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                currentIndex === index 
                  ? "bg-blue-500 scale-125" 
                  : "bg-gray-300 hover:bg-gray-400"
              )}
            />
          ))}
        </div>

        {/* Quick Stats */}
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{ transitionDelay: "0.6s" }}>
          <div className="text-center bg-white/60 border border-white/40 rounded-2xl p-8 shadow-lg">
            <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text mb-2">
              98%
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Rate</div>
            <div className="text-gray-600">Students love our service</div>
          </div>
          
          <div className="text-center bg-white/60 border border-white/40 rounded-2xl p-8 shadow-lg">
            <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text mb-2">
              4.9/5
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Average Rating</div>
            <div className="text-gray-600">Based on 1000+ reviews</div>
          </div>
          
          <div className="text-center bg-white/60 border border-white/40 rounded-2xl p-8 shadow-lg">
            <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text mb-2">
              7 Days
            </div>
            <div className="text-lg font-semibold text-gray-900 mb-2">Average Match Time</div>
            <div className="text-gray-600">From search to move-in</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials; 