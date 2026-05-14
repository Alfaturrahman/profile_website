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
