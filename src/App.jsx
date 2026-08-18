import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import StackConstellation from './components/StackConstellation';
import AiToolsSection from './components/AiToolsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import VerificationLabProjects from './components/VerificationLabProjects';
import UvmLabSimulator from './components/UvmLabSimulator';
import ProtocolWaveforms from './components/ProtocolWaveforms';
import DebugWaveformSection from './components/DebugWaveformSection';
import CareerFocus from './components/CareerFocus';
import RecruiterCta from './components/RecruiterCta';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'ai-tools', 'experience', 'projects', 'lab', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050608] text-slate-200 font-sans scanline overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Hero />
        <AboutSection />
        <StackConstellation />
        <AiToolsSection />
        <ExperienceTimeline />
        <VerificationLabProjects />
        <UvmLabSimulator />
        <ProtocolWaveforms />
        <DebugWaveformSection />
        <CareerFocus />
        <RecruiterCta />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
