"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import NavbarTabs from "../app/components/NavbarTabs";
import AboutSection from "../app/components/AboutSection";
import ProfileSection from "../app/components/ProfileSection";
import ProjectsSection from "../app/components/ProjectsSection";
import ContactSection from "../app/components/ContactSection";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <main className="min-h-screen bg-[#0a0f1e] bg-grid text-[#f1f5f9] flex flex-col items-center justify-start pt-8 pb-16 px-4">
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-violet-600 opacity-5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <NavbarTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="card-glow p-8 md:p-12 min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              {activeTab === "about" && <AboutSection />}
              {activeTab === "profile" && <ProfileSection />}
              {activeTab === "projects" && <ProjectsSection />}
              {activeTab === "contact" && <ContactSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </main>
  );
}

