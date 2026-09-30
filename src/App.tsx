import React, { useState } from 'react';
import { BootScreen } from './components/common/BootScreen';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/common/Navbar';
import { SearchPalette } from './components/common/SearchPalette';
import { Hero } from './components/hero/Hero';
import { About } from './components/about/About';
import { SkillsStack } from './components/skills/SkillsStack';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { EngineeringJourney } from './components/journey/EngineeringJourney';
import { CampusActivities } from './components/activities/CampusActivities';
import { ResumeSection } from './components/resume/ResumeSection';
import { ResumeModal } from './components/resume/ResumeModal';
import { DigitalFootprint } from './components/footprint/DigitalFootprint';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/footer/Footer';

export const App: React.FC = () => {
  const [isBooted, setIsBooted] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    const el = document.getElementById(projectId) || document.getElementById('projects');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 font-sans selection:bg-circuit-cyan selection:text-obsidian-950 relative">
      {/* Boot Screen Initialization */}
      {!isBooted && <BootScreen onComplete={() => setIsBooted(true)} />}

      {/* Subtle Engineering Reticle Cursor */}
      <CustomCursor />

      {/* Sticky Navbar */}
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />

      {/* Interactive Command Search Palette (Ctrl+K) */}
      <SearchPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProject={handleSelectProject}
      />

      {/* In-Page Recruiter Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Main Page Layout */}
      <main>
        {/* 1. Hero Section with Interactive Engineering Architecture Diagram */}
        <Hero 
          onOpenResume={() => setIsResumeModalOpen(true)}
          onSelectProject={handleSelectProject}
        />

        {/* 2. About / System Profile Section */}
        <About />

        {/* 3. Engineering Stack (VLSI, Hardware, Software/AI) */}
        <SkillsStack />

        {/* 4. Flagship Engineering Projects (ESA, Q-Route, Helmet Antenna) */}
        <ProjectsSection selectedProjectId={selectedProjectId} />

        {/* 5. Engineering Journey (Space Tech, Ham Radio, LeetCode) */}
        <EngineeringJourney />

        {/* 6. Technical & Campus Activities */}
        <CampusActivities />

        {/* 7. Resume Section */}
        <ResumeSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 8. Digital Footprint (LinkedIn, GitHub, LeetCode nodes) */}
        <DigitalFootprint />

        {/* 9. Contact / Communication Link */}
        <ContactSection />
      </main>

      {/* 10. Engineering System Footer */}
      <Footer />
    </div>
  );
};

export default App;
