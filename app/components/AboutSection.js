// components/AboutSection.js
"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "24+", label: "Repositories" },
  { value: "5+", label: "Languages" },
  { value: "2+", label: "Years Coding" },
  { value: "10+", label: "Projects Built" },
];

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-20 blur-xl scale-110" />
          <img
            src="/Profile_pict.jpeg"
            alt="Alfaturrahman"
            className="relative w-36 h-36 rounded-full object-cover border-2 border-indigo-500 shadow-lg shadow-indigo-500/20"
          />
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#1e293b]" title="Open to work" />
        </div>

        <div className="text-center md:text-left">
          <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-1">
            Backend & Full-Stack Developer
          </p>
          <h1 className="text-4xl font-bold text-white mb-3">
            Hi, I'm <span className="gradient-text">Alfaturrahman</span> 👋
          </h1>
          <p className="text-[#94a3b8] text-base leading-relaxed max-w-lg">
            I build <span className="text-indigo-300 font-medium">scalable web applications</span>, <span className="text-indigo-300 font-medium">REST APIs</span>, and <span className="text-indigo-300 font-medium">mobile apps</span> that solve real-world problems. Passionate about digitalization and clean code.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
            <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Open for Remote & Full-time
            </span>
            <span className="flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full">
              📍 Batam, Indonesia
            </span>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-[#0f172a] border border-indigo-500/10 rounded-xl p-4 text-center hover:border-indigo-500/40 transition-colors">
            <p className="text-2xl font-bold gradient-text">{s.value}</p>
            <p className="text-[#94a3b8] text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      {/* GitHub Summary */}
      <motion.div
        className="grid md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Alfaturrahman&theme=tokyonight"
          alt="GitHub Stats"
          className="w-full rounded-xl"
        />
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Alfaturrahman&theme=tokyonight"
          alt="Top Languages"
          className="w-full rounded-xl"
        />
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Alfaturrahman&theme=tokyonight"
          alt="Profile Details"
          className="w-full rounded-xl md:col-span-2"
        />
      </motion.div>
    </div>
  );
}
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
