import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { User, Mail, Phone, School, MessageSquare, CheckCircle, X, Users as GenderIcon, Instagram } from 'lucide-react'; // Added Instagram
import { cn } from '../lib/utils';

interface RoommateFormData {
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  university: string;
  gender: string;
  instagramTag?: string; // Optional Instagram tag
  aboutYourself: string;
}

interface RoommateFormProps {
  onClose?: () => void;
}

// Using the same comprehensive list as StudentForm
const countries = [
    { name: 'Cyprus', code: '+357', flag: '🇨🇾' },
    { name: 'United States', code: '+1', flag: '🇺🇸' },
    { name: 'United Kingdom', code: '+44', flag: '🇬🇧' },
    { name: 'Greece', code: '+30', flag: '🇬🇷' },
    { name: 'Germany', code: '+49', flag: '🇩🇪' },
    { name: 'France', code: '+33', flag: '🇫🇷' },
    { name: 'Russia', code: '+7', flag: '🇷🇺' },
    { name: 'China', code: '+86', flag: '🇨🇳' },
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'Afghanistan', code: '+93', flag: '🇦🇫' },
    { name: 'Albania', code: '+355', flag: '🇦🇱' },
    { name: 'Algeria', code: '+213', flag: '🇩🇿' },
    { name: 'Andorra', code: '+376', flag: '🇦🇩' },
    { name: 'Angola', code: '+244', flag: '🇦🇴' },
    { name: 'Argentina', code: '+54', flag: '🇦🇷' },
    { name: 'Armenia', code: '+374', flag: '🇦🇲' },
    { name: 'Australia', code: '+61', flag: '🇦🇺' },
    { name: 'Austria', code: '+43', flag: '🇦🇹' },
    { name: 'Azerbaijan', code: '+994', flag: '🇦🇿' },
    { name: 'Bahamas', code: '+1-242', flag: '🇧🇸' },
    { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
    { name: 'Bangladesh', code: '+880', flag: '🇧🇩' },
    { name: 'Belarus', code: '+375', flag: '🇧🇾' },
    { name: 'Belgium', code: '+32', flag: '🇧🇪' },
    { name: 'Belize', code: '+501', flag: '🇧🇿' },
    { name: 'Benin', code: '+229', flag: '🇧🇯' },
    { name: 'Bhutan', code: '+975', flag: '🇧🇹' },
    { name: 'Bolivia', code: '+591', flag: '🇧🇴' },
    { name: 'Bosnia and Herzegovina', code: '+387', flag: '🇧🇦' },
    { name: 'Botswana', code: '+267', flag: '🇧🇼' },
    { name: 'Brazil', code: '+55', flag: '🇧🇷' },
    { name: 'Bulgaria', code: '+359', flag: '🇧🇬' },
    { name: 'Burkina Faso', code: '+226', flag: '🇧🇫' },
    { name: 'Cambodia', code: '+855', flag: '🇰🇭' },
    { name: 'Cameroon', code: '+237', flag: '🇨🇲' },
    { name: 'Canada', code: '+1', flag: '🇨🇦' },
    { name: 'Central African Republic', code: '+236', flag: '🇨🇫' },
    { name: 'Chad', code: '+235', flag: '🇹🇩' },
    { name: 'Chile', code: '+56', flag: '🇨🇱' },
    { name: 'Colombia', code: '+57', flag: '🇨🇴' },
    { name: 'Congo (DRC)', code: '+243', flag: '🇨🇩' },
    { name: 'Congo (Republic)', code: '+242', flag: '🇨🇬' },
    { name: 'Costa Rica', code: '+506', flag: '🇨🇷' },
    { name: 'Croatia', code: '+385', flag: '🇭🇷' },
    { name: 'Cuba', code: '+53', flag: '🇨🇺' },
    { name: 'Czech Republic', code: '+420', flag: '🇨🇿' },
    { name: 'Denmark', code: '+45', flag: '🇩🇰' },
    { name: 'Djibouti', code: '+253', flag: '🇩🇯' },
    { name: 'Dominican Republic', code: '+1-809', flag: '🇩🇴' },
    { name: 'Ecuador', code: '+593', flag: '🇪🇨' },
    { name: 'Egypt', code: '+20', flag: '🇪🇬' },
    { name: 'El Salvador', code: '+503', flag: '🇸🇻' },
    { name: 'Estonia', code: '+372', flag: '🇪🇪' },
    { name: 'Ethiopia', code: '+251', flag: '🇪🇹' },
    { name: 'Fiji', code: '+679', flag: '🇫🇯' },
    { name: 'Finland', code: '+358', flag: '🇫🇮' },
    { name: 'Gabon', code: '+241', flag: '🇬🇦' },
    { name: 'Georgia', code: '+995', flag: '🇬🇪' },
    { name: 'Ghana', code: '+233', flag: '🇬🇭' },
    { name: 'Guatemala', code: '+502', flag: '🇬🇹' },
    { name: 'Haiti', code: '+509', flag: '🇭🇹' },
    { name: 'Honduras', code: '+504', flag: '🇭🇳' },
    { name: 'Hungary', code: '+36', flag: '🇭🇺' },
    { name: 'Iceland', code: '+354', flag: '🇮🇸' },
    { name: 'Indonesia', code: '+62', flag: '🇮🇩' },
    { name: 'Iran', code: '+98', flag: '🇮🇷' },
    { name: 'Iraq', code: '+964', flag: '🇮🇶' },
    { name: 'Ireland', code: '+353', flag: '🇮🇪' },
    { name: 'Israel', code: '+972', flag: '🇮🇱' },
    { name: 'Italy', code: '+39', flag: '🇮🇹' },
    { name: 'Jamaica', code: '+1-876', flag: '🇯🇲' },
    { name: 'Japan', code: '+81', flag: '🇯🇵' },
    { name: 'Jordan', code: '+962', flag: '🇯🇴' },
    { name: 'Kazakhstan', code: '+7', flag: '🇰🇿' },
    { name: 'Kenya', code: '+254', flag: '🇰🇪' },
    { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
    { name: 'Kyrgyzstan', code: '+996', flag: '🇰🇬' },
    { name: 'Latvia', code: '+371', flag: '🇱🇻' },
    { name: 'Lebanon', code: '+961', flag: '🇱🇧' },
    { name: 'Libya', code: '+218', flag: '🇱🇾' },
    { name: 'Lithuania', code: '+370', flag: '🇱🇹' },
    { name: 'Luxembourg', code: '+352', flag: '🇱🇺' },
    { name: 'Madagascar', code: '+261', flag: '🇲🇬' },
    { name: 'Malaysia', code: '+60', flag: '🇲🇾' },
    { name: 'Maldives', code: '+960', flag: '🇲🇻' },
    { name: 'Mali', code: '+223', flag: '🇲🇱' },
    { name: 'Malta', code: '+356', flag: '🇲🇹' },
    { name: 'Mexico', code: '+52', flag: '🇲🇽' },
    { name: 'Moldova', code: '+373', flag: '🇲🇩' },
    { name: 'Monaco', code: '+377', flag: '🇲🇨' },
    { name: 'Mongolia', code: '+976', flag: '🇲🇳' },
    { name: 'Montenegro', code: '+382', flag: '🇲🇪' },
    { name: 'Morocco', code: '+212', flag: '🇲🇦' },
    { name: 'Mozambique', code: '+258', flag: '🇲🇿' },
    { name: 'Myanmar', code: '+95', flag: '🇲🇲' },
    { name: 'Nepal', code: '+977', flag: '🇳🇵' },
    { name: 'Netherlands', code: '+31', flag: '🇳🇱' },
    { name: 'New Zealand', code: '+64', flag: '🇳🇿' },
    { name: 'Nicaragua', code: '+505', flag: '🇳🇮' },
    { name: 'Niger', code: '+227', flag: '🇳🇪' },
    { name: 'Nigeria', code: '+234', flag: '🇳🇬' },
    { name: 'North Korea', code: '+850', flag: '🇰🇵' },
    { name: 'North Macedonia', code: '+389', flag: '🇲🇰' },
    { name: 'Norway', code: '+47', flag: '🇳🇴' },
    { name: 'Oman', code: '+968', flag: '🇴🇲' },
    { name: 'Pakistan', code: '+92', flag: '🇵🇰' },
    { name: 'Panama', code: '+507', flag: '🇵🇦' },
    { name: 'Paraguay', code: '+595', flag: '🇵🇾' },
    { name: 'Peru', code: '+51', flag: '🇵🇪' },
    { name: 'Philippines', code: '+63', flag: '🇵🇭' },
    { name: 'Poland', code: '+48', flag: '🇵🇱' },
    { name: 'Portugal', code: '+351', flag: '🇵🇹' },
    { name: 'Qatar', code: '+974', flag: '🇶🇦' },
    { name: 'Romania', code: '+40', flag: '🇷🇴' },
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { name: 'Senegal', code: '+221', flag: '🇸🇳' },
    { name: 'Serbia', code: '+381', flag: '🇷🇸' },
    { name: 'Singapore', code: '+65', flag: '🇸🇬' },
    { name: 'Slovakia', code: '+421', flag: '🇸🇰' },
    { name: 'Slovenia', code: '+386', flag: '🇸🇮' },
    { name: 'Somalia', code: '+252', flag: '🇸🇴' },
    { name: 'South Africa', code: '+27', flag: '🇿🇦' },
    { name: 'South Korea', code: '+82', flag: '🇰🇷' },
    { name: 'Spain', code: '+34', flag: '🇪🇸' },
    { name: 'Sri Lanka', code: '+94', flag: '🇱🇰' },
    { name: 'Sudan', code: '+249', flag: '🇸🇩' },
    { name: 'Sweden', code: '+46', flag: '🇸🇪' },
    { name: 'Switzerland', code: '+41', flag: '🇨🇭' },
    { name: 'Syria', code: '+963', flag: '🇸🇾' },
    { name: 'Taiwan', code: '+886', flag: '🇹🇼' },
    { name: 'Tanzania', code: '+255', flag: '🇹🇿' },
    { name: 'Thailand', code: '+66', flag: '🇹🇭' },
    { name: 'Togo', code: '+228', flag: '🇹🇬' },
    { name: 'Tunisia', code: '+216', flag: '🇹🇳' },
    { name: 'Turkey', code: '+90', flag: '🇹🇷' },
    { name: 'Uganda', code: '+256', flag: '🇺🇬' },
    { name: 'Ukraine', code: '+380', flag: '🇺🇦' },
    { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
    { name: 'Uruguay', code: '+598', flag: '🇺🇾' },
    { name: 'Uzbekistan', code: '+998', flag: '🇺🇿' },
    { name: 'Venezuela', code: '+58', flag: '🇻🇪' },
    { name: 'Vietnam', code: '+84', flag: '🇻🇳' },
    { name: 'Yemen', code: '+967', flag: '🇾🇪' },
    { name: 'Zambia', code: '+260', flag: '🇿🇲' },
    { name: 'Zimbabwe', code: '+263', flag: '🇿🇼' },
];

const RoommateForm: React.FC<RoommateFormProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<RoommateFormData>({
    fullName: '',
    email: '',
    countryCode: '+357', // Default to Cyprus
    phone: '',
    university: '',
    gender: '',
    instagramTag: '', // Initialize optional field
    aboutYourself: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof RoommateFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Roommate Form Data:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      // Keep the form open to show the success message, or close after a delay
      // setTimeout(() => {
      //   if (onClose) onClose();
      // }, 3000); // Close after 3 seconds
    } catch (error) {
      console.error('Error submitting roommate form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-white mb-3">Thank You!</h2>
        <p className="text-white/80 mb-6">
          Your information has been submitted. We'll email you with potential roommate matches soon!
        </p>
        <Button
          onClick={onClose}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white h-10 px-6 rounded-lg font-semibold"
        >
          Close
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="relative w-full max-w-lg mx-auto max-h-[90vh] overflow-hidden">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-8 h-8 bg-red-500/20 backdrop-blur-md border border-red-300/30 rounded-full flex items-center justify-center text-red-200 hover:text-white hover:bg-red-500/40 transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, scale: isVisible ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 sm:p-8 shadow-xl max-h-[85vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Find Your Ideal Roommate</h2>
          <p className="text-white/70 text-sm">Fill in your details to get matched.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4"> {/* Reverted space-y, can be adjusted later if needed */}
          <div className="space-y-2">
            <Label htmlFor="fullNameRoommate" className="text-white text-sm font-medium flex items-center gap-2"><User className="w-3 h-3" />Full Name</Label>
            <Input id="fullNameRoommate" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="e.g. Alex Smith" required 
                   className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 rounded-lg text-sm"/>
          </div>

          <div className="space-y-2">
            <Label htmlFor="emailRoommate" className="text-white text-sm font-medium flex items-center gap-2"><Mail className="w-3 h-3" />Email Address</Label>
            <Input id="emailRoommate" type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="e.g. alex.smith@example.com" required 
                   className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 rounded-lg text-sm"/>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneRoommate" className="text-white text-sm font-medium flex items-center gap-2"><Phone className="w-3 h-3" />Phone Number</Label>
            <div className="flex gap-2">
              <Select name="countryCode" value={formData.countryCode} onValueChange={handleSelectChange('countryCode')}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white w-1/3 h-10 rounded-lg text-sm">
                  <SelectValue placeholder="Code" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-white/20 max-h-60 overflow-y-auto">
                  {countries.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <span className="mr-2">{country.flag}</span> {country.name.substring(0,2).toUpperCase()} ({country.code})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input id="phoneRoommate" type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="e.g. 99 123456" required 
                     className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-2/3 h-10 rounded-lg text-sm"/>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="universityRoommate" className="text-white text-sm font-medium flex items-center gap-2"><School className="w-3 h-3" />University</Label> {/* Adjusted icon size back */}
            <Select name="university" value={formData.university} onValueChange={handleSelectChange('university')} required>
                <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 rounded-lg text-sm"> {/* Adjusted height back */}
                    <SelectValue placeholder="Select University" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-white/20">
                    <SelectItem value="ucy">University of Cyprus</SelectItem>
                    <SelectItem value="cut">Cyprus University of Technology</SelectItem>
                    <SelectItem value="euc">European University Cyprus</SelectItem>
                    <SelectItem value="unic">University of Nicosia</SelectItem>
                    <SelectItem value="frederick">Frederick University</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="genderRoommate" className="text-white text-sm font-medium flex items-center gap-2"><GenderIcon className="w-3 h-3" />Gender</Label> {/* Used aliased icon, adjusted size */}
            <Select name="gender" value={formData.gender} onValueChange={handleSelectChange('gender')} required>
                <SelectTrigger className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 rounded-lg text-sm"> {/* Adjusted height back */}
                    <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent className="bg-white/95 backdrop-blur-md border-white/20">
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="instagramTag" className="text-white text-sm font-medium flex items-center gap-2">
              <Instagram className="w-3 h-3" /> Instagram Tag <span className="text-xs text-white/60">(Optional)</span>
            </Label>
            <Input 
              id="instagramTag" 
              name="instagramTag" 
              value={formData.instagramTag} 
              onChange={handleInputChange} 
              placeholder="e.g. @yourtag" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 h-10 rounded-lg text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="aboutYourself" className="text-white text-sm font-medium flex items-center gap-2"><MessageSquare className="w-3 h-3" />A Bit About Yourself</Label>
            <textarea
              id="aboutYourself"
              name="aboutYourself"
              value={formData.aboutYourself}
              onChange={handleInputChange}
              placeholder="e.g., Interests, study habits, what you're looking for in a roommate..."
              className="w-full p-3 bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-lg min-h-[100px] resize-none text-sm"
              rows={3}
              required
            />
          </div>
          
          <div className="pt-2"> {/* Reverted pt */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white h-11 rounded-lg font-semibold text-base"
            >
              Find My Roommate
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default RoommateForm;
