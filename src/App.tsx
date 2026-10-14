import React, { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
    const sections = document.querySelectorAll('main > section[id] > div');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.04 });
    sections.forEach((section) => {
      section.classList.add('scroll-reveal');
      observer.observe(section);
    });
    return () => {
      observer.disconnect();
      sections.forEach((section) => section.classList.remove('scroll-reveal', 'is-visible'));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7F4] dark:bg-[#101827] text-[#17243B] dark:text-[#F8F7F4] transition-colors duration-200">
      
      {/* Navigation Header */}
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenCvModal={() => setIsCvModalOpen(true)} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>

      {/* Selective Dark Section Footer */}
      <Footer />

      {/* CV Download / Preview Modal */}
      <CVModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
      />

    </div>
  );
};

export default App;
