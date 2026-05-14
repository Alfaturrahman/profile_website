"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <>
      <motion.h1
        className="text-3xl font-bold mb-8 text-[#00000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.p
        className="text-[#A6A6A8] mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Saya sedang aktif mencari posisi <b className="text-[#272635]">Remote / Full-time</b> sebagai Backend atau Full-Stack Developer. Jangan ragu untuk menghubungi saya!
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <a
          href="mailto:Alfatur147@gmail.com"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#272635] text-white hover:bg-[#A6A6A8] transition-colors"
        >
          <span className="text-2xl">📧</span>
          <div>
            <p className="text-xs text-[#CECECE]">Email</p>
            <p className="font-semibold">Alfatur147@gmail.com</p>
          </div>
        </a>
        <a
          href="https://wa.me/6285264099824"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#272635] text-white hover:bg-[#A6A6A8] transition-colors"
        >
          <span className="text-2xl">📱</span>
          <div>
            <p className="text-xs text-[#CECECE]">WhatsApp</p>
            <p className="font-semibold">+62 852-6409-9824</p>
          </div>
        </a>
        <a
          href="https://linkedin.com/in/alfaturrahman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#272635] text-white hover:bg-[#A6A6A8] transition-colors"
        >
          <span className="text-2xl">🔗</span>
          <div>
            <p className="text-xs text-[#CECECE]">LinkedIn</p>
            <p className="font-semibold">linkedin.com/in/alfaturrahman</p>
          </div>
        </a>
        <a
          href="https://github.com/Alfaturrahman"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#272635] text-white hover:bg-[#A6A6A8] transition-colors"
        >
          <span className="text-2xl">💼</span>
          <div>
            <p className="text-xs text-[#CECECE]">GitHub</p>
            <p className="font-semibold">github.com/Alfaturrahman</p>
          </div>
        </a>
        <a
          href="https://instagram.com/alfatrr15"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-4 rounded-lg bg-[#272635] text-white hover:bg-[#A6A6A8] transition-colors md:col-span-2"
        >
          <span className="text-2xl">📸</span>
          <div>
            <p className="text-xs text-[#CECECE]">Instagram</p>
            <p className="font-semibold">@alfatrr15</p>
          </div>
        </a>
      </motion.div>
    </>
  );
}
