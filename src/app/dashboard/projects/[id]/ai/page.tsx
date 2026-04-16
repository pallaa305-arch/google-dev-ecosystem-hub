import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import { use } from "react";

export default function AIBuilderWorkspace({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const tabs = [
    { name: 'Overview', href: `/dashboard/projects/${id}`, current: false },
    { name: 'AI Builder', href: `/dashboard/projects/${id}/ai`, current: true },
    { name: 'Design', href: `/dashboard/projects/${id}/design`, current: false },
    { name: 'Firebase', href: `/dashboard/projects/${id}/firebase`, current: false },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-10rem)]">
        {/* Workspace Header & Tabs */}
        <div>
          <div className="border-b pb-2 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-blue-500">✨</span> AI Builder Workspace
            </h1>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Using Gemini 1.5 Pro</span>
          </div>
          <nav className="-mb-px flex space-x-8 border-b" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  ${tab.current ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}
                  whitespace-nowrap border-b-2 py-3 px-1 text-sm font-medium
                `}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Main Chat Interface */}
        <div className="flex-1 flex mt-4 border rounded-lg overflow-hidden bg-white shadow-sm">
          {/* Sidebar: Threads / History */}
          <div className="w-64 border-r bg-gray-50/50 hidden md:flex flex-col">
            <div className="p-3 border-b">
              <button className="w-full bg-white border border-gray-300 text-gray-700 rounded py-1.5 text-sm font-medium hover:bg-gray-50">
                + New Chat
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
              <div className="p-2 bg-gray-100 rounded text-sm text-gray-900 font-medium">Draft PRD</div>
              <div className="p-2 hover:bg-gray-100 rounded text-sm text-gray-600 cursor-pointer">Brainstorm Features</div>
              <div className="p-2 hover:bg-gray-100 rounded text-sm text-gray-600 cursor-pointer">Database Schema</div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col bg-white">
            <div className="flex-1 p-4 overflow-y-auto space-y-6">
              {/* Message from AI */}
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xl shrink-0">✨</div>
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Gemini Builder</div>
                  <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                    <p>I&apos;ve analyzed your project goals for the <strong>SaaS Analytics Dashboard</strong>.</p>
                    <p className="mt-2">Would you like me to draft a full Product Requirements Document (PRD), or should we start by designing the database schema?</p>
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs bg-white border px-2 py-1 rounded text-gray-600 hover:bg-gray-50">Draft PRD</button>
                    <button className="text-xs bg-white border px-2 py-1 rounded text-gray-600 hover:bg-gray-50">Design Schema</button>
                  </div>
                </div>
              </div>

              {/* Message from User */}
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold shrink-0">U</div>
                <div className="max-w-2xl">
                  <div className="text-sm font-medium text-gray-900 mb-1 text-right">You</div>
                  <div className="text-sm text-white bg-blue-600 p-3 rounded-lg">
                    Let&apos;s draft the PRD first. Focus on the MVP features like auth, dashboard metrics view, and simple settings.
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="relative flex items-center">
                <button className="absolute left-3 text-gray-400 hover:text-gray-600 text-xl">+</button>
                <input
                  type="text"
                  placeholder="Ask Gemini to generate code, write a PRD, or analyze logic..."
                  className="w-full border rounded-lg pl-10 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 shadow-sm"
                />
                <button className="absolute right-2 p-1.5 bg-blue-600 text-white rounded hover:bg-blue-700">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </button>
              </div>
              <div className="mt-2 text-center text-xs text-gray-400">
                AI can make mistakes. Verify important outputs before using them in production.
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
