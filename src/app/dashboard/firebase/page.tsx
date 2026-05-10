"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";

export default function FirebasePage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    { name: "Authentication", icon: "🔐", status: "Active", users: "1,204", desc: "Email, Google, GitHub login", action: "Configure" },
    { name: "Firestore", icon: "🗄️", status: "Active", users: "3 collections", desc: "NoSQL database", action: "Manage Schema" },
    { name: "Realtime DB", icon: "⚡", status: "Inactive", users: "-", desc: "Legacy database option", action: "Enable" },
    { name: "Hosting", icon: "🌐", status: "Setup", users: "1 site", desc: "Static + SSR hosting", action: "Deploy" },
    { name: "Cloud Functions", icon: "☁️", status: "Active", users: "5 functions", desc: "Serverless functions", action: "View Logs" },
    { name: "Storage", icon: "📦", status: "Active", users: "2.4 GB", desc: "File storage", action: "Upload Files" },
  ];

  const handleAction = (serviceName: string, action: string) => {
    alert(`${action} for ${serviceName} - This would open the ${action} interface in a real implementation.`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="text-2xl">🔥</span> Firebase Studio
          </h1>
          <p className="text-sm text-gray-500 mt-1">Set up auth, database, hosting, and deployment.</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => alert("This would open Firebase console in a new tab.")}
            className="bg-white text-gray-700 border px-3 sm:px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50"
          >
            Open Console
          </button>
          <button className="bg-orange-500 text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600">
            + Add Project
          </button>
        </div>
      </div>

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-xl">🔥</div>
            <div>
              <h3 className="font-medium text-orange-900">Connected: dev-hub-saas-prod</h3>
              <p className="text-sm text-orange-700">Firebase Project ID: dev-hub-saas-prod</p>
            </div>
          </div>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">Connected</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <div 
              key={i} 
              className={`bg-white border rounded-lg p-5 hover:shadow-md transition-shadow ${service.status === "Inactive" ? "opacity-60" : ""}`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-medium text-gray-900">{service.name}</span>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${service.status === "Active" ? "bg-green-100 text-green-700" : service.status === "Setup" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}>
                  {service.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-3">{service.desc}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 border-t pt-3 mb-3">
                <span>Usage:</span>
                <span className="font-medium text-gray-600">{service.users}</span>
              </div>
              {service.status !== "Inactive" ? (
                <button 
                  onClick={() => handleAction(service.name, service.action)}
                  className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium text-center py-2 border border-blue-100 rounded hover:bg-blue-50"
                >
                  {service.action} →
                </button>
              ) : (
                <button 
                  onClick={() => handleAction(service.name, "Enable")}
                  className="w-full text-sm text-gray-600 hover:text-gray-900 font-medium text-center py-2 border border-gray-200 rounded hover:bg-gray-50"
                >
                  Enable
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white border rounded-lg p-5">
            <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              <button 
                onClick={() => alert("This would open the deployment wizard.")}
                className="p-3 border rounded-lg hover:bg-gray-50 text-left"
              >
                <div className="text-xl mb-1">🚀</div>
                <p className="text-sm font-medium text-gray-900">Deploy App</p>
                <p className="text-xs text-gray-500">Push to hosting</p>
              </button>
              <button 
                onClick={() => alert("This would open the schema designer.")}
                className="p-3 border rounded-lg hover:bg-gray-50 text-left"
              >
                <div className="text-xl mb-1">🗄️</div>
                <p className="text-sm font-medium text-gray-900">Design Schema</p>
                <p className="text-xs text-gray-500">AI-powered DB design</p>
              </button>
              <button 
                onClick={() => alert("This would open the auth settings.")}
                className="p-3 border rounded-lg hover:bg-gray-50 text-left"
              >
                <div className="text-xl mb-1">🔐</div>
                <p className="text-sm font-medium text-gray-900">Auth Settings</p>
                <p className="text-xs text-gray-500">Configure providers</p>
              </button>
              <button 
                onClick={() => alert("This would open the functions page.")}
                className="p-3 border rounded-lg hover:bg-gray-50 text-left"
              >
                <div className="text-xl mb-1">☁️</div>
                <p className="text-sm font-medium text-gray-900">Functions</p>
                <p className="text-xs text-gray-500">View & deploy</p>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-100 rounded-lg p-5">
            <h3 className="font-semibold text-orange-900 mb-2">🔥 Firebase Free Tier</h3>
            <p className="text-sm text-orange-800 mb-4">Great for prototypes and small projects. No credit card required.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-white rounded p-3 text-center">
                <p className="font-medium text-gray-900">Auth</p>
                <p className="text-gray-500 text-xs">Unlimited</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-medium text-gray-900">Firestore</p>
                <p className="text-gray-500 text-xs">1 GB</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-medium text-gray-900">Hosting</p>
                <p className="text-gray-500 text-xs">1 GB/mo</p>
              </div>
              <div className="bg-white rounded p-3 text-center">
                <p className="font-medium text-gray-900">Functions</p>
                <p className="text-gray-500 text-xs">125K invocations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}