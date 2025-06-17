import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Dialog, DialogContent } from './components/ui/dialog';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import StudentTestimonials from './components/StudentTestimonials';
import UniversityPartners from './components/UniversityPartners';
import CompareHousingTypes from './components/CompareHousingTypes';
import StudentLifeCyprus from './components/StudentLifeCyprus';
import StudentForm from './components/StudentForm';
import RoommateForm from './components/RoommateForm'; // Import RoommateForm
import RoommateMatching from './components/RoommateMatching'; // Import RoommateMatching
import Footer from './components/Footer';

// Home page component that combines multiple sections
interface HomePageProps {
  setIsStudentFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsRoommateFormOpen: React.Dispatch<React.SetStateAction<boolean>>; // Add prop for RoommateMatching
}
const HomePage: React.FC<HomePageProps> = ({ setIsStudentFormOpen, setIsRoommateFormOpen }) => {
  return (
    <>
      <Hero setIsStudentFormOpen={setIsStudentFormOpen} />
      <Services setIsStudentFormOpen={setIsStudentFormOpen} />
      <HowItWorks />
      <RoommateMatching setIsRoommateFormOpen={setIsRoommateFormOpen} /> {/* Add RoommateMatching section */}
      <CompareHousingTypes />
      <UniversityPartners />
      <StudentTestimonials />
      <StudentLifeCyprus />
    </>
  );
};

function App() {
  const [isStudentFormOpen, setIsStudentFormOpen] = useState(false);
  const [isRoommateFormOpen, setIsRoommateFormOpen] = useState(false); // State for RoommateForm

  return (
    <Router>
      <div className="min-h-screen">
        <Header setIsStudentFormOpen={setIsStudentFormOpen} setIsRoommateFormOpen={setIsRoommateFormOpen} /> {/* Pass setter to Header */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage setIsStudentFormOpen={setIsStudentFormOpen} setIsRoommateFormOpen={setIsRoommateFormOpen} />} /> {/* Pass prop to HomePage */}
          </Routes>
        </main>
        <Footer />
        <Dialog open={isStudentFormOpen} onOpenChange={setIsStudentFormOpen}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
            <StudentForm onClose={() => setIsStudentFormOpen(false)} />
          </DialogContent>
        </Dialog>

        {/* Dialog for Roommate Form */}
        <Dialog open={isRoommateFormOpen} onOpenChange={setIsRoommateFormOpen}>
          <DialogContent className="max-w-lg p-0 bg-transparent border-0 shadow-none">
            <RoommateForm onClose={() => setIsRoommateFormOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </Router>
  );
}

export default App;
