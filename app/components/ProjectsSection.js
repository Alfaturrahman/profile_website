"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "SmartNeighbour",
    url: "https://github.com/Alfaturrahman/SmartNeighbourhood-Web",
    apiUrl: "https://github.com/Alfaturrahman/SmartNeighbour-API",
    description: "Modern community management platform — resident management, security scheduling, feedback, announcements, role-based access, and PWA support.",
    badges: ["Next.js 16", "TypeScript", "Django REST", "PostgreSQL", "PWA"],
    category: "Full-Stack",
    featured: true,
  },
  {
    name: "EO App",
    url: "https://github.com/Alfaturrahman/EO-App",
    description: "Complete Event Organizer system from event registration and attendee management to detailed reports.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "Koperasi Merah Putih",
    url: "https://github.com/Alfaturrahman/Koperasi-Merah-Putih",
    description: "Digital cooperative management — handles members, savings, loans, and financial transactions.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "Omahmu Web",
    url: "https://github.com/Alfaturrahman/Omahmu-web-next",
    description: "Property listing web app with modern UI and high performance built with Next.js.",
    badges: ["Next.js", "JavaScript", "Tailwind CSS"],
    category: "Full-Stack",
  },
  {
    name: "Airqu",
    url: "https://github.com/Alfaturrahman/Airqu",
    description: "Cross-platform mobile app for real-time air quality monitoring with live data visualization.",
    badges: ["Flutter", "Dart", "Firebase"],
    category: "Mobile",
  },
  {
    name: "Load Testing Locust",
    url: "https://github.com/Alfaturrahman/Load-Testing-Locust",
    description: "API load testing and performance analysis simulating hundreds of concurrent users with Locust.",
    badges: ["Python", "Locust", "REST API"],
    category: "DevOps",
  },
];

const categories = ["All", "Full-Stack", "Web App", "Mobile", "DevOps"];

const catBadge = {
  "Full-Stack": "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
  "Web App":    "text-violet-400 bg-violet-500/10 border-violet-500/25",
  "Mobile":     "text-sky-400    bg-sky-500/10    border-sky-500/25",
  "DevOps":     "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div className="mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-4">// projects</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Featured <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-2 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-bold px-4 py-2 rounded-xl border transition-all ${
              filter === cat
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-transparent border-white/8 text-[#475569] hover:border-indigo-500/30 hover:text-[#94a3b8]"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
        >
          {featured && (
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-6 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent border border-indigo-500/20 hover:border-indigo-500/50 rounded-2xl p-8 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1.5">Featured Project</span>
                  <h3 className="text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">{featured.name}</h3>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border shrink-0 ${catBadge[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-5">{featured.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {featured.badges.map((b) => (
                  <span key={b} className="text-xs bg-[#0a0f1e] text-[#64748b] border border-white/5 px-2.5 py-1 rounded-lg">{b}</span>
                ))}
              </div>
              <div className="flex gap-5">
                <span className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">View Code →</span>
                {featured.apiUrl && (
                  <a
                    href={featured.apiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    API Repo →
                  </a>
                )}
              </div>
            </a>
          )}

          {rest.length > 0 && (
            <div className="grid md:grid-cols-2 gap-4">
              {rest.map((project, i) => (
                <motion.a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#0d1424] border border-white/5 hover:border-indigo-500/25 rounded-2xl p-6 transition-all group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-white font-bold group-hover:text-indigo-300 transition-colors">{project.name}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ml-2 ${catBadge[project.category]}`}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[#64748b] text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.badges.map((b) => (
                      <span key={b} className="text-[11px] bg-[#0a0f1e] text-[#475569] border border-white/5 px-2 py-0.5 rounded-md">{b}</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">View Code →</span>
                </motion.a>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
