"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ProfileSection() {
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
          src="https://img.shields.io/badge/Ready%20for-Internship-272635?style=flat&logo=internship&logoColor=white" // badge warna gelap
          alt="Ready for Internship"
        />
        <img
          src="https://img.shields.io/badge/Open%20to-Freelance%20Work-272635?style=flat&logo=freelancer&logoColor=white" // badge warna gelap
          alt="Open to Freelance"
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
          💼 Actively looking for an <b>internship opportunity</b> in backend or
          full-stack web development
        </li>
        <li>
          🧑‍💻 Also open for <b>freelance projects</b> (website, app, or system
          development)
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
