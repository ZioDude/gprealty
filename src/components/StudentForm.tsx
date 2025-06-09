import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { User, GraduationCap, Home, FileText, ArrowRight, ArrowLeft, CheckCircle, X } from 'lucide-react';
import { cn } from '../lib/utils';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  studyLevel: string;
  fieldOfStudy: string;
  preferredLocation: string;
  budget: string;
  roommates: boolean;
  moveInDate: string;
  additionalNotes: string;
}

interface StudentFormProps {
  onClose?: () => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    university: '',
    studyLevel: '',
    fieldOfStudy: '',
    preferredLocation: '',
    budget: '',
    roommates: false,
    moveInDate: '',
    additionalNotes: '',
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: keyof FormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: keyof FormData) => (checked: boolean | 'indeterminate') => {
    setFormData(prev => ({ ...prev, [name]: checked === true }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log(formData);
      // Show success message
      alert('🎉 Form submitted successfully! We\'ll contact you within 24 hours.');
      if (onClose) onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const stepVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? '50%' : '-50%',
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    }),
    visible: {
      x: '0%',
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '50%' : '-50%',
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" }
    })
  };

  const [direction, setDirection] = useState(1);

  const handleNextStep = () => {
    setDirection(1);
    nextStep();
  };

  const handlePrevStep = () => {
    setDirection(-1);
    prevStep();
  };

  const steps = [
    { icon: User, title: "Personal", description: "Basic info" },
    { icon: GraduationCap, title: "University", description: "Academic" },
    { icon: Home, title: "Preferences", description: "Housing" },
    { icon: FileText, title: "Notes", description: "Additional" }
  ];

  const progress = ((step - 1) / 3) * 100;

  return (
    <div className="relative w-full max-w-2xl mx-auto max-h-[90vh] overflow-hidden">
      {/* Enhanced Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 w-10 h-10 bg-red-500/20 backdrop-blur-md border border-red-300/30 rounded-full flex items-center justify-center text-red-200 hover:text-white hover:bg-red-500/40 hover:border-red-300/60 transition-all duration-200 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>
      )}

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-purple-600/15 to-green-600/15 rounded-2xl blur-2xl"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20, scale: isVisible ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 sm:p-6 shadow-xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
      >
        {/* Compact Header */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Find Your Perfect
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text">
              Student Home
            </span>
          </h2>
          <p className="text-white/70 text-xs sm:text-sm max-w-md mx-auto">
            Quick form to find your ideal accommodation
          </p>
        </div>

        {/* Compact Progress Bar */}
        <div className="mb-6">
          {/* Mobile-friendly step indicators */}
          <div className="flex justify-between items-center mb-4">
            {steps.map((stepInfo, index) => {
              const StepIcon = stepInfo.icon;
              const stepNumber = index + 1;
              const isActive = step === stepNumber;
              const isCompleted = step > stepNumber;
              
              return (
                <div key={stepNumber} className="flex flex-col items-center relative flex-1">
                  <motion.div
                    initial={false}
                    animate={{
                      scale: isActive ? 1.05 : 1,
                      backgroundColor: isActive ? '#3b82f6' : isCompleted ? '#10b981' : 'rgba(255,255,255,0.1)'
                    }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 backdrop-blur-md",
                      isActive ? "border-blue-400 shadow-md shadow-blue-400/30" : 
                      isCompleted ? "border-green-400 shadow-md shadow-green-400/30" : 
                      "border-white/30"
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ) : (
                      <StepIcon className={cn(
                        "w-3 h-3 sm:w-4 sm:h-4",
                        isActive ? "text-white" : "text-white/60"
                      )} />
                    )}
                  </motion.div>
                  <div className="text-center mt-1">
                    <p className={cn(
                      "text-xs font-medium transition-colors duration-200",
                      isActive ? "text-white" : "text-white/60"
                    )}>
                      {stepInfo.title}
                    </p>
                  </div>
                  
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-4 sm:top-5 left-1/2 w-full h-0.5 -z-10">
                      <div className="w-full h-full bg-white/20 rounded-full ml-4 sm:ml-5">
                        <motion.div
                          initial={false}
                          animate={{ width: step > stepNumber ? '100%' : '0%' }}
                          transition={{ duration: 0.3 }}
                          className="h-full bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          
          {/* Progress Bar */}
          <div className="relative w-full bg-white/10 rounded-full h-2 backdrop-blur-sm">
            <motion.div
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 h-full rounded-full shadow-sm"
            />
          </div>
          
          <div className="flex justify-between text-xs font-medium text-white/70 mt-2">
            <span>Step {step} of 4</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {/* Compact Form Content */}
        <form onSubmit={onSubmit} className="overflow-hidden">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white text-sm font-medium flex items-center gap-2">
                      <User className="w-3 h-3" />
                      Full Name
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john.doe@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white text-sm font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +357 99 123456"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: University Information */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="university" className="text-white text-sm font-medium flex items-center gap-2">
                      <GraduationCap className="w-3 h-3" />
                      University
                    </Label>
                    <Select name="university" value={formData.university} onValueChange={handleSelectChange('university')} required>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm">
                        <SelectValue placeholder="Select University" className="text-white/50" />
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
                    <Label htmlFor="studyLevel" className="text-white text-sm font-medium">Level of Study</Label>
                    <Select name="studyLevel" value={formData.studyLevel} onValueChange={handleSelectChange('studyLevel')} required>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm">
                        <SelectValue placeholder="Select Study Level" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-md border-white/20">
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="exchange">Exchange Student</SelectItem>
                        <SelectItem value="preparatory">Preparatory/Foundation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="fieldOfStudy" className="text-white text-sm font-medium">Field of Study</Label>
                    <Input
                      id="fieldOfStudy"
                      type="text"
                      name="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      onChange={handleInputChange}
                      placeholder="e.g. Computer Science"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50 backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Housing Preferences */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredLocation" className="text-white text-sm font-medium flex items-center gap-2">
                      <Home className="w-3 h-3" />
                      Preferred Location
                    </Label>
                    <Select name="preferredLocation" value={formData.preferredLocation} onValueChange={handleSelectChange('preferredLocation')} required>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm">
                        <SelectValue placeholder="Select Preferred Location" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-md border-white/20">
                        <SelectItem value="nicosia">Nicosia</SelectItem>
                        <SelectItem value="limassol">Limassol</SelectItem>
                        <SelectItem value="larnaca">Larnaca</SelectItem>
                        <SelectItem value="paphos">Paphos</SelectItem>
                        <SelectItem value="famagusta">Famagusta (Free Areas)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="text-white text-sm font-medium">Monthly Budget (EUR)</Label>
                    <Select name="budget" value={formData.budget} onValueChange={handleSelectChange('budget')} required>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm">
                        <SelectValue placeholder="Select Budget Range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white/95 backdrop-blur-md border-white/20">
                        <SelectItem value="<300">Less than €300</SelectItem>
                        <SelectItem value="300-400">€300 - €400</SelectItem>
                        <SelectItem value="401-500">€401 - €500</SelectItem>
                        <SelectItem value="501-600">€501 - €600</SelectItem>
                        <SelectItem value="601-700">€601 - €700</SelectItem>
                        <SelectItem value="700+">More than €700</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="moveInDate" className="text-white text-sm font-medium">Preferred Move-in Date</Label>
                    <Input
                      id="moveInDate"
                      type="date"
                      name="moveInDate"
                      value={formData.moveInDate}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 h-10 rounded-lg text-sm"
                      required
                    />
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                    <Checkbox
                      id="roommates"
                      name="roommates"
                      checked={formData.roommates}
                      onCheckedChange={handleCheckboxChange('roommates')}
                      className="border-white/30 data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                    />
                    <Label htmlFor="roommates" className="text-white text-sm font-medium cursor-pointer">
                      I'm open to living with roommates
                    </Label>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Additional Information */}
            {step === 4 && (
              <motion.div
                key="step4"
                custom={direction}
                variants={stepVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes" className="text-white text-sm font-medium flex items-center gap-2">
                    <FileText className="w-3 h-3" />
                    Additional Notes or Preferences
                  </Label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    placeholder="e.g., Looking for a quiet place, need parking, specific amenities..."
                    className="w-full p-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 backdrop-blur-md focus:bg-white/20 focus:border-white/40 transition-all duration-200 rounded-lg min-h-[80px] resize-none text-sm"
                    rows={3}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Compact Navigation Buttons */}
          <div className="flex justify-between items-center mt-6 gap-3">
            {step > 1 ? (
              <Button
                type="button"
                variant="outline"
                onClick={handlePrevStep}
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200 h-10 px-4 rounded-lg backdrop-blur-md text-sm"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
            ) : (
              <div></div>
            )}
            
            {step < 4 ? (
              <Button
                type="button"
                onClick={handleNextStep}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 h-10 px-4 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-md text-sm"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-0 h-10 px-6 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 backdrop-blur-md text-sm"
              >
                Submit Application
                <CheckCircle className="w-4 h-4 ml-1" />
              </Button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default StudentForm;
