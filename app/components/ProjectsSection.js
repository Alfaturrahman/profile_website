"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      name: "LMS Udinus",
      url: "https://lms-udinus.web.app",
      description:
        "Learning Management System for Udinus university, with backend using Spring Boot, database MySQL, and frontend React.js.",
      badges: ["React.js", "Spring Boot", "MySQL", "Tailwind CSS"],
    },
    {
      name: "Sistem Informasi Akademik",
      url: "https://siak-adrian.web.app",
      description:
        "Academic Information System for students and faculty with features like scheduling, grades, and attendance, built with Laravel and Bootstrap.",
      badges: ["Laravel", "PHP", "Bootstrap", "MySQL"],
    },
    {
      name: "Portfolio Website",
      url: "https://alfaturrahman.vercel.app",
      description:
        "My personal portfolio website built with Next.js and Tailwind CSS to showcase my projects and skills.",
      badges: ["Next.js", "Tailwind CSS", "React"],
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
