"use client";
import { useEffect, useState } from "react";
import SidebarNav from "./components/NavbarTabs";
import AboutSection from "./components/AboutSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const SECTIONS = ["about", "skills", "projects", "contact"];

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] bg-grid text-[#f1f5f9] flex">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-violet-600 opacity-5 rounded-full blur-3xl pointer-events-none z-0" />

      <SidebarNav activeSection={activeSection} scrollTo={scrollTo} />

      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-[#080d1a]/90 backdrop-blur border-b border-indigo-500/10 flex items-center justify-between px-4 z-50">
        <span className="text-white font-bold text-sm">Alfaturrahman</span>
        <div className="flex gap-1">
          {[["about", "A"], ["skills", "S"], ["projects", "P"], ["contact", "C"]].map(([id, abbr]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className={`text-xs font-bold w-9 h-9 rounded-lg border transition-all ${
                activeSection === id
                  ? "bg-indigo-500/20 border-indigo-500/30 text-indigo-300"
                  : "border-transparent text-[#64748b]"
              }`}>
              {abbr}
            </button>
          ))}
        </div>
      </header>

      <main className="lg:ml-64 flex-1 relative z-10">
        <section id="about" className="min-h-screen px-8 lg:px-16 pt-24 lg:pt-20 pb-24">
          <AboutSection />
        </section>
        <section id="skills" className="min-h-screen px-8 lg:px-16 py-24 border-t border-white/5">
          <ProfileSection />
        </section>
        <section id="projects" className="min-h-screen px-8 lg:px-16 py-24 border-t border-white/5">
          <ProjectsSection />
        </section>
        <section id="contact" className="min-h-screen px-8 lg:px-16 py-24 border-t border-white/5">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
