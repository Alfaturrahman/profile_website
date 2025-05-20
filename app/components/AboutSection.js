// components/AboutSection.tsx
"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.div
      className="grid md:grid-cols-2 gap-12 items-center text-[#272635]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Bio */}
      <motion.div
        className="flex flex-col items-center text-center md:items-start md:text-left gap-4"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <img
          src="/Profile_pict.jpeg"
          alt="Profile"
          className="w-40 h-40 rounded-full border-4 border-[#CECECE] object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold text-[#272635] mb-2">
            Hi, I'm Alfaturrahman 👋
          </h2>
          <p className="text-[#A6A6A8]">
            TRPL student passionate about real-world apps & scalable backends.
          </p>
          <p className="text-sm text-[#A6A6A8]">
            Exploring Laravel, Spring Boot, and Next.js. Enjoy clean code and purposeful design.
          </p>
        </div>
      </motion.div>

      {/* GitHub Stats */}
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img
          src="https://github-readme-stats.vercel.app/api?username=Alfaturrahman&show_icons=true&theme=default"
          alt="GitHub Stats"
          className="w-full max-w-md rounded-md"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Alfaturrahman&layout=compact&theme=default"
          alt="Top Languages"
          className="w-full max-w-md rounded-md"
        />
      </motion.div>
    </motion.div>
  );
}
