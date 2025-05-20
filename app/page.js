"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const tabStyle = (tab) =>
    `cursor-pointer px-5 py-3 font-semibold rounded-t-md transition-all duration-300 ${
      activeTab === tab
        ? "bg-[#440D0F] text-white"
        : "text-[#84596B] hover:text-white hover:bg-[#603A40]/30"
    }`;

    const fadeUp = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };
  return (
    <main className="min-h-screen bg-[#191716] text-white flex flex-col items-center justify-start py-12 px-4 font-sans">
      <motion.div
        className="w-full max-w-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Navbar */}
        <motion.nav
          className="mx-auto flex justify-center space-x-4 bg-[#603A40] rounded-t-md p-4 shadow-lg"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {["about", "profile", "projects", "contact"].map((tab) => (
            <button
              key={tab}
              className={tabStyle(tab)}
              onClick={() => setActiveTab(tab)}
            >
              {tab[0].toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.nav>

        {/* Content */}
        <motion.section
          className="bg-[#440D0F] rounded-b-xl p-10 shadow-2xl mt-[-2px] backdrop-blur-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {activeTab === "about" && (
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center"
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
                  className="w-40 h-40 rounded-full border-4 border-[#84596B] object-cover"
                />
                <div>
                  <h2 className="text-3xl font-bold text-[#84596B] mb-2">
                    Hi 👋, I'm Alfaturrahman
                  </h2>
                  <p className="text-[#DDD]">
                    TRPL student passionate about real-world apps & scalable backends.
                  </p>
                  <p className="text-[#AAA] text-sm mt-2">
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
                  src="https://github-readme-stats.vercel.app/api?username=Alfaturrahman&show_icons=true&theme=dark"
                  alt="GitHub Stats"
                  className="w-full max-w-md rounded-md"
                />
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=Alfaturrahman&layout=compact&theme=dark"
                  alt="Top Languages"
                  className="w-full max-w-md rounded-md"
                />
              </motion.div>
            </motion.div>
          )}

          {activeTab === "profile" && (
             <>
              <motion.h1
                className="text-3xl font-bold mb-2 text-[#FF6F3C]"
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.5, delay: 0 }}
              >
                My Name Is Alfaturrahman
              </motion.h1>

              <motion.h3
                className="mb-4 text-lg font-medium text-gray-300"
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
                  src="https://komarev.com/ghpvc/?username=Alfaturrahman&label=Profile%20views&color=FF6F3C&style=flat"
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
                  src="https://img.shields.io/badge/Ready%20for-Internship-blue?style=flat&logo=internship&logoColor=white"
                  alt="Ready for Internship"
                />
                <img
                  src="https://img.shields.io/badge/Open%20to-Freelance%20Work-orange?style=flat&logo=freelancer"
                  alt="Open to Freelance"
                />
              </motion.div>

              <motion.ul
                className="space-y-2 text-gray-300"
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
                <h2 className="text-xl font-semibold mb-4 text-[#FF6F3C]">
                  Tech Stack & Tools
                </h2>

                <h3 className="text-lg font-semibold text-[#FF6F3C] mb-2">
                  Languages & Frameworks
                </h3>
                <div className="flex flex-wrap gap-3 mb-4">
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

                <h3 className="text-lg font-semibold text-[#FF6F3C] mb-2">Styling</h3>
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

                <h3 className="text-lg font-semibold text-[#FF6F3C] mb-2">Tools & DB</h3>
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
          )}

          {activeTab === "projects" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-[#DDD]"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#84596B]">🚀 Featured Projects</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#84596B]">
                    📌 <a href="https://github.com/Alfaturrahman/koperasi" className="hover:underline">Aplikasi Koperasi Mahasiswa</a>
                  </h3>
                  <p>Sistem pendaftaran dan manajemen anggota koperasi berbasis Laravel.</p>
                  <p className="text-sm text-[#AAA]">🛠️ Laravel, MySQL, Bootstrap</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#84596B]">
                    📌 <a href="https://github.com/Alfaturrahman/ukk" className="hover:underline">UKK App</a>
                  </h3>
                  <p>Aplikasi manajemen barang dan transaksi untuk ujian praktik kejuruan.</p>
                  <p className="text-sm text-[#AAA]">🛠️ Laravel, Blade, Bootstrap</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#84596B]">
                    📌 <a href="https://github.com/Alfaturrahman/posvana" className="hover:underline">Posvana (Coming Soon)</a>
                  </h3>
                  <p>Sistem POS untuk mendukung UMKM di Batam.</p>
                  <p className="text-sm text-[#AAA]">🛠️ Next.js, TailwindCSS, Firebase (planned)</p>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#84596B]">📫 Contact</h2>
              <ul className="space-y-3 text-[#DDD]">
                <li>🔗 <a href="https://linkedin.com/in/namakamu" className="text-[#84596B] hover:underline">LinkedIn</a></li>
                <li>📧 <a href="mailto:alfaturrahman@email.com" className="text-[#84596B] hover:underline">Email Me</a></li>
              </ul>
              <blockquote className="mt-8 text-[#AAA] italic border-l-4 border-[#84596B] pl-4">
                "Great software is built not only with code, but with purpose."
              </blockquote>
            </motion.div>
          )}
        </motion.section>
      </motion.div>
    </main>
  );
}
