import React from 'react';
import { Button } from './ui/button';
import { Users, MessageSquare, CheckCircle } from 'lucide-react';

interface RoommateMatchingProps {
  setIsRoommateFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RoommateMatching: React.FC<RoommateMatchingProps> = ({ setIsRoommateFormOpen }) => {
  return (
    <section id="roommate-matching" className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/30 rounded-full text-purple-600 text-sm font-medium mb-4">
            🤝 Find Your Crew
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Connect with Your Ideal Roommate
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Our roommate matching service helps you find compatible students to share your new home with. 
            Save on rent and make new friends!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-16 text-center">
          <div className="p-6 bg-white/70 border border-white/40 rounded-xl shadow-lg">
            <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Submit Your Profile</h3>
            <p className="text-gray-600 text-sm">
              Tell us a bit about yourself and what you're looking for in a roommate.
            </p>
          </div>
          <div className="p-6 bg-white/70 border border-white/40 rounded-xl shadow-lg">
            <MessageSquare className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Get Matched</h3>
            <p className="text-gray-600 text-sm">
              We'll search our database for students with similar preferences and lifestyle.
            </p>
          </div>
          <div className="p-6 bg-white/70 border border-white/40 rounded-xl shadow-lg">
            <CheckCircle className="w-12 h-12 text-rose-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Connect & Decide</h3>
            <p className="text-gray-600 text-sm">
              We'll email you potential matches. You can then connect and decide if it's a good fit!
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            onClick={() => setIsRoommateFormOpen(true)}
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 rounded-xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border-0"
          >
            <Users className="w-5 h-5 mr-2" />
            Find a Roommate Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RoommateMatching;
