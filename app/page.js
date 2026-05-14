"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutSection from "./components/AboutSection";
import GitHubStatsSection from "./components/GitHubStatsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

const SECTIONS = [
  { id: "about",   label: "About",      short: "AB", component: AboutSection       },
  { id: "github",  label: "GitHub",     short: "GH", component: GitHubStatsSection },
  { id: "skills",  label: "Skills",     short: "SK", component: ProfileSection     },
  { id: "projects",label: "Projects",   short: "PR", component: ProjectsSection    },
  { id: "contact", label: "Contact",    short: "CT", component: ContactSection     },
];

const slideVariants = {
  enter:  (dir) => ({ x: dir > 0 ? "60%" : "-60%", opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:   (dir) => ({ x: dir > 0 ? "-60%" : "60%", opacity: 0, scale: 0.97 }),
};

const bounceLeft = {
  x: [0, -6, 0, -4, 0],
  transition: { duration: 1.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" },
};
const bounceRight = {
  x: [0, 6, 0, 4, 0],
  transition: { duration: 1.4, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" },
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
  const canPrev = current > 0;
  const canNext = current < SECTIONS.length - 1;

  return (
    <div className="h-[100dvh] bg-[var(--bg-base)] bg-grid text-[var(--text-primary)] flex flex-col overflow-hidden">
      {/* Ambient glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-600 opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-violet-600 opacity-5 rounded-full blur-3xl" />
      </div>

      {/* ── Header ── */}
      <header className="shrink-0 flex items-center justify-between px-4 sm:px-8 h-14 sm:h-16 border-b border-[var(--border-subtle)] backdrop-blur-md z-20" style={{ backgroundColor: "var(--bg-header-t80)" }}>
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="relative shrink-0">
            <img
              src="/Profile_pict.jpeg"
              alt="Alfaturrahman"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl object-cover border border-indigo-500/30"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-400 rounded-full border border-[var(--bg-base)]" />
          </div>
          <span className="text-white font-bold text-sm">Alfaturrahman</span>
          <span className="text-[var(--text-nav)] text-xs font-mono hidden sm:block">.{SECTIONS[current].id}</span>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-0.5">
          {SECTIONS.map((s, i) => (
            <button
              key={s.id}
              onClick={() => go(i)}
              className={`relative text-xs font-bold rounded-lg transition-all
                px-1.5 py-1 sm:px-3 sm:py-1.5
                ${i === current ? "text-[var(--text-primary)]" : "text-[var(--text-nav)] hover:text-[var(--text-muted)]"}`}
            >
              {i === current && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-indigo-500/15 border border-indigo-500/25 rounded-lg"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative hidden sm:inline">{s.label}</span>
              <span className="relative sm:hidden">{s.short}</span>
            </button>
          ))}
        </nav>
      </header>

      {/* ── Slide Content ── */}
      <div className="flex-1 relative overflow-hidden z-10">
        {/* Left arrow overlay */}
        {canPrev && (
          <motion.button
            onClick={() => go(current - 1)}
            animate={bounceLeft}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/50 hover:bg-indigo-500/40 hover:border-indigo-400 flex items-center justify-center text-indigo-300 hover:text-white transition-all text-lg font-bold shadow-lg shadow-indigo-500/20 backdrop-blur-sm"
          >
            ←
          </motion.button>
        )}
        {/* Right arrow overlay */}
        {canNext && (
          <motion.button
            onClick={() => go(current + 1)}
            animate={bounceRight}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/50 hover:bg-indigo-500/40 hover:border-indigo-400 flex items-center justify-center text-indigo-300 hover:text-white transition-all text-lg font-bold shadow-lg shadow-indigo-500/20 backdrop-blur-sm"
          >
            →
          </motion.button>
        )}

        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={current}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="min-h-full flex flex-col justify-center px-10 sm:px-14 lg:px-20 py-8 sm:py-10">
              <div className="max-w-5xl mx-auto w-full">
                <Section />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Footer ── */}
      <footer className="shrink-0 flex items-center justify-center gap-4 sm:gap-6 px-4 h-12 sm:h-14 border-t border-[var(--border-subtle)] backdrop-blur-md z-20" style={{ backgroundColor: "var(--bg-header-t60)" }}>
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {SECTIONS.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Go to slide ${i + 1}`}>
              <motion.div
                animate={{
                  width: i === current ? 24 : 5,
                  opacity: i === current ? 1 : 0.55,
                }}
                transition={{ type: "spring", stiffness: 500, damping: 40 }}
                className={`h-1.5 rounded-full ${i === current ? "bg-indigo-400" : "bg-[var(--dot-inactive)]"}`}
              />
            </button>
          ))}
        </div>
        <span className="text-[var(--text-nav)] text-[10px] font-mono tabular-nums">
          {String(current + 1).padStart(2, "0")}/{String(SECTIONS.length).padStart(2, "0")}
        </span>
      </footer>
    </div>
  );
}
