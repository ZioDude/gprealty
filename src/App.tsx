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
import Footer from './components/Footer';

// Home page component that combines multiple sections
interface HomePageProps {
  setIsStudentFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const HomePage: React.FC<HomePageProps> = ({ setIsStudentFormOpen }) => {
  return (
    <>
      <Hero setIsStudentFormOpen={setIsStudentFormOpen} />
      <Services setIsStudentFormOpen={setIsStudentFormOpen} />
      <HowItWorks />
      <CompareHousingTypes />
      <UniversityPartners />
      <StudentTestimonials />
      <StudentLifeCyprus />
    </>
  );
};

// Services page component
const ServicesPage = () => {
  return (
    <div className="pt-20">
      <Services />
    </div>
  );
};

function App() {
  const [isStudentFormOpen, setIsStudentFormOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen">
        <Header setIsStudentFormOpen={setIsStudentFormOpen} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage setIsStudentFormOpen={setIsStudentFormOpen} />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
        <Dialog open={isStudentFormOpen} onOpenChange={setIsStudentFormOpen}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-0 shadow-none">
            <StudentForm onClose={() => setIsStudentFormOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
    </Router>
  );
}

export default App;
