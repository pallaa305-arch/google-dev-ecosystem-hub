"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const [projects] = useState([
    { id: 1, name: "SaaS Analytics Dashboard", type: "Web App", lastUpdated: "2 hours ago", status: "In Progress" },
    { id: 2, name: "AI Customer Support Bot", type: "AI Tool", lastUpdated: "Yesterday", status: "Draft" },
    { id: 3, name: "E-commerce Mobile App", type: "Mobile App", lastUpdated: "3 days ago", status: "Deployed" },
  ]);

  const filters = ["All", "Web App", "AI Tool", "Mobile App", "Deployed"];

  const filteredProjects = projects.filter(p => {
    if (filter !== "all" && filter !== "All" && p.type !== filter) return false;
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-500">Manage all your applications and workspaces.</p>
          </div>
          <Link
            href="/dashboard/projects/new"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            + Create New Project
          </Link>
        </div>

        <div className="flex gap-4 items-center border-b pb-4">
          <input
            type="search"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-3 py-2 text-sm"
          />
          <div className="flex gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f.toLowerCase())}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  filter === f.toLowerCase() 
                    ? "bg-gray-900 text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-lg border bg-white p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-pointer"
              onClick={() => router.push(`/dashboard/projects/${project.id}`)}
            >
              <div className="flex-1">
                <div className="flex justify-between items-start mb-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl">📁</div>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    project.status === "Deployed" ? "bg-green-50 text-green-700" :
                    project.status === "In Progress" ? "bg-blue-50 text-blue-700" :
                    "bg-gray-50 text-gray-600"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-gray-900">{project.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{project.type}</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                  <span>Updated {project.lastUpdated}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t pt-4">
                <span className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  Open Workspace →
                </span>
                <button className="text-gray-400 hover:text-gray-600 text-xl">⋮</button>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => router.push("/dashboard/projects/new")}
            className="rounded-lg border-2 border-dashed border-gray-300 p-5 flex flex-col items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <div className="text-4xl mb-2">+</div>
            <span className="text-gray-500 font-medium">Create New Project</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}