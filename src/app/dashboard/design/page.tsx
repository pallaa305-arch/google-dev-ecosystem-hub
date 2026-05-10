"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function DesignPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [platform, setPlatform] = useState("Web");
  const [theme, setTheme] = useState("blue");

  const recentDesigns = [
    { name: "Login Screen v2", status: "Completed", time: "2 hours ago" },
    { name: "Dashboard Overview", status: "In Progress", time: "Yesterday" },
    { name: "Settings Page", status: "Draft", time: "3 days ago" },
  ];

  const templates = [
    { name: "SaaS Dashboard", icon: "📊" },
    { name: "E-commerce Store", icon: "🛒" },
    { name: "Social Media App", icon: "📱" },
    { name: "Admin Panel", icon: "⚙️" },
  ];

  const themes = [
    { name: "blue", color: "bg-blue-600" },
    { name: "dark", color: "bg-gray-900" },
    { name: "emerald", color: "bg-emerald-500" },
    { name: "purple", color: "bg-purple-600" },
    { name: "orange", color: "bg-orange-500" },
  ];

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span className="text-2xl">🎨</span> Design Lab
        </h1>
        <p className="text-sm text-gray-500 mt-1">Generate UI from prompts, create screens, and export for developers.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Generate New UI</h3>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your UI (e.g., 'A modern login page with Google sign-in button')"
                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                rows={4}
              ></textarea>
              <button 
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isGenerating ? (
                  <>⏳ Generating...</>
                ) : (
                  <>✨ Generate Design</>
                )}
              </button>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Platform</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setPlatform("Web")}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium ${platform === "Web" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Web
                </button>
                <button 
                  onClick={() => setPlatform("Mobile")}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium ${platform === "Mobile" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Mobile
                </button>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Theme</h3>
              <div className="flex gap-2 mb-3">
                {themes.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    className={`w-8 h-8 rounded cursor-pointer ${t.color} ${theme === t.name ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
                  />
                ))}
              </div>
              <button className="text-sm text-blue-600 hover:underline">Customize Theme →</button>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white border rounded-lg p-6 min-h-[400px] flex items-center justify-center">
              {isGenerating ? (
                <div className="text-center">
                  <div className="text-4xl mb-4 animate-pulse">🎨</div>
                  <p className="text-gray-600 font-medium">Generating your design...</p>
                  <p className="text-sm text-gray-400 mt-1">This may take a few seconds</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-gray-500">Your generated designs will appear here</p>
                  <p className="text-sm text-gray-400 mt-1">Use the prompt on the left to generate UI</p>
                </div>
              )}
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Recent Designs</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {recentDesigns.map((design, i) => (
                  <div key={i} className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                    <div className="aspect-video bg-gray-100 rounded mb-2 flex items-center justify-center text-2xl">
                      🎨
                    </div>
                    <p className="text-sm font-medium text-gray-900">{design.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className={`text-xs px-1.5 py-0.5 rounded ${design.status === "Completed" ? "bg-green-100 text-green-700" : design.status === "In Progress" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-600"}`}>
                        {design.status}
                      </span>
                      <span className="text-xs text-gray-400">{design.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Quick Templates</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {templates.map((template, i) => (
                  <button key={i} className="border rounded-lg p-3 hover:bg-gray-50 text-center">
                    <div className="text-2xl mb-1">{template.icon}</div>
                    <span className="text-sm text-gray-700">{template.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}