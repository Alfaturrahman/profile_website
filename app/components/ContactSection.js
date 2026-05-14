"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const contacts = [
  { label: "Email",     value: "Alfatur147@gmail.com",           href: "mailto:Alfatur147@gmail.com",          color: "indigo" },
  { label: "LinkedIn",  value: "linkedin.com/in/alfaturrahman",  href: "https://linkedin.com/in/alfaturrahman", color: "blue"   },
  { label: "GitHub",    value: "github.com/Alfaturrahman",       href: "https://github.com/Alfaturrahman",     color: "violet" },
  { label: "WhatsApp",  value: "+62 852-6409-9824",              href: "https://wa.me/6285264099824",          color: "green"  },
  { label: "Instagram", value: "@alfatrr15",                     href: "https://instagram.com/alfatrr15",      color: "pink"   },
];

const colorMap = {
  indigo: "border-indigo-500/30 hover:border-indigo-400 hover:bg-indigo-500/5",
  blue:   "border-blue-500/30   hover:border-blue-400   hover:bg-blue-500/5",
  violet: "border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/5",
  green:  "border-green-500/30  hover:border-green-400  hover:bg-green-500/5",
  pink:   "border-pink-500/30   hover:border-pink-400   hover:bg-pink-500/5",
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Alfatur147@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-10">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 font-semibold text-sm tracking-widest uppercase mb-1">Get In Touch</p>
        <h2 className="text-3xl font-bold text-white">
          Let us <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-[#94a3b8] mt-2 max-w-lg">
          I am actively looking for <span className="text-white font-medium">Remote / Full-time</span> positions as a Backend or Full-Stack Developer. Feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        className="flex items-center gap-3 bg-green-500/5 border border-green-500/20 rounded-xl px-5 py-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shrink-0" />
        <p className="text-green-300 text-sm font-medium">
          Available for new opportunities - Response time usually within 24 hours
        </p>
      </motion.div>

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
            className={`flex items-center gap-4 bg-[#0f172a] border rounded-xl p-4 transition-all group ${colorMap[c.color]}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-[#64748b] text-xs font-semibold uppercase tracking-wide">{c.label}</p>
              <p className="text-white text-sm font-medium truncate">{c.value}</p>
            </div>
            <span className="text-[#475569] group-hover:text-white transition-colors text-lg">arrow</span>
          </motion.a>
        ))}

        <motion.button
          onClick={handleCopy}
          className="flex items-center gap-4 bg-[#0f172a] border border-indigo-500/20 hover:border-indigo-400 rounded-xl p-4 transition-all text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <p className="text-[#64748b] text-xs font-semibold uppercase tracking-wide">Quick Copy</p>
            <p className="text-indigo-300 text-sm font-medium">
              {copied ? "Copied!" : "Copy email address"}
            </p>
          </div>
        </motion.button>
      </motion.div>

      <motion.blockquote
        className="border-l-2 border-indigo-500 pl-5 text-[#94a3b8] italic text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Good code is not just about making things work - it is about making them work better for people.
      </motion.blockquote>
    </div>
  );
}
