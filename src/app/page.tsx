"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
