"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "SmartNeighbour",
    emoji: "🏘️",
    url: "https://github.com/Alfaturrahman/SmartNeighbourhood-Web",
    apiUrl: "https://github.com/Alfaturrahman/SmartNeighbour-API",
    description: "Modern community management platform with resident management, security scheduling, feedback system, announcements, role-based access, and PWA support.",
    badges: ["Next.js 16", "TypeScript", "Django REST", "PostgreSQL", "PWA"],
    category: "Full-Stack",
  },
  {
    name: "EO App",
    emoji: "🎪",
    url: "https://github.com/Alfaturrahman/EO-App",
    description: "Complete Event Organizer management system — from event registration and attendee data to reports.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "Koperasi Merah Putih",
    emoji: "🏦",
    url: "https://github.com/Alfaturrahman/Koperasi-Merah-Putih",
    description: "Digital cooperative management app — handles members, savings, loans, and financial transactions.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "Omahmu Web",
    emoji: "🏠",
    url: "https://github.com/Alfaturrahman/Omahmu-web-next",
    description: "Property listing web app with modern UI and high performance built with Next.js.",
    badges: ["Next.js", "JavaScript", "Tailwind CSS"],
    category: "Full-Stack",
  },
  {
    name: "Airqu",
    emoji: "🌬️",
    url: "https://github.com/Alfaturrahman/Airqu",
    description: "Cross-platform mobile app for real-time air quality monitoring with live data visualization.",
    badges: ["Flutter", "Dart", "Firebase"],
    category: "Mobile",
  },
  {
    name: "Load Testing (Locust)",
    emoji: "📡",
    url: "https://github.com/Alfaturrahman/Load-Testing-Locust",
    description: "API load testing & performance analysis project using Locust to simulate hundreds of concurrent users.",
    badges: ["Python", "Locust", "REST API"],
    category: "DevOps",
  },
];

const categories = ["All", "Full-Stack", "Web App", "Mobile", "DevOps"];

const categoryColors = {
  "Full-Stack": "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  "Web App": "text-violet-400 bg-violet-500/10 border-violet-500/30",
  "Mobile": "text-sky-400 bg-sky-500/10 border-sky-500/30",
  "DevOps": "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-1">Portfolio</p>
        <h2 className="text-3xl font-bold text-white">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-[#94a3b8] mt-2">Real-world applications built with modern tech stacks.</p>
      </motion.div>

      {/* Filter */}
      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
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

      {/* Projects Grid */}
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
              <div>
                <span className="text-2xl mr-2">{project.emoji}</span>
                <span className="text-white font-bold text-lg">{project.name}</span>
              </div>
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

            <div className="flex gap-3 pt-1">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.37.6.1.82-.26.82-.58v-2.18c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.74-1.33-1.74-1.08-.75.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.8 1.3 3.48.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02.005 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
                View Code
              </a>
              {project.apiUrl && (
                <a
                  href={project.apiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  🔌 API Repo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

    {
      name: "🏘️ SmartNeighbour",
      url: "https://github.com/Alfaturrahman/SmartNeighbourhood-Web",
      description:
        "Platform manajemen komunitas perumahan modern. Fitur lengkap: manajemen warga, jadwal keamanan, feedback, pengumuman, role-based access & PWA.",
      badges: ["Next.js 16", "TypeScript", "Django REST", "PostgreSQL", "PWA"],
    },
    {
      name: "🎪 EO App",
      url: "https://github.com/Alfaturrahman/EO-App",
      description:
        "Sistem manajemen Event Organizer lengkap — dari pendataan event, peserta, hingga laporan acara.",
      badges: ["Laravel", "PHP", "Blade", "MySQL"],
    },
    {
      name: "🏦 Koperasi Merah Putih",
      url: "https://github.com/Alfaturrahman/Koperasi-Merah-Putih",
      description:
        "Aplikasi manajemen koperasi digital — mengelola anggota, simpanan, pinjaman, dan transaksi keuangan.",
      badges: ["Laravel", "PHP", "Blade", "MySQL"],
    },
    {
      name: "🏠 Omahmu Web",
      url: "https://github.com/Alfaturrahman/Omahmu-web-next",
      description:
        "Aplikasi properti berbasis web dengan tampilan modern dan performa tinggi menggunakan Next.js.",
      badges: ["Next.js", "JavaScript", "Tailwind CSS"],
    },
    {
      name: "🌬️ Airqu",
      url: "https://github.com/Alfaturrahman/Airqu",
      description:
        "Aplikasi mobile cross-platform untuk monitoring kualitas udara secara real-time berbasis Flutter.",
      badges: ["Flutter", "Dart", "Firebase"],
    },
    {
      name: "📡 Load Testing (Locust)",
      url: "https://github.com/Alfaturrahman/Load-Testing-Locust",
      description:
        "Proyek load testing & performance analysis API menggunakan Locust untuk simulasi ratusan pengguna secara bersamaan.",
      badges: ["Python", "Locust", "REST API"],
    },
  ];

  return (
    <>
      <motion.h1
        className="text-3xl font-bold mb-8 text-[#00000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map(({ name, url, description, badges }) => (
          <motion.a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg bg-[#272635] hover:bg-[#A6A6A8] shadow-md transition-colors"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold mb-2 text-[#E8E9F3]">{name}</h2>
            <p className="text-[#CECECE] mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-[#CECECE] text-[#272635] px-2 py-1 rounded text-xs font-semibold"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </>
  );
}
