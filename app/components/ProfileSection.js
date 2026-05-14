"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  { category: "Backend",          icon: "BE", skills: ["Laravel", "Django REST", "Spring Boot", "PHP", "Python", "Java"] },
  { category: "Frontend",         icon: "FE", skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Blade"] },
  { category: "Mobile",           icon: "MB", skills: ["Flutter", "Dart", "Firebase"] },
  { category: "Database & Tools", icon: "DB", skills: ["PostgreSQL", "MySQL", "Git", "GitHub", "Vercel", "Railway", "Locust"] },
];

const experiences = [
  { year: "2026", title: "SmartNeighbour Platform",    desc: "Full-stack community management system - Next.js 16, Django REST, PostgreSQL, PWA" },
  { year: "2025", title: "EO App and Koperasi System", desc: "Laravel-based event organizer and cooperative management applications" },
  { year: "2025", title: "Posvan API and Load Testing", desc: "REST API with Django plus Locust performance testing for high-traffic simulation" },
  { year: "2024", title: "IoT and Mobile Apps",        desc: "IOTROVE mangrove monitoring IoT, API SAQELAR Spring Boot, Airqu Flutter" },
];

export default function ProfileSection() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <div className="flex flex-col gap-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-1">Skills and Experience</p>
        <h2 className="text-3xl font-bold text-white">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="text-[#94a3b8] mt-2 max-w-xl">
          Actively seeking <span className="text-white font-medium">Remote / Full-time</span> roles as Backend or Full-Stack Developer.
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}>
        <div className="flex flex-wrap gap-2 mb-5">
          {skillGroups.map((g, i) => (
            <button
              key={g.category}
              onClick={() => setActiveGroup(i)}
              className={`text-sm font-semibold px-4 py-2 rounded-lg border transition-all ${
                activeGroup === i
                  ? "bg-indigo-600 border-indigo-500 text-white"
                  : "bg-[#0f172a] border-indigo-500/20 text-[#94a3b8] hover:border-indigo-500/50"
              }`}
            >
              {g.category}
            </button>
          ))}
        </div>
        <motion.div
          key={activeGroup}
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
        >
          {skillGroups[activeGroup].skills.map((skill) => (
            <span key={skill} className="skill-badge">{skill}</span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
        <h3 className="text-lg font-bold text-white mb-5">Journey and Projects</h3>
        <div className="relative border-l-2 border-indigo-500/20 pl-6 space-y-6">
          {experiences.map((exp, i) => (
            <motion.div key={i} className="relative" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
              <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#1e293b]" />
              <div className="bg-[#0f172a] border border-indigo-500/10 rounded-xl p-4 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">{exp.year}</span>
                  <h4 className="font-semibold text-white text-sm">{exp.title}</h4>
                </div>
                <p className="text-[#94a3b8] text-sm">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
