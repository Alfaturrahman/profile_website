"use client";
import { motion } from "framer-motion";

const stats = [
  { value: "24+", label: "Repositories" },
  { value: "5+",  label: "Languages"    },
  { value: "2+",  label: "Years Coding" },
  { value: "10+", label: "Projects"     },
];

export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <motion.div
        className="mb-10 sm:mb-14"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-4 sm:mb-6">
          // backend and full-stack developer
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.04] tracking-tight mb-5 sm:mb-8">
          I build<br />
          <span className="gradient-text">backend</span><br />
          systems.
        </h1>
        <p className="text-[#64748b] text-base sm:text-lg leading-relaxed max-w-lg">
          Scalable REST APIs, full-stack web apps, and mobile solutions — from concept to deployment.
        </p>
        <a
          href="https://github.com/Alfaturrahman"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 sm:mt-8 text-sm font-bold text-indigo-400 hover:text-indigo-300 border border-indigo-500/25 hover:border-indigo-500/60 bg-indigo-500/5 hover:bg-indigo-500/10 px-4 py-2.5 rounded-xl transition-all"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          github.com/Alfaturrahman
        </a>
      </motion.div>

      <motion.div
        className="flex items-center gap-4 sm:gap-6 mb-10 sm:mb-14 pl-4 sm:pl-6 border-l-2 border-indigo-500"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.25 }}
      >
        <img
          src="/Profile_pict.jpeg"
          alt="Alfaturrahman"
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl object-cover border border-indigo-500/25 shadow-lg shadow-indigo-500/10 shrink-0"
        />
        <div>
          <h2 className="text-white font-bold text-lg sm:text-xl">Alfaturrahman</h2>
          <p className="text-[#64748b] text-sm mt-0.5">Batam, Indonesia</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold bg-green-500/10 border border-green-500/20 text-green-400 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Open for Remote and Full-time
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 px-2.5 py-1 rounded-full">
              Backend / Full-Stack
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.07 }}
          >
            <p className="text-4xl sm:text-5xl font-black gradient-text leading-none">{s.value}</p>
            <p className="text-[#334155] text-[10px] sm:text-xs font-bold mt-2 uppercase tracking-widest">{s.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
