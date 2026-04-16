"use client";

import { useState, useEffect } from "react";
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

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`flex flex-col bg-gray-50 border-r transition-all duration-300 ${isCollapsed ? "w-16" : "w-64"}`}>
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
  );
}