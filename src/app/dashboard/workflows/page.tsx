"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function WorkflowsPage() {
  const [workflows, setWorkflows] = useState([
    { name: "New User Onboarding", status: "Active", runs: "124 this month", trigger: "New user sign up" },
    { name: "Weekly Report Generator", status: "Active", runs: "52 this month", trigger: "Every Monday 9am" },
    { name: "Lead Score Update", status: "Paused", runs: "890 this month", trigger: "Manual" },
  ]);

  const templates = [
    { name: "Send Welcome Email", icon: "📧", category: "Email" },
    { name: "Create Firebase Record", icon: "🔥", category: "Database" },
    { name: "Slack Notification", icon: "💬", category: "Notification" },
    { name: "Schedule Report", icon: "📊", category: "Automation" },
    { name: "Webhook Trigger", icon: "🔗", category: "Integration" },
    { name: "AI Content Generation", icon: "✨", category: "AI" },
  ];

  const handleToggleStatus = (index: number) => {
    setWorkflows(workflows.map((w, i) => 
      i === index ? { ...w, status: w.status === "Active" ? "Paused" : "Active" } : w
    ));
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">⚙️</span> Workflow Lab
          </h1>
          <p className="text-sm text-gray-500 mt-1">Build no-code automations and mini-apps.</p>
        </div>
        <button
          onClick={() => alert("This would open the workflow builder.")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 w-fit"
        >
          + Create Workflow
        </button>
      </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white border rounded-lg p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Your Workflows</h3>
                <select className="text-sm border rounded-lg px-3 py-1">
                  <option>All</option>
                  <option>Active</option>
                  <option>Paused</option>
                </select>
              </div>
              <div className="space-y-3">
                {workflows.map((workflow, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-gray-900">{workflow.name}</p>
                        <button 
                          onClick={() => handleToggleStatus(i)}
                          className={`text-xs px-2 py-0.5 rounded-full cursor-pointer ${workflow.status === "Active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}
                        >
                          {workflow.status}
                        </button>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Trigger: {workflow.trigger}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{workflow.runs}</p>
                      <button className="text-xs text-blue-600 hover:text-blue-700 mt-1">Configure</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-4">Workflow Builder</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="text-4xl mb-2">🔄</div>
                <p className="text-gray-600 font-medium">Drag and drop blocks to build workflows</p>
                <p className="text-sm text-gray-400 mt-1">Connect triggers, actions, and conditions</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Building Blocks</h3>
              <div className="grid grid-cols-2 gap-2">
                {templates.map((block, i) => (
                  <button 
                    key={i}
                    onClick={() => alert(`Adding ${block.name} to workflow builder.`)}
                    className="p-3 border rounded-lg hover:bg-gray-50 text-left"
                  >
                    <div className="text-lg mb-1">{block.icon}</div>
                    <p className="text-sm font-medium text-gray-900">{block.name}</p>
                    <p className="text-xs text-gray-400">{block.category}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4">
              <h3 className="font-medium text-purple-900 mb-2">💡 AI Workflow Builder</h3>
              <p className="text-sm text-purple-800 mb-3">Describe your workflow in plain English and let AI build it for you.</p>
              <textarea 
                placeholder="e.g., 'When a new user signs up, send them a welcome email and add them to Firebase'"
                className="w-full border rounded-lg p-2 text-sm mb-2"
                rows={3}
              ></textarea>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-purple-700">
                Generate Workflow
              </button>
            </div>

            <div className="bg-white border rounded-lg p-4">
              <h3 className="font-medium text-gray-900 mb-3">Run History</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-gray-600">New User Onboarding</span>
                  <span className="text-green-600 font-medium">✓ Success</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-green-50 rounded">
                  <span className="text-gray-600">Weekly Report</span>
                  <span className="text-green-600 font-medium">✓ Success</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
                  <span className="text-gray-600">Lead Score Update</span>
                  <span className="text-yellow-600 font-medium">⏳ Running</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}