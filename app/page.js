"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import NavbarTabs from "../app/components/NavbarTabs";
import AboutSection from "../app/components/AboutSection";
import ProfileSection from "../app/components/ProfileSection";
import ProjectsSection from "../app/components/ProjectsSection";
import ContactSection from "../app/components/ContactSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main className="min-h-screen bg-[#E8E9F3] text-[#272635] flex flex-col items-center justify-start py-12 px-4 font-sans">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <NavbarTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <motion.section
          className="bg-white rounded-b-xl p-10 shadow-2xl mt-[-2px] backdrop-blur-md border border-[#CECECE]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {activeTab === "about" && <AboutSection />}
          {activeTab === "profile" && <ProfileSection />}
          {activeTab === "projects" && <ProjectsSection />}
          {activeTab === "contact" && <ContactSection />}
        </motion.section>
      </motion.div>
    </main>
  );
}
