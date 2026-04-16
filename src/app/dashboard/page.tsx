"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();
  const [quickActions] = useState([
    { id: 1, title: "Create New Project", icon: "🚀", desc: "Start a new project", action: () => router.push("/dashboard/projects/new") },
    { id: 2, title: "AI Builder", icon: "✨", desc: "Chat with Gemini", action: () => router.push("/dashboard/ai") },
    { id: 3, title: "Research Workspace", icon: "🔍", desc: "Analyze sources", action: () => router.push("/dashboard/research") },
    { id: 4, title: "Design Lab", icon: "🎨", desc: "Generate UI", action: () => router.push("/dashboard/design") },
    { id: 5, title: "Code Agent", icon: "💻", desc: "Automate code", action: () => router.push("/dashboard/code") },
    { id: 6, title: "Firebase Studio", icon: "🔥", desc: "Setup backend", action: () => router.push("/dashboard/firebase") },
  ]);

  const [recentActivity] = useState([
    { id: 1, type: "project", title: "SaaS Dashboard updated", time: "2 hours ago", icon: "📁" },
    { id: 2, type: "ai", title: "Generated PRD with AI Builder", time: "3 hours ago", icon: "✨" },
    { id: 3, type: "design", title: "Created Login Screen", time: "Yesterday", icon: "🎨" },
    { id: 4, type: "deploy", title: "Deployed to Firebase Hosting", time: "2 days ago", icon: "🚀" },
  ]);

  const [projects] = useState([
    { id: 1, name: "SaaS Analytics Dashboard", type: "SaaS App", status: "In Progress", lastEdited: "2 hours ago" },
    { id: 2, name: "AI Customer Support Bot", type: "AI Chatbot", status: "Draft", lastEdited: "Yesterday" },
    { id: 3, name: "E-commerce Store", type: "E-commerce", status: "Deployed", lastEdited: "3 days ago" },
  ]);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back! 👋</h1>
            <p className="text-gray-500">Here&apos;s what&apos;s happening with your projects today.</p>
          </div>
          <Link 
            href="/dashboard/projects/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
          >
            + New Project
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => router.push("/dashboard/projects")}>
            <h3 className="text-sm font-medium text-gray-500">Active Projects</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">{projects.length}</p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm cursor-pointer" onClick={() => router.push("/dashboard/code")}>
            <h3 className="text-sm font-medium text-gray-500">Tasks Pending</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">12</p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm cursor-pointer" onClick={() => router.push("/dashboard/usage")}>
            <h3 className="text-sm font-medium text-gray-500">API Usage</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">45%</p>
          </div>
          <div className="rounded-lg border bg-white p-4 shadow-sm cursor-pointer" onClick={() => router.push("/dashboard/firebase")}>
            <h3 className="text-sm font-medium text-gray-500">Deployments</h3>
            <p className="mt-2 text-3xl font-semibold text-gray-900">1</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 space-y-6">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="border-b p-4 flex justify-between items-center">
                <h2 className="text-lg font-medium text-gray-900">Recent Projects</h2>
                <Link href="/dashboard/projects" className="text-sm text-blue-600 hover:text-blue-500">View all →</Link>
              </div>
              <div className="p-4 space-y-4">
                {projects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer" onClick={() => router.push(`/dashboard/projects/${project.id}`)}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-lg">📁</div>
                      <div>
                        <h4 className="font-medium text-gray-900">{project.name}</h4>
                        <p className="text-sm text-gray-500">{project.type} • {project.lastEdited}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded ${project.status === "Deployed" ? "bg-green-100 text-green-700" : project.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
                        {project.status}
                      </span>
                      <span className="text-blue-600">→</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-white shadow-sm">
              <div className="border-b p-4">
                <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-4 space-y-3">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg">
                    <span className="text-xl">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-white shadow-sm">
              <div className="border-b p-4">
                <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-4 space-y-2">
                {quickActions.map((action) => (
                  <button 
                    key={action.id} 
                    onClick={action.action}
                    className="w-full text-left p-3 border rounded-lg hover:bg-blue-50 hover:border-blue-200 flex items-center gap-3 transition-colors"
                  >
                    <span className="text-xl">{action.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{action.title}</h4>
                      <p className="text-xs text-gray-500">{action.desc}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
              <h3 className="font-medium text-blue-900 mb-2">💡 Pro Tip</h3>
              <p className="text-sm text-blue-800">Use AI Builder to automatically generate code, PRDs, and database schemas!</p>
              <button onClick={() => router.push("/dashboard/ai")} className="mt-3 text-sm text-blue-600 font-medium hover:underline">Try now →</button>
            </div>

            <div className="rounded-lg border bg-white p-4">
              <h3 className="font-medium text-gray-900 mb-3">Free Tier Usage</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Gemini API</span>
                    <span className="font-medium">45K / 100K</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full" style={{ width: "45%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Firebase</span>
                    <span className="font-medium">Active</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-green-500 rounded-full" style={{ width: "20%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}