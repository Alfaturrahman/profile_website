// components/AboutSection.js
"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      className="flex flex-col gap-10 text-[#272635]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Bio */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img
          src="/Profile_pict.jpeg"
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-[#272635] object-cover shadow-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#272635] mb-1">
            Hi, I'm Alfaturrahman 👋
          </h2>
          <p className="text-lg font-medium text-[#272635] mb-2">
            Backend & Full-Stack Developer
          </p>
          <p className="text-[#A6A6A8] mb-3">
            Passionate about <b>digitalisasi</b> — mengubah proses manual menjadi solusi digital yang berdampak nyata. Berpengalaman membangun Web App, REST API, Mobile App, dan sistem IoT.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            <span className="bg-[#272635] text-white text-xs font-semibold px-3 py-1 rounded-full">🟢 Open for Remote & Full-time</span>
            <span className="bg-[#E8E9F3] text-[#272635] text-xs font-semibold px-3 py-1 rounded-full border border-[#CECECE]">📍 Batam, Indonesia</span>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid md:grid-cols-2 gap-4 items-start"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Alfaturrahman&theme=nord_bright"
          alt="GitHub Stats"
          className="w-full rounded-lg shadow"
        />
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Alfaturrahman&theme=nord_bright"
          alt="Top Languages"
          className="w-full rounded-lg shadow"
        />
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Alfaturrahman&theme=nord_bright"
          alt="Profile Details"
          className="w-full rounded-lg shadow md:col-span-2"
        />
      </motion.div>
    </motion.div>
  );
}
