import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import { use } from "react";

export default function DesignWorkspace({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const tabs = [
    { name: 'Overview', href: `/dashboard/projects/${id}`, current: false },
    { name: 'AI Builder', href: `/dashboard/projects/${id}/ai`, current: false },
    { name: 'Design', href: `/dashboard/projects/${id}/design`, current: true },
    { name: 'Firebase', href: `/dashboard/projects/${id}/firebase`, current: false },
  ];

  return (
    <DashboardLayout>
      <div className="flex flex-col h-[calc(100vh-10rem)]">
        <div>
          <div className="border-b pb-2 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-pink-500">🎨</span> Design Workspace
            </h1>
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

        <div className="flex-1 mt-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Controls Panel */}
          <div className="border rounded-lg bg-white p-4 space-y-6 shadow-sm overflow-y-auto">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Generate New UI</h3>
              <textarea 
                className="w-full text-sm border rounded-md p-2 focus:ring-blue-500 focus:border-blue-500" 
                rows={3} 
                placeholder="Describe the UI (e.g. A login screen with email and Google auth)..."
              ></textarea>
              <button className="mt-2 w-full bg-blue-600 text-white text-sm font-medium py-2 rounded hover:bg-blue-700">
                Generate Design
              </button>
            </div>

            <div className="border-t pt-4">
               <h3 className="text-sm font-medium text-gray-900 mb-2">Platform</h3>
               <div className="flex gap-2">
                 <button className="flex-1 bg-gray-100 text-gray-700 text-xs py-1.5 rounded font-medium border border-gray-200">Web</button>
                 <button className="flex-1 hover:bg-gray-50 text-gray-500 text-xs py-1.5 rounded font-medium border border-transparent">Mobile</button>
               </div>
            </div>

            <div className="border-t pt-4">
               <h3 className="text-sm font-medium text-gray-900 mb-2">Theme & Colors</h3>
               <div className="flex gap-2 mb-2">
                 <div className="w-6 h-6 rounded bg-blue-600 cursor-pointer ring-2 ring-offset-1 ring-blue-600"></div>
                 <div className="w-6 h-6 rounded bg-gray-900 cursor-pointer"></div>
                 <div className="w-6 h-6 rounded bg-emerald-500 cursor-pointer"></div>
                 <div className="w-6 h-6 rounded bg-purple-600 cursor-pointer"></div>
               </div>
               <button className="text-xs text-gray-500 hover:text-gray-700 underline">Customize Theme</button>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="lg:col-span-3 border rounded-lg bg-gray-100 p-4 relative flex items-center justify-center overflow-hidden">
             {/* Toolbar */}
             <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-md border p-1 flex gap-1 z-10">
               <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600"><span className="text-xs">Export Code</span></button>
               <div className="w-px bg-gray-200 my-1"></div>
               <button className="p-1.5 hover:bg-gray-100 rounded text-gray-600"><span className="text-xs">Preview</span></button>
             </div>

             {/* Placeholder Screen */}
             <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg border overflow-hidden aspect-video flex flex-col relative group">
                {/* Mock Browser Header */}
                <div className="h-8 bg-gray-50 border-b flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                {/* Mock UI Content */}
                <div className="flex-1 p-8 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-2xl font-bold mb-4">G</div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to Dashboard</h2>
                  <div className="w-full max-w-sm mt-4 space-y-3">
                    <div className="h-10 bg-gray-100 rounded w-full"></div>
                    <div className="h-10 bg-gray-100 rounded w-full"></div>
                    <div className="h-10 bg-blue-600 rounded w-full mt-2 opacity-90"></div>
                  </div>
                </div>
                {/* Overlay for "Generation" state */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="bg-white shadow border px-4 py-2 rounded font-medium text-sm text-gray-700 hover:text-blue-600">
                     Edit Component
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
