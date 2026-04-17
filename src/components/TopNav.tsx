"use client";

import { useState } from "react";
import Link from "next/link";

export function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-white px-3 sm:px-4 lg:px-8 shadow-sm">
      <div className="flex items-center gap-2 sm:gap-4">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-700 tap-target"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center font-bold text-xs sm:text-sm shadow-md">
            GDE
          </div>
          <span className="text-sm sm:text-lg font-bold text-gray-900 hidden xs:inline">
            Dev Ecosystem Hub
          </span>
        </Link>
      </div>

      <div className="hidden md:flex flex-1 items-center justify-center px-4 lg:px-6">
        <div className="w-full max-w-md">
          <input
            type="search"
            placeholder="Search projects, templates..."
            className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button className="p-1.5 sm:p-2 text-gray-500 hover:text-gray-700 tap-target hidden sm:block">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <Link href="/auth" className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2 hidden sm:block">
          Sign In
        </Link>
        <Link
          href="/onboarding"
          className="rounded-md bg-blue-600 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:bg-blue-700 shadow-sm"
        >
          Get Started
        </Link>
        <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center font-bold text-xs border border-gray-300">
          U
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex justify-between items-center">
              <span className="font-bold text-gray-900">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 tap-target">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="p-4 space-y-2">
              <Link href="/dashboard" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                📊 Dashboard
              </Link>
              <Link href="/dashboard/projects" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                📁 Projects
              </Link>
              <Link href="/dashboard/ai" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                ✨ AI Builder
              </Link>
              <Link href="/dashboard/design" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                🎨 Design Lab
              </Link>
              <Link href="/dashboard/firebase" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                🔥 Firebase
              </Link>
              <Link href="/dashboard/workflows" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                ⚙️ Workflows
              </Link>
              <Link href="/dashboard/templates" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                📋 Templates
              </Link>
              <Link href="/dashboard/settings" className="block py-3 px-3 rounded-lg hover:bg-gray-100 text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                ⚙️ Settings
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}