"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    value: "Alfatur147@gmail.com",
    href: "mailto:Alfatur147@gmail.com",
    icon: "📧",
    color: "indigo",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/alfaturrahman",
    href: "https://linkedin.com/in/alfaturrahman",
    icon: "💼",
    color: "blue",
  },
  {
    label: "GitHub",
    value: "github.com/Alfaturrahman",
    href: "https://github.com/Alfaturrahman",
    icon: "🐙",
    color: "violet",
  },
  {
    label: "WhatsApp",
    value: "+62 852-6409-9824",
    href: "https://wa.me/6285264099824",
    icon: "💬",
    color: "green",
  },
  {
    label: "Instagram",
    value: "@alfatrr15",
    href: "https://instagram.com/alfatrr15",
    icon: "📸",
    color: "pink",
  },
];

const colorMap = {
  indigo: "border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/5",
  blue:   "border-blue-500/30 hover:border-blue-400 hover:bg-blue-500/5",
  violet: "border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/5",
  green:  "border-green-500/30 hover:border-green-400 hover:bg-green-500/5",
  pink:   "border-pink-500/30 hover:border-pink-400 hover:bg-pink-500/5",
};

export default function ContactSection() {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-1">Get In Touch</p>
        <h2 className="text-3xl font-bold text-white">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-[#94a3b8] mt-2 max-w-lg">
          I'm actively looking for <span className="text-white font-medium">Remote / Full-time</span> positions as a Backend or Full-Stack Developer. Feel free to reach out!
        </p>
      </motion.div>

      {/* Availability Banner */}
      <motion.div
        className="flex items-center gap-3 bg-green-500/5 border border-green-500/20 rounded-xl px-5 py-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shrink-0" />
        <p className="text-green-300 text-sm font-medium">
          Available for new opportunities — Response time usually within 24 hours
        </p>
      </motion.div>

      {/* Contact Cards */}
      <motion.div
        className="grid md:grid-cols-2 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {contacts.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`flex items-center gap-4 bg-[#0f172a] border rounded-xl p-4 transition-all group ${ colorMap[c.color] }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            <span className="text-2xl">{c.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-[#64748b] text-xs font-semibold uppercase tracking-wide">{c.label}</p>
              <p className="text-white text-sm font-medium truncate">{c.value}</p>
            </div>
            <span className="text-[#475569] group-hover:text-white transition-colors text-xs">↗</span>
          </motion.a>
        ))}

        {/* Copy email card */}
        <motion.button
          onClick={() => handleCopy("Alfatur147@gmail.com", "email")}
          className="flex items-center gap-4 bg-[#0f172a] border border-indigo-500/20 hover:border-indigo-400 rounded-xl p-4 transition-all text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-2xl">{copied === "email" ? "✅" : "📋"}</span>
          <div>
            <p className="text-[#64748b] text-xs font-semibold uppercase tracking-wide">Quick Copy</p>
            <p className="text-indigo-300 text-sm font-medium">
              {copied === "email" ? "Copied!" : "Copy email address"}
            </p>
          </div>
        </motion.button>
      </motion.div>

      {/* Quote */}
      <motion.blockquote
        className="border-l-2 border-indigo-500 pl-5 text-[#94a3b8] italic text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        "Good code is not just about making things work — it's about making them work <span className="text-white not-italic font-medium">better</span> for people."
      </motion.blockquote>
    </div>
  );
}


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
