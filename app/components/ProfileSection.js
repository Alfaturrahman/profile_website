"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Laravel", "Django REST", "Spring Boot", "PHP", "Python", "Java"],
  },
  {
    category: "Frontend",
    icon: "🖥️",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Blade"],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: ["Flutter", "Dart", "Firebase"],
  },
  {
    category: "Database & Tools",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL", "Git", "GitHub", "Vercel", "Railway", "Locust"],
  },
];

const experiences = [
  {
    year: "2026",
    title: "SmartNeighbour Platform",
    desc: "Full-stack community management system — Next.js 16, Django REST, PostgreSQL, PWA",
    type: "project",
  },
  {
    year: "2025",
    title: "EO App & Koperasi System",
    desc: "Laravel-based event organizer & cooperative management apps",
    type: "project",
  },
  {
    year: "2025",
    title: "Posvan API & Load Testing",
    desc: "REST API with Django + Locust performance testing for high-traffic simulation",
    type: "project",
  },
  {
    year: "2024",
    title: "IoT & Mobile Apps",
    desc: "IOTROVE (mangrove monitoring IoT), API SAQELAR (Spring Boot), Airqu (Flutter)",
    type: "project",
  },
];

export default function ProfileSection() {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-1">Skills & Experience</p>
        <h2 className="text-3xl font-bold text-white">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="text-[#94a3b8] mt-2 max-w-xl">
          Actively seeking <span className="text-white font-medium">Remote / Full-time</span> roles as Backend or Full-Stack Developer.
        </p>
      </motion.div>

      {/* Skill Groups */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {/* Category tabs */}
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
              {g.icon} {g.category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
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

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <h3 className="text-lg font-bold text-white mb-5">🗓️ Journey & Projects</h3>
        <div className="relative border-l-2 border-indigo-500/20 pl-6 space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08 }}
            >
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

  return (
    <>
      <motion.h1
        className="text-3xl font-bold mb-2 text-[#00000]" // ganti dari oranye ke putih kebiruan
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0 }}
      >
        My Name Is Alfaturrahman
      </motion.h1>

      <motion.h3
        className="mb-4 text-lg font-medium text-[#00000]" // ganti dari gray-300 ke abu muda
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        TRPL student passionate about web development & building real-world
        applications
      </motion.h3>

      <motion.div
        className="flex justify-center mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <img
          src="https://komarev.com/ghpvc/?username=Alfaturrahman&label=Profile%20views&color=272635&style=flat" // ubah color parameter badge ke #272635 (gelap)
          alt="profile views"
        />
      </motion.div>

      <motion.div
        className="flex justify-center gap-4 mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <img
          src="https://img.shields.io/badge/Open%20for-Remote%20%26%20Full--time-272635?style=flat&logoColor=white"
          alt="Open for Remote & Full-time"
        />
        <img
          src="https://img.shields.io/badge/Status-Actively%20Job%20Seeking-4CAF50?style=flat&logoColor=white"
          alt="Actively Job Seeking"
        />
      </motion.div>

      <motion.ul
        className="space-y-2 text-[#00000]" // teks abu muda
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <li>
          🎓 I'm currently a <b>7th semester student</b> majoring in{" "}
          <b>Software Engineering Technology (TRPL)</b>
        </li>
        <li>
          💼 Aktif mencari posisi <b>Full-time / Remote</b> sebagai Backend atau Full-Stack Developer
        </li>
        <li>
          🌍 Terbuka untuk <b>remote work</b> maupun <b>on-site</b> di berbagai kota
        </li>
        <li>
          🌱 Currently learning <b>Next.js</b>, <b>Spring Boot</b>, and improving
          system design skills
        </li>
        <li>
          🧑‍🔬 Love building apps that solve real problems with clean UI and
          efficient backend
        </li>
      </motion.ul>

      <motion.div
        className="mt-8"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-[#00000]">
          Tech Stack & Tools
        </h2>

        <h3 className="text-lg font-semibold text-[#00000] mb-2">
          Languages & Frameworks
        </h3>
        <div className="flex flex-wrap gap-3 mb-4">
          {/* badges tetap original warna logo */}
          <img
            src="https://img.shields.io/badge/PHP-777BB4?style=flat&logo=php&logoColor=white"
            alt="PHP"
          />
          <img
            src="https://img.shields.io/badge/Laravel-F55247?style=flat&logo=laravel&logoColor=white"
            alt="Laravel"
          />
          <img
            src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white"
            alt="Java"
          />
          <img
            src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white"
            alt="Spring Boot"
          />
          <img
            src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white"
            alt="Django"
          />
          <img
            src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black"
            alt="JavaScript"
          />
          <img
            src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white"
            alt="Next.js"
          />
          <img
            src="https://img.shields.io/badge/Flutter-02569B?style=flat&logo=flutter&logoColor=white"
            alt="Flutter"
          />
          <img
            src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black"
            alt="Firebase"
          />
        </div>

        <h3 className="text-lg font-semibold text-[#00000] mb-2">Styling</h3>
        <div className="flex flex-wrap gap-3 mb-4">
          <img
            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
            alt="Tailwind CSS"
          />
          <img
            src="https://img.shields.io/badge/Bootstrap-563D7C?style=flat&logo=bootstrap&logoColor=white"
            alt="Bootstrap"
          />
        </div>

        <h3 className="text-lg font-semibold text-[#00000] mb-2">Tools & DB</h3>
        <div className="flex flex-wrap gap-3">
          <img
            src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white"
            alt="MySQL"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white"
            alt="PostgreSQL"
          />
          <img
            src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
            alt="Git"
          />
          <img
            src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white"
            alt="GitHub"
          />
          <img
            src="https://img.shields.io/badge/VS Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white"
            alt="VS Code"
          />
        </div>
      </motion.div>
    </>
  );
}
