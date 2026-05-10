"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("integrations");
  const [beginnerMode, setBeginnerMode] = useState(true);
  const [notifications, setNotifications] = useState(true);

  const tabs = [
    { id: "integrations", label: "Integrations", icon: "🔗" },
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "billing", label: "Billing", icon: "💳" },
    { id: "preferences", label: "Preferences", icon: "⚙️" },
  ];

  const integrations = [
    { name: "Google Account", email: "user@example.com", icon: "G", connected: true, type: "auth" },
    { name: "GitHub", email: "Not connected", icon: "🐙", connected: false, type: "github" },
    { name: "Gemini API", desc: "Required for AI Builder", icon: "✨", connected: true, type: "gemini" },
    { name: "Firebase", project: "dev-hub-saas-prod", icon: "🔥", connected: true, type: "firebase" },
  ];

  const handleConnect = (type: string) => {
    if (type === "github") {
      alert("This would open GitHub OAuth flow to connect your repository.");
    } else if (type === "gemini") {
      alert("This would open API key configuration for Gemini.");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings & Integrations</h1>
          <p className="mt-1 text-gray-500">Manage your account, API keys, and preferences.</p>
        </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="border-b md:border-b-0 md:border-r bg-gray-50/50 p-2 md:p-4">
            <div className="flex md:flex-col gap-1 overflow-x-auto md:overflow-x-visible scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`whitespace-nowrap text-left px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 ${
                    activeTab === tab.id
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

            <div className="md:col-span-3 p-6 space-y-6">
              {activeTab === "integrations" && (
                <>
                  <div>
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Connected Services</h2>
                    <div className="space-y-4">
                      {integrations.map((int, i) => (
                        <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold ${int.connected ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                              {int.icon}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{int.name}</h4>
                              <p className="text-xs text-gray-500">
                                {int.email || int.desc || int.project || ""}
                              </p>
                            </div>
                          </div>
                          {int.connected ? (
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-green-700 bg-green-50 px-2 py-1 rounded border border-green-200">Connected</span>
                              <button className="text-sm text-gray-500 hover:text-gray-700">Configure</button>
                            </div>
                          ) : (
                            <button 
                              onClick={() => handleConnect(int.type)}
                              className="text-sm font-medium text-gray-600 hover:text-gray-900 border px-3 py-1 rounded hover:bg-gray-50"
                            >
                              Connect
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {activeTab === "profile" && (
                <div className="space-y-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Profile Settings</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <input type="text" defaultValue="John" className="w-full border rounded-lg px-3 py-2 text-sm" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <input type="text" defaultValue="Doe" className="w-full border rounded-lg px-3 py-2 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" defaultValue="user@example.com" className="w-full border rounded-lg px-3 py-2 text-sm" />
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              )}

              {activeTab === "billing" && (
                <div className="space-y-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Billing & Plan</h2>
                  <div className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">Free Plan</h3>
                        <p className="text-sm text-gray-500">Great for getting started</p>
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Current</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Pro - $19/mo</h4>
                      <p className="text-sm text-gray-500">Higher limits, priority support</p>
                    </div>
                    <div className="border rounded-lg p-4 hover:border-blue-500 cursor-pointer">
                      <h4 className="font-medium text-gray-900">Team - $49/mo</h4>
                      <p className="text-sm text-gray-500">Collaboration features</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "preferences" && (
                <div className="space-y-6">
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Preferences</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Beginner Mode</h4>
                        <p className="text-xs text-gray-500">Show extra tooltips and guided walkthroughs</p>
                      </div>
                      <button 
                        onClick={() => setBeginnerMode(!beginnerMode)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${beginnerMode ? "bg-blue-600" : "bg-gray-300"}`}
                      >
                        <span className={`translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ${beginnerMode ? "translate-x-5" : "translate-x-0"}`}></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-xs text-gray-500">Receive updates about your projects</p>
                      </div>
                      <button 
                        onClick={() => setNotifications(!notifications)}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${notifications ? "bg-blue-600" : "bg-gray-300"}`}
                      >
                        <span className={`translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ${notifications ? "translate-x-5" : "translate-x-0"}`}></span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}