"use client";
import { motion } from "framer-motion";

export default function GitHubStatsSection() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <motion.div className="mb-8 sm:mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4">// github activity</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          GitHub <span className="gradient-text">Stats</span>
        </h2>
        <p className="text-[#64748b] mt-2 sm:mt-3 text-sm sm:text-base">
          Real-time contribution data from <span className="text-white font-semibold font-mono">github.com/Alfaturrahman</span>
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <motion.img
          src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Alfaturrahman&theme=tokyonight"
          alt="GitHub Stats"
          className="w-full rounded-2xl"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        />
        <motion.img
          src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=Alfaturrahman&theme=tokyonight"
          alt="Top Languages"
          className="w-full rounded-2xl"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.28 }}
        />
        <motion.img
          src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=Alfaturrahman&theme=tokyonight"
          alt="Repos per Language"
          className="w-full rounded-2xl"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.36 }}
        />
        <motion.img
          src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=Alfaturrahman&theme=tokyonight&utcOffset=7"
          alt="Productive Time"
          className="w-full rounded-2xl"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.44 }}
        />
        <motion.img
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=Alfaturrahman&theme=tokyonight"
          alt="Profile Details"
          className="w-full rounded-2xl sm:col-span-2"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.52 }}
        />
      </motion.div>
    </div>
  );
}
