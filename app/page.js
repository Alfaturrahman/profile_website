"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "./components/AboutSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const SECTIONS = [
  { id: "about",    label: "About",    component: AboutSection    },
  { id: "skills",   label: "Skills",   component: ProfileSection  },
  { id: "projects", label: "Projects", component: ProjectsSection },
  { id: "contact",  label: "Contact",  component: ContactSection  },
];

const variants = {
  enter:  (dir) => ({ x: dir > 0 ? "65%" : "-65%", opacity: 0, scale: 0.96 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:   (dir) => ({ x: dir > 0 ? "-65%" : "65%", opacity: 0, scale: 0.96 }),
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (next) => {
    if (next < 0 || next >= SECTIONS.length) return;
    setDir(next > current ? 1 : -1);
    setCurrent(next);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(current + 1);
      if (e.key === "ArrowLeft")  go(current - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  const Section = SECTIONS[current].component;

  return (
    <div className="h-screen bg-[#0a0f1e] bg-grid text-[#f1f5f9] flex flex-col overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 opacity-5 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="shrink-0 flex items-center justify-between px-6 sm:px-10 h-16 border-b border-white/5 bg-[#070c18]/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="relative shrink-0">
            <img
              src="/Profile_pict.jpeg"
              alt="Alfaturrahman"
              className="w-8 h-8 rounded-xl object-cover border border-indigo-500/30"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border border-[#070c18]" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm">Alfaturrahman</span>
            <span className="text-[#1e293b] text-xs font-mono hidden md:block">
              .{SECTIONS[current].id}
            </span>
          </div>
        </div>

        <nav className="flex items-center gap-1">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className={`relative text-xs font-bold px-3 py-1.5 rounded-lg transition-all ${
                i === current ? "text-white" : "text-[#2d3d52] hover:text-[#64748b]"
              }`}
            >
              {i === current && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-indigo-500/15 border border-indigo-500/25 rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{s.label}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden z-10">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="min-h-full px-6 sm:px-10 lg:px-20 py-10 max-w-5xl mx-auto">
              <Section />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer nav */}
      <footer className="shrink-0 flex items-center justify-between px-6 sm:px-10 h-14 border-t border-white/5 bg-[#070c18]/60 backdrop-blur-md z-20">
        <button
          onClick={() => go(current - 1)}
          disabled={current === 0}
          className="flex items-center gap-2 text-xs font-bold text-[#334155] hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all group"
        >
          <span className="w-7 h-7 rounded-lg bg-[#0d1424] border border-white/8 flex items-center justify-center group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all text-sm">
            ←
          </span>
          <span className="hidden sm:block">{current > 0 ? SECTIONS[current - 1].label : ""}</span>
        </button>

        <div className="flex items-center gap-3">
          {SECTIONS.map((_, i) => (
            <button key={i} onClick={() => go(i)}>
              <motion.div
                animate={{
                  width: i === current ? 28 : 6,
                  backgroundColor: i === current ? "#818cf8" : "#1e293b",
                }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                className="h-1.5 rounded-full hover:opacity-70"
              />
            </button>
          ))}
          <span className="text-[#1e293b] text-[10px] font-mono ml-1 tabular-nums">
            {String(current + 1).padStart(2, "0")}/{String(SECTIONS.length).padStart(2, "0")}
          </span>
        </div>

        <button
          onClick={() => go(current + 1)}
          disabled={current === SECTIONS.length - 1}
          className="flex items-center gap-2 text-xs font-bold text-[#334155] hover:text-white disabled:opacity-20 disabled:pointer-events-none transition-all group"
        >
          <span className="hidden sm:block">{current < SECTIONS.length - 1 ? SECTIONS[current + 1].label : ""}</span>
          <span className="w-7 h-7 rounded-lg bg-[#0d1424] border border-white/8 flex items-center justify-center group-hover:border-indigo-500/40 group-hover:bg-indigo-500/10 transition-all text-sm">
            →
          </span>
        </button>
      </footer>
    </div>
  );
}
