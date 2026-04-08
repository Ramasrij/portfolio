import { useRef, useState, useCallback } from "react";
import PortfolioSidebar from "@/components/PortfolioSidebar";
import MobileHeader from "@/components/MobileHeader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResumeSection from "@/components/sections/ResumeSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section);
    sectionRefs.current[section]?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="flex min-h-screen w-full">
      <PortfolioSidebar activeSection={activeSection} onNavigate={handleNavigate} />
      <MobileHeader activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1 px-4 md:px-8 lg:px-16 py-8 md:py-12 pt-20 md:pt-12 max-w-4xl mx-auto">
        <div className="space-y-24 md:space-y-32">
          <div ref={(el) => { sectionRefs.current.home = el; }}>
            <HeroSection onNavigate={handleNavigate} />
          </div>
          <div ref={(el) => { sectionRefs.current.about = el; }}>
            <AboutSection />
          </div>
          <div ref={(el) => { sectionRefs.current.skills = el; }}>
            <SkillsSection />
          </div>
          <div ref={(el) => { sectionRefs.current.experience = el; }}>
            <ExperienceSection />
          </div>
          <div ref={(el) => { sectionRefs.current.projects = el; }}>
            <ProjectsSection />
          </div>
          <div ref={(el) => { sectionRefs.current.resume = el; }}>
            <ResumeSection />
          </div>
          <div ref={(el) => { sectionRefs.current.contact = el; }}>
            <ContactSection />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
