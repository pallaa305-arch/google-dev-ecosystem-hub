import { DashboardLayout } from "@/components/DashboardLayout";
import Link from "next/link";
import { use } from "react";

export default function ProjectWorkspaceOverview({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const tabs = [
    { name: 'Overview', href: `/dashboard/projects/${id}`, current: true },
    { name: 'AI Builder', href: `/dashboard/projects/${id}/ai`, current: false },
    { name: 'Design', href: `/dashboard/projects/${id}/design`, current: false },
    { name: 'Firebase', href: `/dashboard/projects/${id}/firebase`, current: false },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Workspace Header */}
        <div className="border-b pb-5 flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">SaaS Analytics Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Project ID: {id} • Web App • Last synced 2m ago</p>
          </div>
          <div className="flex gap-2">
            <button className="rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              Settings
            </button>
            <button className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
              Deploy
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div>
          <nav className="-mb-px flex space-x-8 border-b" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={`
                  ${tab.current
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }
                  whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium
                `}
              >
                {tab.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Overview Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-lg border bg-white shadow-sm p-6">
               <h2 className="text-lg font-medium text-gray-900 mb-4">Project Summary</h2>
               <p className="text-gray-600 text-sm">
                 A comprehensive analytics dashboard for SaaS companies to track MRR, churn rate, and user engagement metrics in real-time. Built with Next.js, TailwindCSS, and Firebase.
               </p>
            </div>
            
            <div className="rounded-lg border bg-white shadow-sm p-6">
               <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Outputs</h2>
               <ul className="space-y-3">
                 <li className="flex items-center text-sm"><span className="mr-2 text-blue-500">✨</span> Generated PRD with AI Builder</li>
                 <li className="flex items-center text-sm"><span className="mr-2 text-pink-500">🎨</span> Exported Login Screen from Design Lab</li>
                 <li className="flex items-center text-sm"><span className="mr-2 text-orange-500">🔥</span> Connected Firestore Database</li>
               </ul>
            </div>
          </div>

          <div className="space-y-6">
             <div className="rounded-lg border bg-white shadow-sm p-6">
               <h2 className="text-lg font-medium text-gray-900 mb-4">Next Recommended Action</h2>
               <div className="bg-blue-50 border border-blue-100 rounded p-4">
                  <h3 className="text-sm font-medium text-blue-800">Generate UI Components</h3>
                  <p className="mt-1 text-xs text-blue-600">Your architecture is set. Head to the Design Workspace to generate React components for your dashboard.</p>
                  <Link href={`/dashboard/projects/${id}/design`} className="mt-3 inline-block text-xs font-medium bg-white text-blue-600 px-3 py-1.5 border border-blue-200 rounded">
                    Open Design Workspace
                  </Link>
               </div>
             </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
