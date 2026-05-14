"use client";

import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
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
