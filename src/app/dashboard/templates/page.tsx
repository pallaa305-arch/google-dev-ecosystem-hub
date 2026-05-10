"use client";

import { useState } from "react";
import { DashboardLayout } from "@/components/DashboardLayout";
import { useRouter } from "next/navigation";

export default function TemplatesPage() {
  const router = useRouter();
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);

  const [templates] = useState([
    { id: 1, name: "SaaS Starter Kit", category: "Web App", icon: "🚀", desc: "Next.js, Tailwind, Firebase Auth, Stripe placeholder.", features: ["User Auth", "Dashboard", "API Ready"] },
    { id: 2, name: "AI Customer Support Bot", category: "AI App", icon: "🤖", desc: "Chat interface powered by Gemini API.", features: ["Gemini Integration", "Chat UI", "Knowledge Base"] },
    { id: 3, name: "Internal Admin Panel", category: "Internal Tool", icon: "📊", desc: "Data tables, charts, and user management.", features: ["CRUD Operations", "Charts", "Export"] },
    { id: 4, name: "E-commerce Mobile App", category: "Mobile", icon: "📱", desc: "React Native ready layout for products and cart.", features: ["Product Catalog", "Cart", "Checkout"] },
    { id: 5, name: "Landing Page Builder", category: "Website", icon: "✨", desc: "High-converting SEO optimized landing page.", features: ["SEO Ready", "Analytics", "CMS"] },
    { id: 6, name: "Research Assistant", category: "AI App", icon: "🔍", desc: "Document upload and source-grounded Q&A.", features: ["PDF Upload", "Q&A", "Summaries"] },
    { id: 7, name: "Booking System", category: "SaaS", icon: "📅", desc: "Appointment scheduling and calendar management.", features: ["Calendar", "Notifications", "Payments"] },
    { id: 8, name: "CRM Dashboard", category: "SaaS", icon: "👥", desc: "Customer relationship management tool.", features: ["Leads", "Deals", "Reports"] },
    { id: 9, name: "Learning Platform", category: "EdTech", icon: "🎓", desc: "Online course and content delivery system.", features: ["Courses", "Video Hosting", "Progress"] },
  ]);

  const filters = ["All", "Web App", "AI App", "Mobile", "SaaS", "Internal Tool"];

  const filteredTemplates = templates.filter(t => {
    if (filter !== "all" && filter !== "All" && t.category !== filter) return false;
    if (search && !t.name.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleUseTemplate = (templateId: number) => {
    alert(`Creating new project from template #${templateId}. This would redirect to project creation with template pre-selected.`);
    router.push("/dashboard/projects/new");
  };

  const handleViewDetails = (templateId: number) => {
    setSelectedTemplate(selectedTemplate === templateId ? null : templateId);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Templates Marketplace</h1>
          <p className="mt-1 text-sm sm:text-base text-gray-500">Start your next project faster with pre-built blueprints.</p>
        </div>
        <input
          type="search"
          placeholder="Search templates..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-auto"
        />
      </div>

        <div className="flex gap-2 overflow-x-auto pb-2 border-b">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f.toLowerCase())}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
                filter === f.toLowerCase() 
                  ? "bg-gray-900 text-white" 
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((tpl) => (
            <div key={tpl.id} className="border rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="h-32 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-5xl">
                {tpl.icon}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{tpl.name}</h3>
                  <span className="text-[10px] uppercase tracking-wider font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {tpl.category}
                  </span>
                </div>
                <p className="text-sm text-gray-500 flex-1">{tpl.desc}</p>
                
                {selectedTemplate === tpl.id && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs font-medium text-gray-700 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {tpl.features.map((feat, i) => (
                        <span key={i} className="text-xs bg-white border px-2 py-1 rounded text-gray-600">{feat}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t flex justify-between items-center">
                  <button 
                    onClick={() => handleViewDetails(tpl.id)}
                    className="text-xs text-blue-600 font-medium hover:underline"
                  >
                    {selectedTemplate === tpl.id ? "Hide details" : "View details"}
                  </button>
                  <button 
                    onClick={() => handleUseTemplate(tpl.id)}
                    className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-1.5 rounded text-xs font-medium"
                  >
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}