"use client";

export default function NavbarTabs({ activeTab, setActiveTab }) {
  const tabStyle = (tab) =>
    `cursor-pointer px-5 py-3 font-semibold rounded-t-md transition-all duration-300 ${
      activeTab === tab
        ? "bg-[#272635] text-[#E8E9F3]"
        : "text-[#272635] hover:text-[#272635] hover:bg-[#CECECE]"
    }`;

  return (
    <nav className="mx-auto flex justify-center space-x-4 bg-[#A6A6A8] rounded-t-md p-4 shadow-md">
      {["about", "profile", "projects", "contact"].map((tab) => (
        <button
          key={tab}
          className={tabStyle(tab)}
          onClick={() => setActiveTab(tab)}
        >
          {tab[0].toUpperCase() + tab.slice(1)}
        </button>
      ))}
    </nav>
  );
}
