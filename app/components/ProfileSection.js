"use client";
import { motion } from "framer-motion";

const skillGroups = [
  { category: "Backend",          color: "indigo",  skills: ["Laravel", "Django REST", "Spring Boot", "PHP", "Python", "Java"] },
  { category: "Frontend",         color: "violet",  skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Blade"] },
  { category: "Mobile",           color: "sky",     skills: ["Flutter", "Dart", "Firebase"] },
  { category: "Database & Tools", color: "emerald", skills: ["PostgreSQL", "MySQL", "Git", "GitHub", "Vercel", "Railway", "Locust"] },
];

const experiences = [
  { year: "2026", title: "SmartNeighbour Platform",    desc: "Full-stack community management — Next.js 16, Django REST, PostgreSQL, PWA" },
  { year: "2025", title: "EO App & Koperasi System",   desc: "Laravel-based event organizer and cooperative management applications" },
  { year: "2025", title: "Posvan API & Load Testing",  desc: "REST API with Django + Locust performance testing for high-traffic simulation" },
  { year: "2024", title: "IoT & Mobile Apps",          desc: "IOTROVE mangrove monitoring, API SAQELAR (Spring Boot), Airqu (Flutter)" },
];

const colorMap = {
  indigo:  { bg: "bg-indigo-500/10",  border: "border-indigo-500/20",  text: "text-indigo-400",  dot: "bg-indigo-500"  },
  violet:  { bg: "bg-violet-500/10",  border: "border-violet-500/20",  text: "text-violet-400",  dot: "bg-violet-500"  },
  sky:     { bg: "bg-sky-500/10",     border: "border-sky-500/20",     text: "text-sky-400",     dot: "bg-sky-500"     },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400", dot: "bg-emerald-500" },
};

export default function ProfileSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-4">// skills</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-[#64748b] mt-3 text-base">
          Seeking <span className="text-white font-semibold">Remote / Full-time</span> — Backend or Full-Stack roles.
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-2 gap-4 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {skillGroups.map((group, gi) => {
          const c = colorMap[group.color];
          return (
            <motion.div
              key={group.category}
              className={`${c.bg} border ${c.border} rounded-2xl p-6`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className={`w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                <h3 className={`text-xs font-black uppercase tracking-widest ${c.text}`}>{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-[#0a0f1e]/60 text-[#94a3b8] border border-white/5 px-2.5 py-1 rounded-lg font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-8">// journey</p>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="flex gap-8 group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.07 }}
            >
              <span className="shrink-0 text-xs font-black text-indigo-400 font-mono w-10 pt-0.5">{exp.year}</span>
              <div className="flex-1 pb-6 border-b border-white/5 last:border-0">
                <h4 className="text-white font-bold text-sm mb-1">{exp.title}</h4>
                <p className="text-[#64748b] text-sm leading-relaxed">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
