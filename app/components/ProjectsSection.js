"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  // ── Featured card (shown first, full-width) ──────────────────
  {
    name: "SmartNeighbour",
    url: "https://github.com/Alfaturrahman/SmartNeighbourhood-Web",
    apiUrl: "https://github.com/Alfaturrahman/SmartNeighbour-API",
    description: "Community management platform — resident management, security scheduling, feedback, announcements, role-based access, and PWA (mobile-ready) support.",
    badges: ["Next.js 16", "TypeScript", "Django REST", "PostgreSQL", "PWA"],
    category: "Full-Stack",
    featured: true,
  },
  // ── Initial grid (3 cards, diverse stack) ────────────────────
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
  // ── More projects (behind Show More) ──────────────────────────
  {
    name: "EO App",
    url: "https://github.com/Alfaturrahman/EO-App",
    description: "Complete Event Organizer system — event registration, attendee management, and detailed reporting.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "Koperasi Merah Putih",
    url: "https://github.com/Alfaturrahman/Koperasi-Merah-Putih",
    description: "Digital cooperative management — members, savings, loans, and financial transactions.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "App Ekios",
    url: "https://github.com/Alfaturrahman/App-Ekios",
    description: "Management application built with Laravel for handling business operations and data records.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "Kreativesia",
    url: "https://github.com/Alfaturrahman/Kreativesia",
    description: "Creative platform web app built with Laravel for managing creative content and portfolios.",
    badges: ["Laravel", "PHP", "Blade", "MySQL"],
    category: "Web App",
  },
  {
    name: "IOTROVE Web",
    url: "https://github.com/Alfaturrahman/IOTROVE---web",
    description: "IoT-based mangrove ecosystem monitoring web dashboard with real-time sensor data visualization.",
    badges: ["PHP", "IoT", "MySQL"],
    category: "Web App",
  },
  {
    name: "Topup Game Demo",
    url: "https://github.com/Alfaturrahman/topup-game-demo",
    description: "Game top-up demo application with product catalog, order flow, and payment simulation.",
    badges: ["PHP", "MySQL"],
    category: "Web App",
  },
  {
    name: "Rental Mobil",
    url: "https://github.com/Alfaturrahman/RentalMobil",
    description: "Car rental web application with vehicle catalog, booking management, and availability tracking.",
    badges: ["PHP", "CSS", "MySQL"],
    category: "Web App",
  },
  {
    name: "SIPIHAN",
    url: "https://github.com/Alfaturrahman/SIPIHAN",
    description: "Equipment and materials loan management system for laboratory group practicum sessions.",
    badges: ["PHP", "CSS", "MySQL"],
    category: "Web App",
  },
  {
    name: "Posvan API",
    url: "https://github.com/Alfaturrahman/Posvan_API",
    description: "RESTful API backend for the Posvan application with full CRUD operations and authentication.",
    badges: ["Django REST", "Python", "PostgreSQL"],
    category: "Backend",
  },
  {
    name: "API SAQELAR",
    url: "https://github.com/Alfaturrahman/api-saqelar",
    description: "Spring Boot REST API for IoT device control — smart electrical switch management backend.",
    badges: ["Spring Boot", "Java", "REST API"],
    category: "Backend",
  },
  {
    name: "nGo-ding",
    url: "https://github.com/Alfaturrahman/nGo-ding",
    description: "Flutter mobile application — functional mobile app built with Dart and Flutter framework.",
    badges: ["Flutter", "Dart"],
    category: "Mobile",
  },
];

const categories = ["All", "Full-Stack", "Backend", "Web App", "Mobile", "DevOps"];

const catBadge = {
  "Full-Stack": "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
  "Backend":    "text-amber-400  bg-amber-500/10  border-amber-500/25",
  "Web App":    "text-violet-400 bg-violet-500/10 border-violet-500/25",
  "Mobile":     "text-sky-400    bg-sky-500/10    border-sky-500/25",
  "DevOps":     "text-emerald-400 bg-emerald-500/10 border-emerald-500/25",
};

const INITIAL_SHOW = 4;

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  // reset show more when filter changes
  const handleFilter = (cat) => {
    setFilter(cat);
    setShowAll(false);
  };

  const visibleRest = showAll ? rest : rest.slice(0, INITIAL_SHOW);
  const hiddenCount  = rest.length - INITIAL_SHOW;

  return (
    <div className="max-w-4xl mx-auto w-full">
      <motion.div className="mb-6 sm:mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-3 sm:mb-4">// projects</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
          Featured <span className="gradient-text">Work</span>
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilter(cat)}
            className={`text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border transition-all ${
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
          {/* Featured card */}
          {featured && (
            <a
              href={featured.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-4 bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent border border-indigo-500/20 hover:border-indigo-500/50 rounded-2xl p-5 sm:p-8 transition-all group"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div>
                  <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest block mb-1">
                    {featured.featured ? "Featured Project" : "Top Result"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-indigo-300 transition-colors">{featured.name}</h3>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-lg border shrink-0 ml-3 ${catBadge[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{featured.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {featured.badges.map((b) => (
                  <span key={b} className="text-xs bg-[#0a0f1e] text-[#64748b] border border-white/5 px-2.5 py-1 rounded-lg">{b}</span>
                ))}
              </div>
              <div className="flex gap-4 sm:gap-5">
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

          {/* Grid cards */}
          {rest.length > 0 && (
            <>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {visibleRest.map((project, i) => (
                  <motion.a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#0d1424] border border-white/5 hover:border-indigo-500/25 rounded-2xl p-4 sm:p-5 transition-all group"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="flex items-start justify-between mb-2.5">
                      <h3 className="text-white font-bold text-sm group-hover:text-indigo-300 transition-colors">{project.name}</h3>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border shrink-0 ml-2 ${catBadge[project.category]}`}>
                        {project.category}
                      </span>
                    </div>
                    <p className="text-[#64748b] text-xs leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.badges.map((b) => (
                        <span key={b} className="text-[10px] bg-[#0a0f1e] text-[#475569] border border-white/5 px-1.5 py-0.5 rounded-md">{b}</span>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-indigo-400 group-hover:text-indigo-300 transition-colors">View Code →</span>
                  </motion.a>
                ))}
              </div>

              {/* Show More / Show Less */}
              {hiddenCount > 0 && !showAll && (
                <motion.button
                  onClick={() => setShowAll(true)}
                  className="mt-4 w-full py-2.5 rounded-xl border border-indigo-500/20 hover:border-indigo-500/50 text-indigo-400 hover:text-indigo-300 text-xs font-bold transition-all hover:bg-indigo-500/5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Show {hiddenCount} More Project{hiddenCount > 1 ? "s" : ""} ↓
                </motion.button>
              )}
              {showAll && rest.length > INITIAL_SHOW && (
                <button
                  onClick={() => setShowAll(false)}
                  className="mt-4 w-full py-2.5 rounded-xl border border-white/5 hover:border-white/10 text-[#475569] hover:text-[#64748b] text-xs font-bold transition-all"
                >
                  Show Less ↑
                </button>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
