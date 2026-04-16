"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";

export default function CodePage() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Fix login bug on production", status: "In Progress", priority: "High", assignedTo: "Jules" },
    { id: 2, title: "Add dark mode toggle", status: "Pending", priority: "Medium", assignedTo: "Jules" },
    { id: 3, title: "Update API documentation", status: "Completed", priority: "Low", assignedTo: "Jules" },
  ]);

  const connectedRepos = [
    { name: "saas-dashboard", branch: "main", status: "Active", lastSync: "5 min ago" },
    { name: "mobile-app-frontend", branch: "develop", status: "Active", lastSync: "1 hour ago" },
  ];

  const handleCreateTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: taskInput, status: "Pending", priority: "Medium", assignedTo: "Jules" }]);
    setTaskInput("");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-2xl">💻</span> Code Agent
            </h1>
            <p className="text-sm text-gray-500 mt-1">Connect GitHub repos and automate coding tasks.</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700">
            + Connect Repository
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Create New Task</h3>
              <textarea
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder="Describe what you need (e.g., 'Add user authentication with JWT tokens')..."
                className="w-full border rounded-lg p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                rows={3}
              ></textarea>
              <div className="flex gap-2">
                <button 
                  onClick={handleCreateTask}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Create Task
                </button>
                <select className="border rounded-lg px-3 py-2 text-sm">
                  <option>saas-dashboard</option>
                  <option>mobile-app-frontend</option>
                </select>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Task Queue ({tasks.length})</h3>
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setTasks(tasks.map(t => t.id === task.id ? { ...t, status: t.status === "Completed" ? "Pending" : "Completed" } : t))}
                        className={`w-5 h-5 rounded border flex items-center justify-center ${task.status === "Completed" ? "bg-green-500 border-green-500" : "border-gray-300"}`}
                      >
                        {task.status === "Completed" && "✓"}
                      </button>
                      <div>
                        <p className={`text-sm font-medium ${task.status === "Completed" ? "text-gray-400 line-through" : "text-gray-900"}`}>{task.title}</p>
                        <p className="text-xs text-gray-400">Assigned to: {task.assignedTo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded ${task.priority === "High" ? "bg-red-100 text-red-700" : task.priority === "Medium" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`}>
                        {task.priority}
                      </span>
                      <span className="text-xs text-gray-500">{task.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Connected Repositories</h3>
              <div className="space-y-2">
                {connectedRepos.map((repo, i) => (
                  <div key={i} className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-sm text-gray-900">{repo.name}</span>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">{repo.status}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className="bg-gray-200 px-1.5 py-0.5 rounded">{repo.branch}</span>
                      <span>• {repo.lastSync}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-100 rounded-lg p-4">
              <h3 className="font-medium text-purple-900 mb-2">Powered by Jules</h3>
              <p className="text-sm text-purple-800">Autonomous coding agent that creates PRs, fixes bugs, and adds features automatically.</p>
              <Link href="#" className="mt-3 inline-block text-sm text-purple-700 font-medium hover:underline">Learn More →</Link>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded">→ Run all tests</button>
                <button className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded">→ Deploy to staging</button>
                <button className="w-full text-left p-2 text-sm text-gray-600 hover:bg-gray-50 rounded">→ Create PR review</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}