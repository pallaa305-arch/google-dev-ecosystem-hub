"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Projects", href: "/dashboard/projects", icon: "📁" },
  { name: "AI Builder", href: "/dashboard/ai", icon: "✨" },
  { name: "Research", href: "/dashboard/research", icon: "🔍" },
  { name: "Design", href: "/dashboard/design", icon: "🎨" },
  { name: "Code Agent", href: "/dashboard/code", icon: "💻" },
  { name: "Firebase", href: "/dashboard/firebase", icon: "🔥" },
  { name: "Workflow Lab", href: "/dashboard/workflows", icon: "⚙️" },
  { name: "Templates", href: "/dashboard/templates", icon: "📋" },
  { name: "Assets", href: "/dashboard/assets", icon: "📦" },
  { name: "Usage", href: "/dashboard/usage", icon: "📈" },
];

const bottomNavItems = [
  { name: "Settings", href: "/dashboard/settings", icon: "⚙️" },
  { name: "Help Center", href: "/help", icon: "❓" },
];

const mobileNavItems = [
  { name: "Home", href: "/dashboard", icon: "📊" },
  { name: "Projects", href: "/dashboard/projects", icon: "📁" },
  { name: "AI", href: "/dashboard/ai", icon: "✨" },
  { name: "Code", href: "/dashboard/code", icon: "💻" },
  { name: "More", href: "#more", icon: "⋯" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMore, setShowMore] = useState(false);

  if (pathname === "/") return null;

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden lg:flex flex-col bg-gray-50 border-r transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 text-gray-500 hover:text-gray-700 text-right"
        >
          {isCollapsed ? "→" : "←"}
        </button>

        <div className="flex-1 overflow-y-auto py-2">
          <nav className="space-y-1 px-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t p-2">
          <nav className="space-y-1">
            {bottomNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
                    isActive
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-around px-1 py-1">
          {mobileNavItems.map((item) => {
            const isActive = item.href === "#more"
              ? false
              : pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
            if (item.href === "#more") {
              return (
                <button
                  key={item.name}
                  onClick={() => setShowMore(!showMore)}
                  className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] tap-target ${
                    showMore ? "text-blue-600" : "text-gray-500"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[10px] font-medium mt-0.5">{item.name}</span>
                </button>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] tap-target ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-[10px] font-medium mt-0.5">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Mobile More Menu Overlay */}
      {showMore && (
        <div className="lg:hidden fixed inset-0 z-[60]" onClick={() => setShowMore(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute bottom-14 left-2 right-2 bg-white rounded-xl shadow-xl border p-3 max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-3 px-1">
              <span className="text-sm font-semibold text-gray-900">All Pages</span>
              <button onClick={() => setShowMore(false)} className="text-gray-400 hover:text-gray-600 p-1">✕</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[...navItems, ...bottomNavItems].map((item) => {
                const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setShowMore(false)}
                    className={`flex flex-col items-center gap-1 p-3 rounded-lg text-center transition-colors ${
                      isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-[11px] font-medium leading-tight">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
