import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ShimmerButton } from './ui/shimmer-button';
import { cn } from '../lib/utils';

interface HeroProps {
  setIsStudentFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ setIsStudentFormOpen }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setTextAnimation(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Fallback background image while video loads */}
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000",
            isVideoLoaded ? "opacity-0" : "opacity-100"
          )}
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />
      </div>
      
      {/* Enhanced Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className={cn(
          "transition-all duration-1000 ease-out",
          textAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-3 sm:mb-4 leading-tight sm:leading-tight md:leading-tight">
            <span className="block text-white drop-shadow-lg mb-1 sm:mb-2">Find Your Ideal</span>
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text drop-shadow-lg mb-1 sm:mb-2">
              Student Housing
            </span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/90 mt-2 sm:mt-3 drop-shadow-lg">
              in Cyprus
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className={cn(
          "transition-all duration-1000 ease-out delay-300",
          textAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed font-light text-white/80 drop-shadow-md px-2 sm:px-0">
            Connect with amazing flatmates, discover premium accommodations, and make your university journey unforgettable
          </p>
        </div>

        {/* Action Buttons */}
        <div className={cn(
          "flex flex-col gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 ease-out delay-600 px-2 sm:px-0",
          textAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          {/* Primary CTA - Enhanced Shimmer Button */}
          <ShimmerButton
            onClick={() => setIsStudentFormOpen(true)}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:scale-105 transition-transform duration-200"
            shimmerColor="#60a5fa"
            shimmerDuration="2s"
            background="linear-gradient(135deg, #3b82f6, #10b981)"
            borderRadius="12px"
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Find Your Dream Home
            </span>
          </ShimmerButton>
          
          {/* Secondary CTA - Enhanced Glass Button */}
          <Button 
            size="lg" 
            variant="outline" 
            className={cn(
              "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold",
              "text-white border-white/30 bg-white/10 backdrop-blur-md",
              "hover:bg-white/20 hover:border-white/50 hover:scale-105",
              "transition-all duration-300 ease-out shadow-lg hover:shadow-xl",
              "rounded-xl border-2 relative overflow-hidden"
            )}
            onClick={() => {
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="flex items-center justify-center gap-2 sm:gap-3 relative z-10">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Explore Services
            </span>
            {/* Ripple effect on click */}
            <div className="absolute inset-0 bg-white/20 rounded-xl transform scale-0 group-active:scale-100 transition-transform duration-300"></div>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className={cn(
          "mt-8 sm:mt-10 md:mt-12 transition-all duration-1000 ease-out delay-900",
          textAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-center justify-center sm:gap-6 md:gap-8 text-white/80 px-4 sm:px-0">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">1000+ Happy Students</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="text-xs sm:text-sm font-medium">500+ Premium Properties</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="text-xs sm:text-sm font-medium">24/7 Student Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator - Fixed z-index */}
      <div className={cn(
        "absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out delay-1200 z-50",
        textAnimation ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white/60 text-xs mb-2 font-medium">Scroll to explore</span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Video Loading Indicator */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-20">
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white/80 text-xs sm:text-sm">Loading experience...</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
