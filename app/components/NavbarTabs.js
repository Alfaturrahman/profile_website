"use client";
import { motion } from "framer-motion";

const tabs = [
  { id: "about",    label: "About",    icon: "👤" },
  { id: "profile",  label: "Skills",   icon: "⚡" },
  { id: "projects", label: "Projects", icon: "🚀" },
  { id: "contact",  label: "Contact",  icon: "📬" },
];

export default function NavbarTabs({ activeTab, setActiveTab }) {
  return (
    <nav className="flex justify-center gap-2 mb-0 px-2 pt-2 flex-wrap">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className="relative px-5 py-2.5 text-sm font-semibold rounded-t-xl transition-all duration-300 outline-none"
          style={{
            color: activeTab === tab.id ? "#ffffff" : "#94a3b8",
            background: activeTab === tab.id
              ? "linear-gradient(135deg, #6366f1, #818cf8)"
              : "rgba(30,41,59,0.8)",
            border: "1px solid",
            borderColor: activeTab === tab.id
              ? "rgba(99,102,241,0.8)"
              : "rgba(99,102,241,0.15)",
            borderBottom: "none",
          }}
        >
          <span className="mr-1.5">{tab.icon}</span>
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTabIndicator"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400"
            />
          )}
        </button>
      ))}
    </nav>
  );
}
