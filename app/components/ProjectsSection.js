"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SmartNeighbour",
    url: "https://github.com/Alfaturrahman/SmartNeighbourhood-Web",
    apiUrl: "https://github.com/Alfaturrahman/SmartNeighbour-API",
    description: "Modern community management platform with resident management, security scheduling, feedback system, announcements, role-based access, and PWA support.",
    badges: ["Next.js 16", "TypeScript", "Django REST", "PostgreSQL", "PWA"],
    category: "Full-Stack",
  },
  {
    name: "EO App",
    url: "https://github.com/Alfaturrahman/EO-App",
    description: "Complete Event Organizer management system from event registration and attendee data to detailed reports.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "Koperasi Merah Putih",
    url: "https://github.com/Alfaturrahman/Koperasi-Merah-Putih",
    description: "Digital cooperative management app that handles members, savings, loans, and financial transactions.",
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
    description: "API load testing and performance analysis project using Locust to simulate hundreds of concurrent users.",
    badges: ["Python", "Locust", "REST API"],
    category: "DevOps",
  },
];

const categories = ["All", "Full-Stack", "Web App", "Mobile", "DevOps"];

const categoryColors = {
  "Full-Stack": "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  "Web App":    "text-violet-400 bg-violet-500/10 border-violet-500/30",
  "Mobile":     "text-sky-400 bg-sky-500/10 border-sky-500/30",
  "DevOps":     "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col gap-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-1">Portfolio</p>
        <h2 className="text-3xl font-bold text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[#94a3b8] mt-2">Real-world applications built with modern tech stacks.</p>
      </motion.div>

      <motion.div className="flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`text-xs font-semibold px-4 py-2 rounded-lg border transition-all ${
              filter === cat
                ? "bg-indigo-600 border-indigo-500 text-white"
                : "bg-[#0f172a] border-indigo-500/20 text-[#94a3b8] hover:border-indigo-500/40"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5">
        {filtered.map((project, i) => (
          <motion.div
            key={project.name}
            className="bg-[#0f172a] border border-indigo-500/10 rounded-xl p-6 flex flex-col gap-4 hover:border-indigo-500/30 transition-all group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <div className="flex items-start justify-between">
              <span className="text-white font-bold text-lg">{project.name}</span>
              <span className={`text-xs font-bold px-2 py-1 rounded border ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.badges.map((badge) => (
                <span key={badge} className="text-xs bg-[#1e293b] text-[#94a3b8] border border-white/5 px-2 py-1 rounded-md">
                  {badge}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-1">
              <a href={project.url} target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors">
                View Code
              </a>
              {project.apiUrl && (
                <a href={project.apiUrl} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors">
                  API Repo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
