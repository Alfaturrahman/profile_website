"use client";
import { motion } from "framer-motion";

const navItems = [
  { id: "about",    label: "About",    icon: "◈" },
  { id: "skills",   label: "Skills",   icon: "⚡" },
  { id: "projects", label: "Projects", icon: "◎" },
  { id: "contact",  label: "Contact",  icon: "◉" },
];

export default function SidebarNav({ activeSection, scrollTo }) {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 bg-[#070c18] border-r border-indigo-500/10 flex-col z-50">
      <div className="p-6 border-b border-white/5">
        <div className="relative w-14 h-14 mb-4">
          <div className="absolute inset-0 rounded-full bg-indigo-500 opacity-25 blur-xl" />
          <img
            src="/Profile_pict.jpeg"
            alt="Alfaturrahman"
            className="relative w-14 h-14 rounded-full object-cover border-2 border-indigo-500/40"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-[#070c18]" />
        </div>
        <h2 className="text-white font-bold text-sm leading-tight">Alfaturrahman</h2>
        <p className="text-[#64748b] text-xs mt-0.5">Backend & Full-Stack Dev</p>
        <span className="inline-flex items-center gap-1.5 mt-3 text-[10px] font-black bg-green-500/10 border border-green-500/15 text-green-400 px-2.5 py-1 rounded-full tracking-wider uppercase">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          Open to Work
        </span>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left relative overflow-hidden ${
              activeSection === item.id ? "text-white" : "text-[#475569] hover:text-[#94a3b8] hover:bg-white/4"
            }`}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute inset-0 bg-indigo-500/12 border border-indigo-500/20 rounded-xl"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={`relative text-base leading-none ${activeSection === item.id ? "text-indigo-400" : "text-[#334155]"}`}>
              {item.icon}
            </span>
            <span className="relative">{item.label}</span>
            {activeSection === item.id && (
              <span className="relative ml-auto w-1 h-4 bg-indigo-500 rounded-full" />
            )}
          </button>
        ))}
      </nav>

      <div className="p-5 border-t border-white/5">
        <p className="text-[#1e293b] text-[10px] font-black uppercase tracking-widest mb-3">Reach Me</p>
        {[
          { label: "github.com/Alfaturrahman",        href: "https://github.com/Alfaturrahman" },
          { label: "linkedin.com/in/alfaturrahman",   href: "https://linkedin.com/in/alfaturrahman" },
          { label: "Alfatur147@gmail.com",            href: "mailto:Alfatur147@gmail.com" },
        ].map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="block text-[11px] text-[#334155] hover:text-indigo-400 transition-colors truncate font-mono mb-1.5"
          >
            {s.label}
          </a>
        ))}
      </div>
    </aside>
  );
}
