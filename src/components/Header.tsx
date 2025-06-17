import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { Users } from 'lucide-react'; // Import Users icon

interface HeaderProps {
  setIsStudentFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRoommateFormOpen: React.Dispatch<React.SetStateAction<boolean>>; // Add prop for roommate form
}

const navItems = [
  { href: "#services", label: "Services" },
  { href: "#university-partners", label: "Universities" },
  { href: "#testimonials", label: "Reviews" },
];

const Header: React.FC<HeaderProps> = ({ setIsStudentFormOpen, setIsRoommateFormOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActiveRoute = (href: string) => {
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links for same-page navigation
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For regular routes, React Router will handle navigation
  };

  return (
    <>
      <header 
        className={cn(
          "fixed w-full z-50 transition-all duration-300 ease-in-out",
          isScrolled 
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50" 
            : "bg-white/80 backdrop-blur-md"
        )}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <nav className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center group transition-transform duration-200 hover:scale-105"
            >
              <div className="relative">
                <img 
                  src="/g.prealty-logo.png" 
                  alt="G.PRealty Logo" 
                  className="h-9 w-auto transition-all duration-200 group-hover:brightness-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => (
                  item.href.startsWith('#') ? (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 group",
                        "text-gray-700 hover:text-primary hover:bg-gray-100/80"
                      )}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={cn(
                        "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 group",
                        isActiveRoute(item.href)
                          ? "text-primary bg-primary/10"
                          : "text-gray-700 hover:text-primary hover:bg-gray-100/80"
                      )}
                    >
                      <span className="relative z-10">{item.label}</span>
                      {isActiveRoute(item.href) && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full"></div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                    </Link>
                  )
                ))}
              </nav>
              
              <div className="ml-6 pl-6 border-l border-gray-200">
                <Button 
                  onClick={() => setIsStudentFormOpen(true)}
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border-0"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Find Housing
                  </span>
                </Button>
                <Button 
                  onClick={() => setIsRoommateFormOpen(true)}
                  className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border-0"
                >
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Find Roommate
                  </span>
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2 rounded-full transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative flex flex-col justify-center items-center">
                <span 
                  className={cn(
                    "block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                  )}
                />
                <span 
                  className={cn(
                    "block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span 
                  className={cn(
                    "block h-0.5 w-6 bg-gray-700 transition-all duration-300 ease-in-out",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"
                  )}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-xl z-40 md:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen 
            ? "opacity-100 visible transform translate-y-0" 
            : "opacity-0 invisible transform -translate-y-4"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.href}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 group animate-slide-in-left text-left w-full",
                    "text-gray-700 hover:text-primary hover:bg-gray-50"
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{item.label}</span>
                  </div>
                </button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 group animate-slide-in-left",
                    isActiveRoute(item.href)
                      ? "text-primary bg-gradient-to-r from-primary/10 to-accent/10 shadow-sm"
                      : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  )}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <span>{item.label}</span>
                    {isActiveRoute(item.href) && (
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    )}
                  </div>
                </Link>
              )
            ))}
            
            <div className="pt-4 mt-4 border-t border-gray-200">
              <Button 
                onClick={() => {
                  setIsStudentFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-0"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find Your Perfect Housing
                </span>
              </Button>
              <Button 
                onClick={() => {
                  setIsRoommateFormOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-medium transition-all duration-200 shadow-lg hover:shadow-xl border-0"
              >
                <span className="flex items-center justify-center gap-2">
                  <Users className="w-5 h-5" />
                  Find Roommate
                </span>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
