"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const contacts = [
  { label: "Email",     value: "Alfatur147@gmail.com",          href: "mailto:Alfatur147@gmail.com",          accent: "indigo" },
  { label: "LinkedIn",  value: "linkedin.com/in/alfaturrahman", href: "https://linkedin.com/in/alfaturrahman", accent: "blue"   },
  { label: "GitHub",    value: "github.com/Alfaturrahman",      href: "https://github.com/Alfaturrahman",     accent: "violet" },
  { label: "WhatsApp",  value: "+62 852-6409-9824",             href: "https://wa.me/6285264099824",          accent: "green"  },
  { label: "Instagram", value: "@alfatrr15",                    href: "https://instagram.com/alfatrr15",      accent: "pink"   },
];

const accentMap = {
  indigo: { border: "hover:border-indigo-500/40", bg: "hover:bg-indigo-500/5",  label: "text-indigo-400"  },
  blue:   { border: "hover:border-blue-500/40",   bg: "hover:bg-blue-500/5",    label: "text-blue-400"    },
  violet: { border: "hover:border-violet-500/40", bg: "hover:bg-violet-500/5",  label: "text-violet-400"  },
  green:  { border: "hover:border-green-500/40",  bg: "hover:bg-green-500/5",   label: "text-green-400"   },
  pink:   { border: "hover:border-pink-500/40",   bg: "hover:bg-pink-500/5",    label: "text-pink-400"    },
};

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Alfatur147@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <p className="text-indigo-400 text-xs font-mono tracking-widest uppercase mb-4">// contact</p>
        <h2 className="text-6xl font-black text-white leading-tight mb-4">
          Let us <span className="gradient-text">Connect</span>
        </h2>
        <p className="text-[#64748b] text-base max-w-md">
          I am actively looking for{" "}
          <span className="text-white font-semibold">Remote / Full-time</span>{" "}
          positions as a Backend or Full-Stack Developer.
        </p>
      </motion.div>

      <motion.div
        className="inline-flex items-center gap-4 bg-green-500/5 border border-green-500/15 rounded-2xl px-6 py-5 mb-12"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shrink-0" />
        <div>
          <p className="text-green-300 font-bold text-sm">Currently Available</p>
          <p className="text-green-500/60 text-xs mt-0.5">Response time usually within 24 hours</p>
        </div>
      </motion.div>

      <motion.div
        className="space-y-3 mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {contacts.map((c, i) => {
          const a = accentMap[c.accent];
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className={`flex items-center justify-between bg-[#0d1424] border border-white/5 ${a.border} ${a.bg} rounded-xl px-6 py-4 transition-all group`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
            >
              <div className="flex items-center gap-6">
                <span className={`text-xs font-black uppercase tracking-widest w-20 shrink-0 ${a.label}`}>
                  {c.label}
                </span>
                <span className="text-white text-sm font-medium">{c.value}</span>
              </div>
              <span className={`text-sm ${a.label} opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200`}>
                →
              </span>
            </motion.a>
          );
        })}
      </motion.div>

      <motion.button
        onClick={handleCopy}
        className="flex items-center gap-3 text-sm font-bold text-[#475569] hover:text-indigo-400 transition-colors mb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        <span className="w-8 h-8 rounded-lg bg-[#0d1424] border border-white/5 flex items-center justify-center text-xs">
          ⎘
        </span>
        {copied ? "Copied to clipboard!" : "Copy email address"}
      </motion.button>

      <motion.blockquote
        className="border-l-2 border-indigo-500/30 pl-5 text-[#334155] italic text-sm max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Good code is not just about making things work — it is about making them work better for people.
      </motion.blockquote>
    </div>
  );
}
